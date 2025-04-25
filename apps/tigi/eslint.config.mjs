import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],

  {
    files: ['**/*.ts'],
    rules: {
      // Angular-specific best practices
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
   '@angular-eslint/prefer-on-push-component-change-detection':'warn',
      // Selector naming conventions
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],

      // TypeScript strictness

      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/prefer-for-of': 'error',

      // Code quality & formatting
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-implicit-coercion': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1], enforceConst: true, detectObjects: true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'complexity': ['warn', 10],
      'max-lines': ['warn', 300],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 4],
      'max-statements': ['warn', 30],

      // Best practices
      'curly': ['error', 'all'],
      'default-case': 'error',
      'dot-notation': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-new-func': 'error',
      'no-return-await': 'error',

      // Code style
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
    },
  },

  {
    files: ['**/*.html'],
    rules: {
      '@angular-eslint/template/alt-text': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/prefer-ngsrc': 'warn',
   
    },
  },
];
