package com.example.demo.dao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.entities.Fiche;



	public interface FicheRepository extends JpaRepository<Fiche , Long>{
		@Query("select f from Fiche f where str(f.id) like:x")
		public Page<Fiche> chercher(@Param("x")String motcle, Pageable pageable );
		
}
