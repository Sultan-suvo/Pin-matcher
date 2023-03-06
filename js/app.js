function getpin() {
    const pin = generatePin();
    const pinstring = pin + '';
    if(pinstring.length === 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click",function(){
    const pin = getpin();
    const displayPinFiels = document.getElementById("display-pin");
    displayPinFiels.value=pin
})

