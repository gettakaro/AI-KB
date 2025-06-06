# CPM Initial Setup

Configure your CPM installation for optimal performance and functionality. This guide covers essential settings and initial configuration steps.

## Post-Installation Configuration

### First-Time Setup Wizard

After successful installation, CPM provides a setup wizard accessible through CSMM:

1. **Access Setup Wizard**
   - Log into CSMM dashboard
   - Navigate to your server's CPM section
   - Click "Initial Setup" or "Configuration Wizard"

2. **Basic Configuration**
   ```
   Server Name: Your server display name for CPM
   Admin Contact: Primary administrator email
   Timezone: Server timezone for scheduling
   Language: Interface language (English default)
   ```

3. **Feature Selection**
   - Choose which CPM features to enable initially
   - Can be modified later through advanced settings
   - Start with basic features, expand as needed

## Essential Configuration Categories

### Server Integration Settings

#### CSMM Synchronization
Configure how CPM communicates with CSMM:

```xml
<!-- CPM Config: CSMM Integration -->
<CSMMSync>
  <SyncInterval>60</SyncInterval>  <!-- seconds -->
  <AutoSync>true</AutoSync>
  <SyncPlayerData>true</SyncPlayerData>
  <SyncServerEvents>true</SyncServerEvents>
  <ConflictResolution>csmm_priority</ConflictResolution>
</CSMMSync>
```

#### Event Handling
```xml
<EventHandling>
  <EnableRealTimeEvents>true</EnableRealTimeEvents>
  <EventBufferSize>1000</EventBufferSize>
  <EventRetentionDays>7</EventRetentionDays>
  <WebhookEnabled>true</WebhookEnabled>
</EventHandling>
```

### Player Management Configuration

#### Player Tracking
```xml
<PlayerTracking>
  <TrackingEnabled>true</TrackingEnabled>
  <TrackingInterval>30</TrackingInterval>  <!-- seconds -->
  <TrackInventory>true</TrackInventory>
  <TrackLocation>true</TrackLocation>
  <TrackStats>true</TrackStats>
  <HistoricalData>true</HistoricalData>
</PlayerTracking>
```

#### Player Analytics
```xml
<PlayerAnalytics>
  <BehaviorAnalysis>true</BehaviorAnalysis>
  <PlaytimeTracking>true</PlaytimeTracking>
  <ActivityPatterns>true</ActivityPatterns>
  <AchievementTracking>true</AchievementTracking>
  <CustomMetrics>false</CustomMetrics>  <!-- Advanced feature -->
</PlayerAnalytics>
```

### Command System Setup

#### Basic Command Configuration
```xml
<CommandSystem>
  <EnableCustomCommands>true</EnableCustomCommands>
  <MaxCustomCommands>50</MaxCustomCommands>
  <CommandCooldown>5</CommandCooldown>  <!-- seconds -->
  <AllowPlayerCommands>true</AllowPlayerCommands>
  <CommandLogging>true</CommandLogging>
</CommandSystem>
```

#### Permission Integration
```xml
<CommandPermissions>
  <UseCSMMPermissions>true</UseCSMMPermissions>
  <DefaultCommandLevel>1000</DefaultCommandLevel>  <!-- Default player level -->
  <AdminBypass>true</AdminBypass>
  <PermissionCaching>true</PermissionCaching>
</CommandPermissions>
```

## Feature-Specific Configuration

### Economy Extensions

If using economy features:

```xml
<Economy>
  <EnableExtensions>true</EnableExtensions>
  <CurrencyIntegration>csmm</CurrencyIntegration>  <!-- csmm, custom, both -->
  <AdvancedShops>false</AdvancedShops>  <!-- Patron Tier 2+ -->
  <TransactionLogging>true</TransactionLogging>
  <FraudDetection>true</FraudDetection>
</Economy>
```

### Automation System

Configure automation capabilities:

```xml
<Automation>
  <EnableAdvancedAutomation>true</EnableAdvancedAutomation>
  <MaxConcurrentTasks>5</MaxConcurrentTasks>
  <TaskTimeout>300</TaskTimeout>  <!-- seconds -->
  <ErrorHandling>log_and_continue</ErrorHandling>
  <ScheduledTasksEnabled>true</ScheduledTasksEnabled>
</Automation>
```

### Performance Monitoring

Enable performance tracking:

```xml
<PerformanceMonitoring>
  <EnableMonitoring>true</EnableMonitoring>
  <MetricsInterval>60</MetricsInterval>  <!-- seconds -->
  <AlertThresholds>
    <CPUUsage>80</CPUUsage>  <!-- percent -->
    <MemoryUsage>85</MemoryUsage>  <!-- percent -->
    <PlayerCount>95</PlayerCount>  <!-- percent of max -->
  </AlertThresholds>
  <HistoricalData>true</HistoricalData>
</PerformanceMonitoring>
```

## Security Configuration

### Access Control

#### Admin Permissions
```xml
<Security>
  <AdminUsers>
    <User steamId="76561198123456789" level="owner" />
    <User steamId="76561198987654321" level="admin" />
  </AdminUsers>
  
  <PermissionLevels>
    <Level name="owner" value="0" />
    <Level name="admin" value="50" />
    <Level name="moderator" value="100" />
    <Level name="helper" value="200" />
  </PermissionLevels>
</Security>
```

#### API Security
```xml
<APISecurity>
  <EnableAPIAccess>true</EnableAPIAccess>
  <RequireAuthentication>true</RequireAuthentication>
  <RateLimiting>true</RateLimiting>
  <AllowedIPs>
    <IP>127.0.0.1</IP>  <!-- CSMM server -->
    <IP>your.csmm.ip</IP>
  </AllowedIPs>
</APISecurity>
```

### Data Protection
```xml
<DataProtection>
  <EncryptSensitiveData>true</EncryptSensitiveData>
  <DataRetentionDays>90</DataRetentionDays>
  <BackupPlayerData>true</BackupPlayerData>
  <AnonymizeExpiredData>true</AnonymizeExpiredData>
</DataProtection>
```

## Database Configuration

### Database Connection
```xml
<Database>
  <Type>mysql</Type>  <!-- mysql, sqlite, postgresql -->
  <Host>localhost</Host>
  <Port>3306</Port>
  <Database>cpm_data</Database>
  <Username>cpm_user</Username>
  <Password>secure_password</Password>
  <ConnectionPoolSize>10</ConnectionPoolSize>
</Database>
```

### Database Optimization
```xml
<DatabaseOptimization>
  <EnableCaching>true</EnableCaching>
  <CacheSize>128MB</CacheSize>
  <IndexOptimization>true</IndexOptimization>
  <QueryOptimization>true</QueryOptimization>
  <AutoVacuum>true</AutoVacuum>
</DatabaseOptimization>
```

## Logging Configuration

### Log Settings
```xml
<Logging>
  <LogLevel>INFO</LogLevel>  <!-- DEBUG, INFO, WARN, ERROR -->
  <LogToFile>true</LogToFile>
  <LogToConsole>true</LogToConsole>
  <LogRotation>daily</LogRotation>
  <MaxLogFiles>7</MaxLogFiles>
  <LogLocation>/var/logs/cpm/</LogLocation>
</Logging>
```

### Specific Log Categories
```xml
<LogCategories>
  <PlayerActions>true</PlayerActions>
  <CommandExecution>true</CommandExecution>
  <APIRequests>false</APIRequests>  <!-- Can be verbose -->
  <PerformanceMetrics>true</PerformanceMetrics>
  <SecurityEvents>true</SecurityEvents>
</LogCategories>
```

## Notification Setup

### Alert Configuration
```xml
<Notifications>
  <EnableAlerts>true</EnableAlerts>
  <AlertMethods>
    <Discord enabled="true" webhook="your_webhook_url" />
    <Email enabled="false" smtp="smtp.gmail.com" />
    <CSMM enabled="true" />
  </AlertMethods>
  
  <AlertTypes>
    <ServerIssues>true</ServerIssues>
    <PlayerIssues>true</PlayerIssues>
    <PerformanceIssues>true</PerformanceIssues>
    <SecurityIssues>true</SecurityIssues>
  </AlertTypes>
</Notifications>
```

## Testing Configuration

### Verify Setup

#### Configuration Validation
```bash
# Test configuration file validity
cpm config validate

# Test CSMM connection
cpm test connection

# Test database connection
cpm test database

# Test all enabled features
cpm test features
```

#### Feature Testing
```bash
# Test custom commands
cpm command test "say Hello World"

# Test player tracking
cpm player track test

# Test automation
cpm automation test simple

# Test notifications
cpm notify test "Configuration complete"
```

## Performance Tuning

### Resource Optimization

#### Low Resource Servers
```xml
<ResourceOptimization mode="low">
  <ReducedTracking>true</ReducedTracking>
  <LimitedFeatures>true</LimitedFeatures>
  <BatchProcessing>true</BatchProcessing>
  <CompressData>true</CompressData>
</ResourceOptimization>
```

#### High Performance Servers
```xml
<ResourceOptimization mode="high">
  <AdvancedCaching>true</AdvancedCaching>
  <ParallelProcessing>true</ParallelProcessing>
  <PredictiveLoading>true</PredictiveLoading>
  <MemoryOptimization>aggressive</MemoryOptimization>
</ResourceOptimization>
```

### Monitoring Setup

#### Performance Metrics
```xml
<PerformanceMetrics>
  <CollectionInterval>30</CollectionInterval>
  <Metrics>
    <CPU>true</CPU>
    <Memory>true</Memory>
    <DiskIO>true</DiskIO>
    <NetworkIO>true</NetworkIO>
    <DatabasePerformance>true</DatabasePerformance>
  </Metrics>
</PerformanceMetrics>
```

## Common Configuration Issues

### Connection Problems
```
Issue: CPM can't connect to CSMM
Solution: Check network settings and API keys

Issue: Database connection failures
Solution: Verify database credentials and accessibility

Issue: Permission errors
Solution: Check file permissions and user access
```

### Performance Issues
```
Issue: High CPU usage
Solution: Reduce tracking frequency and disable unnecessary features

Issue: Memory leaks
Solution: Enable garbage collection and limit cache sizes

Issue: Slow response times
Solution: Optimize database queries and enable caching
```

## Backup Configuration

### Automatic Backups
```xml
<BackupSettings>
  <EnableAutoBackup>true</EnableAutoBackup>
  <BackupInterval>daily</BackupInterval>
  <BackupLocation>/backups/cpm/</BackupLocation>
  <RetentionDays>30</RetentionDays>
  <CompressBackups>true</CompressBackups>
</BackupSettings>
```

### Manual Backup
```bash
# Create manual backup
cpm backup create "pre-update-backup"

# List available backups
cpm backup list

# Restore from backup
cpm backup restore "backup-name"
```

## Configuration Templates

### Basic Server Template
For servers with 1-20 players:
```xml
<CPMConfig template="basic">
  <PlayerTracking enabled="true" interval="60" />
  <CustomCommands enabled="true" max="25" />
  <Economy enabled="false" />
  <AdvancedFeatures enabled="false" />
</CPMConfig>
```

### Medium Server Template
For servers with 20-50 players:
```xml
<CPMConfig template="medium">
  <PlayerTracking enabled="true" interval="30" />
  <CustomCommands enabled="true" max="50" />
  <Economy enabled="true" advanced="false" />
  <AdvancedFeatures enabled="true" />
</CPMConfig>
```

### Large Server Template
For servers with 50+ players:
```xml
<CPMConfig template="large">
  <PlayerTracking enabled="true" interval="15" />
  <CustomCommands enabled="true" max="100" />
  <Economy enabled="true" advanced="true" />
  <AdvancedFeatures enabled="true" />
  <PerformanceOptimization enabled="true" />
</CPMConfig>
```

## Next Steps

After completing initial setup:

1. **[First Use Guide](first-use)** - Learn basic CPM operations
2. **[Advanced Commands](../features/advanced-commands)** - Explore command system
3. **[Player Management](../features/player-management)** - Set up player tracking
4. **[Automation](../features/automation)** - Configure automated tasks

Your CPM setup is now complete and optimized for your server's needs!