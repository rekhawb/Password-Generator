// Assignment Code
//Fetch DOM elements into a object. So that the objects key values can be used whereever necessary.

var btnObjects = {

  generateBtn             : document.querySelector("#generate"),
  btnSubmit                : document.querySelector("#btn-submit"),
  parentDiv                 :document.querySelector("#prompt-criteria"),
  txtPwdLen                : document.querySelector("#pwdlen"),  
  inptUpper                 : document.querySelector("#upper").value, 
  inptLower                 : document.querySelector("#lower").value,
  inptNum                   : document.querySelector("#num").value,
  inptSpl                      : document.querySelector("#special").value,
  dialogoverlay           :document.querySelector("#prompt-criteria"),
  dialogunder             :document.querySelector(".wrapper"),
  passwordText          : document.querySelector("#password"),
 
 btnReset                   :function() { 
   
                                                      document.querySelector("#btn-lower-yes").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-lower-no").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-upper-yes").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-upper-no").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-num-yes").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-num-no").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-special-yes").setAttribute('style','width:10% , transition: width 10s');
                                                      document.querySelector("#btn-special-no").setAttribute('style','width:10% , transition: width 10s');
 } ,

 inptBlanks                                 :function(){
                                                                          btnObjects.txtPwdLen.value = '';

                                                                            }
 }

//Define a string with criteria. Make sure it has spaces after each criteria so that it can be split as required
var pwdChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ./+*?[^]$(){}=!<>|:-';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Display customized prompt window 

// Write password to the #password input
function writePassword() {

  btnObjects.dialogoverlay.setAttribute("style", "display:inline-block;position:fixed; top:0%; left:15%;margin-left:5%;padding:2%;min-height:100%; width:auto;overflow-y:scroll;overflow-x:hidden;background-color:rgba(0,0,0,.5);color:white;border: 3px dashed rgba(43, 9, 240, 0.671 ");

  btnObjects.dialogoverlay.animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-100px)' }
], {
  // timing options
  duration: 1200, 
  iterations:0.5,
});

btnObjects.dialogunder.setAttribute("style","opacity:0.1");

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This function is helpful to change button appearance after click

function widthIncrDecr(btn1,btn2){

  btn1.setAttribute("style", "width:30% ; border-bottom: 4px solid blue;transition: all 0.5s ease-in-out;");

  btn2.setAttribute("style", "width:5% ");

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add event listener to generate button
btnObjects.generateBtn.addEventListener("click", writePassword);

btnObjects.btnSubmit.addEventListener("click", generatePassword);

// check if the  password length entered matches 8-128 characters and atleast one password criteria is selected
document.addEventListener('click', (e) => {
    let element = e.target;
  
       if(element.matches('#btn-upper-yes')) {
        widthIncrDecr(element,element.nextElementSibling);
        btnObjects.inptUpper = pwdChar.split(' ')[0];
       }
       
       else if(element.matches('#btn-upper-no')){
        widthIncrDecr(element,element.previousElementSibling);
        btnObjects.inptUpper='';        
       }
       
       else if(element.matches('#btn-lower-yes')){
        widthIncrDecr(element,element.nextElementSibling);
        btnObjects.inptLower = pwdChar.split(' ')[1];
       }
       
       else if(element.matches('#btn-lower-no')){
        widthIncrDecr(element,element.previousElementSibling);
        btnObjects.inptLower='';        
       }
       
       else if(element.matches('#btn-num-yes')){
        widthIncrDecr(element,element.nextElementSibling);
        btnObjects.inptNum = pwdChar.split(' ')[2];
       }
       
       else if(element.matches('#btn-num-no')){
        widthIncrDecr(element,element.previousElementSibling);
        btnObjects.inptNum='';
       }
       
       else if(element.matches('#btn-special-yes')){
        widthIncrDecr(element,element.nextElementSibling);
        btnObjects.inptSpl = pwdChar.split(' ')[3];
       }
       
       else if(element.matches('#btn-special-no')){
        widthIncrDecr(element,element.previousElementSibling);
        btnObjects.inptSpl = '';
       }
 
    }
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//password characters are extracted from the password string "pwdChar" (defined in earlier sections) based on what criteria is selected.

function generatePassword(){

  var pwdCharacters = btnObjects.inptUpper+btnObjects.inptLower+btnObjects.inptNum+btnObjects.inptSpl;
  
  var pwdLength = document.querySelector("#pwdlen").value;

  var result = '';

  if(pwdLength == '' ){
    alert("Please enter desired password length");
  }else if(pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)){
    alert("Please choose a password length between 8-128 characters ")
  }
  
  else if(pwdCharacters==''){
  alert("Please select atleast one password criteria");
}else{
/*alert(pwdLength);
alert(pwdCharacters);*/
 result =  Array(parseInt(pwdLength)).fill(pwdCharacters).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
 
  alert(result);

  btnObjects.dialogunder.setAttribute("style","opacity:1");

  btnObjects.dialogoverlay.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-100px)' }
  ], {
    // timing options
    duration: 1200, 
    iterations:0.5,
  });

// prompt window is hidden. Main window is displayed with the password in the text box. Reset prompt window's button width and text area value.

  btnObjects.dialogoverlay.setAttribute("style","display:none");


  btnObjects.passwordText.value = result;


  
  btnObjects.inptBlanks();
  btnObjects.btnReset();
  

}

}







