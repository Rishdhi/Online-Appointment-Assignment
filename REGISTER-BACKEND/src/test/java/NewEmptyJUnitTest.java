/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */

import Classes.AppointmentData;
import Classes.Consultants;
import Classes.User;
import com.mysql.jdbc.Connection;
import db.DBUtils;
import java.util.function.Supplier;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 *
 * @author rishi
 */
public class NewEmptyJUnitTest {
    
    public NewEmptyJUnitTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    


    @Test
    public void testAuthenticateUser_SuccessfulAuthentication1() {
    User testUser = new User();
    testUser.setEmail("sam@gmail.com");
    testUser.setPassword("www");
    testUser.setUser_type("job seeker");

    boolean result = DBUtils.authenticateUser(testUser);
    System.out.println("Authentication Result: " + result);

    assertTrue(result);  // Change here to make the test fail
    
    //assertTrue(result);  // To make the test pass after coding is done
    //assertTrue(false);  // To make the test fail before coding is done (TDD)
    
    //OR
            
    //assertTrue(result);  // Change here to make the test pass after coding
    //assertFalse(result); // Change here to make the test fail before coding
    
    //After run file toggle below output button to switch to test result view
    }
    
    
//    @Test
//    public void testAddUser_SuccessfulAddition() {
//        User testUser = new User();
//        testUser.setUsername("testUser");
//        testUser.setContact_number(123456789);
//        testUser.setEmail("test@example.com");
//        testUser.setPassword("testPassword");
//        testUser.setUser_type("admin");
//
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.addUser(testUser);
//
//        //assertTrue(result); // Expecting successful addition PASS
//        assertTrue(result); 
//    }
    
    
    
//    @Test
//    public void testAddConsultant_Successful_Addition() {
//        Consultants testConsultant = new Consultants();
//        testConsultant.setDate("2023-01-01");
//        testConsultant.setTime("15:30:00");
//        testConsultant.setName("John Doe");
//
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.addConsultant(testConsultant);
//
//        assertTrue(result); // Expecting successful addition
//    }
    
    
    
//    @Test
//    public void testAddAppointment_SuccessfulAddition() {
//          // Instantiate your class
//        // Create a sample AppointmentData object for testing
//        AppointmentData testAppointment = new AppointmentData();
//        testAppointment.setFullName("John Doe");
//        testAppointment.setEmail("john@example.com");
//        testAppointment.setPhone("1234567890");
//        testAppointment.setConsultant("ConsultantName");
//        testAppointment.setStatus("Pending");
//
//        // Invoke the addAppointment method
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.addAppointment(testAppointment);
//
//        assertTrue(result);  // Expecting successful addition
//    }
    
    
    
//    @Test
//    public void testUpdateAppointment_Successful_Update() {
//   
//        // Create a sample AppointmentData object for testing
//        AppointmentData testAppointment = new AppointmentData();
//        testAppointment.setId(8);  // Provide an existing appointment ID for updating
//        testAppointment.setFullName("Updated Name");
//        testAppointment.setEmail("updated@example.com");
//        testAppointment.setPhone("9876543210");
//        testAppointment.setConsultant("Peterson");
//        testAppointment.setStatus("Completed");
//
//        // Test Successful Update
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.updateAppointment(testAppointment);
//        assertTrue(result);  // Expecting successful update
//    }
    
    
    
//    
//    @Test
//    public void testDeleteAppointmentById_Successful_Deletion() {
//        AppointmentData yourClassInstance = new AppointmentData();  // Instantiate your class
//
//        // Provide an existing appointment ID for deletion
//        int testAppointmentId = 9;
//
//        // Test Successful Deletion
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.deleteAppointmentById(testAppointmentId);
//        assertTrue(result);  // Expecting successful deletion
//    }

    
    
    
    
    // ****************************** ------ ********************************
    
    
    
    
    // UNSUCCESSFULL VALIDATIONS WHICH WILL PASS
    
    
//    @Test
//    public void testAddUser_Failure_Addition() {
//        User testUser = new User();
//        // Missing required fields intentionally to cause failure
//
//        DBUtils dbUtils = new DBUtils();
//        boolean result = dbUtils.addUser(testUser);
//
//        assertTrue(result); // Expecting failure in addition
//    }
    
    // UNSUCCESSFULL VALIDATIONS WHICH WILL PASS
    
//    @Test
//    public void testAuthenticateUser_UnsuccessfulAuthentication() {
//        // Provide data that does not match any user in the database
//        User testUser = new User();
//        testUser.setEmail("invalid@gmail.com");
//        testUser.setPassword("invalidPassword");
//        testUser.setUser_type("invalidUserType");
//
//        assertFalse(DBUtils.authenticateUser(testUser));
//    }
    
    
    
    
    // ****************************** ------ ********************************
    
}
