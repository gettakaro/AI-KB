# Supported Games

Takaro's multi-game architecture allows for comprehensive support across various game titles. Here's the current status and roadmap for game support.

## Currently Supported Games

### 7 Days to Die
**Status**: ✅ Full Support  
**Features**: Complete server management with all advanced features

#### Supported Features
- **Player Management**: Real-time tracking, profiles, statistics
- **Server Administration**: Commands, configuration, monitoring
- **Automation**: Custom modules, scheduled tasks, event responses
- **Economy System**: Currency, shops, trading, rewards
- **Chat Integration**: Commands, moderation, Discord bridge
- **World Management**: Teleportation, claims, resets
- **Analytics**: Player behavior, server performance, trends

#### Connection Methods
- **Telnet**: Primary connection for administration
- **Web API**: Optional for enhanced features
- **Log Parsing**: Real-time log analysis
- **RCON**: Alternative connection method

#### Game-Specific Modules
- Blood Moon notifications
- Horde night automation
- Land claim management
- Player skill tracking
- Death recovery assistance

### Rust
**Status**: ⚠️ Beta Support  
**Features**: Basic management with core functionality

#### Supported Features
- **Player Tracking**: Basic player information and activity
- **Server Monitoring**: Status, player count, performance
- **Chat Integration**: Basic chat commands and logging
- **Admin Commands**: Essential server administration
- **Basic Economy**: Simple currency system

#### Connection Methods
- **RCON**: Primary connection method
- **Web API**: For extended functionality
- **Log Monitoring**: Real-time event processing

#### Limitations
- Limited automation compared to 7D2D
- Basic economy features only
- No advanced world management
- Community-contributed modules only

#### Roadmap for Rust
- Enhanced player management
- Advanced automation modules
- Oxide plugin integration
- Custom economy features
- Team/clan management

## Games in Development

### Minecraft
**Status**: 🔄 In Development  
**Expected**: Q2 2024

#### Planned Features
- **Server Types**: Java Edition, Bedrock, Modded servers
- **Plugin Support**: Bukkit, Spigot, Paper, Fabric, Forge
- **World Management**: Multiple worlds, backups, resets
- **Economy**: Multi-server economy, shops, auctions
- **Permissions**: Advanced permission management
- **Mini-games**: Event automation and rewards

#### Connection Methods
- **RCON**: Standard administration
- **Plugin API**: Deep integration via custom plugin
- **Server Query**: Status and player information

### Project Zomboid
**Status**: 🔄 In Development  
**Expected**: Q3 2024

#### Planned Features
- **Player Management**: Character tracking, death logs
- **Server Administration**: Mod management, settings
- **Event System**: Helicopter events, meta game triggers
- **Safe House Management**: Claiming and protection
- **Statistics**: Survival time, zombie kills, skills

### Valheim
**Status**: 📋 Planned  
**Expected**: Q4 2024

#### Planned Features
- **World Management**: Seed management, backups
- **Player Tracking**: Skills, boss defeats, exploration
- **Server Events**: Boss spawning, weather control
- **Base Protection**: Ward management, permissions

### ARK: Survival Evolved
**Status**: 📋 Planned  
**Expected**: 2025

#### Planned Features
- **Tribe Management**: Tribe tracking, alliances
- **Creature Management**: Taming logs, breeding records
- **Server Clustering**: Cross-ARK transfers
- **Event Automation**: Breeding events, resource spawns

## Feature Comparison by Game

| Feature | 7 Days to Die | Rust | Minecraft | Project Zomboid | Valheim | ARK |
|---------|---------------|------|-----------|-----------------|---------|-----|
| **Player Management** | ✅ Full | ⚠️ Basic | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **Economy System** | ✅ Full | ⚠️ Basic | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **Automation** | ✅ Full | ⚠️ Limited | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **Chat Integration** | ✅ Full | ✅ Full | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **Discord Bot** | ✅ Full | ✅ Full | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **Web Dashboard** | ✅ Full | ✅ Full | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |
| **API Access** | ✅ Full | ✅ Full | 🔄 Planned | 🔄 Planned | 📋 Future | 📋 Future |

## Game-Agnostic Features

These features work across all supported games:

### Universal Player System
- **Unified Profiles**: One profile across all games
- **Cross-Game Statistics**: Combined activity tracking
- **Global Achievements**: Achievements spanning multiple games
- **Reputation System**: Behavior tracking across games

### Multi-Game Economy
- **Shared Currency**: Universal points/credits system
- **Cross-Game Rewards**: Earn in one game, spend in another
- **Global Leaderboards**: Competition across game boundaries
- **Transfer System**: Move rewards between games

### Community Features
- **Discord Integration**: Unified bot for all servers
- **Event System**: Cross-game events and competitions
- **Global Moderation**: Consistent rule enforcement
- **Analytics Dashboard**: Insights across all games

## Adding New Games

### Community Requests
The Takaro team prioritizes new game support based on:
- **Community Demand**: Player and server owner requests
- **Technical Feasibility**: Available APIs and connection methods
- **Market Size**: Player base and server count
- **Development Resources**: Available development time

### Submit Game Requests
To request support for a new game:
1. **GitHub Issues**: Create a feature request
2. **Discord**: Discuss in the #game-requests channel
3. **Community Vote**: Participate in priority voting
4. **Technical Info**: Provide game's API documentation

### Development Process
1. **Research Phase**: API analysis, connection methods
2. **Proof of Concept**: Basic connection and commands
3. **Core Features**: Player management, basic automation
4. **Advanced Features**: Game-specific functionality
5. **Community Testing**: Beta testing with volunteers
6. **Full Release**: Production-ready support

## Game-Specific Documentation

Each supported game has dedicated documentation:

### 7 Days to Die
- [7D2D Server Setup](../../7-days-to-die/setup/installation)
- [CSMM Migration Guide](../../csmm/getting-started/installation)
- [Advanced Automation](../config/modules)

### Rust
- Rust Server Configuration
- Oxide Plugin Integration
- Custom Command Development

### Minecraft (Coming Soon)
- Java Edition Setup
- Bedrock Edition Support
- Plugin Development Guide

## Contributing Game Support

### Developer Contributions
Help add support for new games:
- **Game Connectors**: Develop connection libraries
- **Module Development**: Create game-specific modules
- **Testing**: Beta test new game integrations
- **Documentation**: Write setup and usage guides

### Required Skills
- **JavaScript/TypeScript**: Core development language
- **Game Administration**: Understanding of target game
- **API Knowledge**: Game's administration APIs
- **Testing**: Thorough testing methodologies

## Technical Requirements by Game

### Minimum Server Requirements

| Game | RAM | CPU | Network | Special Requirements |
|------|-----|-----|---------|----------------------|
| **7 Days to Die** | 2GB | 2 cores | Telnet access | None |
| **Rust** | 1GB | 1 core | RCON access | None |
| **Minecraft** | 1GB | 1 core | RCON/Plugin | Java knowledge helpful |
| **Project Zomboid** | 512MB | 1 core | RCON access | None |

### Game Server Modifications

Most games require minimal server modifications:
- **7D2D**: Enable telnet in serverconfig.xml
- **Rust**: Enable RCON in server.cfg
- **Minecraft**: Install Takaro plugin (when available)
- **Others**: Usually just RCON or API access

## Next Steps

Ready to set up Takaro with your games?

1. **[Installation Guide](../getting-started/installation)** - Install Takaro
2. **[First Server Setup](../getting-started/first-server)** - Connect your first game
3. **[Module Configuration](../config/modules)** - Set up game-specific features
4. **[Discord Integration](../config/integrations)** - Connect your Discord server

The multi-game future of server management starts here!