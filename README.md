## Setup

The required node version is v22.22.0. Alternatively, you can run:

```console
shell:~$ nvm use
```

To build the script run:

```console
shell:~$ yarn install
shell:~$ yarn test
shell:~$ yarn build
```

## How to run

The entry point CLI is executed with `yarn start`. Pass `--help` to show commands and arguments to commands:

```console
shell:~$ yarn start
# ...
shell:~$ yarn start users --help
```

The default log level is `info`. Set the desired level using env variable `LOG_LEVEL`:

```console
shell:~$ LOG_LEVEL=debug yarn start users
```

Available levels: 'debug' | 'info' | 'warn' | 'error'

## Development

You can start a build on watch mode:

```console
shell:~$ yarn build --watch
```

Or use `tsx` to compile and execute:

```console
shell:~$ npx tsx src/index.ts [...]
```

To run tests on watch mode:

```console
shell:~$ yarn test --watch
```

## Git hooks

Git hooks are managed with [husky](https://typicode.github.io/husky/) and installed automatically when you run `yarn install` (via the `prepare` script):

- **pre-push**: runs `yarn prettify`, `yarn lint` and `yarn test`. The push is aborted if any of them fails.
- **post-merge**: reinstalls dependencies (`yarn install`) when `yarn.lock` changed in the merge.
