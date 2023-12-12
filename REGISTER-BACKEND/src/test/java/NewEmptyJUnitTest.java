/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */

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
    

//    @Test
//    public void testAuthenticateUser_SuccessfulAuthentication() {
//        User testUser = new User();
//        testUser.setEmail("samuel@gmail.com");
//        testUser.setPassword("www");
//        testUser.setUser_type("job seeker");
//
//        assertTrue(DBUtils.authenticateUser(testUser));
//    }

    @Test
    public void testAuthenticateUser_UnsuccessfulAuthentication() {
        // Provide data that does not match any user in the database
        User testUser = new User();
        testUser.setEmail("invalid@gmail.com");
        testUser.setPassword("invalidPassword");
        testUser.setUser_type("invalidUserType");

        assertFalse(DBUtils.authenticateUser(testUser));
    }
    
    
    @Test
    public void testAuthenticateUser_SuccessfulAuthentication() {
        User testUser = new User();
        testUser.setEmail("sam@gmail.com");
        testUser.setPassword("www");
        testUser.setUser_type("job seeker");

        boolean result = DBUtils.authenticateUser(testUser);
        System.out.println("Authentication Result: " + result);

        assertTrue(result);
    }
    
    
    
    @Test
public void testAuthenticateUser1_SuccessfulAuthentication1() {
    User testUser = new User();
    testUser.setEmail("sam@gmail.com");
    testUser.setPassword("www");
    testUser.setUser_type("job seeker");

    boolean result = DBUtils.authenticateUser(testUser);
    System.out.println("Authentication Result: " + result);

    assertTrue(result);  // Change here to make the test fail
}
    
}
