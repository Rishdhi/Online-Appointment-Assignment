/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package service;

import Classes.AppointmentData;
import Classes.Consultants;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.MediaType;
import Classes.User;
import Classes.User_Cyber_Security;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.ws.rs.core.Response;
import db.DBUtils;
import java.util.List;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;

/**
 * REST Web Service
 *
 * @author rishi
 */
@Path("student")
@RequestScoped
public class UserResource {

//    @Context
//    private UriInfo context;
//    
        // Register the MySQL JDBC driver in a static block
    static {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to register MySQL JDBC driver.");
        }
    }
//    
//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    @Path("{id}")
//    public Response getStudent(@PathParam("id") int id) {
//        DBUtils utils = new DBUtils(); 
//        
//        try {
//            User st = utils.getStudent(id);
//            if (st == null) {
//                return Response.status(404).build();
//            } else {
//                Gson gson = new GsonBuilder().create();
//                return Response.status(200).entity(gson.toJson(st)).build();
//            }  
//        } catch(Exception e) {
//            return Response.status(500).build();
//        }   
//    }
//    
//    
//    
//    
//    @PUT
//    @Path("/updateStudent")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response updateStudent(String json) {
//        Gson gson = new GsonBuilder().create();
//        User student = gson.fromJson(json, User.class);
//        
//        DBUtils utils = new DBUtils(); 
//        boolean result = utils.updateStudent(student);
//        if (result) {
//            return Response.status(200).entity("Student successfully updated").build();
//        } else {
//            return Response.status(500).entity("Student Not updated").build();
//        }
//    }
//    
//
//
//



    
//@GET
//@Path("/getStudents")
//@Produces(MediaType.APPLICATION_JSON)
//public Response getStudents() {
//    // Create an instance of your DBUtils class
//    DBUtils utils = new DBUtils();
//    
//    // Call a method to retrieve a list of students from the database
//    List<User> users = utils.getUsers();
//    
//    // Check if students were retrieved successfully
//    if (users != null && !users.isEmpty()) {
//        // Create a StringBuilder to build a JSON array manually
//        StringBuilder jsonBuilder = new StringBuilder();
//        jsonBuilder.append("[");
//        
//        // Iterate through the list of students and add each student as a JSON object
//        for (User user : users) {
//            String userJson = "{\"id\":" + user.getId() + 
//                                 ",\"username\":\"" + user.getUsername()+ "\"" +
//                                 ",\"contact_number\":\"" + user.getContact_number()+ "\"" +
//                                 ",\"email\":\"" + user.getEmail()+ "\"" +
//                                 ",\"password\":\"" + user.getPassword()+ "\"" +
//                                 ",\"usertype\":\"" + user.getUser_type()+ "\"}";
//            
//            jsonBuilder.append(userJson);
//            jsonBuilder.append(",");
//        }
//        
//        // Remove the trailing comma and close the JSON array
//        if (jsonBuilder.charAt(jsonBuilder.length() - 1) == ',') {
//            jsonBuilder.deleteCharAt(jsonBuilder.length() - 1);
//        }
//        jsonBuilder.append("]");
//        
//        // Return a response with a 200 status code and the JSON data
//        return Response.status(200).entity(jsonBuilder.toString()).build();
//    } else {
//        // If no students were found, return a response with a 404 status code
//        return Response.status(404).entity("No users found").build();
//    }
//}

    
//@POST
//    @Path("/login")    
//public Response login(User user) {
//        if (DBUtils.authenticateUser(user.getEmail(), user.getPassword(), user.getUser_type())) {
//            // Return a success response with a 200 OK status code
//            return Response.status(Response.Status.OK).entity("Logged in successfully").build();
//        } else {
//            // Return a failure response with a 401 Unauthorized status code
//            return Response.status(Response.Status.UNAUTHORIZED).entity("Login failed").build();
//        }
//    }
//

    
//    
//    @POST
//    @Path("authenticate")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response authenticateUser(User user) {
//        if (DBUtils.authenticateUser(user)) {
//        // Authentication successful
//        String userType = user.getUser_type();
//        String redirectUrl;
//
//        if ("Administrator".equals(userType)) {
//            redirectUrl = "admin_dashboard.html";
//        } else if ("Consultant".equals(userType)) {
//            redirectUrl = "consultant_dashboard.html";
//        } else if ("Job Seeker".equals(userType)) {
//            redirectUrl = "./Software Engineering/job_seeker_dashboard.html";
//        } else {
//            // Handle unknown user types here
//            return Response.status(Response.Status.UNAUTHORIZED)
//                    .entity("Unknown user type")
//                    .build();
//        }
//
//        // Return a JSON response with the redirect URL
//        return Response.status(Response.Status.OK)
//                .entity("{\"redirect\":\"" + redirectUrl + "\"}")
//                .build();
//    } else {
//        // Authentication failed
//        return Response.status(Response.Status.UNAUTHORIZED)
//                .entity("Login failed by api")
//                .build();
//    }
//    }
    
    
    
    
    @POST
@Path("authenticate")
@Consumes(MediaType.APPLICATION_JSON)
public Response authenticateUser(User user) {
    if (DBUtils.authenticateUser(user)) {
        // Authentication successful
        String userType = user.getUser_type();
        String redirectUrl;

        if ("Administrator".equals(userType)) {
            redirectUrl = "admin_dashboard.html";
        } else if ("Consultant".equals(userType)) {
            redirectUrl = "consultant_dashboard.html";
        } else if ("Job Seeker".equals(userType)) {
            redirectUrl = "job_seeker_dashboard.html";
        } else {
            // Handle unknown user types here
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Unknown user type")
                    .build();
        }

        // Return a JSON response with the redirect URL and success message
        return Response.status(Response.Status.OK)
                .entity("{\"status\":\"success\",\"message\":\"Logged in successfully\",\"redirect\":\"" + redirectUrl + "\"}")
                .build();
    } else {
        // Authentication failed
        return Response.status(Response.Status.UNAUTHORIZED)
                .entity("{\"status\":\"fail\",\"message\":\"Failed to login\"}")
                .build();
    }
}
    
    
    
    
    
    @POST
    @Path("authenticate_cyber_user")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response authenticateCyberUser(User_Cyber_Security cyber_user) {
        if (DBUtils.authenticateCyberUser(cyber_user)) {
        // Authentication successful
        String userType = cyber_user.getCuser_type();
        String redirectUrl;

        if ("Administrator".equals(userType)) {
            redirectUrl = "admin_dashboard.html";
        } else if ("Consultant".equals(userType)) {
            redirectUrl = "Cyber_consultant_dashboard.html";
        } else if ("Job Seeker".equals(userType)) {
            redirectUrl = "Cyber_job_seeker.html";
        } else {
            // Handle unknown user types here
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Unknown user type")
                    .build();
        }

        // Return a JSON response with the redirect URL
        return Response.status(Response.Status.OK)
                .entity("{\"redirect\":\"" + redirectUrl + "\"}")
                .build();
    } else {
        // Authentication failed
        return Response.status(Response.Status.UNAUTHORIZED)
                .entity("Login failed by api")
                .build();
    }
    }
    
    
    
    
    
    

     //.Add a new method to handle saving a student
    @POST
    @Path("/addUser")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addUser(String json) {
        Gson gson = new GsonBuilder().create();
        User user = gson.fromJson(json, User.class);
        
        DBUtils utils = new DBUtils(); 
        boolean result = utils.addUser(user);
        if (result) {
            String successMessage = "User successfully added!";
            return Response.status(201).build();
        } else {
            return Response.status(500).build();
        }
    }
    
    
    
    
         //.Add a new method to handle saving a cyber security user
    @POST
    @Path("/addcyberuser")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addCyberSecurityUser(String json) {
        Gson gson = new GsonBuilder().create();
        User_Cyber_Security user = gson.fromJson(json, User_Cyber_Security.class);
        
        DBUtils utils = new DBUtils(); 
        boolean result = utils.addCyberSecurityUser(user);
        if (result) {
            String successMessage = "User successfully added!";
            return Response.status(201).build();
        } else {
            return Response.status(500).build();
        }
    }

    
    
    
    @POST
    @Path("/addConsultant")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addConsultant(String json) {
        Gson gson = new GsonBuilder().create();
        Consultants consultant = gson.fromJson(json, Consultants.class);

        DBUtils utils = new DBUtils();
        boolean result;
        result = utils.addConsultant(consultant);
        if (result) {
            String successMessage = "You successfully saved your date and time";
            return Response.status(Response.Status.CREATED)
                    .entity(successMessage)
                    .build();
        } else {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
    
    
    
    
    @GET
    @Path("/viewConsultants")
    @Produces(MediaType.APPLICATION_JSON)
    public Response viewConsultants() {
        DBUtils dbUtils = new DBUtils();
        List<Consultants> consultantsList = dbUtils.getAllConsultants();

        if (consultantsList != null && !consultantsList.isEmpty()) {
            return Response.status(Response.Status.OK).entity(consultantsList).build();
        } else {
            return Response.status(Response.Status.NO_CONTENT).entity("No consultants found").build();
        }
    }
    
    
    
    
    @GET
    @Path("/con_names")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getConsultantNames() {
        List<String> consultantNames = DBUtils.getConsultantNames();

        if (consultantNames != null && !consultantNames.isEmpty()) {
            // Return success with the list of names
            return Response.ok(consultantNames).build();
        } else {
            // Return failure with an error message
            return Response.status(Response.Status.NOT_FOUND).entity("No consultant names found.").build();
        }
    }
    
//    @GET
//    @Path("/fetch_appointment")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response fetchAppointments() {
//        
//            List<AppointmentData> appointments = DBUtils.fetchAppointments();
//                    if (appointments != null && !appointments.isEmpty()) {
//            // Return success with the list of names
//            return Response.ok(appointments).build();
//        } else {
//            // Return failure with an error message
//            return Response.status(Response.Status.NOT_FOUND).entity("No consultant names found.").build();
//        }
//    }
    
    
    
    
    @GET
@Path("/fetch_appointment")
@Produces(MediaType.APPLICATION_JSON)
public Response fetchAppointmentsWithStatus() {
    Map<String, Object> result = DBUtils.fetchAppointmentsWithStatus();

    List<AppointmentData> appointments = (List<AppointmentData>) result.get("appointments");
    List<String> statusOptions = (List<String>) result.get("statusOptions");

    if (appointments != null && !appointments.isEmpty()) {
        // Return success with the list of names and status options
        Map<String, Object> response = new HashMap<>();
        response.put("appointments", appointments);
        response.put("statusOptions", statusOptions);
        return Response.ok(response).build();
    } else {
        // Return failure with an error message
        return Response.status(Response.Status.NOT_FOUND).entity("No appointments found.").build();
    }
}
    
    
    
    
     @POST
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addAppointment(AppointmentData appointmentData) {
        if (DBUtils.addAppointment(appointmentData)) {
            return Response.status(Response.Status.CREATED).build();
        } else {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    

    
    


// @POST
//    @Path("/addUser")
//    @Consumes(MediaType.APPLICATION_JSON)
//    @Produces(MediaType.TEXT_PLAIN)
//    public String addUser(User user) {
//        DBUtils dbUtils = new DBUtils();
//        if (dbUtils.addUser(user)) {
//            return "User added successfully";
//        } else {
//            return "Failed to add user";
//        }
//    }



    
    
//    @DELETE
//    @Path("{id}")
//    public Response deleteStudent(@PathParam("id") int id) {
//        DBUtils utils = new DBUtils(); 
//        boolean result = utils.deleteStudent(id);
//        if (result) {
//            return Response.status(200).build();
//        } else {
//            return Response.status(500).build();
//        }
//    }
//    
//    
//
//    /**
//     * Retrieves representation of an instance of service.StudentResource
//     * @return an instance of java.lang.String
//     */
//    @GET
//    @Produces(MediaType.TEXT_HTML)
//    public String getHtml() {
//        //TODO return proper representation object
//        throw new UnsupportedOperationException();
//    }
//
//    /**
//     * PUT method for updating or creating an instance of StudentResource
//     * @param content representation for the resource
//     */
//    @PUT
//    @Consumes(MediaType.TEXT_HTML)
//    public void putHtml(String content) {
//    }
//    
//    @PUT
//    @Path("/update_appointment")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public void updateAppointmentStatus(Map<String, Object> updateData) {
//        // Extract data from the updateData map and update the appointment status
//        if (DBUtils.updateAppointmentStatus(appointmentData)) {
//            return Response.status(Response.Status.CREATED).build();
//        } else {
//            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
//        }
//    }
    
    

    
//@POST
//@Path("/update_appointment")
//@Consumes(MediaType.APPLICATION_JSON)
//@Produces(MediaType.APPLICATION_JSON)
//public Response updateAppointmentStatus(AppointmentData appointmentData) {
//    if (updateStatus(appointmentData)) {
//        return Response.status(Response.Status.OK).build();
//    } else {
//        return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
//    }
//}
//
//private boolean updateStatus(AppointmentData appointmentData) {
//    DBUtils.updateAppointmentStatus(appointmentData.getId(), appointmentData.getStatus());
//    return true;
//}
    
    
    


    @PUT
    @Path("/update_appointment")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateAppointmentStatus(AppointmentData appointment) {
        boolean updateSuccessful = DBUtils.updateAppointmentStatus(appointment.getId(), appointment.getStatus());

        if (updateSuccessful) {
            return Response.status(200).entity("Status successfully updated").build();
        } else {
            return Response.status(500).entity("status Not updated").build();
        }
    }

    


 

    
}
