var path = require('path');
let customjs = {
  // This function is used to add raw Javascript code into the DOM.
  // JavaScript code is a string primitive
  add: (jsCode)=>{
    let errorMsg = "vue-customjs:\n You cant leave the add() funciton empty without a JavaScript code";
      jsCode.trim().length < 1 ? console.error(errorMsg) : ""; // a check to know whether jsCode is empty
      let tag = document.createElement('script');
      tag.innerHTML = jsCode;
      document.head.appendChild(tag);
  },
  // This function is used to pass a javascript file which is to be Added to the DOM.
  addPath: (filePath)=>{
    // try-catch to throw error when the filePath is invalid

    let tag = document.createElement('script');
    tag.src = path.join("@/",__dirname,filePath);
    document.head.appendChild(tag);
  },
  addUrl: (url)=>{
    let tag = document.createElement('script');
    tag.src = url;
    document.head.appendChild(tag);
  }
}
/*
*   THE COMMENTED CODE IS LOOKING UP TO ALLOWING USERS TO
*   ADD CODE IN THE CREATED OR MOUNTED HOOK OF A COMPONENT
*   THEN REMOVING IT IN THE ______ HOOK SO THAT THE CODE WILL
*   BE FOR ONLY THE COMPONENT.
*/

// addScript: (name,jsCode)=>{
//   let tag = document.createElement('script');
//   tag.setAttribute("data-name",name);
//   tag.innerHTML = jsCode;
//   document.head.appendChild(tag);
// }
//
// removeScript: (name)=>{
//   let script = document.head.querySelector('[data-name="'+name+'"]');
//   script.parentNode.removeChild(script);
//   console.log(script);
// }

module.exports = customjs;
