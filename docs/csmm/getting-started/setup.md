# CSMM Initial Setup

Complete the initial configuration of CSMM after installation to start managing your 7 Days to Die server.

## First-Time Setup Wizard

### 1. Access CSMM Dashboard
- Navigate to `http://localhost:1337` (or your configured URL)
- You should see the CSMM welcome screen
- Click "Get Started" to begin setup

### 2. Create Admin Account
```
Username: Choose a unique administrator username
Email: Your email address for notifications
Password: Strong password (12+ characters recommended)
Confirm Password: Re-enter password
```

**Security Note**: This account has full access to all CSMM features. Use a strong, unique password.

### 3. Basic System Configuration

#### General Settings
- **Site Name**: Your community or server name
- **Site URL**: The URL where CSMM will be accessible
- **Timezone**: Your server's timezone for accurate logging
- **Language**: Interface language (English default)

#### Email Configuration (Optional but Recommended)
```javascript
// SMTP settings for notifications
Email Service: Gmail/Outlook/Custom SMTP
SMTP Host: smtp.gmail.com
SMTP Port: 587
Username: your-email@gmail.com
Password: your-app-password
```

## Database Initialization

### Automatic Migration
CSMM will automatically:
- Create required database tables
- Set up default configurations
- Initialize user roles and permissions
- Create system data structures

### Verify Database Setup
Check the logs for successful migration messages:
```
[INFO] Database migrations completed successfully
[INFO] Default roles created
[INFO] System configuration initialized
```

## API Key Configuration

### Steam API Key (Recommended)
1. Visit [Steam API Key Registration](https://steamcommunity.com/dev/apikey)
2. Enter your domain name
3. Copy the generated API key
4. Add to CSMM configuration:

```javascript
// In config/local.js or environment variables
custom: {
  steamApiKey: 'your_steam_api_key_here'
}
```

**Benefits of Steam API**:
- Player avatar display
- Steam profile integration
- Enhanced player information
- Better ban management

### Discord Integration (Optional)
1. Create Discord Application at [Discord Developer Portal](https://discord.com/developers/applications)
2. Note the Client ID and Client Secret
3. Configure in CSMM:

```javascript
custom: {
  discordClientId: 'your_discord_client_id',
  discordClientSecret: 'your_discord_client_secret'
}
```

## System Verification

### Health Check
CSMM provides a health check endpoint:
```bash
curl http://localhost:1337/api/system/health
```

Expected response:
```json
{
  "status": "healthy",
  "database": "connected",
  "version": "x.x.x",
  "uptime": "00:05:23"
}
```

### Check System Logs
Monitor the CSMM logs for any errors:
```bash
# Docker deployment
docker-compose logs -f csmm

# Manual installation
tail -f logs/csmm.log
```

## Initial Configuration

### System Settings

#### Performance Settings
- **Max Players Display**: How many players to show in lists
- **Chat History Limit**: Number of chat messages to retain
- **Player Tracking Interval**: How often to update player locations
- **Backup Retention**: How long to keep automated backups

#### Security Settings
- **Session Timeout**: Automatic logout time
- **Failed Login Attempts**: Maximum attempts before lockout
- **IP Whitelist**: Restrict admin access to specific IPs
- **Two-Factor Authentication**: Enable 2FA for admin accounts

### Default Roles and Permissions

CSMM creates these default roles:
- **Owner**: Full system access
- **Admin**: Server management access
- **Moderator**: Player management access
- **User**: Basic access (registered players)

### Backup Configuration

#### Automatic Backups
Configure regular database backups:
```javascript
// Backup settings
backups: {
  enabled: true,
  interval: '0 2 * * *', // Daily at 2 AM
  retention: 7, // Keep 7 days
  destination: '/path/to/backups'
}
```

#### Manual Backup
Create immediate backup:
```bash
# Using CSMM CLI
npm run backup

# Manual database backup
mysqldump -u csmm -p csmm > backup_$(date +%Y%m%d).sql
```

## Testing the Installation

### Basic Functionality Test
1. **Login**: Access admin dashboard
2. **Navigation**: Browse different sections
3. **Settings**: Modify and save a setting
4. **Logs**: Check system logs are recording

### API Testing
Test API endpoints:
```bash
# Get system info
curl -H "Authorization: Bearer your_api_token" \
     http://localhost:1337/api/system/info

# Health check
curl http://localhost:1337/api/system/health
```

## Troubleshooting Common Issues

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::1337
```

**Solution**: Change port in configuration:
```javascript
// config/local.js
module.exports = {
  port: 1338, // Use different port
  // ... other settings
};
```

### Database Connection Failed
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solutions**:
1. Verify MySQL/MariaDB is running
2. Check database credentials
3. Ensure database exists
4. Test connection manually:
```bash
mysql -u csmm -p -h localhost csmm
```

### Memory Issues
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**Solution**: Increase Node.js memory limit:
```bash
node --max-old-space-size=4096 app.js
```

## Security Hardening

### Production Security Checklist
- [ ] Change default passwords
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall rules
- [ ] Set up regular backups
- [ ] Enable access logging
- [ ] Configure rate limiting
- [ ] Set strong session secrets
- [ ] Enable two-factor authentication

### Firewall Configuration
```bash
# Ubuntu UFW example
sudo ufw allow 1337/tcp  # CSMM web interface
sudo ufw allow 22/tcp    # SSH access
sudo ufw enable
```

## Next Steps

With CSMM properly set up:
1. [Connect Your 7D2D Server](connecting-server) - Link your game server
2. [Explore Dashboard Features](../features/dashboard) - Learn the interface
3. [Configure Player Management](../features/player-management) - Set up player tracking
4. [Set Up Discord Integration](../features/discord-integration) - Connect your Discord server

Your CSMM installation is now ready to manage your 7 Days to Die server!