# Nuxt test-utils with ESM

Minimal reproduction repo of an issue with `@nuxt/test-utils` not working nicely with ESM.

It [works](https://github.com/GMartigny/nuxt-test-utils-esm/commit/76b86c7b55afb70baefb3391d89ef504d5fe2c9f) up until I [added `@nuxtjs/style-resources`](https://github.com/GMartigny/nuxt-test-utils-esm/commit/0fef52f29f0f7c7ddaa614f0f69c40e160d444cd).


## Repro

    $ npm install
    $ npm test

While `npm run build` works well.
