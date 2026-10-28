# onlykey-js

The OnlyKey command line, installed in one step.

    npm install -g bmatusiak/onlykey-js

npm reads `user/repo` as this GitHub repository (it is not on the npm registry). A version, by its tag or a commit:

    npm install -g bmatusiak/onlykey-js#v0.4.0

Then:

    onlykey-js status                       # the key plugged in: firmware, state
    onlykey-js --help                       # every command
    onlykey-js agent you@example.com        # the SSH key the OnlyKey derives for that name

## What this is

A pin, not a program. The command line is [node-onlykey-lib](https://github.com/bmatusiak/node-onlykey-lib)'s
`onlykey-js` (its `cli/`); this package installs it at the commit a release was tested with, together with the
modules the library leaves out on purpose (so a web page or a phone app using it never downloads native code):

| module | for | |
|---|---|---|
| `node-hid` | a USB OnlyKey | prebuilt for Windows, Linux and macOS |
| `@stoprocent/noble` ([bmatusiak/noble-ble](https://github.com/bmatusiak/noble-ble), patched) | `--ble` on Windows (a phone running the OnlyKey app) | built from source: needs the C++ build tools |
| `dbus-next` | `--ble` on Linux, through BlueZ | plain JavaScript |

They are optional: npm installs the ones that build on your machine and skips the rest. If a command needs one that
is missing, it says which, and how to install it.

## Requirements

- Node.js 22 or newer (24 recommended)
- git (npm fetches the library from GitHub)
- Linux, for a USB key without root: the OnlyKey udev rules (see the OnlyKey documentation)

## Updating

Run the same install again; it moves to the commit this repository pins now.

## License

Apache-2.0, as node-onlykey-lib.
