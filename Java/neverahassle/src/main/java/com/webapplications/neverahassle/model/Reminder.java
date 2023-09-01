package com.webapplications.neverahassle.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class Reminder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	
	private String date;
	private String reminder;
	private String time;
	private String reminderTag;
	private String userEmail;
	
	public Reminder(String userEmail, String date, String reminder, String time, String reminderTag) {
		this.date = date;
		this.time = time;
		this.reminderTag = reminderTag;
		this.setUserEmail(userEmail);
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getReminder() {
		return reminder;
	}
	public void setReminder(String reminder) {
		this.reminder = reminder;
	}
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	public String getReminderTag() {
		return reminderTag;
	}
	public void setReminderTag(String reminderTag) {
		this.reminderTag = reminderTag;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

}
