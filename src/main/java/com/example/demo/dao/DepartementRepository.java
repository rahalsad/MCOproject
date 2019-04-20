package com.example.demo.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.entities.Departement;

public interface DepartementRepository extends JpaRepository<Departement, Long>{
	@Query("select p from Departement p where p.depName like:x")
	public Page<Departement> chercher(@Param("x")String mc2, Pageable pageable );
}
