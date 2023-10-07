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
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author rishi
 */
@Path("student")
@RequestScoped
public class StudentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of StudentResource
     */
    public StudentResource() {
    }
    

    @GET
    @Path("/getStudent")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getStudent() {
        // Create and return a hardcoded student object
        Student student = new Student();
        student.setId(1);
        student.setName("Rishdhi");
        student.setCollege("ICBT");
            // Set the response entity and content type
    return Response.ok(student)
        .header("Content-Type", "application/json")
        .build();
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
