#!/bin/sh
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
npm run android