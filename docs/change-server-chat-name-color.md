---
id: "faq-009-change-server-chat-name-color"
title: "Changing the color of the text of the server chat name"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "server-chat-name", "scn", "color", "announcements"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# Changing the color of the text of the server chat name

## Overview

In CPM, you can customize both the name and color of the server when it sends chat messages. This affects announcements, automated messages, and any other server-generated chat. The name that appears as the sender of server messages can be customized using the Server Chat Name (SCN) feature.

## Method 1: Using Console Command

### Basic Server Chat Name
**Set a custom server name:**
```
scn MyServerName
```

### Adding Color Codes
**Use hex color codes as prefix:**
```
scn [FF0000]MyServer[-]
```

**Common color examples:**
```
scn [FF0000]RedServer[-]     # Red
scn [00FF00]GreenServer[-]   # Green  
scn [0000FF]BlueServer[-]    # Blue
scn [FFFF00]YellowServer[-]  # Yellow
scn [FF00FF]PurpleServer[-]  # Purple
scn [00FFFF]CyanServer[-]    # Cyan
scn [FFA500]OrangeServer[-]  # Orange
```

## Method 2: CPM Settings File

### Edit CpmSettings.xml
**Location:** `/Saves/CpmSettings.xml`

**Add or modify:**
```xml
<ServerChatName>[FF0000]MyServer[-]</ServerChatName>
```

## Integration with Announcer

### Nighttime Announcer
The server chat name should typically match your announcer name:

```
an true
an warnhours 3
an announcer [FF0000]MyServer[-]
scn [FF0000]MyServer[-]
```

This ensures consistency between automated announcements and other server messages.

## Color Code Reference

### Hex Color Format
**Syntax:** `[RRGGBB]Text[-]`
- `[RRGGBB]` - Opening color tag with hex color
- `Text` - Your server name or message
- `[-]` - Closing tag to reset color

### Popular Color Codes
| Color      | Code      | Example                    |
|------------|-----------|----------------------------|
| Red        | FF0000    | `[FF0000]Server[-]`       |
| Green      | 00FF00    | `[00FF00]Server[-]`       |
| Blue       | 0000FF    | `[0000FF]Server[-]`       |
| Yellow     | FFFF00    | `[FFFF00]Server[-]`       |
| Orange     | FFA500    | `[FFA500]Server[-]`       |
| Purple     | FF00FF    | `[FF00FF]Server[-]`       |
| Cyan       | 00FFFF    | `[00FFFF]Server[-]`       |
| White      | FFFFFF    | `[FFFFFF]Server[-]`       |
| Light Gray | C0C0C0    | `[C0C0C0]Server[-]`       |
| Dark Gray  | 808080    | `[808080]Server[-]`       |

## Advanced Examples

### Gradient Effects
**Multiple colors in one name:**
```
scn [FF0000]My[FFFF00]Awesome[00FF00]Server[-]
```

### Administrative Naming
**Different colors for different types:**
```
scn [FF0000]ADMIN[-]        # For admin messages
scn [00FF00]SERVER[-]       # For general announcements  
scn [FFFF00]EVENTS[-]       # For event notifications
```

## Testing Your Changes

### View Current Setting
**Check current server chat name:**
```
help scn
```

### Test with Message
**Send a test message to see the result:**
```
say "Testing server chat name color"
```

## Common Use Cases

### Server Announcements
**Messages that will show your colored name:**
- Automated server announcements (`an` command)
- Manual server messages (`say` command)
- CPM system messages
- Restart notifications
- Event announcements

### Message Examples
**With colored server name `[FF0000]MyServer[-]`:**
- `[FF0000]MyServer[-]: Welcome to the server!`
- `[FF0000]MyServer[-]: Server restart in 10 minutes`
- `[FF0000]MyServer[-]: Night time approaching in 2 hours`

## Important Notes

### Consistency
- **Match announcer name:** Use the same name for both `scn` and `an announcer`
- **Keep it readable:** Ensure color contrasts well with chat background
- **Be concise:** Long names can clutter chat

### Technical Details
- **Immediate effect:** Changes take effect immediately when using console
- **Persistent:** Settings are saved to CpmSettings.xml automatically
- **Server-wide:** Affects all server-generated messages

### Best Practices
- **Use readable colors:** Avoid very dark colors that are hard to see
- **Consider theme:** Match server theme or branding
- **Test visibility:** Check readability on different game clients
- **Keep consistent:** Use same color scheme throughout server features

## Troubleshooting

### Name Not Changing
1. **Verify CPM is installed** and running
2. **Check command syntax** - ensure proper format
3. **Restart server** if settings don't apply immediately

### Color Not Displaying
1. **Check color code format** - must be 6-digit hex
2. **Ensure closing tag** `[-]` is included
3. **Verify game client** supports color codes

### Settings Not Saving
1. **Check file permissions** on CpmSettings.xml
2. **Verify CPM version** supports the feature
3. **Manual edit** CpmSettings.xml if console command fails

## Related Settings

**Other related CPM chat customization:**
- `hccp` - Hide chat command prefixes
- `cgc` - Chat group colors for players
- `CommandReceivedColor` - Color for command confirmations

**Example combined setup:**
```
scn [FF0000]MyServer[-]
an announcer [FF0000]MyServer[-]
hccp /,$
```

This creates a red server name, matching announcer, and hides command prefixes for cleaner chat.