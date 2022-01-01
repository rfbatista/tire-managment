#!/bin/sh
emulator -avd Pixel_4_API_30
adb -s emulator-5554 reverse tcp:3000 tcp:3000