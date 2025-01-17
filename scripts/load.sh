#!/bin/bash
PORT=5600

npx loadtest -c 10 --rps 100 -n 100 http://localhost:$PORT/math/fibonacci?number=35