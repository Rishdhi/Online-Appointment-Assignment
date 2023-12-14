/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package service;

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
}
