package com.webapplications.neverahassle.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapplications.neverahassle.model.User;
import com.webapplications.neverahassle.service.userService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private userService userservice;
	@PostMapping("/add")
	public String add(@RequestBody User user) {
		userservice.saveUser(user);
		return "new user added";
	}
	
	
}
