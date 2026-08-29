console.log("Ajax is working");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetch button");
  // Instantiate xhr object
  let xhr = new XMLHttpRequest();
  //open the object
    xhr.open("GET", "rohan.txt", true);

    //what to do on progress (optional)
    xhr.onprogress = function () {
        console.log("On progress");
    }

    //what to do when response is ready
    xhr.onload = function () {
        if(this.status === 200) {
            console.log(this.responseText);
        }else{
            console.error("Error occurred");
        }
      
    }

    //send the request
    xhr.send();
}