# Server Installation

This guide will walk you through installing a 7 Days to Die dedicated server on your system.

## System Requirements

### Minimum Requirements
- **OS**: Windows 10/11, Linux (Ubuntu 18.04+, CentOS 7+)
- **RAM**: 8 GB (12 GB recommended)
- **Storage**: 15 GB available space
- **Network**: Stable internet connection with open ports

### Recommended Requirements
- **RAM**: 16 GB or more
- **CPU**: Multi-core processor (4+ cores)
- **Storage**: SSD with 25+ GB space

## Installation Methods

### Steam CMD Installation (Recommended)

#### Windows
1. Download and install SteamCMD
2. Create a dedicated folder for your server
3. Run the following commands:
```batch
steamcmd +login anonymous +force_install_dir "C:\7d2d-server" +app_update 294420 +quit
```

#### Linux
```bash
# Install SteamCMD
sudo apt update
sudo apt install steamcmd

# Install the server
steamcmd +login anonymous +force_install_dir /home/steam/7d2d-server +app_update 294420 +quit
```

### Manual Installation

1. Download the server files from Steam
2. Extract to your desired location
3. Ensure proper permissions are set

## Network Configuration

### Required Ports
- **26900** (UDP) - Game port
- **26901** (UDP) - Game port +1
- **26902** (UDP) - Game port +2
- **8080** (TCP) - Web interface (optional)
- **8081** (TCP) - Telnet interface (optional)

### Firewall Rules
Make sure to open these ports in your firewall and router configuration.

## Next Steps

Once installation is complete, proceed to [Server Configuration](configuration) to set up your server settings.