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
import Classes.User;
import java.sql.PreparedStatement;

/**
 *
 * @author rishi
 */
public class DBUtils {
//    static final String DB_URL = "jdbc:mysql://localhost:4000/data-retrieval-testing?useSSL=false";
    static final String DB_URL = "jdbc:mysql://localhost:4000/appointments?autoReconnect=true&useSSL=false";
//    static final String DB_URL = "jdbc:mysql://localhost:4000/data-retrieval-testing";
    static final String USER = "root";
    static final String PASS = "t#9758@qlphsemi";
    

    public List<User> getUsers() {
        List<User> users = new ArrayList<>();
        
        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM users");
             ) {		      
                while(rs.next()){
                    User user = new User();
                    user.setId(rs.getInt("id"));
                    user.setUsername(rs.getString("username"));
                    user.setContact_number(rs.getInt("contact_number"));
                    user.setEmail(rs.getString("email"));
                    user.setPassword(rs.getString("password"));
                    user.setUser_type(rs.getString("user_type"));
                    users.add(user);
                }
             } catch (SQLException e) {
                 System.out.println(e);
             } 
        } catch(SQLException e) {
            System.out.println(e);
        }     
       
        return users;
    }
    
    
    
    
//     public boolean addUser(User user) {
//          try {
//            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
//            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                Statement stmt = conn.createStatement();
//             ) {		      
//               stmt.executeUpdate("INSERT INTO users (username, contact_number, email, password, user_type) "
//                   + "VALUES (" + 
//                       user.getUsername() + ", '" + 
//                       user.getContact_number() + "', '" + 
//                       user.getEmail() + "', '" +
//                       user.getPassword()+ "', '" +
//                       user.getUser_type() + "')");
//               return true;
//             } catch (SQLException e) {
//                 System.out.println(e);
//             } 
//        } catch(SQLException e) {
//            System.out.println(e);
//        }     
//        return false;
//    }
    
    
    


 public boolean addUser(User user) {
        try {
            // Create a database connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Prepare the SQL statement
            String sql = "INSERT INTO users (username, contact_number, email, password, user_type) "
                    + "VALUES (?, ?, ?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, user.getUsername());
            pstmt.setInt(2, user.getContact_number());
            pstmt.setString(3, user.getEmail());
            pstmt.setString(4, user.getPassword());
            pstmt.setString(5, user.getUser_type());
            
            // Execute the insert statement
            int rowsInserted = pstmt.executeUpdate();
            
            // Close the connection
            conn.close();
            
            // Check if the insert was successful
            return rowsInserted > 0;
        } catch (SQLException e) {
            System.out.println(e);
        }
        return false;
    }

    
    
    
     
//    public User getStudent(int id) throws Exception {
//        User student = null;
//        
//        try {
//            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
//            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                Statement stmt = conn.createStatement();
//                ResultSet rs = stmt.executeQuery("SELECT * FROM student WHERE id="+ id);
//             ) {		      
//                while(rs.next()){
//                    student = new User();
//                    student.setId(rs.getInt("id"));
//                    student.setName(rs.getString("name"));
//                    student.setCollege(rs.getString("college"));
//                    student.setBranch(rs.getString("branch"));
////                    student.setDob(rs.getString("dob"));  
//                    break;
//                }
//             } catch (SQLException e) {
//                 System.out.println(e);
//                 throw e;
//             } 
//        } catch(SQLException e) {
//            System.out.println(e);
//            throw e;
//        }     
//       
//        return student;
//    }
//    
//    
//        public boolean updateStudent(User student) {
//          try {
//            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
//            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                Statement stmt = conn.createStatement();
//             ) {		      
//               stmt.executeUpdate("UPDATE student SET name = '" 
//                       + student.getName() + 
//                       "', college = '" + student.getCollege() +
//                       "', branch = '" + student.getBranch()
//                       + "' WHERE (id = '" + student.getId()+ "')");
//               return true;
//             } catch (SQLException e) {
//                 System.out.println(e);
//             } 
//        } catch(SQLException e) {
//            System.out.println(e);
//        }     
//        return false;
//    }
//        
//        
//    public boolean deleteStudent(int id) {
//          try {
//            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
//            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                Statement stmt = conn.createStatement();
//             ) {		      
//               stmt.executeUpdate("DELETE FROM student WHERE (id = '" + id + "')");
//               return true;
//             } catch (SQLException e) {
//                 System.out.println(e);
//             } 
//        } catch(SQLException e) {
//            System.out.println(e);
//        }     
//        return false;
//    }
}    
