/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//
//const forms = document.querySelector(".forms"),
//      pwShowHide = document.querySelectorAll(".eye-icon"),
//      links = document.querySelectorAll(".link");
//
//pwShowHide.forEach(eyeIcon => {
//    eyeIcon.addEventListener("click", () => {
//        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
//        
//        pwFields.forEach(password => {
//            if(password.type === "password"){
//                password.type = "text";
//                eyeIcon.classList.replace("bx-hide", "bx-show");
//                return;
//            }
//            password.type = "password";
//            eyeIcon.classList.replace("bx-show", "bx-hide");
//        })
//        
//    })
//})      
//
//links.forEach(link => {
//    link.addEventListener("click", e => {
//       e.preventDefault(); //preventing form submit
//       forms.classList.toggle("show-signup");
//    })
//})




// Function to fetch student data by ID and populate the name field
//function getStudent() {
//    let id = document.getElementById("id").value;
//    
//    // URL of the RESTful API endpoint
//    const apiUrl = `http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/${id}`;
//    
//    // Make a GET request to the API
//    fetch(apiUrl)
//        .then(response => {
//            if (response.status === 200) {
//                
//                // If the student is found, parse the JSON response
//                return response.json();
//                alert("Found Student");
//            } else if (response.status === 404) {
//                // If student is not found, handle it here (e.g., show an alert)
//                alert("Student not found.");
//            } else {
//                // Handle other status codes here
//                alert("Error occurred while fetching data.");
//            }
//        })
//        .then(data => {
//            // Update the name field with the retrieved student's name
//            if (data && data.name) {
//                
//                document.getElementById("name").value = data.name;
//                document.getElementById("college").value = data.college;
//                document.getElementById("branch").value = data.branch;
//                alert("Found Student");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//        });
//}



// Get a reference to the button and the response div
//const testButton = document.getElementById("testButton");
//const apiResponse = document.getElementById("apiResponse");
//
//// Add a click event listener to the button
//testButton.addEventListener("click", () => {
//    // Make a GET request to your API
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/getStudents")
//        .then(response => {
//            if (response.status === 200) {
//                // Display a success message
//                apiResponse.innerHTML = "Successfully fetched data.";
//                alert("Successfully fetched data.");
//                return response.json();
//            } else {
//                // Handle other status codes here
//                apiResponse.innerHTML = "Error occurred while fetching data.";
//                throw new Error("Error: " + response.status);
//            }
//        })
//        .then(data => {
//            // Process and display the fetched data as needed
//            apiResponse.innerHTML += "<br>" + JSON.stringify(data, null, 2);
//        })
//        .catch(error => {
//            console.error(error);
//        });
//});



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



//
//function addUser() {
//    const user = {
//        username: document.getElementById("name").value,
//        contact_number: document.getElementById("txtNum").value,
//        email: document.getElementById("txtMail").value,
//        password: document.getElementById("txtPass").value,
//        user_type: document.getElementById("signupUserType").value
//    };
//
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/addUser", {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(user)
//    })
//    .then(response => {
//        if (response.status === 200) {
//            alert('User added successfully.');
//        } else {
//            alert('Failed to add user.');
//        }
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}








//const url = "http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/addUser";

//const addurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/addUser";
//
//function addUser() {
//    const person = {
//        "username": document.getElementById("name").value,
//        "contact_number": document.getElementById("txtNum").value,
//        "email": document.getElementById("txtMail").value,
//        "password": document.getElementById("txtPass").value,
//        "user_type": document.getElementById("signupUserType").value
//    };
//
//    const options = {
//        method: "POST",
//        headers: {
//            "content-type": "application/json"
//        },
//        body: JSON.stringify(person)
//    };
//
//    fetch(addurl, options)
//        .then(response => {
//            if (response.status === 201) {
//                // Display a success message in the apiResponse div
//                alert("User successfully added!");
////                apiResponse.innerHTML = "Student successfully added!";
//                return response.json();
//            } else {
//                // Handle other status codes here
//                alert("Error adding User.!");
////                apiResponse.innerHTML = "Error adding User.";
//                throw new Error("Error: " + response.status);
//            }
//        })
//        .then(data => {
//            // Process and display the API response as needed
//            // You can update apiResponse with the data if necessary
//        })
//        .catch(error => {
//            console.error(error);
//        });
//}

//
//



// FACTORY METHOD


function addUser() {
    const user = User.createUser(
        document.getElementById("name").value,
        document.getElementById("txtNum").value,
        document.getElementById("txtMail").value,
        document.getElementById("txtPass").value,
        document.getElementById("signupUserType").value
    );

    // Send the user object as JSON to the server
    fetch("http://localhost:8080/REGISTER-BACKEND/resources/user/addUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (response.status === 201) {
            alert('User added successfully.');
        } else {
            alert('Failed to add user.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


//document.addEventListener("DOMContentLoaded", function () {
//    // Your JavaScript code for adding a user here
//
//    const addurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/addUser";
//
//    function addUser() {
//        const person = {
//            "username": document.getElementById("name").value,
//            "contact_number": document.getElementById("txtNum").value,
//            "email": document.getElementById("txtMail").value,
//            "password": document.getElementById("txtPass").value,
//            "user_type": document.getElementById("signupUserType").value
//        };
//
//        const options = {
//            method: "POST",
//            headers: {
//                "content-type": "application/json"
//            },
//            body: JSON.stringify(person)
//        };
//
//        fetch(addurl, options)
//            .then(response => {
//                if (response.status === 201) {
//                    // Display a success message
//                    alert("User successfully added!");
//                } else {
//                    // Handle other status codes here
//                    alert("Error adding User!");
//                    throw new Error("Error: " + response.status);
//                }
//            })
//            .catch(error => {
//                console.error(error);
//            });
//    }
//});






//function loginFunction() {
//    const email = document.getElementById("log-email").value;
//    const password = document.getElementById("log-password").value;
//    const userType = document.getElementById("log-loginUserType").value;
//
//    const user = {
//        email: email,
//        password: password,
//        usertype: userType
//    };
//
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/authenticate", {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(user)
//    })
//    .then(response => {
//        if (response.status === 200) {
//                    const userTypeMessage = `Logged in as ${userType}`;
//        alert(userTypeMessage);
//            // Authentication was successful, display a success message
//            alert("Logged in successfully");
//        } else if (response.status === 401) {
//            // Authentication failed, display a failure message
//            alert("Login failed new javascript based");
//        } else {
//            // Handle other status codes if necessary
//            alert("Error occurred during login.");
//        }
//    })
//    .catch(error => {
//        console.error(error);
//    });
//}




//function login() {
//    const email = document.getElementById("log-email").value;
//    const password = document.getElementById("log-password").value;
//    const userType = document.getElementById("log-loginUserType").value;
//
//    // Create a user object to send to the server
//    const user = {
//        email: email,
//        password: password,
//        user_type: userType
//    };
//
//    // Make an API request to authenticate the user
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/authenticate", {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json",
//        },
//        body: JSON.stringify(user),
//    })
//    .then((response) => {
//        if (response.status === 200) {
//            alert("Logged In!");
//            // Authentication was successful, handle the redirection here
//            return response.json();
////            alert("Logged In!");
//        } else {
//            alert("Not Logged In!");
//            // Authentication failed, display an error message
//            throw new Error("Login failed by API");
////            alert("Not Logged In!");
//        }
//    })
//    .then((data) => {
//        // Handle the redirection based on the response
//        window.location.href = data.redirect;
//    })
//    .catch((error) => {
//        // Handle errors and display an error message
//        console.error(error);
//    });
//}

//
//
//
function login() {
    const email = document.getElementById("log-email").value;
    const password = document.getElementById("log-password").value;
    const userType = document.getElementById("log-loginUserType").value;

    // Create a user object using the factory method
    const user = createUserForAuthentication(email, password, userType);

    // Make an API request to authenticate the user
    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === "success") {
            // Authentication was successful, display the success message
            alert(data.message);
            // Handle the redirection here
            window.location.href = data.redirect;
        } else {
            // Authentication failed, display the error message
            alert(data.message);
            throw new Error(data.message);
        }
    })
    .catch((error) => {
        // Handle errors and display an error message
        console.error(error);
    });
}

// Factory method for creating a User instance for authentication
function createUserForAuthentication(email, password, userType) {
    return {
        email: email,
        password: password,
        user_type: userType
    };
}








// Factory function to create a consultant object
function createConsultant(date, time, name) {
    return {
        date: date,
        time: time,
        name: name
    };
}

// Function to add a consultant
function addConsultant() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("jobSeeker").value;

    // Use the factory function to create a consultant object
    const consultant = createConsultant(date, time, name);

    console.log("Consultant Object:", consultant);

    // Make an API request to add the consultant
    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/addConsultant", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(consultant),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === "success") {
            // Display a success message
            alert("You successfully saved your date and time!");
            // Handle any further actions
        } else {
            // Display an error message
            alert("Failed to save date and time. Please try again.");
        }
    })
    .catch((error) => {
        // Handle errors and display an error message
        console.error(error);
    });
}








//
//const updurl = "http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/updateStudent";
//
//function updateStudent() {
//    const person = {
//        "id": document.getElementById("id").value,
//        "name": document.getElementById("name").value,
//        "college": document.getElementById("college").value,
//        "branch": document.getElementById("branch").value
//    };
//
//    const options = {
//        method: "PUT",
//        headers: {
//            "content-type": "application/json"
//        },
//        body: JSON.stringify(person)
//    };
//
//    fetch(updurl, options)
//        .then(response => {
//            if (response.status === 200) {
//                // Display a success message in the apiResponse div
//                alert("Student successfully updated!");
//                apiResponse.innerHTML = "Student successfully updated!";
//            } else {
//                // Handle other status codes here
//                apiResponse.innerHTML = "Error updating student.";
//                throw new Error("Error: " + response.status);
//            }
//        })
//        .catch(error => {
//            console.error(error);
//        });
//}






//function deleteStudent() {
//            let id = document.getElementById("id").value;
//            
//            const deleteUrl = `http://localhost:8080/API-DATA-TESTING-BACKEND/resources/student/${id}`;
//            const options = {
//                    method : "DELETE"
//            };
//            
//            fetch(deleteUrl, options)
//            
//            .then(response => {
//        if (response.status === 200) {
//            // Display a success message or handle as needed
//            alert("Student deleted successfully!");
//        } else {
//            // Handle other status codes here
//            alert("Error deleting student.");
//            throw new Error("Error: " + response.status);
//        }
//    })
//    .catch(error => {
//        console.error(error);
//    });
//}





//function clearStudent() {
//            document.getElementById("id").value = "";
//            document.getElementById("name").value = "";
//            document.getElementById("college").value = "";
//            document.getElementById("branch").value = "";
//        }
//
//
//




//Updated JavaScript
//document.addEventListener('DOMContentLoaded', function () {
//    fetchAppointments();
//});
//
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(appointments => {
//            const appointmentsTable = document.getElementById('appointmentsTable');
//            appointmentsTable.innerHTML = "<tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Consultant</th><th>Status</th><th>Actions</th></tr>";
//
//            appointments.forEach(appointment => {
//                appointmentsTable.innerHTML += `
//                    <tr>
//                        <td>${appointment.id}</td>
//                        <td>${appointment.fullName}</td>
//                        <td>${appointment.email}</td>
//                        <td>${appointment.phone}</td>
//                        <td>${appointment.consultant}</td>
//                        <td>${appointment.status}</td>
//                        <td>
//                            <button class="button" onclick="editAppointment(${appointment.id})">Edit</button>
//                        </td>
//                    </tr>
//                `;
//            });
//        });
//}
//
//function editAppointment(appointmentId) {
//    // Implement edit logic, e.g., redirect to an edit page or show a modal
//    console.log(`Edit appointment with ID ${appointmentId}`);
//    // You can customize this function based on your application's requirements
//}









//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(appointments => {
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            appointments.forEach(appointment => {
//                const row = appointmentsTable.insertRow(-1); // -1 inserts at the end
//
//                const idCell = row.insertCell(0);
//                const fullNameCell = row.insertCell(1);
//                const emailCell = row.insertCell(2);
//                const phoneCell = row.insertCell(3);
//                const consultantCell = row.insertCell(4);
//                const statusCell = row.insertCell(5);
//                const actionsCell = row.insertCell(6);
//
//                idCell.textContent = appointment.id;
//                fullNameCell.textContent = appointment.fullName;
//                emailCell.textContent = appointment.email;
//                phoneCell.textContent = appointment.phone;
//                consultantCell.textContent = appointment.consultant;
//                statusCell.textContent = appointment.status;
//
//                const editButton = document.createElement("button");
//                editButton.className = "button";
//                editButton.textContent = "Edit";
//                editButton.onclick = () => editAppointment(appointment.id);
//                actionsCell.appendChild(editButton);
//            });
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;



//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(appointments => {
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            appointments.forEach(appointment => {
//                const row = appointmentsTable.insertRow(-1); // -1 inserts at the end
//
//                const idCell = row.insertCell(0);
//                const fullNameCell = row.insertCell(1);
//                const emailCell = row.insertCell(2);
//                const phoneCell = row.insertCell(3);
//                const consultantCell = row.insertCell(4);
//                const statusCell = row.insertCell(5);
//                const actionsCell = row.insertCell(6);
//
//                idCell.innerHTML = `<input type="text" value="${appointment.id}">`;
//
//// Disable other columns
//                    fullNameCell.innerHTML = `<input type="text" value="${appointment.fullName}">`;
//                    emailCell.innerHTML = `<input type="text" value="${appointment.email}">`;
//                    phoneCell.innerHTML = `<input type="text" value="${appointment.phone}">`;
//                    consultantCell.innerHTML = `<input type="text" value="${appointment.consultant}">`;
//
//
//                // Create a dropdown for the "Status" column
//                const statusDropdown = document.createElement("select");
//                statusDropdown.className = "status-dropdown";
//
//                // Define the possible status options
//                const statusOptions = ["Pending", "Confirmed", "Cancelled"];
//
//                // Populate the dropdown options
//                statusOptions.forEach(option => {
//                    const statusOption = document.createElement("option");
//                    statusOption.value = option;
//                    statusOption.textContent = option;
//                    statusDropdown.appendChild(statusOption);
//                });
//
//                // Set the initial selected status
//                statusDropdown.value = appointment.status;
//
//                // Append the dropdown to the status cell
//                statusCell.appendChild(statusDropdown);
//
//                const editButton = document.createElement("button");
//                editButton.className = "button";
//                editButton.textContent = "Edit";
//                editButton.onclick = () => editAppointment(appointment.id, statusDropdown.value);
//                actionsCell.appendChild(editButton);
//
//                // Log the HTML of the entire row
//                console.log(row.outerHTML);
//            });
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;



















//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(appointments => {
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            appointments.forEach(appointment => {
//                const row = appointmentsTable.insertRow(-1); // -1 inserts at the end
//
//                const idCell = row.insertCell(0);
//                const fullNameCell = row.insertCell(1);
//                const emailCell = row.insertCell(2);
//                const phoneCell = row.insertCell(3);
//                const consultantCell = row.insertCell(4);
//                const statusCell = row.insertCell(5);
//                const actionsCell = row.insertCell(6);
//                
//                // Display the name in a span
//                const fullNameSpan = document.createElement("span");
//                fullNameSpan.textContent = appointment.fullName;
//                fullNameSpan.className = "name-span";
//                fullNameCell.appendChild(fullNameSpan);
//
//                idCell.textContent = appointment.id;
//                emailCell.textContent = appointment.email;
//                phoneCell.textContent = appointment.phone;
//                consultantCell.textContent = appointment.consultant;
//
//                // Create and populate the status dropdown
//                const statusDropdown = document.createElement("select");
//                statusDropdown.className = "status-dropdown";
//
//                // Add options to the dropdown
//                const statusOptions = ["Pending", "Accepted", "Rejected"];
//                statusOptions.forEach(option => {
//                    const optionElement = document.createElement("option");
//                    optionElement.value = option;
//                    optionElement.textContent = option;
//                    statusDropdown.appendChild(optionElement);
//                });
//
//                // Set the default selected value
//                statusDropdown.value = appointment.status;
//
//                // Clear the statusCell and append the dropdown
//                statusCell.innerHTML = "";
//                statusCell.appendChild(statusDropdown);
//
//                // Create and append the edit button
//                const editButton = document.createElement("button");
//                editButton.className = "button";
//                editButton.textContent = "Edit";
//                editButton.onclick = () => editAppointment(appointment.id, statusDropdown.value);
//                actionsCell.appendChild(editButton);
//            });
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;






//Function to fetch appointments and populate the table
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions;
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment
//                    Object.keys(appointment).forEach(key => {
//                        const cell = row.insertCell();
//                        
//                        if (key === 'fullName') {
//                            // Display the name in a span
//                            const fullNameSpan = document.createElement("span");
//                            fullNameSpan.textContent = appointment[key];
//                            fullNameSpan.className = "name-span";
//                            cell.appendChild(fullNameSpan);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, just display the value
//                            cell.textContent = appointment[key];
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                    row.insertCell().appendChild(editButton);
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}

// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;





//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions;
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//                        
//                        if (key === 'fullName') {
//                            // Display the name in a span
//                            const fullNameSpan = document.createElement("span");
//                            fullNameSpan.textContent = appointment[key];
//                            fullNameSpan.className = "name-span";
//                            cell.appendChild(fullNameSpan);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, just display the value
//                            cell.textContent = appointment[key];
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                    row.insertCell().appendChild(editButton);
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;


//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//
//                        if (key === 'fullName') {
//                            // Create an input field for the name and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, create an input field and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                    row.insertCell().appendChild(editButton);
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;



// 100% working fetch appointments code

//function fetchAppointments() {
//    // Make an API request to retrieve all appointments
//    //fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment", {
//        method: "GET",
//        headers: {
//            "Content-Type": "application/json",
//        },
//    })
//        .then((response) => {
//            if (response.status === 200) {
//                return response.json();
//            } else {
//                throw new Error("Failed to fetch appointments");
//            }
//        })
//        .then((appointments) => {
//            // Display the appointments in the HTML table
//            displayAppointments(appointments);
//        })
//        .catch((error) => {
//            // Handle errors and display an error message
//            console.error(error);
//        });
//}
//
//function displayAppointments(appointments) {
//    const table = document.getElementById("appointmentsTable");
//
//    // Clear existing rows
//    while (table.rows.length > 1) {
//        table.deleteRow(1);
//    }
//
//    // Populate the table with fetched appointments
//    appointments.forEach((appointment, index) => {
//        const row = table.insertRow(index + 1);
//        const idCell = row.insertCell(0);
//        const nameCell = row.insertCell(1);
//        const emailCell = row.insertCell(2);
//        const phoneCell = row.insertCell(3);
//        const consultantCell = row.insertCell(4);
//        const statusCell = row.insertCell(5);
//
//        idCell.textContent = appointment.id;
//        nameCell.textContent = appointment.fullName;
//        emailCell.textContent = appointment.email;
//        phoneCell.textContent = appointment.phone;
//        consultantCell.textContent = appointment.consultant;
//        statusCell.textContent = appointment.status;
//    });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;




// Function to create input cell
//function createInputCell(row, cellIndex, value, id) {
//    const cell = row.insertCell(cellIndex);
//    const input = document.createElement("input");
//    input.type = "text";
//    input.value = value;
//    input.id = id;
//    cell.appendChild(input);
//    return cell;
//}


const updurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/updateAppointment";


//function editAppointment(appointmentId) {
//    console.log("Editing appointment with ID:", appointmentId);
//    const person = {
//        "id": document.getElementById("id").value,
//        "full_name": document.getElementById("full_name").value,
//        "email": document.getElementById("email").value,
//        "phone": document.getElementById("phone").value,
//        "consultant": document.getElementById("consultant").value,
//        "status": document.getElementById("status").value
//    
//            
//    };
//
//    const options = {
//        method: "PUT",
//        headers: {
//            "content-type": "application/json"
//        },
//        body: JSON.stringify(person)
//    };
//
//    fetch(updurl, options)
//        .then(response => {
//            if (response.status === 200) {
//                // Display a success message in the apiResponse div
//                alert("Student successfully updated!");
//                //apiResponse.innerHTML = "Student successfully updated!";
//            } else {
//                // Handle other status codes here
//                //apiResponse.innerHTML = "Error updating student.";alert("Student successfully updated!");
//                alert("Student not successfully updated!");
//                throw new Error("Error: " + response.status);
//            }
//        })
//        .catch(error => {
//            console.error(error);
//        });
//}














//function editAppointment(appointmentId) {
//    console.log("Editing appointment with ID:", appointmentId);
//
//    const row = document.querySelector(`[data-id="${appointmentId}"]`);
//    if (!row) {
//        console.error(`Row with ID ${appointmentId} not found.`);
//        return;
//    }
//
//    // Find input fields within the row using data-id attribute
//    const idInput = row.querySelector('[data-id="id"]').value;
//    const nameInput = row.querySelector('[data-id="full_name"]').value;
//    const emailInput = row.querySelector('[data-id="email"]').value;
//    const phoneInput = row.querySelector('[data-id="phone"]').value;
//    const consultantInput = row.querySelector('[data-id="consultant"]').value;
//    const statusInput = row.querySelector('[data-id="status"]').value;
//
//    const updatedAppointment = {
//        id: parseInt(idInput),
//        fullName: nameInput,
//        email: emailInput,
//        phone: phoneInput,
//        consultant: consultantInput,
//        status: statusInput,
//    };
//
//    const updurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/updateAppointment";
//
//    const options = {
//        method: "PUT",
//        headers: {
//            "content-type": "application/json"
//        },
//        body: JSON.stringify(updatedAppointment)
//    };
//
//    fetch(updurl, options)
//        .then(response => {
//            if (response.status === 200) {
//                // Display a success message in the apiResponse div
//                alert("Student successfully updated!");
//            } else {
//                // Handle other status codes here
//                alert("Student not successfully updated!");
//                throw new Error("Error: " + response.status);
//            }
//        })
//        .catch(error => {
//            console.error(error);
//        });
//}
















//
//// Function to handle editAppointment
//function editAppointment(appointmentId) {
//    // Add your logic to handle editing appointment with the given ID
//    console.log("Editing appointment with ID:", appointmentId);
//
//    // Prompt the user to enter updated data
//    const updatedName = prompt("Enter updated name:");
//    const updatedEmail = prompt("Enter updated email:");
//    const updatedPhone = prompt("Enter updated phone:");
//    const updatedConsultant = prompt("Enter updated consultant:");
//    const updatedStatus = prompt("Enter updated status:");
//
//    // Populate input fields with the entered data
//    const idInput = document.getElementById("id");
//    const nameInput = document.getElementById("name");
//    const emailInput = document.getElementById("email");
//    const phoneInput = document.getElementById("phone");
//    const consultantInput = document.getElementById("consultant");
//    const statusInput = document.getElementById("status");
//
//    idInput.value = appointmentId;
//    nameInput.value = updatedName;
//    emailInput.value = updatedEmail;
//    phoneInput.value = updatedPhone;
//    consultantInput.value = updatedConsultant;
//    statusInput.value = updatedStatus;
//
//    // Construct the updatedAppointment object
//    const updatedAppointment = {
//        id: parseInt(appointmentId),
//        fullName: updatedName,
//        email: updatedEmail,
//        phone: updatedPhone,
//        consultant: updatedConsultant,
//        status: updatedStatus,
//    };
//
//    // Make an API request to update the appointment
//    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/updateAppointment", {
//        method: "PUT",
//        headers: {
//            "Content-Type": "application/json",
//        },
//        body: JSON.stringify(updatedAppointment),
//    })
//        .then((response) => {
//            if (response.status === 200) {
//                console.log("Appointment updated successfully");
//                alert("Appointment updated successfully");
//                // Add any additional logic or UI updates as needed
//            } else {
//                throw new Error("Failed to update appointment");
//                alert("Failed to update appointment");
//            }
//        })
//        .catch((error) => {
//            console.error(error);
//            alert("Failed to update appointment");
//        });
//}
//
//// Function to display alerts
//function showAlert(message) {
//    alert(message);
//}

// Function to fetch appointments
function fetchAppointments() {
    // Make an API request to retrieve all appointments
    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to fetch appointments");
            }
        })
        .then((appointments) => {
            // Display the appointments in the HTML table
            displayAppointments(appointments);
        })
        .catch((error) => {
            // Handle errors and display an error message
            console.error(error);
            showAlert("Failed to fetch appointments");
        });
}

// Function to display appointments in the HTML table
function displayAppointments(appointments) {
    const table = document.getElementById("appointmentsTable");

    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Populate the table with fetched appointments
    appointments.forEach((appointment, index) => {
        const row = table.insertRow(index + 1);
        row.setAttribute("data-id", appointment.id); // Set data-id attribute

        // Create and append input fields to each cell
        createInputCell(row, 0, appointment.id, "id", "id");
        createInputCell(row, 1, appointment.fullName, "name", "fullName");
        createInputCell(row, 2, appointment.email, "email", "email");
        createInputCell(row, 3, appointment.phone, "phone", "phone");
        createInputCell(row, 4, appointment.consultant, "consultant", "consultant");
        createInputCell(row, 5, appointment.status, "status", "status");

        const actionsCell = row.insertCell(6); // Added cell for actions

        // Create Edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.className = "button";
        editButton.onclick = function () {
            // Call the editAppointment function with the appointment ID
            const rowId = row.getAttribute("data-id");
            editAppointment(rowId);
        };

        // Append Edit button to actionsCell
        actionsCell.appendChild(editButton);
    });
}


// Call the fetchAppointments function when the page loads
window.onload = fetchAppointments;






function createInputCell(row, cellIndex, value, dataId, fieldName) {
    const cell = row.insertCell(cellIndex);

    if (fieldName === "status") {
        // Create a dropdown for the status field
        const dropdown = document.createElement("select");
        const options = ["Pending", "Accepted", "Rejected", "Completed"];

        options.forEach(optionValue => {
            const option = document.createElement("option");
            option.value = optionValue;
            option.text = optionValue;
            dropdown.appendChild(option);
        });

        dropdown.value = value; // Set the default value

        dropdown.setAttribute("data-id", dataId);
        dropdown.setAttribute("data-field", fieldName);

        cell.appendChild(dropdown);
    } else {
        // Create input field for other columns
        const input = document.createElement("input");
        input.type = "text";
        input.value = value;
        input.setAttribute("data-id", dataId);
        input.setAttribute("data-field", fieldName);

        cell.appendChild(input);
    }

    return cell;
}

function editAppointment(appointmentId) {
    console.log("Editing appointment with ID:", appointmentId);

    const row = document.querySelector(`[data-id="${appointmentId}"]`);
    if (!row) {
        console.error(`Row with ID ${appointmentId} not found.`);
        return;
    }

    // Find input fields within the row using data-id attribute
    const inputs = row.querySelectorAll('[data-id]');

    const updatedAppointment = {};
    inputs.forEach(input => {
        const fieldName = input.getAttribute("data-field");
        updatedAppointment[fieldName] = input.value;
    });

    const updurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/updateAppointment";

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedAppointment)
    };

    fetch(updurl, options)
        .then(response => {
            if (response.status === 200) {
                // Display a success message
                alert("Student successfully updated!");
            } else {
                // Handle other status codes here
                alert("Student not successfully updated!");
                throw new Error("Error: " + response.status);
            }
        })
        .catch(error => {
            console.error(error);
        });
}








//
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//                        
//                        if (key === 'fullName') {
//                            // Display the name in a span
//                            const fullNameSpan = document.createElement("span");
//                            fullNameSpan.textContent = appointment[key];
//                            fullNameSpan.className = "name-span";
//                            cell.appendChild(fullNameSpan);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, just display the value
//                            cell.textContent = appointment[key];
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                    row.insertCell().appendChild(editButton);
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;




// Call the fetchAppointments function when the DOM content is fully loaded
// Call the fetchAppointments function when the DOM content is fully loaded
//document.addEventListener('DOMContentLoaded', function () {
//    fetchAppointments();
//});
//
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//
//                        if (key === 'fullName') {
//                            // Create an input field for the name and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, create an input field and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    row.insertCell().appendChild(editButton);
//
//                    // Check if the row.cells[5] exists before trying to access its content
//                    if (row.cells[5]) {
//                        // Add event listener for the edit button
//                        editButton.addEventListener("click", function () {
//                            editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                        });
//                    }
//
//                    // Create and append the update button
//                    const updateButton = document.createElement("button");
//                    updateButton.className = "button";
//                    updateButton.textContent = "Update";
//                    row.insertCell().appendChild(updateButton);
//
//                    // Check if the row.cells[5] exists before trying to access its content
//                    if (row.cells[5]) {
//                        // Add event listener for the update button
//                        updateButton.addEventListener("click", function () {
//                            updateAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                        });
//                    }
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}









//function editAppointment(id, newStatus) {
//    const updateData = {
//        id: id,
//        status: newStatus
//    };
//
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/update_appointment', {
//        method: 'PUT',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(updateData)
//    })
//        .then(response => {
//            if (!response.ok) {
//                throw new Error(`Failed to update appointment. Status: ${response.status}`);
//            }
//            return response.json();
//        })
//        .then(responseData => {
//            console.log('Appointment updated successfully:', responseData);
//    alert("Appointment status updated successfully");
//            // You may want to update the UI here or reload the appointments
//            fetchAppointments();
//        })
//        .catch(error => {
//            console.error('Error updating appointment:', error.message);
//            alert(`Error updating appointment: ${error.message}`);
//            // Handle the error as needed
//        });
//}




//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//
//                        if (key === 'fullName') {
//                            // Create an input field for the name and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, create an input field and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        }
//                    });
//
//                    // Create and append the edit button
//                    const editButton = document.createElement("button");
//                    editButton.className = "button";
//                    editButton.textContent = "Edit";
//                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
//                    row.insertCell().appendChild(editButton);
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;




//
//function editAppointment() {
//    alert("button clicked");
//    console.log("button clicked");
//}


//function editAppointment(event) {
//    const button = event.target;
//    const row = button.closest('tr'); // Find the closest row
//    const appointmentId = row.cells[0].textContent; // Assuming the ID is in the first cell
//
//    // Rest of your editAppointment logic
//    alert(`Edit button clicked for appointment ID: ${appointmentId}`);
//    console.log(`Edit button clicked for appointment ID: ${appointmentId}`);
//}
//
//
//
//
//
//
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(responseData => {
//            const appointments = responseData.appointments;
//            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);
//
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            if (Array.isArray(appointments)) {
//                appointments.forEach(appointment => {
//                    const row = appointmentsTable.insertRow(-1);
//
//                    // Iterate over keys of each appointment in the desired order
//                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
//                    keysOrder.forEach(key => {
//                        const cell = row.insertCell();
//
//                        if (key === 'fullName') {
//                            // Create an input field for the name and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                        } else if (key === 'status') {
//                            // Create and populate the status dropdown
//                            const statusDropdown = document.createElement("select");
//                            statusDropdown.className = "status-dropdown";
//
//                            // Add options to the dropdown
//                            statusOptions.forEach(option => {
//                                const optionElement = document.createElement("option");
//                                optionElement.value = option;
//                                optionElement.textContent = option;
//
//                                // Set the default selected value
//                                if (option === appointment[key]) {
//                                    optionElement.selected = true;
//                                }
//
//                                statusDropdown.appendChild(optionElement);
//                            });
//
//                            // Append the dropdown to the cell
//                            cell.appendChild(statusDropdown);
//                        } else {
//                            // For other keys, create an input field and disable editing
//                            const inputField = document.createElement("input");
//                            inputField.value = appointment[key];
//                            inputField.disabled = true;
//                            inputField.className = "input-field"; // Add the input field class
//                            cell.appendChild(inputField);
//                            // Add this inside the forEach loop after the button creation
//const editButton = cell.querySelector('#editButton');
//editButton.addEventListener('click', editAppointment);
//                        }
//                    });
//
//                    // Create and append the edit button within the cell's innerHTML
//                    //cell.innerHTML += `<button class="button" onclick="editAppointment(${appointment.id}, '${row.cells[5].querySelector('.status-dropdown').value}')">Edit</button>`;
//                    //cell.innerHTML += `<button class="button" onclick="editAppointment()">Edit</button>`;
//                    cell.innerHTML += `<button class="button" onclick="editAppointment(this)">Update</button>`;
//
//
//                    // Log the HTML of the entire row
//                    console.log(row.outerHTML);
//                });
//            } else {
//                console.error("Appointments data is not in the expected format.");
//            }
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;
//


//
//
//function fetchAppointments() {
//    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
//        .then(response => response.json())
//        .then(appointments => {
//            console.log(appointments); // Log the fetched data
//
//            const appointmentsTable = document.getElementById('appointmentsTable');
//
//            appointments.forEach(appointment => {
//                const row = appointmentsTable.insertRow(-1); // -1 inserts at the end
//
//                const idCell = row.insertCell(0);
//                const fullNameCell = row.insertCell(1);
//                const emailCell = row.insertCell(2);
//                const phoneCell = row.insertCell(3);
//                const consultantCell = row.insertCell(4);
//                const statusCell = row.insertCell(5);
//                const actionsCell = row.insertCell(6);
//
//                idCell.textContent = appointment.id;
//                fullNameCell.innerHTML = `<input type="text" value="${appointment.fullName}">`;
//                emailCell.innerHTML = `<input type="text" value="${appointment.email}">`;
//                phoneCell.innerHTML = `<input type="text" value="${appointment.phone}">`;
//                consultantCell.innerHTML = `<input type="text" value="${appointment.consultant}">`;
//
//                // Create a dropdown for the "Status" column
//                const statusDropdown = document.createElement("select");
//                statusDropdown.className = "status-dropdown";
//
//                // Define the possible status options
//                const statusOptions = ["Pending", "Confirmed", "Cancelled"];
//
//                // Populate the dropdown options
//                statusOptions.forEach(option => {
//                    const statusOption = document.createElement("option");
//                    statusOption.value = option;
//                    statusOption.textContent = option;
//                    statusDropdown.appendChild(statusOption);
//                });
//
//                // Set the initial selected status
//                statusDropdown.value = appointment.status;
//
//                // Append the dropdown to the status cell
//                statusCell.appendChild(statusDropdown);
//
//                const editButton = document.createElement("button");
//                editButton.className = "button";
//                editButton.textContent = "Edit";
//                editButton.onclick = () => editAppointment(appointment.id, statusDropdown.value);
//                actionsCell.appendChild(editButton);
//
//                // Log the HTML of the entire row
//                console.log(row.outerHTML);
//            });
//        })
//        .catch(error => {
//            console.error(error);
//            alert(`Error fetching appointments: ${error.message}`);
//        });
//}
//
//// Call the fetchAppointments function when the page loads
//window.onload = fetchAppointments;
//
