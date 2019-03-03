function change(){
    changeBorder();
    changeBg();
}
function changeBorder(){
    let x = document.getElementById("redb").value;
    let y = document.getElementById("greenb").value;
    let z = document.getElementById("blueb").value;
    let w = document.getElementById("widthb").value;
    console.log(x,y,z,w);
    document.getElementById("all").style.borderColor = "rgb("+x+","+y+","+z+")";
    document.getElementById("all").style.borderWidth =  w+"pt";
    //document.getElementsByClassName("border").innerHTML = "Border Color: rgb("+x+","+y+","+z+")" + " width: "+w+"pt";
}
function changeBg(){
    let x = document.getElementById("redbg").value;
    let y = document.getElementById("greenbg").value;
    let z = document.getElementById("bluebg").value;
    console.log(x,y,z);
    document.getElementById("all").style.backgroundColor = "rgb("+x+","+y+","+z+")";
   // document.getElementsByClassName("bg").innerHTML = "Background Color: rgb("+x+","+y+","+z+")" ;
}

