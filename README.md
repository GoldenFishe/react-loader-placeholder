# react-loader-placeholder 
[![npm version](https://badge.fury.io/js/react-loader-placeholder.svg)](https://badge.fury.io/js/react-loader-placeholder)
![npm](https://img.shields.io/npm/dm/react-loader-placeholder)

Make beautiful, animated loading that easy adapt to your app.

![Gif in action](https://media.giphy.com/media/JU3rc5Tn6kpYUNMnah/giphy.gif)

## Install

`npm install react-loader-placeholder`

## Principles
The `<ReactLoaderPlaceholder>`  uses HTML `data` attribute for mark items and CSS for style that items. 

![Base usabe code](https://i.ibb.co/yN86f2b/carbon.png)

## Usage

1. Wrap component or HTML with `<ReactLoaderPlaceholder>`.
2. Set `loading` prop.
3. Mark HTML items with `data-react-loader-placeholder={true}` attribute.
4. ?????
5. PROFIT.

If you need to enable or disable not all marked items, just set `data-react-loader-placeholder}` to `true` or `false`.

##Props

The `<ReactLoaderPlaceholder>`  component props:
- **loading** `boolean` _required_ - Enable or disable placeholder.
- **color** `string` _optional_ - Background color of placeholder item.
- **disableAnimation** `boolean` _optional_ - Enable or disable animation.
- **className** `string` _optional_ 
- **style** `Object` _optional_
