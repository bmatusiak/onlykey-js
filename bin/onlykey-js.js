#!/usr/bin/env node
'use strict';
/*
 * onlykey-js, INSTALLED (Brad, 2026-10-28: "should we build a special repo to install the cli easier? like onlykey-js").
 *
 * The command line lives in node-onlykey-lib (cli/index.js) and nowhere else - this package holds no code of its own.
 * What it adds is the install: the lib at the commit a release was tested with (package.json), and the modules the
 * lib leaves out on purpose so the web app and the phone never download a native module - node-hid for a USB key,
 * the noble fork for Bluetooth on Windows, dbus-next for Bluetooth on Linux. They are optional here: npm installs
 * the ones that build on this machine, and the lib finds them beside itself (it says which is missing if one is).
 *
 * cli/index.js runs main() only when it is the script node started (require.main), so it is called here.
 */
const { main } = require('node-onlykey-lib/cli/index');

main(process.argv.slice(2)).then((code) => {
  process.exitCode = code;
});
