#!/usr/bin/env node

import { greatestCommonDivisorLogic } from '../bin/gcdlogic.js';

import { logic, userName } from '../src/index.js';

logic();
greatestCommonDivisorLogic(userName);
