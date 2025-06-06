# Server Commands

Comprehensive guide to 7 Days to Die server commands for administration and management.

## Command Interface Options

### Console Commands
Execute commands directly in the server console:
```
command parameter1 parameter2
```

### Telnet Commands
Connect via telnet (if enabled):
```bash
telnet your-server-ip 8081
```

### In-Game Commands (Admins)
Prefix commands with `/` in chat:
```
/command parameter1 parameter2
```

## Essential Commands

### Server Management
| Command | Description | Example |
|---------|-------------|---------|
| `version` | Show server version | `version` |
| `mem` | Display memory usage | `mem` |
| `fps` | Show server FPS | `fps` |
| `shutdown` | Stop server gracefully | `shutdown` |
| `saveworld` | Force save the world | `saveworld` |

### Player Management
| Command | Description | Example |
|---------|-------------|---------|
| `listplayers` | List connected players | `listplayers` |
| `kick [player]` | Kick player from server | `kick "PlayerName"` |
| `ban add [player]` | Ban player permanently | `ban add "PlayerName"` |
| `ban remove [player]` | Remove player ban | `ban remove "PlayerName"` |
| `admin add [player] [level]` | Add admin privileges | `admin add "PlayerName" 0` |

## Administrative Commands

### World Management
```bash
# Create backup
saveworld

# Reset region (coordinates)
rr 100 100

# Set time of day
settime 8 0

# Set weather
weather rain
weather clear
```

### Item Management
```bash
# Give item to player
give "PlayerName" stone 100

# Give XP to player
givexp "PlayerName" 1000

# Teleport player
teleportplayer "PlayerName" 100 50 200
```

### Server Information
```bash
# List all commands
help

# Show server settings
getgamepref

# Set server preference
setgamepref ServerName "New Server Name"
```

## Permission Levels

### Admin Levels (0-1000)
- **0**: Full administrator access
- **100**: Moderator access
- **1000**: Normal player (default)

### Permission Examples
```bash
# Make player full admin
admin add "PlayerName" 0

# Make player moderator
admin add "PlayerName" 100

# Remove admin privileges
admin remove "PlayerName"
```

## Useful Command Combinations

### Daily Maintenance
```bash
# Save world and check memory
saveworld
mem

# List players and check performance
listplayers
fps
```

### Player Management Workflow
```bash
# Check player list
listplayers

# Check player details
lpi [playerId]

# Teleport to player if needed
tp [targetPlayerId]
```

## Command Scripting

### Batch Commands
Create text files with multiple commands:
```bash
saveworld
say "Server maintenance in 5 minutes"
# Wait 5 minutes
shutdown
```

### Scheduled Commands
Use external tools or scripts to run commands at specific times.

## Security Best Practices

### Admin Account Management
- Use strong telnet passwords
- Regularly review admin list
- Remove inactive admin accounts
- Use lowest necessary permission level

### Command Logging
- Monitor command usage
- Keep logs of administrative actions
- Regular audit of admin activities

## Troubleshooting Commands

### Debug Information
```bash
# Memory and performance
mem
fps
chunkcache

# Network information
listplayers -detailed
ping [playerId]

# World status
listplayersextended
weather
gettime
```

## Next Steps

- Learn about [permission management](permissions)
- Set up [moderation workflows](moderation)
- Check [troubleshooting guide](../troubleshooting/common-issues) for command-related issues