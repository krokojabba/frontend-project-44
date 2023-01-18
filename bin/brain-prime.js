#!/usr/bin/env node

import generateRound from '../src/games/prime.js';
import runEngine from '../src/index.js';

runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
