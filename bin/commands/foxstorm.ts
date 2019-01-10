#! /usr/bin/env node

import * as Yargs from 'yargs'
import { newApp } from './foxstorm/new'
import { serve } from './foxstorm/serve'
import { generate } from './foxstorm/generate'

Yargs.demandCommand(1) // tslint:disable-line
  .strict()
  .command(newApp)
  .command(generate)
  .command(serve)
  .argv
