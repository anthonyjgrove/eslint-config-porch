/**
 * Best practices
 */
module.exports = {
  'rules': {
    'consistent-return': 2,             // [x] http://eslint.org/docs/rules/consistent-return
    'curly': [2, 'multi-line'],         // [x] http://eslint.org/docs/rules/curly
    'default-case': 2,                  // [x] http://eslint.org/docs/rules/default-case
    'dot-notation': [2, {               // [x] http://eslint.org/docs/rules/dot-notation
      'allowKeywords': true
    }],
    'eqeqeq': 2,                        // [x] http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 2,                  // [x] http://eslint.org/docs/rules/guard-for-in
    'no-caller': 2,                     // [x] http://eslint.org/docs/rules/no-caller
    'no-else-return': 2,                // [x] http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2,                    // [x] http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2,                       // [x] http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2,              // [x] http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2,                 // [x] http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2,                // [x] http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2,           // [x] http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2,               // [x] http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2,                // [x] http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2,                  // [x] http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2,                  // [x] http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2,            // [x] http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2,                        // [x] http://eslint.org/docs/rules/no-new
    'no-new-func': 2,                   // [x] http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2,               // [x] http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2,                      // [x] http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2,               // [x] http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 2,             // [x] http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2,                      // [x] http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2,                  // [x] http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2,              // [x] http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2,                 // [x] http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2,               // [x] http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2,                  // [x] http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2,              // [x] http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2,                       // [x] http://eslint.org/docs/rules/no-with
    'radix': 2,                         // [x] http://eslint.org/docs/rules/radix

                                        //     TODO: This change is coming.
    'vars-on-top': 0,                   // [x] http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [2, 'any'],            // [x] http://eslint.org/docs/rules/wrap-iife
    'yoda': 2                           // [x] http://eslint.org/docs/rules/yoda
  }
};
