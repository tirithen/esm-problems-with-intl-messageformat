# Test setup for debugging intl-messageformat import error

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

**Update:** This issue is now confirmed as fixed in `intl-messageformat ` at least since version 9.6.11.

The issue was reported at https://github.com/formatjs/formatjs/issues/2841 .

## Reproduce locally

Install dependencies with `$ npm install` and run tests with `$ npm test` to reproduce the problem:

```bash
$ npm test

> translated-text@0.0.0 test
> web-test-runner --coverage


test/translated-text.test.js:

 🚧 Browser logs:
      SyntaxError: The requested module './../../../@formatjs/icu-messageformat-parser/index.js' does not provide an export named 'isArgumentElement'

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

Chrome: |██████████████████████████████| 1/1 test files | 0 passed, 0 failed

View full coverage report at coverage/lcov-report/index.html

Error while running tests.
```

The file that contains the import is `src/TranslatedText.js`.