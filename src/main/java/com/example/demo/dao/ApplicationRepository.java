package com.example.demo.dao;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Application;
import com.example.demo.entities.Direction;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
	@Query("select a from Application a where a.appName like:x")
	public Page<Application> chercher(@Param("x")String mc3, Pageable pageable );
}
