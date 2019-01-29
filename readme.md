# Yet another example of double tap back button to exit app in react-native app with react navigation with redux integration :D

> react 16.6.3
> react-native 0.58.1
> React Navigation 3

## Screenshot

![screenshot.gif](screenshot.gif)

## How To Use

```bash
git clone git@github.com:shrekuu/DoubleTapBackButtonToExitAppExample.git

# if this installs too slow, remove yarn.lock and try again
yarn install

# connect your android phone to your mac
react-native run-android
```

## Included Dependencies

```bash
yarn add redux redux-actions react-redux react-navigation react-native-gesture-handler react-navigation-redux-helpers
```

## Debugging

react-native-debugger is experiencing [issues](https://github.com/jhen0409/react-native-debugger/issues/292) due to react-native upgrading to [0.58](https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md#0580)

Do NOT install redux-devtools-extension for now(2019-01-28).
```bash
yarn add -D redux-devtools-extension
```
