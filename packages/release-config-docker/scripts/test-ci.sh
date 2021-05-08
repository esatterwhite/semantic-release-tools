#!/bin/bash
rm -rf coverage .nyc_output
mkdir -p coverage
npm run test

code=$?
cat .tap | ./node_modules/.bin/tap-parser -t -f | ./node_modules/.bin/tap-xunit > coverage/test.xml
exit $code
