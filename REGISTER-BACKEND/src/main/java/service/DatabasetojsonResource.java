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

import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import db.DBUtils;
import Classes.User;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


/**
 * REST Web Service
 *
 * @author rishi
 */
@Path("databasetojson")
@RequestScoped
public class DatabasetojsonResource {
    

     
     
     

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DatabasetojsonResource
     */
    
    
    public DatabasetojsonResource() {
    }

    /**
     * Retrieves representation of an instance of service.DatabasetojsonResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getXml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of DatabasetojsonResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_XML)
    public void putXml(String content) {
    }
    
    @GET
    @Path("/getDatabaseAsJson")
    @Produces(MediaType.APPLICATION_JSON)
    public String getDatabaseAsJson() {
        try {
            // Register the JDBC driver
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            // Establish a connection
            String mysqlUrl = "jdbc:mysql://localhost:4000/data-retrieval-testing";
            Connection con = DriverManager.getConnection(mysqlUrl, "root", "t#9758@qlphsemi");

            // Create a statement
            Statement stmt = con.createStatement();
            // Retrieve the records
            ResultSet rs = stmt.executeQuery("SELECT * FROM student");

            // Convert ResultSet to JSON using Gson
            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            String json = gson.toJson(rs);

            // Close resources
            rs.close();
            stmt.close();
            con.close();

            return json;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error retrieving data from the database: " + e.getMessage();
        }
    }
    
    
    
}
