#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving user...');

client.users.get()
  .then(user => {
    if (user === undefined) {
      return console.log('  Not found.');
    }

    console.log(` Username: ${user.username}`);
    console.log(` Device type: ${user.deviceType}`);
    console.log(` Create date: ${user.createDate}`);
    console.log(` Last use date: ${user.lastUseDate}`);
  })
  .catch(error => {
    console.log(error.stack);
  });
