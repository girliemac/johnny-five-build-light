#!/usr/bin/env bash
set -e # halt script on error

echo Before Install...
curl https://maker.ifttt.com/trigger/build_started/with/key/$IFTTT_KEY
