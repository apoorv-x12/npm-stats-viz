# Api endpoints used in the project

## npm Downloads API Endpoints

| Endpoint Type | URL Format | Description | Parameters | Example |
|---------------|------------|-------------|------------|---------|
| **Total Downloads in a Period** | `https://api.npmjs.org/downloads/point/:period/:package` | Retrieves the total downloads for a package over a specified period. | `:period` - The time period (`last-day`, `last-week`, `last-month`).<br>`:package` - The name of the npm package. | [Example](https://api.npmjs.org/downloads/point/last-day/string-utils-basic) |
| **Total Downloads for a Specific Day** | `https://api.npmjs.org/downloads/point/:date/:package` | Retrieves the total downloads for a package on a specific day. | `:date` - The specific date in `YYYY-MM-DD` format.<br>`:package` - The name of the npm package. | [Example](https://api.npmjs.org/downloads/point/2024-06-23/string-utils-basic) |
| **Total Downloads for a Specific Range** | `https://api.npmjs.org/downloads/range/:startDate:endDate/:package` | Retrieves the total downloads for a package over a specific date range. | `:startDate` - The start date in `YYYY-MM-DD` format.<br>`:endDate` - The end date in `YYYY-MM-DD` format.<br>`:package` - The name of the npm package. | [Example](https://api.npmjs.org/downloads/range/2023-01-01:2024-06-23/string-utils-basic) |
| **Total Downloads for a Range with Aggregate Statistics** | `https://api.npmjs.org/downloads/range/:period/:package` | Retrieves the total downloads for a package over a specified period with daily breakdowns. | `:period` - The period range (`last-day`, `last-week`, `last-month`, or custom range like `YYYY-MM-DD:YYYY-MM-DD`).<br>`:package` - The name of the npm package. | [Example](https://api.npmjs.org/downloads/range/last-month/string-utils-basic) |

## Example Responses

### Total Downloads in a Period
```json
{
  "downloads": 1234,
  "start": "2024-06-22",
  "end": "2024-06-23",
  "package": "string-utils-basic"
}
```
### Total Downloads in a specific day
```json
{
  "downloads": 456,
  "start": "2024-06-23",
  "end": "2024-06-23",
  "package": "string-utils-basic"
}
```

### Total Downloads in a specific Range
```json
{
  "downloads": [
    {"day": "2023-01-01", "downloads": 789},
    {"day": "2023-01-02", "downloads": 1011},
    // more daily stats
  ],
  "start": "2023-01-01",
  "end": "2024-06-23",
  "package": "string-utils-basic"
}
```

## last-month
``` javascript
 https://api.npmjs.org/downloads/point/last-month/string-utils-basic
```

## day
``` javascript
 https://api.npmjs.org/downloads/point/2024-06-23/string-utils-basic

```
## date range
``` javascript
 https://api.npmjs.org/downloads/range/2023-01-01:2024-06-23/string-utils-basic

```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
