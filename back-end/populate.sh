#!/bin/bash

# Create DB
npx sequelize-cli db:create

# Create tables -> migration
npx sequelize-cli db:migrate

# Populate tables -> seeders
npx sequelize-cli db:seed:all

