# vue-customjs
A simple package to enable users to add custom JavaScript to a vue Component or project
## Initialisation
This is done by a simple require.
```javascript
var customjs = require('vue-customjs');
```
## Available functions/Methods
Below are the available functions or methods for adding a custom javascript code to your vue component.
* **add**: Used to add custom JavaScript which is in the form of a string.
* **addPath**: Used to add custom JavaScript written in a different .js file.
## Examples
1. **add(jsCode)**: The add function takes only one parameter which is the JavaScript code(jsCode) in a form of a string.
```javascript
var jsCode = " var a = 'I am a custom JavaScript code'; alert(a); ";
customjs.add(jsCode);
```
2. **addPath(filePath)**: The addPath function also takes only one parameter which is the path to the external JavaScript file.
```javascript
customjs.addPath("./../snow.js");
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
* addPath
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
    showSnow: ()=>{
      customjs.addPath('../public/snow.js'); //The path to your .js file
    }
  }
}
</script>
```

###Thank you. Please report any issues
