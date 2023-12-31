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
//
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
//    .then((response) => response.json())
//    .then((data) => {
//        if (data.status === "success") {
//            // Authentication was successful, display the success message
//            alert(data.message);
//            // Handle the redirection here
//            window.location.href = data.redirect;
//        } else {
//            // Authentication failed, display the error message
//            alert(data.message);
//            throw new Error(data.message);
//        }
//    })
//    .catch((error) => {
//        // Handle errors and display an error message
//        console.error(error);
//    });
//}







function addConsultant() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("jobSeeker").value;

    // Create a consultant object to send to the server
    const consultant = {
        date: date,
        time: time,
        name: name
    };
    
    console.log("Consultant Object:", consultant);

    // Make an API request to add the consultant
    fetch("http://localhost:8080/REGISTER-BACKEND/resources/student/addConsultant", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(consultant),
    })
    .then((response) => {
        if (response.status === 201) {
            alert("Consultant Added Successfully!");
            // Consultant added successfully, handle any further actions
        } else {
            alert("Failed to Add Consultant!");
            // Failed to add consultant, display an error message
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




// Updated JavaScript
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
//





// Function to fetch appointments and populate the table
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
//
//// Call the fetchAppointments function when the page loads
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




function fetchAppointments() {
    fetch('http://localhost:8080/REGISTER-BACKEND/resources/student/fetch_appointment')
        .then(response => response.json())
        .then(responseData => {
            const appointments = responseData.appointments;
            const statusOptions = responseData.statusOptions.concat(["Accepted", "Rejected", "Completed"]);

            console.log(appointments); // Log the fetched data

            const appointmentsTable = document.getElementById('appointmentsTable');

            if (Array.isArray(appointments)) {
                appointments.forEach(appointment => {
                    const row = appointmentsTable.insertRow(-1);

                    // Iterate over keys of each appointment in the desired order
                    const keysOrder = ['id', 'fullName', 'email', 'phone', 'consultant', 'status'];
                    keysOrder.forEach(key => {
                        const cell = row.insertCell();

                        if (key === 'fullName') {
                            // Create an input field for the name and disable editing
                            const inputField = document.createElement("input");
                            inputField.value = appointment[key];
                            inputField.disabled = true;
                            inputField.className = "input-field"; // Add the input field class
                            cell.appendChild(inputField);
                        } else if (key === 'status') {
                            // Create and populate the status dropdown
                            const statusDropdown = document.createElement("select");
                            statusDropdown.className = "status-dropdown";

                            // Add options to the dropdown
                            statusOptions.forEach(option => {
                                const optionElement = document.createElement("option");
                                optionElement.value = option;
                                optionElement.textContent = option;

                                // Set the default selected value
                                if (option === appointment[key]) {
                                    optionElement.selected = true;
                                }

                                statusDropdown.appendChild(optionElement);
                            });

                            // Append the dropdown to the cell
                            cell.appendChild(statusDropdown);
                        } else {
                            // For other keys, create an input field and disable editing
                            const inputField = document.createElement("input");
                            inputField.value = appointment[key];
                            inputField.disabled = true;
                            inputField.className = "input-field"; // Add the input field class
                            cell.appendChild(inputField);
                        }
                    });

                    // Create and append the edit button
                    const editButton = document.createElement("button");
                    editButton.className = "button";
                    editButton.textContent = "Edit";
                    editButton.onclick = () => editAppointment(appointment.id, row.cells[5].querySelector('.status-dropdown').value);
                    row.insertCell().appendChild(editButton);

                    // Log the HTML of the entire row
                    console.log(row.outerHTML);
                });
            } else {
                console.error("Appointments data is not in the expected format.");
            }
        })
        .catch(error => {
            console.error(error);
            alert(`Error fetching appointments: ${error.message}`);
        });
}

// Call the fetchAppointments function when the page loads
window.onload = fetchAppointments;





