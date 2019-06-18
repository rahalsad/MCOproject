package com.example.mco.dao;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mco.entities.FicheSuivi;



	public interface FicheSuiviRepository extends JpaRepository<FicheSuivi , Long>{

		//@Query("select fs from FicheSuivi fs where str(fs.NomDepart) like:x")
		//public Page<FicheSuivi> chercher(@Param("x")String mcf, Pageable pageable );
		@Query("select fs from FicheSuivi fs where fs.statut is null")
		public Page<FicheSuivi> separer( Pageable pageable );
		//@Query("select fs from FicheSuivi fs where fs.statut is not null")
		//public Page<FicheSuivi> separer2(Pageable pageable );
		
		
		
		@Query("select fs from FicheSuivi fs where fs.statut is not null and str(fs.NomDepart) like:x")
		public Page<FicheSuivi> separer3(@Param("x")String mc,Pageable pageable );
		
	
	  @Query("select fs from FicheSuivi fs where fs.type like :x and fs.tauxAvanc = :y")
	   public List<FicheSuivi> cat1(@Param("x") String mc,@Param("y") long taux);
	
	  @Query("select fs from FicheSuivi fs where fs.type like :x and fs.tauxAvanc != :y")
	   public List<FicheSuivi> cat2(@Param("x") String mc,@Param("y") long taux);
		

	  @Query("select fs from FicheSuivi fs where fs.NomDirection like :x and fs.tauxAvanc = :y")
	   public List<FicheSuivi> dir1(@Param("x") String mc,@Param("y") long taux);
	
	  @Query("select fs from FicheSuivi fs where fs.NomDirection like :x and fs.tauxAvanc != :y")
	   public List<FicheSuivi> dir2(@Param("x") String mc,@Param("y") long taux);
	
	 
}
