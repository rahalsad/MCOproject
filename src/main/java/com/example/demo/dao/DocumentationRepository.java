package com.example.demo.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Application;
import com.example.demo.entities.Documentation;

public interface DocumentationRepository extends JpaRepository<Documentation, Long>{
	@Query("select dc from Documentation dc where dc.docName like:x")
	public Page<Documentation> chercher(@Param("x")String mc1, Pageable pageable );
	 
}
