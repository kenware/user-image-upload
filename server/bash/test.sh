#!/bin/bash
./node_modules/.bin/sequelize-cli db:create
./node_modules/.bin/sequelize-cli db:migrate
npm run run:test
./node_modules/.bin/sequelize-cli db:drop
