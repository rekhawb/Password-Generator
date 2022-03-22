// Assignment Code
var generateBtn = document.querySelector("#generate");

var btnSubmit = document.querySelector("#btn-submit");

var txtPwdLen = document.querySelector("#pwdlen");

var btnUpperYes = document.querySelector("#btn-upper-yes");

var btnUpperNo = document.querySelector("#btn-upper-no");

var inptUpper = document.querySelector("#upper");

var btnLowerYes = document.querySelector("#btn-lower-yes");

var btnLowerNo = document.querySelector("#btn-lower-no");

var inptLower = document.querySelector("#lower");

var btnNumYes = document.querySelector("#btn-num-yes");

var btnNumNo = document.querySelector("#btn-num-no");

var inptNum = document.querySelector("#num");

var btnSplYes = document.querySelector("#btn-special-yes");

var btnSplNo = document.querySelector("#btn-special-no");

var inptSpl = document.querySelector("#special");

var pwdChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ./+*?[^]$(){}=!<>|:-';

var btnValue='';

var dialogoverlay = document.getElementById('prompt-criteria');

var dialogunder = document.querySelector(".wrapper");

var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {

  

 dialogoverlay.setAttribute("style", "display:inline-block;position:fixed; top:0%; left:15%;margin-left:5%;padding:2%;height:70%; width:auto;overflow-y:scroll;overflow-x:hidden;background-color:rgba(0,0,0,.5);color:white;border: 3px dashed rgba(43, 9, 240, 0.671 ");

 /*document.getElementById("prompt-criteria").*/
 dialogoverlay.animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-100px)' }
], {
  // timing options
  duration: 1200, 
  iterations:0.5,
});

    dialogunder.setAttribute("style","opacity:0.1");

    txtPwdLen.value = '';
    inptUpper.value = '';
    inptLower.value = '';
    inptNum.value = '';
    inptSpl.value = '';

    /*btnUpperYes.setAttribute("style","width:10%");*/
 /*
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;*/


}

function btnWidthIncr(btnName){
  btnName.setAttribute("style", "width:30% ; border-bottom: 4px solid blue;transition: all 0.5s ease-in-out;");
  btnValue = btnName.value;
}


function btnWidthDecr(btnName){
  btnName.setAttribute("style", "width:5% ");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

btnSubmit.addEventListener("click", generatePassword);


document.addEventListener('click', (e) => {
    let element = e.target;
   

    if(element.tagName == "BUTTON"){   
       if(element.id == 'btn-upper-yes'){
        btnWidthIncr(btnUpperYes);
        btnWidthDecr(btnUpperNo);
        inptUpper.value = pwdChar.split(' ')[0];
       }
       
       else if(element.id == 'btn-upper-no'){
        btnWidthIncr(btnUpperNo);
        btnWidthDecr(btnUpperYes);
        inptUpper.value='';
        
       }
       
       else if(element.id == 'btn-lower-yes'){
        btnWidthIncr(btnLowerYes);
        btnWidthDecr(btnLowerNo);
        inptLower.value = pwdChar.split(' ')[1];
       }
       
       else if(element.id == 'btn-lower-no'){
        btnWidthIncr(btnLowerNo);
        btnWidthDecr(btnLowerYes);
        inptLower.value='';
        
       }
       
       else if(element.id == 'btn-num-yes'){
        btnWidthIncr(btnNumYes);
        btnWidthDecr(btnNumNo);
        inptNum.value = pwdChar.split(' ')[2];
       }
       
       else if(element.id == 'btn-num-no'){
        btnWidthIncr(btnNumNo);
        btnWidthDecr(btnNumYes);
        inptNum.value='';
       }
       
       else if(element.id == 'btn-special-yes'){
        btnWidthIncr(btnSplYes);
        btnWidthDecr(btnSplNo);
       inptSpl.value = pwdChar.split(' ')[3];
       }
       
       else if(element.id == 'btn-special-no'){
        btnWidthIncr(btnSplNo);
        btnWidthDecr(btnSplYes);
        inptSpl.value = '';
       }
   
  }
    }
);



function generatePassword(){

  var pwdCharacters = inptUpper.value+inptLower.value+inptNum.value+inptSpl.value;

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

  dialogunder.setAttribute("style","opacity:1");

  dialogoverlay.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-100px)' }
  ], {
    // timing options
    duration: 1200, 
    iterations:0.5,
  });

  dialogoverlay.setAttribute("style","display:none");

  passwordText.value = result;

  btnUpperYes.setAttribute('style','width:10% , transition: width 10s');

  btnUpperNo.setAttribute('style','width:10% , transition: width 10s');

  btnLowerYes.setAttribute('style','width:10% , transition: width 10s');

  btnLowerNo.setAttribute('style','width:10% , transition: width 10s');

  btnNumYes.setAttribute('style','width:10% , transition: width 10s');

  btnNumNo.setAttribute('style','width:10% , transition: width 10s');

  btnSplYes.setAttribute('style','width:10% , transition: width 10s');

  btnSplNo.setAttribute('style','width:10% , transition: width 10s');

}

}







