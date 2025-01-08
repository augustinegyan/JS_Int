"use strict";
x = 3443; // undeclared varibale

"use strict"; //Read-Only Properties 
const obj ={};
    Object.defineProperties(obj, "x", {value: 42, writable: false});  
    obj.x = 9;       

"use strict"; // Deleting Undelatable Properties
delete Object.prototype; 


"use strict"; // Duplicating Parameters
function sum(a,a,c){
    return a+a+c;
}