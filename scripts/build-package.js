/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable no-console, global-require */

import async from 'async';
import path from 'path';
import findRemoveSync from 'find-remove';
import exec from './command-line-utilities';

console.log('# Pruning package');
const rootPath = path.resolve(__dirname, '../');
const tmpDir = path.resolve(__dirname, '../.tmp-npm');
const gitDir = '.git';
const result = findRemoveSync(`${tmpDir}/components`, { dir: '__tests__' });
console.log('Removed the following test files:');
console.log(result);

const actions = [
	{ command: 'git init', dir: tmpDir, rootPath },
	{ command: `cp ${gitDir}/config ${tmpDir}/.git`, rootPath },
	{ command: 'git add -A', dir: tmpDir, rootPath },
	{
		command: `git commit -m "Release commit for NPM package [ci skip]"`,
		dir: tmpDir,
		rootPath,
	},
];

async.eachSeries(actions, exec, (err) => {
	if (err) throw err;

	console.log(`## Successfully commited git disconnected package folder.`);
});
