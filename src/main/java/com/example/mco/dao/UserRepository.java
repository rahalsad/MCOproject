package com.example.mco.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;

import com.example.mco.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	
	@Query("select u from Users u where active=0 and str(u.userId) like:x")
	public Page<Users> afficher(@Param("x")String mc, Pageable pageable);
	
	@Query("select u from Users u where u.active = 1")
	public Page<Users> valider(Pageable pageable );
	
	@Query("select u from Users u where u.role=129 ")
	public Page<Users> trans(Pageable pageable );
/*	
	@Query("select u from Users u where u.username=:x")
	public Page<Users> findByUsername(@Param("x") String username,Pageable pageable);*/

}





		
	
	  

