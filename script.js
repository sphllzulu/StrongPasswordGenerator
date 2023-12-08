const passwordBox=document.getElementById("password");
const length=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="&*{}[],=- ( ).!~'/%#^_?";

const allChars=upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password=password+upperCase[Math.floor(Math.random()*upperCase.length)];
    password=password+upperCase[Math.floor(Math.random()*lowerCase.length)];
    password=password+upperCase[Math.floor(Math.random()*number.length)];
    password=password+upperCase[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
     password=password+allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value=password;
}
function copy(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}