'use strict';

Promise.resolve().then(function () { return { 'default': require('./main.js') }; }).then(result => console.log('importer', result));
