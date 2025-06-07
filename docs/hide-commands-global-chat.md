---
id: "faq-002-hide-commands-global-chat"
title: "How to Hide Commands from Global Chat"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "chat", "commands"]
sourceThreadIds: []
createdAt: "2024-01-15T10:30:00.000Z"
---

# How to Hide Commands from Global Chat

## Overview

When using automated commands or custom commands with special character prefixes (like `$`, `!`, `/`), you may notice these commands appearing in the global chat instead of being hidden. This is a common issue that can be resolved using CPM's command hiding functionality.

## Primary Solution: The hccp Command

The main solution is to use the `hccp` command from CPM (CSMM Patron Mod). This command refreshes the command hiding configuration.

**To use the hccp command:**

1. Open your server console
2. Type: `hccp /`
3. Press Enter

This command will reload the command hiding settings and should immediately hide commands with the configured prefixes from appearing in global chat.

## Troubleshooting

### Commands Still Appearing in Chat

If commands are still showing in global chat after running `hccp`:

1. **Re-run the hccp command**: Sometimes it takes a second attempt

   ```
   hccp /
   ```

2. **Verify CPM settings**: Check that your `cpmsettings.xml` file has command hiding enabled and the correct prefixes configured

3. **Restart the server**: If the issue persists, try restarting your 7 Days to Die server

4. **Check command format**: Ensure your commands are using the exact prefix characters configured in CPM settings

### Common Issues

- **Timing**: The `hccp` command may need to be run after server startup or after making changes to CPM settings
- **Case sensitivity**: Some prefixes may be case-sensitive
- **Multiple prefixes**: If using multiple special characters, ensure all are properly configured in the settings file

## Best Practices

1. **Test after configuration**: Always test your command hiding by typing a command with the configured prefix to ensure it doesn't appear in global chat
2. **Document your prefixes**: Keep track of which prefixes you've configured for command hiding

## Related Commands

- `hccp` - Hide commands chat prefixes (main command for this functionality)
- Server console access is required to run this command

This solution works with CSMM, Takaro, and other server management tools that use CPM's command hiding features.
