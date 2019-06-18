
  package com.example.mco.dao;
  
  
  
  import org.springframework.data.domain.Page; import
  org.springframework.data.domain.Pageable; import
  org.springframework.data.jpa.repository.JpaRepository; import
  org.springframework.data.jpa.repository.Query; import
  org.springframework.data.repository.query.Param;

import com.example.mco.entities.Application;
import com.example.mco.entities.Departement;

  
  
  
  public interface ApplicationRepository extends JpaRepository<Application, Long>{
		@Query("select app from Application app where app.appName like:x")
		public Page<Application> chercher(@Param("x")String mc, Pageable pageable );
		
//		@Query("select app from Application app where app ")
		public Application findByappName(String appName);
  
  }