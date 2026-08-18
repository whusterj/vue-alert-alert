# 🚨 Alert! Alert! for VueJS

> **Status: frozen.** The last release was in 2020, and this package is deprecated on npm. Nobody maintains it, and it will get no more updates.
>
> The plugin works only with Vue 2 (`peerDependencies: vue ^2.5.13`), and Vue 2 reached its end of life on 31 December 2023. It does not work with Vue 3.
>
> The plugin ships no runtime dependencies, so an install adds no vulnerable code to your project. The build tooling in `devDependencies` does have known vulnerabilities, which matter only if you build the plugin yourself.

A minimalist alert plugin for VueJS projects.

Install from npm:

```
npm install vue-alert-alert
```

Add the plugin to your Vue project:

```javascript
import AlertAlert from 'vue-alert-alert'

Vue.use(AlertAlert)
```

Add the `<alert-alert>` component to the root of your app (ex: App.vue):

```html
<template>
  <div id="app">
    <alert-alert />
    <router-view v-show="!globalLoading" :key="$route.fullPath" />
  </div>
</template>
```

Use the plugin

```javascript
this.$Alert.alert({
  type: 'success',
  message: `
    <h2>Success!</h2>
    <p>Your work has been saved.</p>
  `,
  timeout: 6000,
})
```

## Available Options

 - *type* - May be: 'info', 'success', 'warning', or 'error'. This sets the CSS class on the alert with an appropriate color. Defaults to 'info'.
 - *message* - The text to show in the alert. You may use HTML mark-up. Defaults to 'No Content'
 - *timeout* - Auto-dismiss the alert after the given timeout (in milliseconds). Defaults to `null`.
