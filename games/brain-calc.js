#!/usr/bin/env node

import { calcLogic } from '../bin/calclogic.js';

import { logic, userName } from '../src/index.js';

logic();
calcLogic(userName);
