package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Direction;
import com.example.demo.entities.Initiateur;
import com.example.demo.entities.role;


public interface RoleRepository extends JpaRepository<role, Long>{
	@Query("SELECT r FROM role r where r.role= :role")
	role findByName(@Param("role") String role );
	
}
