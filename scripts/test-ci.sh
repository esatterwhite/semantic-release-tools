#!/bin/bash
rm -rf coverage .nyc_output
npm run test-all
code=$?
exit $code
