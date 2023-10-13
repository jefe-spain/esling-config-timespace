// # This are rules defined by the rect and react-hooks plugin.

// ESLint severity options:
// 0 - "off", rule is disabled
// 1 - "warn", rule will trigger warnings
// 2 - "error", rule will trigger errors, and code will not compile

const rules = {
  // Ensure every React component has a displayName for debugging
  'react/display-name': 2,
  // Disallow using array index as key for elements
  'react/no-array-index-key': 2,
  // React import is not required when using new JSX Transform (React 17+)
  'react/react-in-jsx-scope': 0,
  // Forbid certain propTypes like any, array, and object
  'react/forbid-prop-types': 2,
  // Disallow unescaped entities like >, < in JSX to prevent errors
  'react/no-unescaped-entities': 2,
  // Enforce consistent function types for component definitions
  'react/function-component-definition': 0,
  // Require default props for optional props
  'react/require-default-props': 1,
  // Ensure that elements inside arrays have a key prop
  'react/jsx-key': 2,
  // Prevents usage of Function.bind and arrow functions in JSX props
  'react/jsx-no-bind': 1,
  // Prevent duplicate properties in JSX
  'react/jsx-no-duplicate-props': 2,
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 2,
  // Prevent direct mutation of this.state, use setState
  'react/no-direct-mutation-state': 2,
  // Catch common spelling errors in method names
  'react/no-typos': 2,
  // Enforce or disallow propTypes declarations for components
  'react/prop-types': 1,
  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 1,
  // Enforce line wrapping for multiline JSX expressions
  'react/jsx-wrap-multilines': 1
};

module.exports = rules;
