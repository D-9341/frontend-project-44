#!/usr/bin/env node

import { progressionLogic } from '../bin/progressionlogic.js';

import { logic, userName } from '../src/index.js';

logic();
progressionLogic(userName);
