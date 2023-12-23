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
import Classes.User_Cyber_Security;
import Classes.Consultants;
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
    
    
    
    public static Connection establishConnection() {
        Connection connection = null;
        try {
            // Attempt to establish a connection
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (SQLException e) {
            e.printStackTrace(); // Handle or log the exception as needed
        }
        return connection;
    }
    

//    public List<User> getUsers() {
//        List<User> users = new ArrayList<>();
//        
//        try {
//            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
//            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                Statement stmt = conn.createStatement();
//                ResultSet rs = stmt.executeQuery("SELECT * FROM users");
//             ) {		      
//                while(rs.next()){
//                    User user = new User();
//                    user.setId(rs.getInt("id"));
//                    user.setUsername(rs.getString("username"));
//                    user.setContact_number(rs.getInt("contact_number"));
//                    user.setEmail(rs.getString("email"));
//                    user.setPassword(rs.getString("password"));
//                    user.setUser_type(rs.getString("user_type"));
//                    users.add(user);
//                }
//             } catch (SQLException e) {
//                 System.out.println(e);
//             } 
//        } catch(SQLException e) {
//            System.out.println(e);
//        }     
//       
//        return users;
//    }
    
    
public static boolean authenticateUser(User user) {
    try {
        Class.forName("com.mysql.jdbc.Driver");
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE email = ? AND password = ? AND user_type = ?")) {
            stmt.setString(1, user.getEmail());
            stmt.setString(2, user.getPassword());
            stmt.setString(3, user.getUser_type());

            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next(); // If there's a matching user, authentication is successful
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    }
    return false;
}




public static boolean authenticateCyberUser(User_Cyber_Security cyber_user) {
    try {
        Class.forName("com.mysql.jdbc.Driver");
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users_cyber_security WHERE email = ? AND password = ? AND user_type = ?")) {
            stmt.setString(1, cyber_user.getCemail());
            stmt.setString(2, cyber_user.getCpassword());
            stmt.setString(3, cyber_user.getCuser_type());

            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next(); // If there's a matching user, authentication is successful
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    }
    return false;
}







//public static boolean authenticateUser(User user) {
//    try {
//        Class.forName("com.mysql.jdbc.Driver");
//        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//             PreparedStatement stmt = 
//      conn.prepareStatement("SELECT email, password, user_type FROM users WHERE email = ? AND password = ? AND user_type = ?")) {
//            stmt.setString(1, user.getEmail());
//            stmt.setString(2, user.getPassword());
//            stmt.setString(3, user.getUser_type());
//
//            try (ResultSet rs = stmt.executeQuery()) {
//                return rs.next(); // If there's a matching user, authentication is successful
//            }
//        } catch (SQLException e) {
//        }
//    } catch (ClassNotFoundException e) {
//    }
//    return false; // comment everything above and keep this for test to fail on purpose
//}



//public static boolean authenticateUser(User user) {
//    try {
//        Class.forName("com.mysql.jdbc.Driver");
//        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//            PreparedStatement stmt = conn.prepareStatement("SELECT email, user_type FROM users WHERE email = ? AND password = ?")) {
//            stmt.setString(1, user.getEmail());
//            stmt.setString(2, user.getPassword());
//
//            try (ResultSet rs = stmt.executeQuery()) {
//                if (rs.next()) {
//                    String dbUserType = rs.getString("user_type");
//                    if (dbUserType.equals(user.getUser_type())) {
//                        return true; // If there's a matching user with the same user_type, authentication is successful
//                    }
//                }
//            }
//        }
//    } catch (ClassNotFoundException | SQLException e) {
//        e.printStackTrace();
//    }
//    return false;
//}






    
    
    
    
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
 
 
 
 
 
 
    public boolean addCyberSecurityUser(User_Cyber_Security cyber_user) {
        try {
            // Create a database connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Prepare the SQL statement
            String sql = "INSERT INTO users_cyber_security (username, contact_number, email, password, user_type) "
                    + "VALUES (?, ?, ?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, cyber_user.getCusername());
            pstmt.setInt(2, cyber_user.getCcontact_number());
            pstmt.setString(3, cyber_user.getCemail());
            pstmt.setString(4, cyber_user.getCpassword());
            pstmt.setString(5, cyber_user.getCuser_type());
            
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
    
    
    
    
    
    public boolean addConsultant(Consultants consultant) {
        try {
            // Create a database connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Prepare the SQL statement
            String sql = "INSERT INTO `appointments`.`ConsultantSE` (`date`, `time`, `name`) VALUES (?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, consultant.getDate());
            pstmt.setString(2, consultant.getTime());
            pstmt.setString(3, consultant.getName());

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
    
    
    
    
    
    
    
    public List<Consultants> getAllConsultants() {
        List<Consultants> consultantsList = new ArrayList<>();

        try {
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            String sql = "SELECT * FROM `appointments`.`ConsultantSE`";
            try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
                while (rs.next()) {
                    Consultants consultant = new Consultants();
                    consultant.setDate(rs.getString("date"));
                    consultant.setTime(rs.getString("time"));
                    consultant.setName(rs.getString("name"));
                    consultantsList.add(consultant);
                }
            }
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return consultantsList;
    }
    
    
    
    
    
    
    
    
    
}  
