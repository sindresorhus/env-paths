import test from 'ava';
import m from './';

test('default suffix', t => {
	const name = 'unicorn';
	const paths = m(name);

	console.log(`name: '${name}' suffix = undefined`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}-nodejs`));
	});

	console.log('\n');
});

test('custom suffix', t => {
	const name = 'unicorn';
	const suffix = 'horn';
	const paths = m(name, suffix);

	console.log(`name: '${name}' suffix = '${suffix}'`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}-${suffix}`));
	});

	console.log('\n');
});

test('no suffix', t => {
	const name = 'unicorn';
	const paths = m(name, null);

	console.log(`name: '${name}' suffix = null`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}`));
	});
});
