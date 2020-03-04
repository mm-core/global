import { expect } from 'chai';
import t from '../dist/index';

describe('global', () => {
	it('get default value', () => {
		const v = t('foo', 'bar');
		expect(v).eq('bar');
	});
});
