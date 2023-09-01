package com.webapplications.neverahassle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapplications.neverahassle.model.User;

import com.webapplications.neverahassle.repository.*;

@Service
public class userServiceImplementation implements userService{

	@Autowired
	private UserRepository userrepository; 
	@Override
	
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		return userrepository.save(user);
	}
	
}
