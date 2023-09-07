package com.webapplications.neverahassle.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapplications.neverahassle.model.Reminder;
import com.webapplications.neverahassle.service.ReminderService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/reminder")
public class ReminderController {
	@Autowired
	private ReminderService reminderservice;
	@PostMapping("/add")
	public String add(@RequestBody Reminder reminder) {
		reminderservice.saveReminder(reminder);
		return "new user added";
	}
}
