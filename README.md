# Card Maker

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/card-maker.svg)](https://greenkeeper.io/)

Making card simple using JSON.

## Demo

![gif demo][demo]

[demo]: /images/demo.gif

[Live preview demo](https://rohmanhm.github.io/card-maker/)

## How to use from browser

```javascript
new CardMaker(Object)
```

## How to use from npm

```javascript
import CardMaker from 'card-maker'
// you can use require instead

new CardMaker(Object)
```

You can found full example from `example/index.js`

## Options

This is API object options you can passed to object init.

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `align` | String | `left` | Set default align for text render if not set from template text align |
| `background` | String | `undefined` | You can directly set default background with color name, or string url image, `example: 'red'` |
| `canvas` | String | `undefined` | If you have initialized canvas element,you don't have to init `el` object. So we can skip to create canvas element process. |
| `download` | String | `null` | Fill with your download element or leave it null |
| `el` | String | `#cardmaker` | If you don't have any canvas element initialized, you can pass element id you created to us. So we can create one for you. |
| `enableSetToElement` | Boolean | `true` | If it's set to true, we passed name object template to your value as default value and description as placeholder DOM element if match with `name` attribute.
| `width` | Number | `400` | So yeah you can set width of your canvas |
| `height` | Number | `250` | And you can set height of your canvas too |
| `template` | Object | `{}` | Pass your template config, so we can render it like expected. |
| `streamElemTemplate` | Boolean | `true` | If it set to true, we update your template config real time if `enableSetToElement` set to `true` |
