---
id: "faq-002-changing-color-of-text-chat"
title: "Changing color of text chat"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "chat", "colors", "cgc"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# Changing color of text chat

## Overview

In CPM (CSMM Patrons Mod), you can change the color of text chat using the Chat Group Color (CGC) system. This allows you to assign players to different chat groups, each with their own color scheme.

## How to set up chat colors

### Method 1: Using CPM console commands

1. **Create chat groups first** - You need to manually create chat groups before assigning players:
   - Groups commonly used: `admins`, `donators`, `regulars`, `players`

2. **Assign players to groups** using the `cgc` command:
   ```
   cgc adduser [entityId] [groupname]
   ```

3. **Examples**:
   ```
   cgc adduser 12345 admins
   cgc adduser 67890 donators
   cgc adduser 11111 regulars
   cgc adduser 22222 players
   ```

### Method 2: Using CSMM automation with handlebars

You can automate chat color assignment based on CSMM roles using scheduled commands:

```handlebars
{{#each server.onlinePlayers}}
    {{#if (lte this.role.level 1)}}
        cgc adduser {{this.entityId}} admins;
        admin add {{this.entityId}} 1;
    {{else if (lte this.role.level 100)}}
        cgc adduser {{this.entityId}} donators;
        admin add {{this.entityId}} 100;
    {{else if (lte this.role.level 500)}}
        cgc adduser {{this.entityId}} regulars;
        admin remove {{this.entityId}};
    {{else}}
        cgc adduser {{this.entityId}} players;
        admin remove {{this.entityId}};
    {{/if}}
{{/each}}
```

## Important notes

- **Chat groups must be created manually first** before assigning players to them
- The CGC system requires roles in CSMM to be set appropriately if using the automated method
- Players will maintain their assigned chat color until manually changed or removed from the group

## Related commands

- `cgc adduser [entityId] [groupname]` - Add player to chat group
- `cgc removeuser [entityId] [groupname]` - Remove player from chat group
- `cgc list` - List available chat groups