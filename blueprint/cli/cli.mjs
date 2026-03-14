#!/usr/bin/env node
import chalk from 'chalk';
import { execa } from 'execa';

const args = process.argv.slice(2);
const forwardedArgs = args.length ? args : ['--blueprints', 'my-jhipster'];

console.log(chalk.cyan('Starting JHipster with my-jhipster blueprint...'));

try {
  await execa('npx', ['generator-jhipster', ...forwardedArgs], { stdio: 'inherit' });
} catch (error) {
  console.error(chalk.red('Failed to start JHipster blueprint command.'));
  process.exit(error.exitCode ?? 1);
}
