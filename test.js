import process from 'node:process';
import test from 'ava';
import envPaths from './index.js';

test('default', t => {
	const name = 'unicorn';
	const paths = envPaths(name);

	for (const [key, value] of Object.entries(paths)) {
		console.log(`  ${key}: ${value}`);
		t.true(value.endsWith(`${name}-nodejs`));
	}
});

test('custom suffix', t => {
	const name = 'unicorn';
	const options = {suffix: 'horn'};
	const paths = envPaths(name, options);
	t.true(paths.data.endsWith(`${name}-${options.suffix}`));
});

test('no suffix', t => {
	const name = 'unicorn';
	const paths = envPaths(name, {suffix: false});
	t.true(paths.data.endsWith(name));
});

// Linux-specific tests
if (process.platform === 'linux') {
	test('correct paths with XDG_*_HOME set', t => {
		const envVars = {
			data: 'XDG_DATA_HOME',
			config: 'XDG_CONFIG_HOME',
			cache: 'XDG_CACHE_HOME',
			log: 'XDG_STATE_HOME',
		};

		for (const env of Object.values(envVars)) {
			process.env[env] = `/tmp/${env}`;
		}

		const name = 'unicorn';
		const paths = envPaths(name);

		for (const env of Object.keys(envVars)) {
			const expectedPath = process.env[envVars[env]];
			t.true(paths[env].startsWith(expectedPath) && paths[env].endsWith(`${name}-nodejs`));
		}
	});
}
