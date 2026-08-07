import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve("public/resources");
const output = path.resolve("public/resource-index.json");
const allowed = new Set([".pdf", ".docx", ".pptx", ".xlsx", ".zip"]);

async function walk(dir) {
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    if (entry.isFile() && allowed.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function labelFromFilename(filename) {
  return path.basename(filename, path.extname(filename)).replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

await fs.mkdir(root, { recursive: true });
const files = await walk(root);
const items = await Promise.all(files.map(async (file) => {
  const relative = path.relative(root, file).split(path.sep).join("/");
  const stats = await fs.stat(file);
  const [collection = "other"] = relative.split("/");
  return {
    collection,
    title: labelFromFilename(file),
    type: path.extname(file).slice(1).toUpperCase(),
    href: `/resources/${relative}`,
    sizeBytes: stats.size,
  };
}));

items.sort((a, b) => a.title.localeCompare(b.title));
await fs.writeFile(output, `${JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2)}\n`);
console.log(`Indexed ${items.length} resource file(s).`);
