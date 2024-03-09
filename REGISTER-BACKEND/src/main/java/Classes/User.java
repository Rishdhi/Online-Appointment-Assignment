/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Classes;

/**
 *
 * @author rishi
 */
public class User {
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getContact_number() {
        return contact_number;
    }

    public void setContact_number(int contact_number) {
        this.contact_number = contact_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }


    private String username;
    private int contact_number;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    private int id;
    private String email;
    private String password;
    private String user_type;
    
    
    // FACTORY METHOD
    
        public static User createUser(int id, String username, int contact_number, String email, String password, String user_type) {
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setContact_number(contact_number);
        user.setEmail(email);
        user.setPassword(password);
        user.setUser_type(user_type);
        return user;
    }
        
        
        
        
    // Factory method for creating a User instance for authentication
        public static User createUserForAuthentication(String email, String password, String user_type) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setUser_type(user_type);
        return user;
    }

    

}
