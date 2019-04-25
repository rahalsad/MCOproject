package com.example.demo.dao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Direction;

import com.example.demo.entities.FicheSuivi;



	public interface FicheSuiviRepository extends JpaRepository<FicheSuivi , Long>{

		@Query("select fs from FicheSuivi fs where fs.ref like:x")
		public Page<Direction> chercher(@Param("x")String mc5, Pageable pageable );
}
