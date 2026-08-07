# Maintenance & automation strategy

The cheapest reliable architecture is static-first. AI is useful for *finding candidates*, not for deciding what becomes authoritative student guidance.

| Site area | Recommended maintenance | AI? | Why |
|---|---|---:|---|
| Robert's uploaded O/A-Level resources | Build-time folder index | No | Deterministic and zero API cost |
| Publications | DOI/ORCID metadata refresh later | No | Authoritative structured identifiers are better than generative text |
| Opportunity links | Scheduled URL/link checks | No | Cheap way to detect broken sources |
| Opportunity discovery | Weekly official-source scout → review PR | Optional | Search is useful, but a human should verify deadlines and eligibility |
| Biochemical Society fees/benefits | Periodic manual check of official pages | Usually no | Small volume; accuracy matters more than automation |
| SWOT/student guide | Editorial revision when needed | No | Evergreen guidance should stay deliberate |
| Chatbot | Do not add yet | No | Adds cost, key-management risk and maintenance without a clear need |

The optional scout uses the OpenAI **Responses API**, the `web_search` tool and Structured Outputs, with `gpt-5.6-luna` chosen for a cost-sensitive scheduled job. Keep the API key only in GitHub Actions Secrets and review current pricing before enabling a recurring job.

References: [OpenAI web search](https://developers.openai.com/api/docs/guides/tools-web-search), [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [models](https://developers.openai.com/api/docs/models), and [pricing](https://developers.openai.com/api/docs/pricing).
