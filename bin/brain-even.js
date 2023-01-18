#!/usr/bin/env node

import generateRound from '../src/games/even.js';
import runEngine from '../src/index.js';

runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
