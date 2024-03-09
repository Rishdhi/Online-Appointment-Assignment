/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Classes;

/**
 *
 * @author rishi
 */
public class Consultants {
    

    
        public static Consultants createConsultant(int id, String date, String time, String name) {
        Consultants newConsultant = new Consultants();
        newConsultant.setId(id);
        newConsultant.setDate(date);
        newConsultant.setTime(time);
        newConsultant.setName(name);
        return newConsultant;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    private int id;
    private String date;
    private String time;
    private String name;
    
    
    
}
