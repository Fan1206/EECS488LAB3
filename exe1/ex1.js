function check(){
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;

if (pw1.length < 8){
alert("the passwords are not at least 8 characters long")
}
else if (pw1 != pw2){
alert("the passwords entered don't match")
}
else
{
alert("Password set successfully")
}

}

function myFunction() {
    var x = document.getElementById("pw1");
    var y = document.getElementById("pw2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
  }
