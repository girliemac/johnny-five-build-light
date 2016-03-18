#!/usr/bin/env bash
set -e # halt script on error

echo Success!!
curl https://maker.ifttt.com/trigger/build_success/with/key/$IFTTT_KEY
