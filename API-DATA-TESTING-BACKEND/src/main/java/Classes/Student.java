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
    private String branch;

    // Default Constructor
    public Student() {

    }

    // Constructor with all properties
    public Student(int id, String name, String college, String branch) {
        this.id = id;
        this.name = name;
        this.college = college;
        this.branch = branch;
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

    //Getter for branch
    public String getBranch() {
        return branch;
    }

    // Setter for branch
    public void setBranch(String branch) {
        this.branch = branch;
    }

    @Override
    public String toString() {
        return "Student{"
                + "id=" + id
                + ", name='" + name + '\''
                + ", college='" + college + '\''
                + ", branch='" + branch + '\''
                + '}';
    }

}
