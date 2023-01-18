#!/usr/bin/env node

import generateRound from '../src/games/gcd.js';
import runEngine from '../src/index.js';

runEngine('Find the greatest common divisor of given numbers.', generateRound);
