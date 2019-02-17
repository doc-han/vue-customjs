let add = function(jsCode){
  let tag = document.createElement('script');
  tag.innerHTML = jsCode;
  document.head.appendChild(tag);
}

/*
*   THE COMMENTED CODE IS LOOKING UP TO ALLOWING USERS TO
*   ADD CODE IN THE CREATED OR MOUNTED HOOK OF A COMPONENT
*   THEN REMOVING IT IN THE ______ HOOK SO THAT THE CODE WILL
*   BE FOR ONLY THE COMPONENT.
*/

// let addScript = function(name,jsCode){
//   let tag = document.createElement('script');
//   tag.setAttribute("data-name",name);
//   tag.innerHTML = jsCode;
//   document.head.appendChild(tag);
// }
//
// let removeScript = function(name){
//   let script = document.head.querySelector('[data-name="'+name+'"]');
//   script.parentNode.removeChild(script);
//   console.log(script);
// }

module.exports = {
  add,
}
