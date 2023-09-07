package com.webapplications.neverahassle.repository;
import com.webapplications.neverahassle.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReminderRepository extends JpaRepository <User, String>{

	Reminder save(Reminder reminder);

}
