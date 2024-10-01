# Developer

## Testing
Testing is done through the testing framework vitest. The tests can be found in ./tests and can be run through the command **npm test**. The testreports can be found [here](./testreports.md).

## Linting
Linting is done with eslint. Rules and plugins is defined in [config](./eslint.config.js). Linting is run with the command **npx eslint .**.

## Language and dependencies
The module is written in Typescript.

Dev dependencies linting:
- eslint@9.11.1
- @eslint/js@9.11.1
- eslint-plugin-tsdoc@0.3.0
- typescript-eslint@8.7.0
- @typescript-eslint/eslint-plugin@8.7.0
- @typescript-eslint/parser@8.7.0
- @stylistic/eslint-plugin@2.8.0
- globals@15.9.0

Dev dependencies testing:
- vitest@2.1.1
- @vitest/coverage-v8@2.1.1
- jsdom@25.0.1

Dev dependencies Typescript:
- typescript@5.5.4
