# Connecting Your 7D2D Server to CSMM

Learn how to connect your 7 Days to Die server to CSMM for full management capabilities.

## Prerequisites

Before connecting your server to CSMM:
- [ ] CSMM is installed and running
- [ ] 7 Days to Die dedicated server is operational
- [ ] Admin access to 7D2D server configuration
- [ ] Network connectivity between CSMM and game server

## Enable Telnet on 7D2D Server

### Configure serverconfig.xml

Edit your 7D2D server's `serverconfig.xml` file:

```xml
<!-- Enable telnet access -->
<property name="TelnetEnabled" value="true"/>
<property name="TelnetPort" value="8081"/>
<property name="TelnetPassword" value="YourSecurePassword123"/>

<!-- Optional: Control panel for web access -->
<property name="ControlPanelEnabled" value="true"/>
<property name="ControlPanelPort" value="8080"/>
<property name="ControlPanelPassword" value="YourWebPassword123"/>

<!-- Required: Server visibility -->
<property name="ServerIsPublic" value="true"/>
```

### Security Considerations

#### Strong Passwords
- Use complex passwords (12+ characters)
- Include uppercase, lowercase, numbers, and symbols
- Avoid common words or patterns
- Never use default passwords

#### Network Security
```bash
# Firewall rules (adjust for your setup)
# Allow CSMM server to connect to telnet
iptables -A INPUT -s CSMM_IP -p tcp --dport 8081 -j ACCEPT

# Block telnet access from other IPs
iptables -A INPUT -p tcp --dport 8081 -j DROP
```

## Add Server in CSMM

### 1. Access Server Management

1. Login to CSMM dashboard
2. Navigate to "Servers" section
3. Click "Add New Server"

### 2. Server Configuration Form

Fill out the server details:

```
Server Name: Your Server Display Name
IP Address: 127.0.0.1 (if local) or server IP
Game Port: 26900 (default 7D2D port)
Telnet Port: 8081 (as configured above)
Telnet Password: YourSecurePassword123
Control Panel Port: 8080 (optional)
Control Panel Password: YourWebPassword123 (optional)
```

### 3. Connection Settings

#### Basic Settings
- **Auto Restart**: Enable automatic server restart
- **Player Tracking**: Enable player location tracking
- **Chat Monitoring**: Enable chat logging and commands
- **Economy**: Enable in-game economy features

#### Advanced Settings
- **Connection Timeout**: 30 seconds (default)
- **Reconnection Attempts**: 5 (default)
- **Ping Interval**: 60 seconds
- **Command Queue Size**: 100 commands

### 4. Test Connection

Click "Test Connection" to verify:
- ✅ Telnet connection successful
- ✅ Authentication successful
- ✅ Server responds to commands
- ✅ Player list retrieved

## Verify Server Connection

### Check Dashboard Status

After successful connection:
- Server status shows "Online" with green indicator
- Player count displays correctly
- Server uptime is tracked
- Recent chat messages appear (if any)

### Monitor Connection Logs

```bash
# CSMM logs
tail -f logs/csmm.log | grep "server-connection"

# Look for success messages:
[INFO] Server connection established: ServerName
[INFO] Telnet authenticated successfully
[INFO] Player data sync started
```

## Configure Server Features

### Player Tracking

Enable comprehensive player monitoring:

```javascript
// Player tracking settings
playerTracking: {
  enabled: true,
  interval: 30, // seconds
  trackInventory: true,
  trackLocation: true,
  trackStats: true
}
```

### Chat Integration

Set up chat monitoring and commands:

```javascript
// Chat settings
chat: {
  enabled: true,
  logMessages: true,
  enableCommands: true,
  commandPrefix: '/',
  allowedRoles: ['admin', 'moderator']
}
```

### Automation Features

Configure automated tasks:

```javascript
// Automation settings
automation: {
  autoRestart: {
    enabled: true,
    schedule: '0 4 * * *', // 4 AM daily
    warning: true,
    warningMinutes: [10, 5, 1]
  },
  
  autoSave: {
    enabled: true,
    interval: 300 // 5 minutes
  }
}
```

## Troubleshooting Connection Issues

### Common Problems

#### Connection Refused
```
Error: connect ECONNREFUSED server-ip:8081
```

**Solutions**:
1. Verify telnet is enabled in serverconfig.xml
2. Check firewall allows connection on port 8081
3. Ensure 7D2D server is running
4. Verify IP address is correct

#### Authentication Failed
```
Error: Telnet authentication failed
```

**Solutions**:
1. Check telnet password in serverconfig.xml
2. Verify password in CSMM matches exactly
3. Restart 7D2D server after config changes
4. Check for special characters in password

#### Timeout Errors
```
Error: Connection timeout after 30 seconds
```

**Solutions**:
1. Increase timeout in CSMM settings
2. Check network latency between servers
3. Verify no network filtering/proxy issues
4. Test telnet connection manually:

```bash
telnet server-ip 8081
# Enter password when prompted
version
# Should show server version
```

### Manual Connection Testing

Test telnet connection outside of CSMM:

```bash
# Connect to telnet
telnet your-server-ip 8081

# Commands to test:
help                    # Show available commands
version                # Server version
listplayers            # Connected players
gettime                # Current game time
mem                    # Memory usage
exit                   # Disconnect
```

### Network Diagnostics

```bash
# Test connectivity
ping your-server-ip

# Test port accessibility
nmap -p 8081 your-server-ip

# Check if port is listening
netstat -tlnp | grep 8081
```

## Multiple Server Setup

### Adding Additional Servers

CSMM supports managing multiple 7D2D servers:

1. Each server needs unique telnet port
2. Configure separate serverconfig.xml for each
3. Add each server individually in CSMM
4. Assign different admin roles per server

### Load Balancing Considerations

For high-traffic setups:
- Distribute servers across different machines
- Use separate CSMM instances for heavy loads
- Monitor resource usage per server connection
- Implement connection pooling for large deployments

## Security Best Practices

### Access Control
- Use strong, unique passwords for each server
- Regularly rotate telnet passwords
- Implement IP whitelisting where possible
- Monitor connection logs for unauthorized attempts

### Monitoring
- Set up alerts for connection failures
- Log all administrative commands
- Regular security audits
- Monitor for unusual activity patterns

## Next Steps

With your server successfully connected:

1. [Explore Dashboard Features](../features/dashboard) - Learn the CSMM interface
2. [Set Up Player Management](../features/player-management) - Configure player tracking
3. [Configure Automation](../features/automation) - Set up automated tasks
4. [Discord Integration](../features/discord-integration) - Connect your Discord server

Your 7 Days to Die server is now fully integrated with CSMM!