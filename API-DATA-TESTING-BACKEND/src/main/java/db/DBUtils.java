/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import Classes.Student;
import java.sql.PreparedStatement;

/**
 *
 * @author rishi
 */
public class DBUtils {
//    static final String DB_URL = "jdbc:mysql://localhost:4000/data-retrieval-testing?useSSL=false";
    static final String DB_URL = "jdbc:mysql://localhost:4000/data-retrieval-testing?autoReconnect=true&useSSL=false";
//    static final String DB_URL = "jdbc:mysql://localhost:4000/data-retrieval-testing";
    static final String USER = "root";
    static final String PASS = "t#9758@qlphsemi";
    

    public List<Student> getStudents() {
        List<Student> students = new ArrayList<>();
        
        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM student");
             ) {		      
                while(rs.next()){
                    Student student = new Student();
                    student.setId(rs.getInt("id"));
                    student.setName(rs.getString("name"));
                    student.setCollege(rs.getString("college"));
                    student.setBranch(rs.getString("branch"));
                    students.add(student);
                }
             } catch (SQLException e) {
                 System.out.println(e);
             } 
        } catch(SQLException e) {
            System.out.println(e);
        }     
       
        return students;
    }
    
    
    
    
     public boolean addStudent(Student student) {
          try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
             ) {		      
               stmt.executeUpdate("INSERT INTO student (id, name, college, branch) "
                   + "VALUES (" + student.getId() + ", '" + student.getName() + "', '" + student.getCollege() + "', '" + student.getBranch() + "')");
               return true;
             } catch (SQLException e) {
                 System.out.println(e);
             } 
        } catch(SQLException e) {
            System.out.println(e);
        }     
        return false;
    }
    
     
    public Student getStudent(int id) throws Exception {
        Student student = null;
        
        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM student WHERE id="+ id);
             ) {		      
                while(rs.next()){
                    student = new Student();
                    student.setId(rs.getInt("id"));
                    student.setName(rs.getString("name"));
                    student.setCollege(rs.getString("college"));
                    student.setBranch(rs.getString("branch"));
//                    student.setDob(rs.getString("dob"));  
                    break;
                }
             } catch (SQLException e) {
                 System.out.println(e);
                 throw e;
             } 
        } catch(SQLException e) {
            System.out.println(e);
            throw e;
        }     
       
        return student;
    }
    
    
        public boolean updateStudent(Student student) {
          try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
             ) {		      
               stmt.executeUpdate("UPDATE student SET name = '" 
                       + student.getName() + 
                       "', college = '" + student.getCollege() +
                       "', branch = '" + student.getBranch()
                       + "' WHERE (id = '" + student.getId()+ "')");
               return true;
             } catch (SQLException e) {
                 System.out.println(e);
             } 
        } catch(SQLException e) {
            System.out.println(e);
        }     
        return false;
    }
    
    
    
}
