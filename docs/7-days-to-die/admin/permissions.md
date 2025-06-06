# Permission Management

Learn how to manage player permissions and admin roles on your 7 Days to Die server.

## Permission System Overview

The 7 Days to Die server uses a numeric permission level system where lower numbers have higher privileges.

### Permission Levels
- **0**: Full Administrator
- **1-99**: High-level administrators
- **100-999**: Moderators and limited admins
- **1000**: Default players (no special permissions)

## Admin File Configuration

### serveradmin.xml
Located in your server directory, this file defines admin permissions:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<adminTools>
  <users>
    <!-- Steam ID, permission level, display name -->
    <user steamID="76561198123456789" permission="0" displayName="ServerOwner" />
    <user steamID="76561198987654321" permission="100" displayName="Moderator1" />
  </users>
  
  <commands>
    <!-- Define command permissions -->
    <command cmd="dm" permission="0" />
    <command cmd="kick" permission="100" />
    <command cmd="ban" permission="100" />
  </commands>
</adminTools>
```

## Managing Permissions

### Adding Admins
```bash
# Add full admin (level 0)
admin add "PlayerName" 0

# Add moderator (level 100)
admin add "PlayerName" 100

# Add limited admin (level 200)
admin add "PlayerName" 200
```

### Removing Permissions
```bash
# Remove all admin privileges
admin remove "PlayerName"

# List current admins
admin list
```

### Finding Player Steam IDs
```bash
# List players with Steam IDs
listplayersextended

# Get specific player info
lpi [playerName]
```

## Command Permissions

### Default Permission Levels

| Command Category | Required Level | Commands |
|------------------|----------------|----------|
| Full Admin (0) | 0 | `shutdown`, `setgamepref`, `admin` |
| Moderator (100) | 100 | `kick`, `ban`, `teleport` |
| Helper (200) | 200 | `say`, `give` (limited) |

### Custom Command Permissions

Edit `serveradmin.xml` to customize:
```xml
<commands>
  <command cmd="give" permission="200" />
  <command cmd="teleportplayer" permission="100" />
  <command cmd="weather" permission="0" />
</commands>
```

## Web Interface Permissions

### Control Panel Access
Configure in `serverconfig.xml`:
```xml
<property name="ControlPanelEnabled" value="true"/>
<property name="ControlPanelPort" value="8080"/>
<property name="ControlPanelPassword" value="SecurePassword123"/>
```

### Permission Levels for Web Access
- **Level 0**: Full web interface access
- **Level 100+**: Limited web interface features

## Best Practices

### Admin Hierarchy
1. **Owner (Level 0)**: Server owner only
2. **Senior Admin (Level 50)**: Trusted long-term admins
3. **Moderator (Level 100)**: Active community moderators
4. **Helper (Level 200)**: Limited assistance permissions

### Security Guidelines

#### Steam ID Verification
Always verify Steam IDs before granting permissions:
1. Have user provide Steam profile URL
2. Check Steam ID matches in-game player
3. Verify identity through voice chat or other means

#### Regular Permission Audits
- Review admin list monthly
- Remove inactive admins
- Check for suspicious activity in logs

#### Principle of Least Privilege
- Grant minimum necessary permissions
- Escalate permissions only when needed
- Regular review of permission usage

## Permission Testing

### Verification Steps
1. Grant test permissions to alternate account
2. Test command access in-game
3. Verify web interface restrictions
4. Check log file entries

### Common Issues
- Steam ID format errors in XML
- Case sensitivity in player names
- Cached permission data (restart required)

## Group-Based Permissions (Advanced)

### Creating Permission Groups
```xml
<groups>
  <group name="moderators" permission="100">
    <user steamID="76561198123456789" />
    <user steamID="76561198987654321" />
  </group>
</groups>
```

### Command Group Restrictions
```xml
<commands>
  <command cmd="kick" group="moderators" />
  <command cmd="ban" group="moderators" />
</commands>
```

## Troubleshooting Permissions

### Common Problems
1. **Commands not working**: Check permission level and spelling
2. **Web access denied**: Verify control panel settings
3. **Changes not applying**: Restart server or reload admin file

### Debug Commands
```bash
# Check current permission level
admin list

# Test command access
help [command]

# Reload admin configuration
admin reload
```

## Next Steps

- Set up [moderation workflows](moderation)
- Learn advanced [server commands](commands)
- Configure [automated moderation](../troubleshooting/common-issues)