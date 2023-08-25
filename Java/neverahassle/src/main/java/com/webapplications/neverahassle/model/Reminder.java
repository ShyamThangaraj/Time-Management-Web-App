package com.webapplications.neverahassle.model;

public class Reminder {
	private String date;
	private String reminder;
	private String time;
	private String reminderTag;
	
	public Reminder(String date, String reminder, String time, String reminderTag) {
		this.date = date;
		this.time = time;
		this.reminderTag = reminderTag;
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

}
