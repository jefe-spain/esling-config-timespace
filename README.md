#ESLint Config Timespace

This is a shared ESLint configuration package for TimespaceLabs Products.

## Installation

To use this configuration, install this package as a devDependency in your project:

```bash
npm install --save-dev eslint-config-timespace
```

## Usage

After installation, you can use this configuration by adding it to your `.eslintrc` file:

```json
{
  "extends": "timespace"
}
```

This configuration includes rules for:

- Common JavaScript practices (`rules/common.js`)
- TypeScript (`rules/typescript.js`)
- React (`rules/react.js`)
- Import practices (`rules/import.js`)
- Prettier formatting (`rules/prettier.js`)

It also includes configurations for:

- Next.js (`next.js`)
  To extend this configuration, add it to your `.eslintrc` file:
  ```json
  {
    "extends": "eslint-config-timespace/next"
  }
  ```
- TypeScript (`typescript.js`)
  To extend this configuration, add it to your `.eslintrc` file:
  ```json
  {
    "extends": "eslint-config-timespace/typescript"
  }
  ```
- Base JavaScript (`base.js`)
  To extend this configuration, add it to your `.eslintrc` file:
  ```json
  {
    "extends": "eslint-config-timespace/base"
  }
  ```

## Peer Dependencies

This configuration has several peer dependencies that you should install in your project:

```json
"peerDependencies": {
  "eslint": "^8.44.0",
  "prettier": "^3.0.0",
  "typescript": "^4.3.5 || ^5.0.0"
}
```

## Contributing

If you want to contribute to this project, please follow the rules defined in the `package.json` file:
