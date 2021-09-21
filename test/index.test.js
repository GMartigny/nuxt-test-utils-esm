/* global describe test expect */

import { setupTest, get } from '@nuxt/test-utils';
import config from '../nuxt.config.js';

describe('Pages should show the right content', () => {
    setupTest({
        server: true,
        fixture: false,
        config,
    });

    test('Index', async () => {
        const { body } = await get('/');

        expect(body).toContain('Hello world');
    });
});
