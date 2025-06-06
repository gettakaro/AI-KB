# First Server Run

This guide covers launching your 7 Days to Die server for the first time and verifying everything works correctly.

## Starting the Server

### Windows
1. Navigate to your server directory
2. Run `startserver.bat` or `7DaysToDieServer.exe`
3. Wait for the server to fully load

### Linux
```bash
cd /path/to/server
./startserver.sh
# or
./7DaysToDieServer.x86_64 -configfile=serverconfig.xml
```

## Server Startup Process

### Loading Sequence
1. **Configuration Loading**: Server reads serverconfig.xml
2. **World Loading/Generation**: Loads existing world or generates new one
3. **Network Initialization**: Opens required ports
4. **Ready State**: Server accepts connections

### Expected Output
Look for these key messages:
```
[INFO] Starting dedicated server...
[INFO] Loading server config...
[INFO] World loaded successfully
[INFO] Server is ready for connections
```

## Verification Steps

### 1. Check Server Status
- Server should display "Ready for connections"
- No error messages in console
- Memory usage stable

### 2. Test Local Connection
- Launch 7 Days to Die client
- Connect to `localhost:26900`
- Verify you can join and move around

### 3. Test External Connection
- Have a friend connect using your external IP
- Check port forwarding is working
- Verify server appears in browser (if public)

## Common First-Run Issues

### Port Binding Errors
```
ERROR: Failed to bind port 26900
```
**Solution**: Ensure no other process is using the port

### World Generation Failures
```
ERROR: Failed to generate world
```
**Solutions**:
- Check available disk space
- Verify write permissions
- Try different world generation settings

### Memory Issues
```
OutOfMemoryException
```
**Solutions**:
- Increase server RAM allocation
- Reduce MaxChunkAge setting
- Lower ServerMaxPlayerCount

## Monitoring Your Server

### Console Commands
- `version` - Show server version
- `mem` - Display memory usage
- `fps` - Show server performance
- `listplayers` - Show connected players

### Log Files
Check these files for detailed information:
- `output_log.txt` - General server logs
- `7DaysToDieServer_Data/output_log.txt` - Detailed debug logs

## Next Steps

Once your server is running successfully:
- Learn about [server commands](../admin/commands)
- Set up [player permissions](../admin/permissions)
- Configure [moderation tools](../admin/moderation)