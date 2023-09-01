package com.webapplications.neverahassle.repository;
import com.webapplications.neverahassle.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository < User, String >{
	
}
