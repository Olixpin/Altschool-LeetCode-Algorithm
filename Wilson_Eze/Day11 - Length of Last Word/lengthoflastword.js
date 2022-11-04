/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let len = 0;
  
     x = s.trim();
  
     for (let i = 0; i < x.length; i++) {
         if (x[i] == ' ') {
             len = 0;
         }
         else {
             len++;
         }
     }
  
     return len; 
 };