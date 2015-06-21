#!/usr/bin/env node
var os = require('os');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var argv = require("minimist")(process.argv.slice(2), {
  alias: {
    'silent': 's',
    'port': 'p',
    'hostname': 'h',
    'dir': 'd'
  },
  string: ['port', 'hostname'],
  boolean: 'silent',
  'default': {
    'port': 8000,
    'dir': process.cwd()
  }
});
