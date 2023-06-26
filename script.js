//const { errors } = require("telegram");

const targetNode = document.querySelector(".tc-opera");
var errors=['privet'];
function get_errors()
{
    return errors.contains(true);
}
// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      //console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes" && mutation.attributeName=='class') 
        //console.log(targetNode.classList);
        //console.log(targetNode.classList.contains('shake'));
     {   //console.log(mutation);
        document.body.className+=" ser";
        er = mutation.target.classList.contains('show-error')
        sh = mutation.target.classList.contains('shake');
        if(er || sh ) {
    errors.push(er,sh);
    console.log(er);
    console.log(sh);
    
      //console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);