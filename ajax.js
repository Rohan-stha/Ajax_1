console.log("Ajax is working");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetch button");
    // Instantiate xhr object
    let xhr = new XMLHttpRequest();
    //open the object
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

   //use POST request to send data to the server
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.setRequestHeader("Content-type", "application/json");
    //what to do on progress (optional)
    xhr.onprogress = function () {
        console.log("On progress");
    }	
    // xhr.onreadystatechange = function () {
    //     console.log("Ready state is ", xhr.readyState);
    // }

    //what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Error occurred");
        }

    }

    //send the request
    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log("We are done");
}

let populateBtn = document.getElementById("popHandler");
populateBtn.addEventListener("click", populateHandler);

// function populateHandler() {
//     console.log("You have clicked the populathandler ");
    
//     // Instantiate xhr object
//     let xhr = new XMLHttpRequest();
    
//     // Open the object
//     xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

//     // What to do when response is ready
//     xhr.onload = function () {
//         if (this.status === 200) {
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             str = "";
//             for(key in obj){
//                 str += `<li>${obj[key].employee_name}</li>`
//             }
//             list.innerHTML = str;
//         } else {
            
//             console.log("Error occurred, Status Code: " + this.status);
//         }
//     }

    
//     xhr.send();

//     console.log("We are done fetching employees");
// }


function populateHandler() { 
    console.log("You have clicked the populate handler"); 

    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true); 

    xhr.onload = function () { 
        if (this.status === 200) { 
            // This converts your data into a JavaScript list (Array)
            let myDataList = JSON.parse(this.responseText); 
            console.log(myDataList); 
            
            let list = document.getElementById('list'); 
            let str = ""; 
            
            // Loop through each item inside the array
            for (let i = 0; i < myDataList.length; i++) { 
                str += `<li>${myDataList[i].employee_name}</li>`; 
            } 
            
            list.innerHTML = str; 
        } else { 
            console.log("Error occurred, Status Code: " + this.status); 
        } 
    } 

    xhr.send(); 
    console.log("We are done fetching employees"); 
}

