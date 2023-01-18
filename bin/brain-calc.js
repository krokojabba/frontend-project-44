#!/usr/bin/env node

import generateRound from '../src/games/calc.js';
import runEngine from '../src/index.js';

runEngine('What is the result of the expression?', generateRound);
