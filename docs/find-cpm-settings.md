---
id: "faq-006-find-cpm-settings"
title: "Where can I find CPM settings?"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "settings", "CpmSettings.xml", "CpmStrings.xml", "configuration"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# Where can I find CPM settings?

## Overview

CPM (CSMM Patrons Mod) settings can be found and configured in multiple ways. The settings are flexible and can be changed both through console commands and by directly editing configuration files.

## File Locations

### CpmSettings.xml
The main configuration file for CPM is located at:
```
/Saves/CpmSettings.xml
```

This file contains all the configurable settings for CPM features and behaviors.

### CpmStrings.xml
Custom strings and messages are configured in:
```
/Saves/CpmStrings.xml
```

This file contains customizable text messages used throughout CPM.

## Configuration Methods

### Method 1: Console Commands
Most CPM settings can be configured through console commands:

**View all CPM commands:**
```
cpm-help
```

**Get help for specific commands:**
```
help <command>
```

**Examples:**
```
hccp /,$                    # Hide chat command prefixes
pfb 20                      # Prevent falling blocks
scn "My Server"            # Set server chat name
an true                    # Enable announcer
```

### Method 2: Direct File Editing
You can directly edit the CpmSettings.xml file:

1. **Stop your server** (recommended but not required)
2. **Navigate to** `/Saves/CpmSettings.xml`
3. **Edit the file** with a text editor
4. **Save the file**
5. Settings take effect **immediately** even on a running server

## Common Settings Examples

### Chat-Related Settings
```xml
<CPMPrefix>/</CPMPrefix>
<HideChatCommandPrefixes_Enabled>true</HideChatCommandPrefixes_Enabled>
<HideChatCommandPrefixes_Prefixes>/,$</HideChatCommandPrefixes_Prefixes>
<CommandReceivedColor>D00000</CommandReceivedColor>
```

### Advanced Claims Settings
```xml
<AdvClaims_Reversed_TpHeight>-1</AdvClaims_Reversed_TpHeight>
<AdvClaims_PVP_KillingMode>3</AdvClaims_PVP_KillingMode>
```

### Bloodmoon Settings
```xml
<BloodmoonSpawner_OverrideVanillaSpawner>false</BloodmoonSpawner_OverrideVanillaSpawner>
<BloodmoonSpawner_DespawnAllOnStart>false</BloodmoonSpawner_DespawnAllOnStart>
```

### Anti-Cheat Settings
```xml
<DamageDetection_MinAmountDamage>5000</DamageDetection_MinAmountDamage>
<LevelJumpDetection_MinimumLevelJumpTrigger>2</LevelJumpDetection_MinimumLevelJumpTrigger>
<GodmodeAnticheat_Enabled>true</GodmodeAnticheat_Enabled>
```

## Permission Settings

### Chat Command Permissions
You can set permission levels for all CPM chat commands:

```xml
<ChatCommandPermissions_ft>0</ChatCommandPermissions_ft>
<ChatCommandPermissions_mv>0</ChatCommandPermissions_mv>
<ChatCommandPermissions_bubble>0</ChatCommandPermissions_bubble>
<ChatCommandPermissions_bag>1000</ChatCommandPermissions_bag>
```

**Permission levels:**
- **0** = Admin only
- **1000** = Available to all players
- **-1** = Completely disabled

### Using Console Commands for Permissions
```
ccp <command> <permission_level>
```

**Examples:**
```
ccp ft 0        # Admin only teleport
ccp bag 1000    # Everyone can use bag command
ccp bubble -1   # Disable bubble command
```

## Important Settings Files

### Game Messages Control
```xml
<GMSG_PlayerJoined_Enabled>true</GMSG_PlayerJoined_Enabled>
<GMSG_PlayerLeft_Enabled>true</GMSG_PlayerLeft_Enabled>
<GMSG_PlayerDied_Enabled>true</GMSG_PlayerDied_Enabled>
<GMSG_PlayerKilled_Enabled>true</GMSG_PlayerKilled_Enabled>
```

### Location Tracking
```xml
<LocationTracker_Enabled>true</LocationTracker_Enabled>
<LocationTracker_ChatCommand>/loctrack</LocationTracker_ChatCommand>
<LocationTracker_ChatCommandEnabled>true</LocationTracker_ChatCommandEnabled>
```

## Viewing Current Settings

### List All Settings
Many settings can be viewed through specific console commands or by examining the XML file directly.

### File Structure
The CpmSettings.xml file is automatically created when CPM first runs and contains default values for all configurable options.

## Best Practices

### Backup Before Changes
Always backup your settings files before making major changes:
```bash
cp /Saves/CpmSettings.xml /Saves/CpmSettings.xml.backup
```

### Test Changes
- Settings take effect immediately when saved
- Test changes on a development server first if possible
- Monitor server logs for any errors after changes

### Version Compatibility
- Settings files are compatible across CPM versions
- New versions may add new settings with default values
- Old settings remain functional when updating CPM

## Related Files

### Other Important CPM Files
- `/Saves/CpmStrings.xml` - Custom messages and strings
- `/Data/Saves/ResetRegions/regions.txt` - Reset regions data
- `/Config/buffs.xml` - Location-based buffs (in CPM mod folder)

### Console Commands Reference
Use `help <command>` for detailed information about any specific setting or command.