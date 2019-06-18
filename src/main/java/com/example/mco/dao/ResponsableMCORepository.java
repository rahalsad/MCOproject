package com.example.mco.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mco.entities.ResponsableMCO;

public interface ResponsableMCORepository extends JpaRepository<ResponsableMCO, Long>{
	@Query("select r from ResponsableMCO r where r.resName like:x")
	public Page<ResponsableMCO> chercher(@Param("x")String mc, Pageable pageable );
}
