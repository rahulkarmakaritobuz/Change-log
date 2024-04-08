export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'validate-commit-message': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'validate-commit-message': ({ subject }) => {
          if (/^SPOON-\d+\s.*$/.test(subject)) {
            return [true];
          }
          return [
            false,
            `Please provide a valid Commit message pattern : '<type>: [SPOON-<ISSUE_ID>] <commit-message>'.`,
          ];
        },
      },
    },
  ],
};
