
//the function oSKeyboardF will generate an onscreenkeyboard
//and it will give back the value of a clicked key by onclick or ontouch
//

let oSKeyboardO=document.getElementById('oSKeyboard');
//oSKeyboardF();
oSKeyboardO.addEventListener('click', oSKeyboardF);
//oSKeyboardO.addEventListener("touchstart", handleStart, false);
document.querySelector('body').addEventListener('resize', oSKeyboardF);



function oSKeyboardF(e){
let oSKeyboardO=document.getElementById('oSKeyboard');
oSKeyboardO.innerHTML='';
//console.log(oSKeyboardO);
let oSKbCharA=['1234567890ß','qwertzuiopü+','asdfghjklöä#','<yxcvbnm,.-'];//four characterrows of the keyboard german without shift
let oSKbCharCapsA=['!"§$%&/()=?','QWERTZUIOPÜ+','ASDFGHJKLÖÄ#','>YXCVBNM;:_'];// four keyboardrows with pressed shift
//oSKbCharA=oSKbCharCapsA;
let keyWidth= Math.floor(oSKeyboardO.offsetWidth/12);
let keyHeight= Math.floor(oSKeyboardO.offsetHeight/4);
for(row=0;row<4;row++){
    kbCharS=oSKbCharA[row];
    nullChkB=true;

    let divO;////=document.createElement('div');

    for(key=0;nullChkB;key++){
               nullChkB=(kbCharS.substr(key+1, 1)==''? false : true); //if the substring is empty, the boolean is set to false which escapes the for loop
  //      console.log(kbCharS.substr(key, 1));
        
// Create element
divO = document.createElement('div');

// Add class
divO.className = 'key';

// Add id
divO.id = ('row'+row+'key'+key);

divO.style.left=((((keyWidth*96/100))*key+23+oSKeyboardO.offsetLeft)+'px');
divO.style.top=((((keyHeight*90/100))*row+15+oSKeyboardO.offsetTop)+'px');//multiplier defines
divO.style.width=((keyWidth-11)+'px');
divO.style.height=((keyHeight-13)+'px');
divO.style.color=('hsl(0,0%,90%)');
divO.style.textShadow=('hsl(0,0%,40%) -1px -1px 0');

// Create text node and append
divO.appendChild(document.createTextNode(oSKbCharA[row].substr(key,1)/*'row'+row+'key'+key*/));

oSKeyboardO.appendChild(divO);

    }//end key loop
}//end row loop

return(e.target.innerText);
}


kbDisplay=document.querySelector('#keyboardDisplay').lastChild;
console.log(kbDisplay);//=oSKeyboardF();

//let xxS='blabla';
//console.log((xxS.substr(10, 1))==''?'empty':'yeah');