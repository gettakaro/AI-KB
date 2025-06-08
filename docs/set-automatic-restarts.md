---
id: "faq-008-set-automatic-restarts"
title: "How do I set automatic restarts?"
category: "7-days-to-die"
tags: ["7d2d", "csmm", "cpm", "restarts", "automation", "cron", "shutdownba"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# How do I set automatic restarts?

## Overview

Automatic server restarts help maintain server performance by clearing memory leaks and refreshing the game world. There are multiple methods to implement automatic restarts, from simple CSMM scheduled commands to advanced system-level solutions.

## CSMM Scheduled Commands

1. **Log into CSMM**
2. **Navigate to Settings > Server Automation**
3. **Click "New" to create a scheduled command**
4. **Configure the restart command**

### Basic Restart Command

**Simple restart after 30 seconds:**

```
say "Server Rebooting -- Log off NOW!";saveworld;wait(30);shutdown
```

**Restart with multiple warnings:**

```
say "Server will restart in 5 minutes!";wait(240);say "Server will restart in 1 minute!";wait(60);shutdown
```

### CPM Enhanced Restarts (Recommended)

If you have CPM installed, use the **bloodmoon-aware** `shutdownba` command:

**Basic CPM restart with 10-minute warning:**

```
shutdownba 10
```

**CPM restart with reset regions:**

```
shutdownba 10 reset
```

### Cron Scheduling Examples

**Daily restart at 6 AM:**

```
0 6 * * *
```

**Restart every 12 hours:**

```
0 */12 * * *
```

**Restart at 6 AM except Fridays:**

```
0 6 * * 0-4,6
```

**Reset restart on Fridays only:**

```
0 6 * * 5
```

## Best Practices

### Timing Considerations

- **Avoid peak hours** - Schedule during low player activity
- **Consider time zones** - Account for your player base
- **Use bloodmoon awareness** - Never interrupt bloodmoon events

### Warning Systems

- **Multiple warnings** - Give players time to prepare
- **Clear messages** - Use colored text for visibility
- **Sufficient time** - At least 5-10 minutes notice

### Server Health

- **Regular saves** - Save world before restarts
- **Log monitoring** - Check for errors after restart
- **Performance tracking** - Monitor restart effectiveness

## Timezone Configuration

CSMM uses **GMT-0** timezone for cron jobs. Calculate your local time offset:

**Examples:**

- **EST (GMT-5):** For 6 AM EST restart, use `0 11 * * *`
- **PST (GMT-8):** For 6 AM PST restart, use `0 14 * * *`
- **CET (GMT+1):** For 6 AM CET restart, use `0 5 * * *`

## Testing Your Setup

### Test Restart Command

1. **Use "Run now" button** in CSMM automation
2. **Monitor server logs** for proper execution
3. **Verify server comes back online**

### Check Scheduling

1. **Use [crontab.guru](https://crontab.guru/)** to verify cron syntax
2. **Test at different times** to ensure consistency
3. **Monitor for any missed restarts**

## Troubleshooting

### Common Issues

- **Server doesn't restart:** Check hosting provider auto-restart settings
- **Players not warned:** Verify command syntax and timing
- **Restarts during bloodmoon:** Use `shutdownba` instead of `shutdown`
- **Wrong timezone:** Recalculate GMT offset

### Hosting Provider Considerations

- **Most hosting companies** automatically restart crashed servers
- **Self-hosted servers** need manual restart mechanisms
- **Contact support** if auto-restart isn't working

## Important Notes

- **`shutdown` vs `shutdownba`:** Always prefer `shutdownba` for bloodmoon awareness
- **Reset regions:** Only use reset parameter when intended
- **Player notification:** Always warn players before restart
- **Save frequency:** Consider separate save commands between restarts
