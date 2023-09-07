package com.webapplications.neverahassle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapplications.neverahassle.model.Reminder;

import com.webapplications.neverahassle.repository.*;

@Service
public class ReminderServiceImplementation implements ReminderService{

	@Autowired
	private ReminderRepository reminderrepository; 
	@Override
	
	public Reminder saveReminder(Reminder reminder) {
		// TODO Auto-generated method stub
		return reminderrepository.save(reminder);
	}
}
