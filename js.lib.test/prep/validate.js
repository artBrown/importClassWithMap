const validate = require('validate-npm-package-name'),
utils = require('utils');

utils.console.log(`js.lib: ${JSON.stringify(validate("js.lib"))}`);
utils.console.log(`qutet-studio: ${JSON.stringify(validate("qutet-studio"))}`);
