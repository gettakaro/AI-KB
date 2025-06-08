---
id: "faq-003-hide-commands-public-chat-hccp"
title: "Hide commands in public chat (with HCCP)"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "hccp", "chat", "commands", "prefix"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# Hide commands in public chat (with HCCP)

## Overview

HCCP (Hide Chat Command Prefix) is a CPM feature that prevents certain chat commands from appearing in public chat. This is useful for keeping chat clean by hiding administrative commands, player commands, or mod-specific commands that would otherwise clutter the chat.

## How to set up HCCP

### Method 1: Using console command

Use the `hccp` console command to configure which prefixes to hide:

```
hccp /,$
```

This example will hide all chat lines that begin with `/` or `$` characters.

### Method 2: Using CPM Settings file

You can also configure HCCP by editing the `/Saves/CpmSettings.xml` file:

```xml
<HideChatCommandPrefixes_Prefixes>/,$</HideChatCommandPrefixes_Prefixes>
<HideChatCommandPrefixes_Enabled>true</HideChatCommandPrefixes_Enabled>
```

## Configuration details

- **Multiple prefixes**: Separate multiple prefixes with commas (`,`)
- **Common prefixes**:
  - `/` - Default CPM prefix
  - `$` - Default CSMM prefix  
  - `!` - Common for various mods
  - `-` - Used by 3rdshift mod

### Example configurations

**Hide CPM and CSMM commands:**
```
hccp /,$
```

**Hide CPM, CSMM, and other mod commands:**
```
hccp /,$,!
```

**Hide 3rdshift commands:**
```
hccp -
```

## Important notes

- HCCP only hides the commands from **public chat display** - the commands still function normally
- This setting affects **all players** on the server
- Commands are hidden immediately after the setting is applied
- The feature requires CPM to be installed on your server
- Chat commands that are hidden will still be logged in server logs for administrative purposes

## Related settings

- `HideChatCommandPrefixes_Enabled` - Enable/disable the feature entirely
- `HideChatCommandPrefixes_Prefixes` - Define which prefixes to hide
- Individual command permissions can still be set using the `ccp` (changechatpermissions) command

## Compatibility with other mods

When using multiple mods that have chat commands:
- **3rdshift**: If running CPM with HCCP enabled, change the CPM folder name to start with a "4" to prevent conflicts
- **Botman/Alloc**: Can coexist with HCCP by including their prefixes in the configuration
- **ServerTools**: Commonly uses `/` prefix, include in HCCP if desired