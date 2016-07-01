import test from 'ava';
import m from './';

test('default options', t => {
	const name = 'unicorn';
	const paths = m(name);

	console.log(`name: '${name}' opts = undefined`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}-nodejs`));
	});

	console.log('\n');
});

test('custom suffix', t => {
	const name = 'unicorn';
	const opts = {suffix: 'horn'};
	const paths = m(name, opts);

	console.log(`name: '${name}' opts = {suffix: '${opts.suffix}'}`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}-${opts.suffix}`));
	});

	console.log('\n');
});

test('no suffix', t => {
	const name = 'unicorn';
	const paths = m(name, {suffix: ''});

	console.log(`name: '${name}' opts = {suffix: ''}`);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}`));
	});
});
