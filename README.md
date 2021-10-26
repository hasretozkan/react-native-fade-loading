# React Native Fade Loading

[![npm version](https://badge.fury.io/js/react-native-fade-loading.svg)](https://www.npmjs.com/package/react-native-fade-loading)

Placeholder/Loading for React Native

![react native fade loading demo example](https://im6.ezgif.com/tmp/ezgif-6-45650a67d5c0.gif)

## Installation

```sh
npm install --save react-native-fade-loading
```
or

```sh
yarn add react-native-shimmer-placeholder
```

## Usage

```js
import { FadeLoading } from 'react-native-fade-loading';

// ...

<FadeLoading primaryColor="gray" secondaryColor="lightgray" duration={5000} />;
```

## Props

| Prop                 | Description                     | Type    | Default                |
| -------------------- | ------------------------------- | ------- | ---------------------- |
| **`style`**          | Container Style                 | Style   | {width: 60,height: 60} |
| **`visible`**        | Visible child components        | boolean | false                  |
| **`primaryColor`**   | Main color of fade loading      | string  | 'lightgray'            |
| **`secondaryColor`** | Secondary color of fade loading | string  | 'whitesmoke'           |
| **`duration`**       | Duration of fade loading (ms)   | number  | 5000                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
