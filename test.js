import test from 'ava';
import m from './';

test(t => {
	const name = 'unicorn';
	const paths = m(name);

	Object.keys(paths).forEach(key => {
		const val = paths[key];
		console.log(`${key}: ${val}`);
		t.true(val.includes(name));
	});
});
