package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;

import com.example.demo.entities.Initiateur;
import com.example.demo.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	
	@Query("select i from Initiateur i where i.iniName like:x")
	public Page<Initiateur> chercher(@Param("x")String mc, Pageable pageable );

}





		
	
	  

