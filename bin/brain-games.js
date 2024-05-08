#!/usr/bin/env node
import nameQuestion from '../src/cli.js';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

greetings();

nameQuestion();
