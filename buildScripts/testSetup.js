require('babel-register')(); //transpile before test runs.

require.extensions['.css'] = function() {}; //Disable webpack features that Mocha doesn't understand.
