function clockT(){
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var day= date.getDate();
    var mon = date.getMonth();
    var year = date.getFullYear();
    hrs=(hrs>12)? hrs-12:hrs;
    var amPm=(hrs<12)?"AM":"PM";
    day=("0"+day).slice(-2);
    mon=("0"+mon+1).slice(-2);
    year=("0"+year).slice(-2);
    hrs=("0"+hrs).slice(-2);
    mins=("0"+mins).slice(-2);
    secs=("0"+secs).slice(-2);
    document.getElementById("clock").innerHTML=day+"/"+mon+"/"+year+"    "+hrs+":"+mins+":"+secs+" "+amPm;
    var t=setTimeout(clockT);
}
let btn = document.querySelector(".conbtn");
function Age()
{
//     const yourAge = document.getElementById("yourAge");
//   console.log(document.getElementById("birthday").value)
  var now = new Date();
  BD=document.getElementById("birthday").value;
  // debugger
  const diff = Math.abs(now - BD );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  console.log(age);
  document.getElementById("uAge").innerHTML = age;

}

