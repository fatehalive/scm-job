#!/bin/bash
tsc && for f in dist/*.js; do terser -c -m -o "$f" -- "$f"; done
