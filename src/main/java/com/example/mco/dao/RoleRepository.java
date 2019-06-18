package com.example.mco.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mco.entities.Direction;
import com.example.mco.entities.Initiateur;
import com.example.mco.entities.role;


public interface RoleRepository extends JpaRepository<role, Long>{
	@Query("SELECT r FROM role r where r.role= :role")
	role findByName(@Param("role") String role );
	
}
