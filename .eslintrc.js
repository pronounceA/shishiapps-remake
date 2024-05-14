module.exports = {
  'extends': [
    'next/core-web-vitals',
  ],
  'plugins': [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'storybook',
    'testing-library',
  ],
  'rules': {
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': [
          'react'
        ]
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'semi': [
      'error',
      'never'
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_'
      }
    ]
  }
}
