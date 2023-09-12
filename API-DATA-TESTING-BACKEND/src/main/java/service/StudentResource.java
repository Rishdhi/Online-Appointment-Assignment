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
import Classes.Student;
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
public class StudentResource {

//    @Context
//    private UriInfo context;
//    
//        // Register the MySQL JDBC driver in a static block
//    static {
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//            throw new RuntimeException("Failed to register MySQL JDBC driver.");
//        }
//    }
//    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response getStudent(@PathParam("id") int id) {
        DBUtils utils = new DBUtils(); 
        
        try {
            Student st = utils.getStudent(id);
            if (st == null) {
                return Response.status(404).build();
            } else {
                Gson gson = new GsonBuilder().create();
                return Response.status(200).entity(gson.toJson(st)).build();
            }  
        } catch(Exception e) {
            return Response.status(500).build();
        }   
    }
    

    /**
     * Creates a new instance of StudentResource
     */

    

//    @GET
//    @Path("/getStudent")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response getStudent() {
//        // Create and return a hardcoded student object
//        Student student = new Student();
//        student.setId(1);
//        student.setName("Rishdhi");
//        student.setCollege("ICBT");
//            // Set the response entity and content type
//    return Response.ok(student)
//        .header("Content-Type", "application/json")
//        .build();
//    }
//    
    
    
@GET
@Path("/getStudent")
@Produces(MediaType.APPLICATION_JSON)
public Response getStudents() {
    // Create an instance of your DBUtils class
    DBUtils utils = new DBUtils();
    
    // Call a method to retrieve a list of students from the database
    List<Student> students = utils.getStudents();
    
    // Check if students were retrieved successfully
    if (students != null && !students.isEmpty()) {
        // Create a StringBuilder to build a JSON array manually
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("[");
        
        // Iterate through the list of students and add each student as a JSON object
        for (Student student : students) {
            String studentJson = "{\"id\":" + student.getId() + 
                                 ",\"name\":\"" + student.getName() + "\"" +
                                 ",\"college\":\"" + student.getCollege() + "\"" +
                                 ",\"branch\":\"" + student.getBranch() + "\"}";
            
            jsonBuilder.append(studentJson);
            jsonBuilder.append(",");
        }
        
        // Remove the trailing comma and close the JSON array
        if (jsonBuilder.charAt(jsonBuilder.length() - 1) == ',') {
            jsonBuilder.deleteCharAt(jsonBuilder.length() - 1);
        }
        jsonBuilder.append("]");
        
        // Return a response with a 200 status code and the JSON data
        return Response.status(200).entity(jsonBuilder.toString()).build();
    } else {
        // If no students were found, return a response with a 404 status code
        return Response.status(404).entity("No students found").build();
    }
}


    

    // Add a new method to handle saving a student
    @POST
    @Path("/addStudent")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addStudent(String json) {
        Gson gson = new GsonBuilder().create();
        Student student = gson.fromJson(json, Student.class);
        
        DBUtils utils = new DBUtils(); 
        boolean result = utils.addStudent(student);
        if (result) {
            String successMessage = "Student successfully added!";
            return Response.status(201).entity(successMessage).build();
        } else {
            return Response.status(500).build();
        }
    }
    
    

    /**
     * Retrieves representation of an instance of service.StudentResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_HTML)
    public String getHtml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of StudentResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.TEXT_HTML)
    public void putHtml(String content) {
    }
}
