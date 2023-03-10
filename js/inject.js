window.onmouseup = (e)=>{
    const selectString = window.getSelection().toString().trim();
    if(selectString){
        console.log(selectString);
    }
}