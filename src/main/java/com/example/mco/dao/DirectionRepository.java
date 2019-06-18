package com.example.mco.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mco.entities.Direction;
import com.example.mco.entities.Initiateur;


public interface DirectionRepository extends JpaRepository<Direction, Long>{
	@Query("select d from Direction d where d.directName like:x")
	public Page<Direction> chercher(@Param("x")String mc1, Pageable pageable );
	
	@Query("select d from Direction d where d.directId=:x")
	public Direction findByDirectId(@Param("x") Long id);
	
}
