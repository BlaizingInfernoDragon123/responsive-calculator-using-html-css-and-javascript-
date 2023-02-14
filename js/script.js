function bodyload(){
    const field = document.getElementById("main")
    console.log(field);
    if (navigator.cookieEnabled == true){
        console.log("Site performance is normal and stable");
    }
    else {
        console.error("Site performance might get as cookies are not enabled")
    }

      var myVar = setTimeout(showPage, 4500);
    
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    
    //if (navigator.geolocation){
      //  navigator.geolocation.getCurrentPosition(showPosition);
    //}
    //else{
      //  console.log("Geolocation is not supported by this browser");
    //}/
    //function showPosition(position){
        //console.log("Latitude:" + position.coords.latitude + "Longitude:" + position.coords.longitude);
    //}

}
function insert(num){
    const field = document.getElementById("main")

    field.innerHTML =  field.innerHTML +num;
    console.log(num);

    
    if (field.innerText.length >= 25) {
        message.innerHTML = 'Maximum number limit has been reached!!';
        console.error("Maximum number limit has been reached!!")
      }
}
function equal(){
var exp = document.getElementById("main").innerHTML

const field = document.getElementById("main")

const top = document.getElementById("top")

top.innerText = field.innerText;
if(exp){
field.innerHTML = eval(exp);
console.log(eval(exp));
}
else{
    field.innerHTML = "Error in evaluating"
    console.error("Error in evaluating");
}
}

function backspace(){
    var nos = document.getElementById("main").innerHTML
main.innerHTML = nos.substring(0, nos.length - 1);
console.log(nos);
}
