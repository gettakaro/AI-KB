# Server Configuration

Learn how to configure your 7 Days to Die server for optimal performance and gameplay.

## Configuration Files

### serverconfig.xml
The main configuration file located in your server directory. Key settings include:

```xml
<!-- Server Identity -->
<property name="ServerName" value="My 7D2D Server"/>
<property name="ServerDescription" value="A fun server for friends"/>
<property name="ServerWebsiteURL" value=""/>

<!-- Networking -->
<property name="ServerPort" value="26900"/>
<property name="ServerVisibility" value="2"/>
<property name="ServerDisabledNetworkProtocols" value="SteamNetworking"/>

<!-- Performance -->
<property name="ServerMaxPlayerCount" value="8"/>
<property name="ServerReservedSlots" value="0"/>
<property name="ServerReservedSlotsPermission" value="100"/>

<!-- Game Settings -->
<property name="GameWorld" value="Navezgane"/>
<property name="GameName" value="My Game"/>
<property name="GameDifficulty" value="2"/>
```

## Essential Settings

### Server Identity
- **ServerName**: Display name for your server
- **ServerDescription**: Brief description shown in server browser
- **ServerPassword**: Set a password for private servers

### Performance Settings
- **ServerMaxPlayerCount**: Maximum concurrent players
- **MaxChunkAge**: How long chunks stay loaded (affects memory)
- **SaveGameFolder**: Location for save files

### Gameplay Settings
- **GameDifficulty**: 0-5 (Scavenger to Insane)
- **DayNightLength**: Real-time minutes for one in-game day
- **ZombieMove**: Zombie movement settings
- **BloodMoonEnemyCount**: Number of zombies during blood moon

## Advanced Configuration

### Admin Settings
```xml
<property name="ControlPanelEnabled" value="true"/>
<property name="ControlPanelPort" value="8080"/>
<property name="ControlPanelPassword" value="CHANGEME"/>
<property name="TelnetEnabled" value="true"/>
<property name="TelnetPort" value="8081"/>
<property name="TelnetPassword" value="CHANGEME"/>
```

### World Generation
- **WorldGenSeed**: Seed for random world generation
- **WorldGenSize**: Map size (6144, 8192, 10240)
- **GameWorld**: "RWG" for random or "Navezgane" for fixed map

## Backup Configuration

Always backup your configuration files before making changes:
- `serverconfig.xml`
- Save game folder
- Any custom XML files

## Next Steps

After configuration, learn how to [start your server](first-run) for the first time.