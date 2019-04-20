package com.example.demo.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.entities.SProgramme;

public interface SProgrammeRepository extends JpaRepository<SProgramme, Long>{
	@Query("select s from SProgramme s where s.libelle like:x")
	public Page<SProgramme> chercher(@Param("x")String mc4, Pageable pageable );
}
