/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package db;

import Classes.AppointmentData;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import Classes.User;
import Classes.Consultants;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.Map;

import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


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
    
    
    
    
    
    // this is for the dropdown
    public static List<String> getConsultantNames() {
        List<String> consultantNames = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);) {
            String query = "SELECT name FROM `appointments`.`ConsultantSE`";
            try (PreparedStatement preparedStatement = conn.prepareStatement(query)) {
                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    while (resultSet.next()) {
                        consultantNames.add(resultSet.getString("name"));
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return consultantNames;
    }

    
    

 public static boolean addAppointment(AppointmentData appointmentData) {
        try {
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            String sql = "INSERT INTO `appointments`.`appointmentdata` (`full_name`, `email`, `phone`, `consultant`, `status`) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, appointmentData.getFullName());
            pstmt.setString(2, appointmentData.getEmail());
            pstmt.setString(3, appointmentData.getPhone());
            pstmt.setString(4, appointmentData.getConsultant());
            pstmt.setString(5, appointmentData.getStatus());

            int rowsInserted = pstmt.executeUpdate();

            conn.close();

            return rowsInserted > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
 
 
 
 public List<AppointmentData> getAllAppointments() {
    List<AppointmentData> appointmentsList = new ArrayList<>();

    try {
        Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
        String sql = "SELECT * FROM `appointments`.`appointmentdata`";
        try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                AppointmentData appointment = new AppointmentData();
                appointment.setId(rs.getInt("id"));
                appointment.setFullName(rs.getString("full_name"));
                appointment.setEmail(rs.getString("email"));
                appointment.setPhone(rs.getString("phone"));
                appointment.setConsultant(rs.getString("consultant"));
                appointment.setStatus(rs.getString("status"));
                appointmentsList.add(appointment);
            }
        }
        conn.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return appointmentsList;
}
 

    
// Update the `updateAppointment` method to use PreparedStatement
public boolean updateAppointment(AppointmentData appointment) {
    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
        String updateQuery = "UPDATE `appointments`.`appointmentdata` SET " +
                "`full_name` = ?, " +
                "`email` = ?, " +
                "`phone` = ?, " +
                "`consultant` = ?, " +
                "`status` = ? " +
                "WHERE (`id` = ?)";

        try (PreparedStatement pstmt = conn.prepareStatement(updateQuery)) {
            pstmt.setString(1, appointment.getFullName());
            pstmt.setString(2, appointment.getEmail());
            pstmt.setString(3, appointment.getPhone());
            pstmt.setString(4, appointment.getConsultant());
            pstmt.setString(5, appointment.getStatus());
            pstmt.setInt(6, appointment.getId());

            int rowsAffected = pstmt.executeUpdate();

            return rowsAffected > 0;
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return false;
}


 


public static boolean deleteAppointmentById(int appointmentId) {
    String query = "DELETE FROM `appointments`.`appointmentdata` WHERE id = ?";
    
    try (Connection con = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement statement = con.prepareStatement(query)) {
        
        statement.setInt(1, appointmentId);
        int rowsAffected = statement.executeUpdate();
        return rowsAffected > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}

       
}  
