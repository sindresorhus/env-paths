import test from 'ava';
import m from './';

test('default', t => {
	const name = 'unicorn';
	const paths = m(name);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`  ${key}: ${val}`);
		t.true(val.endsWith(`${name}-nodejs`));
	});
});

test('custom suffix', t => {
	const name = 'unicorn';
	const opts = {suffix: 'horn'};
	const paths = m(name, opts);
	t.true(paths.data.endsWith(`${name}-${opts.suffix}`));
});

test('no suffix', t => {
	const name = 'unicorn';
	const opts = {suffix: false};
	const paths = m(name, opts);
	t.true(paths.data.endsWith(name));
});
