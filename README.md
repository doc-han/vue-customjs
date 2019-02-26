view package at https://www.npmjs.com/package/vue-customjs

# vue-customjs
A simple package to enable users to add custom JavaScript to a vue Component or project
## Initialisation
This is done by a simple require.
```javascript
var customjs = require('vue-customjs');
```
## Or when using ES6
```javascript
import customjs from 'vue-customjs'
```
## Available functions/Methods
Below are the available functions or methods for adding a custom javascript code to your vue component.
* **add**: Used to add custom JavaScript which is in the form of a string.
<!-- * **addPath**: Used to add custom JavaScript written in a different .js file. -->
* **addUrl**: Used to add custom JavaScript from an external link, mostly libraries.
## Examples
1. **add(jsCode)**: The add function takes only one parameter which is the JavaScript code(jsCode) in a form of a string.
### Note:
  Code added using this function is registered to the global scope. Meaning it not just called when the function in which it is defined is called. Hence you can register new Javascript codes to be added to the DOM.
  Code added using this function get to run always.
```javascript
var jsCode = `
var a = 'I am a custom JavaScript code';
alert(a);
`;
customjs.add(jsCode);
```
<!-- 2. **addPath(filePath)**: The addPath function also takes only one parameter which is the path to the external JavaScript file.
```javascript
customjs.addPath("./../snow.js");
``` -->
2. **addUrl(url)**: This function takes one and only one parameter which is the url;
```javascript
customjs.addUrl("https:www.cdn.com/library");
```
## The Complete Example in a Vue Component
* add
```html
<script>
var customjs = require('vue-customjs'); //importing the module into customjs var

export default {
  data(){
    return {
      //nothing to do here
    }
  },
  methods: {
    buttonClick: ()=>{
      var code = "alert('It is snowing')"; // The whole code you want to run
      customjs.add(code); // adding code
    }
  }
}
</script>
```
<!-- * addPath
```html
<script>
var customjs = require('vue-customjs'); //importing the module into customjs var

export default {
  data(){
    return {
      //nothing to do here
    }
  },
  created: ()=>{
      customjs.addPath('../public/snow.js'); //The path to your .js file
  }
}
</script>
``` -->
* addUrl
```html
<script>
var customjs = require('vue-customjs'); //importing the module into customjs var

export default {
  data(){
    return {
      //nothing to do here
    }
  },
  created: ()=>{
      customjs.addPath('https:www.cdn.com/library'); //The url of the library you want to add
  }
}
</script>
```

### Thank you. Please report any issues
