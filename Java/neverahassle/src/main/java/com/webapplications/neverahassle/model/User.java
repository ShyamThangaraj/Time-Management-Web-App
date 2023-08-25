package com.webapplications.neverahassle.model;

public class User {
	private String email;
	private String password;
	private String birthday;
	private int phone;
	
	public User(String email, String password, String birthday, int phone) {
		this.setEmail(email);
		this.setPassword(password);
		this.setBirthday(birthday);
		this.setPhone(phone);
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

}
