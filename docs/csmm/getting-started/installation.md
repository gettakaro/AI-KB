# CSMM Installation

This guide will walk you through installing CSMM on your system to manage your 7 Days to Die server.

## Prerequisites

### System Requirements
- **Node.js**: Version 16+ (18 LTS recommended)
- **Database**: MySQL 8.0+ or MariaDB 10.6+
- **Operating System**: Windows 10/11 or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 2 GB, 4 GB recommended
- **Storage**: 5 GB available disk space

### 7D2D Server Requirements
- 7 Days to Die dedicated server with telnet enabled
- Admin access to server configuration
- Network connectivity between CSMM and game server

## Installation Methods

### Method 1: Docker (Recommended)

Docker provides the easiest installation with minimal setup required.

#### Prerequisites
- Docker and Docker Compose installed
- Basic familiarity with command line

#### Quick Start
```bash
# Clone CSMM repository
git clone https://github.com/CatalysmsServerManager/7-days-to-die-server-manager.git
cd 7-days-to-die-server-manager

# Create environment file
cp .env.example .env

# Edit configuration (see configuration section below)
nano .env

# Start CSMM with Docker
docker-compose up -d
```

#### Docker Configuration
Edit the `.env` file with your settings:
```env
# Database settings
CSMM_DB_HOST=db
CSMM_DB_USER=csmm
CSMM_DB_PASSWORD=your_secure_password_here
CSMM_DB_NAME=csmm

# CSMM settings
CSMM_HOSTNAME=localhost
CSMM_PORT=1337
CSMM_SESSION_SECRET=your_session_secret_here

# External services (optional)
CSMM_STEAM_API_KEY=your_steam_api_key
CSMM_DISCORD_CLIENT_ID=your_discord_client_id
CSMM_DISCORD_CLIENT_SECRET=your_discord_client_secret
```

### Method 2: Manual Installation

For users who prefer direct installation or need custom configurations.

#### Step 1: Install Node.js
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Step 2: Install Database
```bash
# Install MySQL
sudo apt update
sudo apt install mysql-server

# Secure MySQL installation
sudo mysql_secure_installation

# Create CSMM database
mysql -u root -p
CREATE DATABASE csmm;
CREATE USER 'csmm'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON csmm.* TO 'csmm'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Step 3: Install CSMM
```bash
# Clone repository
git clone https://github.com/CatalysmsServerManager/7-days-to-die-server-manager.git
cd 7-days-to-die-server-manager

# Install dependencies
npm install

# Copy configuration file
cp config/local.js.example config/local.js

# Edit configuration
nano config/local.js
```

#### Step 4: Configure CSMM
Edit `config/local.js`:
```javascript
module.exports = {
  datastores: {
    default: {
      adapter: 'sails-mysql',
      host: 'localhost',
      port: 3306,
      user: 'csmm',
      password: 'your_password',
      database: 'csmm'
    }
  },
  
  port: 1337,
  
  custom: {
    steamApiKey: 'your_steam_api_key',
    discordClientId: 'your_discord_client_id',
    discordClientSecret: 'your_discord_client_secret'
  }
};
```

#### Step 5: Start CSMM
```bash
# Development mode
npm run start

# Production mode (recommended)
npm run prod
```

## Post-Installation Setup

### 1. Access CSMM Web Interface
- Open browser to `http://localhost:1337`
- Complete initial setup wizard
- Create admin account

### 2. Configure Reverse Proxy (Optional)
For production deployments, use nginx or Apache:

```nginx
# nginx configuration
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Set Up SSL Certificate (Recommended)
```bash
# Using Certbot for Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Verification

### Check CSMM Status
1. **Web Interface**: Access CSMM dashboard
2. **Database Connection**: Verify database connectivity in logs
3. **API Endpoints**: Test API responses
4. **Background Jobs**: Check scheduled tasks are running

### Common Installation Issues

#### Node.js Version Conflicts
```bash
# Use Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

#### Database Connection Errors
- Verify MySQL/MariaDB is running
- Check database credentials
- Ensure database exists and user has permissions

#### Port Conflicts
- Change CSMM port in configuration if 1337 is in use
- Check firewall settings
- Verify no other services using the same port

## Security Considerations

### Database Security
- Use strong passwords
- Limit database user permissions
- Enable database firewall rules
- Regular database backups

### CSMM Security
- Change default session secrets
- Use HTTPS in production
- Regular CSMM updates
- Monitor access logs

## Next Steps

After successful installation:
1. [Complete Initial Setup](setup) - Configure basic CSMM settings
2. [Connect Your Server](connecting-server) - Link your 7D2D server
3. [Explore Features](../features/dashboard) - Discover CSMM capabilities