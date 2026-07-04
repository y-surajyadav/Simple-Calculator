let str = "";
let temp = "";
let result = 0;
let display="";
function clk(event) {
  temp = event.target.id;
  if (temp == "AC") {
    console.log("hi");
    str = "";
    document.querySelector("p").innerText = "";
  } else if (temp == "bs") {
    str = str.slice(0, -1);
    document.querySelector("p").innerText = str;
  } else if (temp == "=") {
    try {
      result = eval(str);
      document.querySelector("p").innerText = result;
    } catch (error) {
      display = "Error";
      alert(display+" plz enter a proper expression");
      document.querySelector("p").innerText = "";
      console.error("Invalid math typed:", error.message);
    }
  } else {
    str += temp;
    document.querySelector("p").innerText = str;
  }
}


