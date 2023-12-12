/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Classes;

/**
 *
 * @author rishi
 */

import java.util.Date;

public class AppointmentData {
    private int jobSeekerId;
    private int consultantId;
    private Date appointmentTime;

    // Constructor

    public AppointmentData(int jobSeekerId, int consultantId, Date appointmentTime) {
        this.jobSeekerId = jobSeekerId;
        this.consultantId = consultantId;
        this.appointmentTime = appointmentTime;
    }

    // Getters and Setters

    public int getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(int jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }

    public int getConsultantId() {
        return consultantId;
    }

    public void setConsultantId(int consultantId) {
        this.consultantId = consultantId;
    }

    public Date getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(Date appointmentTime) {
        this.appointmentTime = appointmentTime;
    }
}

