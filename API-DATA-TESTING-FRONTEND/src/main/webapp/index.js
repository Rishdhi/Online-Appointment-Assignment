/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


// Function to fetch student data by ID and populate the name field
function getStudent() {
    let id = document.getElementById("id").value;
    
    // URL of the RESTful API endpoint
    const apiUrl = `http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/${id}`;
    
    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => {
            if (response.status === 200) {
                
                // If the student is found, parse the JSON response
                return response.json();
                alert("Found Student");
            } else if (response.status === 404) {
                // If student is not found, handle it here (e.g., show an alert)
                alert("Student not found.");
            } else {
                // Handle other status codes here
                alert("Error occurred while fetching data.");
            }
        })
        .then(data => {
            // Update the name field with the retrieved student's name
            if (data && data.name) {
                
                document.getElementById("name").value = data.name;
                document.getElementById("college").value = data.college;
                document.getElementById("branch").value = data.branch;
                alert("Found Student");
            }
        })
        .catch(error => {
            console.error(error);
        });
}



// Get a reference to the button and the response div
const testButton = document.getElementById("testButton");
const apiResponse = document.getElementById("apiResponse");

// Add a click event listener to the button
testButton.addEventListener("click", () => {
    // Make a GET request to your API
    fetch("http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/getStudent")
        .then(response => {
            if (response.status === 200) {
                // Display a success message
                apiResponse.innerHTML = "Successfully fetched data.";
                alert("Successfully fetched data.");
                return response.json();
            } else {
                // Handle other status codes here
                apiResponse.innerHTML = "Error occurred while fetching data.";
                throw new Error("Error: " + response.status);
            }
        })
        .then(data => {
            // Process and display the fetched data as needed
            apiResponse.innerHTML += "<br>" + JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error(error);
        });
});



//const registerApiUrl = "/API-DATA-TESTING-BACKEND/resources/student/";
//
//document.getElementById("studentForm").addEventListener("submit", function (event) {
//    event.preventDefault(); // Prevent the form from submitting normally.
//
//    // Collect form data
//    const name = document.getElementById("name").value;
//    const college = document.getElementById("college").value;
//    const branch = document.getElementById("branch").value;
//
//    // Create a JSON object with the data
//    const data = {
//        name: name,
//        college: college,
//        branch: branch
//    };
//
//    // Send a POST request to your server endpoint
//    fetch(registerApiUrl, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(data)
//    })
//    .then(response => {
//        if (response.ok) {
//            // Data saved successfully, you can provide feedback to the user.
//            console.log("Data saved successfully");
//        } else {
//            // Handle errors here, provide feedback to the user.
//            console.error("Error saving data");
//        }
//    })
//    .catch(error => {
//        // Handle network or other errors.
//        console.error("Network error", error);
//    });
//});




//const url = "http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/addStudent";
//function addStudent() {
//
//    const person = {
//        "id": document.getElementById("id").value,
//        "name": document.getElementById("name").value,
//        "college": document.getElementById("college").value,
//        "branch": document.getElementById("branch").value
//    };
//    const options = {
//        method: "POST",
//        headers: {
//            "content-type": "application/json"
//        },
//        body: JSON.stringify(person)
//    };
//    fetch(url, options);
//    
//    
//
//            
//}








const url = "http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/addStudent";

function addStudent() {
    const person = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "college": document.getElementById("college").value,
        "branch": document.getElementById("branch").value
    };

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(person)
    };

    fetch(url, options)
        .then(response => {
            if (response.status === 201) {
                // Display a success message in the apiResponse div
                alert("Student successfully added!");
                apiResponse.innerHTML = "Student successfully added!";
                return response.json();
            } else {
                // Handle other status codes here
                apiResponse.innerHTML = "Error adding student.";
                throw new Error("Error: " + response.status);
            }
        })
        .then(data => {
            // Process and display the API response as needed
            // You can update apiResponse with the data if necessary
        })
        .catch(error => {
            console.error(error);
        });
}




const updurl = "http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/updateStudent";

function updateStudent() {
    const person = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "college": document.getElementById("college").value,
        "branch": document.getElementById("branch").value
    };

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(person)
    };

    fetch(updurl, options)
        .then(response => {
            if (response.status === 200) {
                // Display a success message in the apiResponse div
                alert("Student successfully updated!");
                apiResponse.innerHTML = "Student successfully updated!";
            } else {
                // Handle other status codes here
                apiResponse.innerHTML = "Error updating student.";
                throw new Error("Error: " + response.status);
            }
        })
        .catch(error => {
            console.error(error);
        });
}










