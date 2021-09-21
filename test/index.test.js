/* global describe test expect */

import { setupTest, get } from '@nuxt/test-utils';

describe('Pages should show the right content', () => {
    setupTest({
        server: true,
    });

    test('Index', async () => {
        const { body } = await get('/');

        expect(body).toContain('Hello world');
    });
});
