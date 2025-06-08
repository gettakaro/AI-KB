---
id: "faq-007-csmm-server-connection-issues"
title: "Why can't I connect my server to CSMM?"
category: "7-days-to-die"
tags: ["7d2d", "csmm", "connection", "webtokens", "allocs", "troubleshooting"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# Why can't I connect my server to CSMM?

## Overview

CSMM connection issues typically stem from missing requirements, incorrect configuration, or network problems. CSMM requires Alloc's Server Fixes and proper web tokens to communicate with your 7 Days to Die server.

## Prerequisites Check

### 1. Verify Alloc's Server Fixes Installation
**Check installed mods in console:**
```
version
```

**Required mods should show:**
```
Mod Allocs_Commands: XX
Mod Allocs_Core: XX
Mod Allocs_Webinterface: XX
```

**Also required (comes with server):**
```
TFP_CommandExtensions
TFP_MapRendering
TFP_WebServer
```

### 2. Test Alloc's Web Access
Navigate to: `http://yourserverip:port/legacymap`

If you see the interactive map, Alloc's is working correctly.

## Common Solutions

### 1. Web Tokens Configuration

**Check existing tokens:**
```
webtokens list
```

**Add new token (if needed):**
```
webtokens add <name> <token> 0
```

**Important requirements:**
- Token must be **at least 10 characters long**
- Permission level must be **0** (don't forget the 0!)
- Use strong, random tokens (letters, numbers, symbols)

### 2. Find Correct Web API Port

**Method 1: Check serverconfig.xml**
Look for `WebDashboardPort` value:
```xml
<property name="WebDashboardPort" value="8084"/>
```

**Method 2: Check server logs**
Find line like: `Started Webserver on 8090`

### 3. Network Configuration

**Ensure proper port forwarding:**
- Game server port (default: 26900)
- Web API port (default: 8082/8084)

**For rented servers:**
- Contact hosting provider for correct ports
- ServerConfig.xml port may not be accurate

## Step-by-Step Troubleshooting

### Step 1: Verify Server Configuration
1. **Server must be running** with all required mods
2. **WebDashboardEnabled** must be `true` in serverconfig.xml
3. **Test web access** at `http://serverip:port/legacymap`

### Step 2: Check Web Tokens
```bash
# List current tokens
webtokens list

# Add CSMM token (example)
webtokens add csmm MySecureToken123! 0

# Verify token was added
webtokens list
```

### Step 3: Test CSMM Connection
1. **Use correct server IP/domain**
2. **Use correct web API port**
3. **Enter exact token name and password**
4. **Verify permission level is 0**

### Step 4: Common Configuration Issues

**Web Dashboard Settings:**
```xml
<property name="WebDashboardEnabled" value="true"/>
<property name="WebDashboardPort" value="8084"/>
<property name="EnableMapRendering" value="true"/>
```

**ServerAdmin.xml Web Module Permissions:**
```xml
<webmodules>
  <module name="webapi.GetLog" permission_level="1" />
  <module name="webapi.ExecuteConsoleCommand" permission_level="0" />
  <module name="webapi.GetStats" permission_level="1" />
  <module name="webapi.GetPlayerList" permission_level="1" />
</webmodules>
```

## Advanced Troubleshooting

### Network Issues
- **Use internal IP** if server is on same network as CSMM
- **Check firewall rules** for web API port
- **Verify port forwarding** is configured correctly
- **Try telnet test**: `telnet serverip port`

### Server-Side Issues
- **Restart server** after installing Alloc's mods
- **Check server logs** for web server startup messages
- **Verify mod load order** (Alloc's should load after TFP mods)

### CSMM-Side Issues
- **Check browser console** for error messages
- **Try different browsers** to rule out browser issues
- **Clear browser cache** and cookies

## Error Messages and Solutions

### "Connection failed" or "Timeout"
- **Incorrect IP/port**: Verify server address and web API port
- **Firewall blocking**: Check firewall rules
- **Server offline**: Ensure server is running

### "Authentication failed"
- **Wrong token**: Verify token name and password match exactly
- **Permission denied**: Ensure token has permission level 0
- **Token not found**: Check `webtokens list` output

### "Web API not responding"
- **Alloc's not installed**: Install required mods
- **Web server disabled**: Enable WebDashboard in serverconfig.xml
- **Port conflict**: Try different port or restart server

## Best Practices

### Security
- **Use strong tokens**: Random combination of letters, numbers, symbols
- **Unique token names**: Avoid generic names like "admin" or "csmm"
- **Limit access**: Only give necessary permissions

### Maintenance
- **Keep Alloc's updated**: Download latest version regularly
- **Monitor logs**: Check for web server errors
- **Regular backups**: Backup server configs before changes

## Quick Checklist

- [ ] Server is running and accessible
- [ ] All required Alloc's mods are installed
- [ ] WebDashboard is enabled in serverconfig.xml
- [ ] Web tokens are configured with permission level 0
- [ ] Correct IP and port are used in CSMM
- [ ] Firewall/port forwarding allows web API port
- [ ] Can access `/legacymap` in browser

## Getting Help

If you're still having issues:
1. **Check server logs** for specific error messages
2. **Note exact error messages** from CSMM
3. **Provide server configuration** details
4. **Include mod versions** from `version` command output

Most connection issues are resolved by ensuring Alloc's mods are properly installed and web tokens are correctly configured with the right permissions.