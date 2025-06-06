# CPM First Use Guide

Learn how to use CPM effectively from day one. This guide covers basic operations, essential commands, and your first automation setup.

## Getting Started Checklist

Before using CPM features, ensure:
- [ ] CPM is successfully installed and configured
- [ ] CSMM shows "CPM Connected" status
- [ ] Your patron subscription is active
- [ ] You have appropriate admin permissions
- [ ] Basic configuration is complete

## Understanding CPM Interface

### CSMM Dashboard Integration

CPM adds new sections to your CSMM dashboard:

#### CPM Overview Tab
- **Status Indicator**: Shows CPM connection status
- **Feature Summary**: Lists enabled CPM features
- **Quick Actions**: Common CPM operations
- **Recent Activity**: Latest CPM events and actions

#### CPM Commands Tab
- **Command Builder**: Visual interface for creating custom commands
- **Command Library**: Pre-built command templates
- **Command History**: Log of executed commands
- **Scheduled Commands**: Manage automated command execution

#### CPM Analytics Tab
- **Player Insights**: Advanced player behavior analytics
- **Performance Metrics**: Server performance data
- **Economy Overview**: Enhanced economy statistics
- **Custom Reports**: Configurable analytics reports

## Basic CPM Commands

### Console Commands

Access CPM through your 7D2D server console:

#### Status and Information
```bash
# Check CPM version and status
cpm version
cpm status

# List enabled features
cpm features

# Show configuration summary
cpm config summary

# Display help
cpm help
```

#### Player Management
```bash
# Enhanced player information
cpm player info "PlayerName"
cpm player stats "PlayerName"
cpm player history "PlayerName"

# Advanced player search
cpm players search active
cpm players search new
cpm players search inactive
```

#### Server Information
```bash
# Enhanced server statistics
cpm server stats
cpm server performance
cpm server economy

# Connection information
cpm connection status
cpm connection test
```

### In-Game Commands

CPM extends standard 7D2D commands with enhanced functionality:

#### For Players
```bash
# Enhanced player commands (if enabled)
/cpm stats        # Personal statistics
/cpm playtime     # Detailed playtime information
/cpm achievements # Personal achievements
/cpm shop         # Enhanced shop interface (if economy enabled)
```

#### For Admins
```bash
# Admin-only commands
/cpm admin status           # Admin panel status
/cpm admin reload          # Reload CPM configuration
/cpm admin backup          # Create configuration backup
/cpm admin players online  # Enhanced online player list
```

## Creating Your First Custom Command

### Using the Command Builder

1. **Access Command Builder**
   - Go to CSMM Dashboard > CPM Commands
   - Click "Create New Command"
   - Choose "Use Command Builder"

2. **Basic Command Setup**
   ```
   Command Name: welcome
   Trigger: Player joins server
   Permission Level: All players
   Cooldown: 60 seconds
   ```

3. **Command Actions**
   ```
   Action 1: Send message to player
   Message: "Welcome to our server, {playerName}!"
   
   Action 2: Give starting items
   Items: Stone Axe (1), Bottled Water (3), Can of Food (2)
   
   Action 3: Teleport to spawn
   Location: Spawn point
   ```

4. **Test and Deploy**
   - Use "Test Command" to verify functionality
   - Click "Deploy" to activate the command
   - Monitor command execution in CPM logs

### Manual Command Creation

For advanced users, create commands via configuration:

```xml
<CustomCommand>
  <Name>welcome</Name>
  <Trigger>player_join</Trigger>
  <Permissions>all</Permissions>
  <Cooldown>60</Cooldown>
  
  <Actions>
    <Action type="message">
      <Target>{playerName}</Target>
      <Text>Welcome to our server, {playerName}!</Text>
    </Action>
    
    <Action type="give_items">
      <Target>{playerName}</Target>
      <Items>
        <Item>Stone Axe,1</Item>
        <Item>Bottled Water,3</Item>
        <Item>Can of Food,2</Item>
      </Items>
    </Action>
    
    <Action type="teleport">
      <Target>{playerName}</Target>
      <Location>spawn</Location>
    </Action>
  </Actions>
</CustomCommand>
```

## Setting Up Player Analytics

### Enable Player Tracking

1. **Configure Tracking Settings**
   ```xml
   <PlayerAnalytics>
     <BasicTracking>true</BasicTracking>
     <AdvancedTracking>true</AdvancedTracking>
     <BehaviorAnalysis>true</BehaviorAnalysis>
     <TrackingInterval>30</TrackingInterval>
   </PlayerAnalytics>
   ```

2. **View Player Analytics**
   - Navigate to CSMM > Players > Select Player
   - Check "CPM Analytics" tab for enhanced data
   - Review behavioral patterns and insights

### Understanding Analytics Data

#### Basic Metrics
- **Playtime Analysis**: Detailed session tracking
- **Activity Patterns**: Peak activity times and days
- **Location Tracking**: Movement patterns and favorite areas
- **Building Activity**: Construction and destruction patterns

#### Advanced Insights
- **Behavior Scoring**: Automated behavior assessment
- **Risk Assessment**: Potential problem player identification
- **Engagement Metrics**: Player engagement scoring
- **Prediction Models**: Likely future behavior patterns

## Economy Features Setup

### Basic Economy Integration

If you have economy features enabled:

1. **Configure Economy Settings**
   ```xml
   <Economy>
     <EnableCPMFeatures>true</EnableCPMFeatures>
     <CurrencyIntegration>csmm</CurrencyIntegration>
     <AdvancedShops>false</AdvancedShops>
     <TransactionTracking>true</TransactionTracking>
   </Economy>
   ```

2. **Enhanced Shop Commands**
   ```bash
   # Admin shop management
   cpm shop create "Weapons Shop"
   cpm shop add-item "Weapons Shop" "AK47" 500
   cpm shop set-location "Weapons Shop" 100 50 200
   
   # Player shop interaction
   /cpm shop list           # List available shops
   /cpm shop browse "name"  # Browse shop inventory
   /cpm shop buy "item" 1   # Purchase items
   ```

### Advanced Economy (Patron Tier 2+)

```xml
<AdvancedEconomy>
  <DynamicPricing>true</DynamicPricing>
  <MultiCurrency>true</MultiCurrency>
  <MarketAnalysis>true</MarketAnalysis>
  <TradingSystem>true</TradingSystem>
</AdvancedEconomy>
```

## Automation Examples

### Simple Automation: Server Restart Warning

Create an automated restart warning system:

```xml
<Automation>
  <Task name="restart_warning">
    <Schedule>0 4 * * *</Schedule>  <!-- Daily at 4 AM -->
    <Actions>
      <Action type="message" delay="0">
        <Target>all</Target>
        <Text>Server restart in 10 minutes. Please find a safe location!</Text>
      </Action>
      
      <Action type="message" delay="300">  <!-- 5 minutes later -->
        <Target>all</Target>
        <Text>Server restart in 5 minutes!</Text>
      </Action>
      
      <Action type="message" delay="540">  <!-- 9 minutes total -->
        <Target>all</Target>
        <Text>Server restart in 1 minute!</Text>
      </Action>
      
      <Action type="restart" delay="600">  <!-- 10 minutes total -->
      </Action>
    </Actions>
  </Task>
</Automation>
```

### Player Behavior Response

Automatically respond to player behavior:

```xml
<BehaviorResponse>
  <Trigger event="excessive_deaths">
    <Condition>deaths > 5 AND timeframe < 300</Condition>  <!-- 5 deaths in 5 minutes -->
    <Action type="message">
      <Target>{playerName}</Target>
      <Text>Having trouble? Type /help for assistance or ask an admin!</Text>
    </Action>
    <Action type="give_items">
      <Target>{playerName}</Target>
      <Items>First Aid Kit,3</Items>
    </Action>
  </Trigger>
</BehaviorResponse>
```

## Performance Monitoring

### Monitor Server Performance

1. **Enable Performance Tracking**
   ```xml
   <PerformanceMonitoring>
     <EnableCPMMetrics>true</EnableCPMMetrics>
     <TrackingInterval>60</TrackingInterval>
     <AlertThresholds>
       <CPUUsage>80</CPUUsage>
       <MemoryUsage>85</MemoryUsage>
       <ResponseTime>500</ResponseTime>
     </AlertThresholds>
   </PerformanceMonitoring>
   ```

2. **View Performance Data**
   - CSMM Dashboard > CPM Analytics > Performance
   - Real-time metrics and historical trends
   - Automatic alerts for performance issues

### Performance Commands
```bash
# Check current performance
cpm performance current

# View performance history
cpm performance history 24h

# Test response times
cpm performance test

# Generate performance report
cpm performance report
```

## Troubleshooting Common Issues

### Command Not Working
```
Issue: Custom command doesn't execute
Solutions:
1. Check command syntax in CPM logs
2. Verify player has required permissions
3. Check cooldown hasn't been triggered
4. Test command manually: cpm command test "command_name"
```

### Analytics Data Missing
```
Issue: Player analytics not showing data
Solutions:
1. Verify analytics are enabled in configuration
2. Check tracking interval settings
3. Ensure sufficient time has passed for data collection
4. Review CPM logs for tracking errors
```

### Performance Issues
```
Issue: CPM causing server lag
Solutions:
1. Reduce tracking frequency
2. Disable unnecessary features
3. Check database performance
4. Review automation complexity
```

## Best Practices for New Users

### Start Simple
- Begin with basic features before enabling advanced options
- Test commands in a development environment first
- Monitor performance impact of new features
- Gradually expand automation complexity

### Security Considerations
- Use minimum required permissions for commands
- Regularly review command access logs
- Keep API keys secure and rotate them regularly
- Monitor for unusual activity patterns

### Performance Optimization
- Start with conservative tracking intervals
- Monitor resource usage after enabling features
- Use database optimization features
- Regular backup configurations before changes

## Getting Help

### Built-in Help System
```bash
# CPM command help
cpm help
cpm help commands
cpm help automation
cpm help analytics

# Feature-specific help
cpm economy help
cpm player help
cpm automation help
```

### Support Resources
- **CPM Documentation**: Comprehensive feature guides
- **Patron Discord**: Real-time support and community
- **CSMM Forums**: Community knowledge sharing
- **Support Tickets**: Direct developer support for complex issues

## Next Steps

Now that you've completed your first CPM setup:

1. **[Advanced Commands](../features/advanced-commands)** - Master the command system
2. **[Player Management](../features/player-management)** - Explore advanced player features
3. **[Automation System](../features/automation)** - Build complex automation workflows
4. **[Economy Extensions](../features/economy-extensions)** - Set up advanced economy features

Congratulations! You're now ready to leverage the full power of CPM to enhance your 7 Days to Die server management experience.