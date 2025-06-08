# How to write a FAQ page

This documents how to write a FAQ page for the AI Knowledge Base. This is aimed at AI agents!

- You can use the included MCP server to search CSMM docs.
- There is a OpenSearch instance available via MCP tools which contains support chat archives.
  - You can search the `discord-messages` and `text-channel-messages` indexes.
  - You should have a preference for more recent messages
- You should do multiple searches in all sources, with varying keywords/filters/options, to find relevant information.
- Every FAQ must have frontmatter in this format:

```yaml
---
id: "faq-001-map-not-visible"
title: "My map is not visible"
category: "7-days-to-die"
tags: ["7d2d", "csmm", "map"]
sourceThreadIds: []
createdAt: "2024-01-15T10:30:00.000Z"
---
```
