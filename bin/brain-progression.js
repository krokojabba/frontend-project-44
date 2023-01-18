#!/usr/bin/env node

import generateRound from '../src/games/progression.js';
import runEngine from '../src/index.js';

runEngine('What number is missing in the progression?', generateRound);
