package com.example.demo.dao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.FicheSuivi;



	public interface FicheSuiviRepository extends JpaRepository<FicheSuivi , Long>{

		@Query("select fs from FicheSuivi fs where str(fs.ref) like:x")
		public Page<FicheSuivi> chercher(@Param("x")String mc5, Pageable pageable );
		@Query("select fs from FicheSuivi fs where fs.statut is null")
		public Page<FicheSuivi> separer( Pageable pageable );
		@Query("select fs from FicheSuivi fs where fs.statut is not null")
		public Page<FicheSuivi> separer2( Pageable pageable );
		
		@Query("select fs from FicheSuivi fs where fs.NomDirection = :x and fs.NomDepart = :y")
		public FicheSuivi findFicheByDepartNameAndDirectName(@Param("x")String NomDirection, @Param("y")String NomDepart);
		// db ghadi mzyan ?! ouii
		
	/*
	 * @Query("select fs from FicheSuivi fs where fs.statut=:'Rejet'")
	 *  public Page<FicheSuivi> decision( Pageable pageable );
	 */
}
