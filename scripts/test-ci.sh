#!/bin/bash
rm -rf coverage .nyc_output
npm run test-all
code=$?

mkdir -p coverage .nyc_output
cp packages/**/.nyc_output/* ./.nyc_output/
npm run nyc report -- --reporter=text --reporter=text-summary --reporter=json --reporter=lcov

pushd packages
DIRS=$(ls -d */)
popd

for DIR in $DIRS
do
  echo "dir: ${DIR%%/}"
  cat packages/${DIR%%/}/.tap | ./node_modules/.bin/tap-parser -t -f | ./node_modules/.bin/tap-xunit > coverage/${DIR%%/}.xml
done
exit $code
