import {expectType} from 'tsd-check';
import envPaths, {Paths} from '.';

expectType<Paths>(envPaths('MyApp'));
expectType<Paths>(envPaths('MyApp', {suffix: 'test'}));

const paths = envPaths('MyApp');

expectType<string>(paths.cache);
expectType<string>(paths.config);
expectType<string>(paths.data);
expectType<string>(paths.log);
expectType<string>(paths.temp);
