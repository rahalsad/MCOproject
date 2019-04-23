package com.example.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Fiche;



	public interface FicheRepository extends JpaRepository<Fiche , Long>{

		
}
