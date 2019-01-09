#! /usr/bin/env node

import * as Yargs from 'yargs'
import { serve } from './foxstorm/serve'
import { generate } from './foxstorm/generate'

Yargs.demandCommand(1) // tslint:disable-line
  .strict()
  .command(generate)
  .command(serve)
  .argv
