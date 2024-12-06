#! /usr/bin/env node
const {program} = require('commander')
const myHelp = require('../lib/core/help')
const myCommand = require('../lib/core/command')

myHelp(program)
myCommand(program)

program.parse(process.argv)

