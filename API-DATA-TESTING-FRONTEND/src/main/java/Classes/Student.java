/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Classes;

/**
 *
 * @author rishi
 */
public class Student {
    

    private int id;
    private String name;
    private String college;

    // Default Constructor
    public Student() {
        // Default constructor
    }

    // Constructor with all properties
    public Student(int id, String name, String college) {
        this.id = id;
        this.name = name;
        this.college = college;
    }

    // Getter for id
    public int getId() {
        return id;
    }

    // Setter for id
    public void setId(int id) {
        this.id = id;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for college
    public String getCollege() {
        return college;
    }

    // Setter for college
    public void setCollege(String college) {
        this.college = college;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", college='" + college + '\'' +
                '}';
    }


    
    
}
