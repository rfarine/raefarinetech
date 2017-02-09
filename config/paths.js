const { resolve, join } = require('path');

export const cwd = process.cwd();

export const configPath = resolve(join(cwd, 'config'));

export const nodeModulesDir = resolve(join(cwd, 'node_modules'));

export const stylesPath = resolve(join(cwd, 'styles'));