# React Native Fade Loading

[![npm version](https://img.shields.io/badge/npm%20package-1.0.0-blue)](https://www.npmjs.com/package/react-native-fade-loading) [![npm version](https://img.shields.io/badge/size-24%20kB-yellow)](https://www.npmjs.com/package/react-native-fade-loading) 

Placeholder/Loading for React Native

![react native fade loading demo example](https://raw.githubusercontent.com/hasretozkan/react-native-fade-loading/master/example.gif)

## Installation

```sh
npm install --save react-native-fade-loading
```
or

```sh
yarn add react-native-fade-loading
```

## Usage

```js
import { FadeLoading } from 'react-native-fade-loading';

// ...

<FadeLoading primaryColor="gray" secondaryColor="lightgray" duration={5000} />;
```

## Props

| Prop                 | Description                          | Type      | Default                      |
| -------------------- | ------------------------------------ | --------- | ---------------------------- |
| **`children`**       | Components Elements                  | Component | null                         |
| **`style`**          | Container Style                      | Style     | {padding: 5,borderRadius: 4} |
| **`visible`**        | Visible child components             | boolean   | true                         |
| **`primaryColor`**   | Main color of fade loading           | string    | 'lightgray'                  |
| **`secondaryColor`** | Secondary color of fade loading      | string    | 'whitesmoke'                 |
| **`duration`**       | Duration of fade loading (ms)        | number    | 5000                         |
| **`animated`**       | Animation enable value for component | boolean   | true                         |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
