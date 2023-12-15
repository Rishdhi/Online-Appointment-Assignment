/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})



const addurl = "http://localhost:8080/REGISTER-BACKEND/resources/student/addcyberuser";

function addUser() {
    const person = {
        "cusername": document.getElementById("name").value,
        "ccontact_number": document.getElementById("txtNum").value,
        "cemail": document.getElementById("txtMail").value,
        "cpassword": document.getElementById("txtPass").value,
        "cuser_type": document.getElementById("signupUserType").value
    };

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(person)
    };

    fetch(addurl, options)
        .then(response => {
            if (response.status === 201) {
                // Display a success message in the apiResponse div
                alert("User successfully added!");
//                apiResponse.innerHTML = "Student successfully added!";
                return response.json();
            } else {
                // Handle other status codes here
                alert("Error adding User.!");
//                apiResponse.innerHTML = "Error adding User.";
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