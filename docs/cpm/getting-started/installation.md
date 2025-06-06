# CPM Installation Guide

This comprehensive guide will walk you through installing CPM (CSMM Patrons Mod) on your 7 Days to Die server.

## Prerequisites Checklist

Before installing CPM, ensure you have:

- [ ] **Active CSMM Installation**: CSMM must be properly configured and connected to your 7D2D server
- [ ] **Patron Subscription**: Active CSMM Patron subscription (Tier 1 or higher)
- [ ] **7D2D Server Access**: Admin access to your 7 Days to Die dedicated server
- [ ] **Server Requirements**: Minimum 4 GB RAM, 2+ CPU cores
- [ ] **Network Access**: Stable connection between CSMM and game server

## Patron Subscription Setup

### Activating Patron Status

1. **Subscribe to CSMM Patron**
   - Visit [CSMM Patron Page](https://www.csmm.app/patron)
   - Choose your subscription tier (Tier 1, 2, or 3)
   - Complete payment process

2. **Link Discord Account** (if using Discord benefits)
   - Connect your Discord account to CSMM
   - Join the CSMM Discord server
   - Verify patron role assignment

3. **Verify Patron Status**
   - Log into your CSMM dashboard
   - Check for "Patron" badge on your profile
   - Verify access to patron-only features

## Installation Methods

### Method 1: Automatic Installation (Recommended)

The easiest way to install CPM is through the CSMM dashboard.

#### Step 1: Access Patron Dashboard
```
1. Log into CSMM dashboard
2. Navigate to "Patron Features" section
3. Select "CPM Installation"
4. Choose your target server
```

#### Step 2: Automatic Setup
```
1. Click "Install CPM"
2. Select installation options:
   - Auto-update: Enable for automatic updates
   - Feature set: Choose basic or advanced features
   - Integration level: Full or minimal CSMM integration
3. Click "Begin Installation"
4. Monitor installation progress
```

#### Step 3: Verify Installation
```
1. Check server console for CPM load messages
2. Verify CSMM shows "CPM Connected" status
3. Test basic CPM commands in-game
```

### Method 2: Manual Installation

For advanced users or custom setups.

#### Step 1: Download CPM Files
```bash
# Download from patron dashboard
wget https://csmm.app/patron/cpm/download/latest

# Or use curl
curl -H "Authorization: Bearer YOUR_PATRON_TOKEN" \
     https://csmm.app/api/patron/cpm/download > cpm-latest.zip
```

#### Step 2: Extract and Install
```bash
# Extract CPM files
unzip cpm-latest.zip -d /path/to/7d2d-server/Mods/

# Set proper permissions
chmod +x /path/to/7d2d-server/Mods/CPM/
chown -R gameserver:gameserver /path/to/7d2d-server/Mods/CPM/
```

#### Step 3: Configure CPM
Edit the CPM configuration file:
```xml
<!-- /path/to/7d2d-server/Mods/CPM/Config/cpm-config.xml -->
<CPMConfig>
  <CSMMIntegration enabled="true">
    <APIEndpoint>http://your-csmm-url:1337</APIEndpoint>
    <APIKey>your_csmm_api_key</APIKey>
    <ServerID>your_server_id</ServerID>
  </CSMMIntegration>
  
  <Features>
    <AdvancedCommands enabled="true" />
    <PlayerAnalytics enabled="true" />
    <EconomyExtensions enabled="true" />
    <PerformanceMonitoring enabled="true" />
  </Features>
  
  <Security>
    <EnableLogging>true</EnableLogging>
    <LogLevel>INFO</LogLevel>
  </Security>
</CPMConfig>
```

### Method 3: Docker Installation

For containerized environments.

#### Step 1: Docker Compose Configuration
```yaml
# docker-compose.yml addition
services:
  cpm:
    image: csmm/cpm:latest
    environment:
      - CPM_SERVER_ID=${SERVER_ID}
      - CPM_CSMM_URL=${CSMM_URL}
      - CPM_API_KEY=${CSMM_API_KEY}
      - CPM_PATRON_TOKEN=${PATRON_TOKEN}
    volumes:
      - ./7d2d-server/Mods:/mods
      - ./cpm-data:/data
    depends_on:
      - csmm
    networks:
      - csmm-network
```

#### Step 2: Environment Configuration
```bash
# .env file
SERVER_ID=your_server_id_from_csmm
CSMM_URL=http://csmm:1337
CSMM_API_KEY=your_csmm_api_key
PATRON_TOKEN=your_patron_access_token
```

#### Step 3: Deploy
```bash
docker-compose up -d cpm
docker-compose logs -f cpm  # Monitor startup
```

## CSMM Integration Setup

### API Key Generation

1. **Generate CSMM API Key**
   ```
   1. Log into CSMM dashboard
   2. Go to Settings > API Keys
   3. Click "Generate New Key"
   4. Name: "CPM Integration"
   5. Permissions: Full server access
   6. Copy the generated key
   ```

2. **Find Server ID**
   ```
   1. In CSMM dashboard, go to Servers
   2. Select your target server
   3. Note the Server ID in the URL or settings
   ```

### Configure CPM-CSMM Connection

#### In CSMM Dashboard
```
1. Navigate to Server Settings
2. Find "CPM Integration" section
3. Enable "Allow CPM Connection"
4. Set CPM webhook URL (if using webhooks)
5. Configure CPM permissions
```

#### In CPM Configuration
```xml
<CSMMIntegration enabled="true">
  <APIEndpoint>http://your-csmm-instance:1337</APIEndpoint>
  <APIKey>your_generated_api_key</APIKey>
  <ServerID>123</ServerID>
  <WebhookURL>http://your-csmm-instance:1337/api/v1/cpm/webhook</WebhookURL>
  <EnableEvents>true</EnableEvents>
</CSMMIntegration>
```

## Feature Configuration

### Basic Feature Setup

Enable core CPM features:

```xml
<Features>
  <!-- Essential features for all users -->
  <AdvancedCommands enabled="true">
    <MaxCustomCommands>50</MaxCustomCommands>
    <AllowPlayerCommands>true</AllowPlayerCommands>
  </AdvancedCommands>
  
  <PlayerAnalytics enabled="true">
    <TrackingInterval>60</TrackingInterval>
    <StoreHistoricalData>true</StoreHistoricalData>
  </PlayerAnalytics>
  
  <!-- Optional advanced features -->
  <EconomyExtensions enabled="false">
    <CustomCurrencies>true</CustomCurrencies>
    <AdvancedShops>true</AdvancedShops>
  </EconomyExtensions>
</Features>
```

### Performance Settings

Optimize CPM for your server:

```xml
<Performance>
  <MaxConcurrentTasks>10</MaxConcurrentTasks>
  <DatabaseCacheSize>100MB</DatabaseCacheSize>
  <EnableCompression>true</EnableCompression>
  <LogRetentionDays>30</LogRetentionDays>
</Performance>
```

## Verification and Testing

### Installation Verification

#### Check Server Console
Look for these messages in your 7D2D server console:
```
[CPM] CSMM Patrons Mod v2.1.0 initializing...
[CPM] CSMM connection established
[CPM] All modules loaded successfully
[CPM] CPM ready for commands
```

#### Check CSMM Dashboard
1. Navigate to your server in CSMM
2. Look for "CPM Status: Connected" indicator
3. Check "CPM Features" tab for available options
4. Verify patron features are unlocked

#### Test Basic Functionality
```bash
# In-game or console commands to test
cpm version          # Show CPM version
cpm status          # Show CPM status
cpm features        # List enabled features
cpm test           # Run basic functionality test
```

### Common Installation Issues

#### CPM Not Loading
```
Issue: CPM mod doesn't appear in server console
Solutions:
1. Check mod folder permissions
2. Verify 7D2D server has latest updates
3. Check for conflicting mods
4. Review server console for error messages
```

#### CSMM Connection Failed
```
Issue: CPM can't connect to CSMM
Solutions:
1. Verify CSMM URL is accessible from server
2. Check API key is correct and has permissions
3. Ensure firewall allows connection
4. Test CSMM API manually: curl http://csmm-url:1337/api/v1/status
```

#### Feature Not Available
```
Issue: Expected patron features not showing
Solutions:
1. Verify patron subscription is active
2. Check patron tier includes desired features
3. Refresh patron status in CSMM
4. Contact patron support if persistent
```

## Security Considerations

### API Security
- **Secure API Keys**: Never share or commit API keys to version control
- **Key Rotation**: Regularly rotate API keys (monthly recommended)
- **Permission Limiting**: Grant only necessary permissions to CPM
- **Network Security**: Use HTTPS for CSMM if possible

### Server Security
- **File Permissions**: Ensure CPM files have appropriate permissions
- **Log Security**: Secure CPM logs containing sensitive information
- **Update Management**: Keep CPM updated for security patches
- **Access Control**: Limit who can modify CPM configuration

## Performance Optimization

### Resource Usage
```xml
<!-- Optimize for lower resource usage -->
<Performance>
  <PlayerTrackingInterval>300</PlayerTrackingInterval>  <!-- 5 minutes -->
  <ReducedFeatureSet>true</ReducedFeatureSet>
  <DatabaseOptimization>aggressive</DatabaseOptimization>
</Performance>
```

### High-Performance Servers
```xml
<!-- Optimize for high-performance servers -->
<Performance>
  <PlayerTrackingInterval>30</PlayerTrackingInterval>   <!-- 30 seconds -->
  <EnableAdvancedAnalytics>true</EnableAdvancedAnalytics>
  <MaxConcurrentTasks>20</MaxConcurrentTasks>
</Performance>
```

## Post-Installation Steps

### Initial Configuration
1. **Configure Basic Settings**: Set up essential CPM options
2. **Enable Desired Features**: Turn on features relevant to your server
3. **Set Up Permissions**: Configure who can use CPM commands
4. **Test Key Functions**: Verify installation works correctly

### Integration with Existing Setup
1. **Migrate Existing Commands**: Convert current custom commands to CPM
2. **Update Documentation**: Update server rules and guides
3. **Train Staff**: Educate admins on new CPM features
4. **Player Communication**: Inform players about new features

## Next Steps

After successful installation:

1. **[Initial Setup](setup)** - Configure CPM settings and preferences
2. **[First Use Guide](first-use)** - Learn basic CPM operations
3. **[Advanced Commands](../features/advanced-commands)** - Explore command capabilities
4. **[Feature Overview](../features/player-management)** - Discover all CPM features

Your CPM installation is now complete and ready to enhance your 7 Days to Die server management experience!