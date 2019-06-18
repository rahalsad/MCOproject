package com.example.mco.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mco.entities.Initiateur;


public interface InitiateurRepository extends JpaRepository<Initiateur, Long>{
	@Query("select i from Initiateur i where i.iniName like:x")
	public Page<Initiateur> chercher(@Param("x")String mc, Pageable pageable );
	
}
