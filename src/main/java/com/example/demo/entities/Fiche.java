<<<<<<< HEAD
package com.example.demo.entities;

import java.io.Serializable;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Fiche implements Serializable  {
	/**
	 * 
	 */

	@Id @GeneratedValue 
	private Long id;
	private String iniName;
	
	private String NomDirection; 
	private String NomDepart;
	private String NomApplication;
	private String intituleMaintenance;
	 @DateTimeFormat(pattern = "dd/MM/yyyy")
	  // This is for bind Date with @ModelAttribute
	    @Temporal(TemporalType.DATE)
	    @Column(name = "inc_date")

	 	private Date dateEnvoi;
	 	private Date dateModif;

	 	public Fiche() {
			super();
			}
			// TODO Auto-generated constructor stub

	 	public Fiche(String iniName, String nomDirection, String nomDepart, String nomApplication,
				String intituleMaintenance, Date dateEnvoi, Date dateModif) {
			super();
			this.iniName = iniName;
			
			NomDirection = nomDirection;
			NomDepart = nomDepart;
			NomApplication = nomApplication;
			this.intituleMaintenance = intituleMaintenance;
			this.dateEnvoi = dateEnvoi;
			this.dateModif = dateModif;
		}


	 	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getIniName() {
		return iniName;
	}
	public void setIniName(String iniName) {
		this.iniName = iniName;
	}
	
	
	public String getNomDirection() {
		return NomDirection;
	}
	public void setNomDirection(String nomDirection) {
		NomDirection = nomDirection;
	}
	public String getNomDepart() {
		return NomDepart;
	}
	public void setNomDepart(String nomDepart) {
		NomDepart = nomDepart;
	}
	public String getNomApplication() {
		return NomApplication;
	}
	public void setNomApplication(String nomApplication) {
		NomApplication = nomApplication;
	}
	public String getIntituleMaintenance() {
		return intituleMaintenance;
	}
	public void setIntituleMaintenance(String intituleMaintenance) {
		this.intituleMaintenance = intituleMaintenance;
	}
	public Date getDateEnvoi() {
		return dateEnvoi;
	}
	public void setDateEnvoi(Date dateEnvoi) {
		this.dateEnvoi = dateEnvoi;
	}
	public Date getDateModif() {
		return dateModif;
	}
	public void setDateModif(Date dateModif) {
		this.dateModif = dateModif;
	}
=======
package com.example.demo.entities;

import java.io.Serializable;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Fiche implements Serializable  {
	/**
	 * 
	 */
	
	@Id @GeneratedValue 
	private Long id;
	private String iniName;
	private String iniPrenom;
	private String NomDirection; 
	private String NomDepart;
	private String NomApplication;
	private String intituleMaintenance;
	 @DateTimeFormat(pattern = "dd/MM/yyyy")
	  // This is for bind Date with @ModelAttribute
	    @Temporal(TemporalType.DATE)
	    @Column(name = "inc_date")
	  
	 	private Date dateEnvoi;
	 	private Date dateModif;
	 	
	 	public Fiche() {
			super();
			}
			// TODO Auto-generated constructor stub
	 	
	 	public Fiche(String iniName, String iniPrenom, String nomDirection, String nomDepart, String nomApplication,
				String intituleMaintenance, Date dateEnvoi, Date dateModif) {
			super();
			this.iniName = iniName;
			this.iniPrenom = iniPrenom;
			NomDirection = nomDirection;
			NomDepart = nomDepart;
			NomApplication = nomApplication;
			this.intituleMaintenance = intituleMaintenance;
			this.dateEnvoi = dateEnvoi;
			this.dateModif = dateModif;
		}
	 	
	 	
	 	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getIniName() {
		return iniName;
	}
	public void setIniName(String iniName) {
		this.iniName = iniName;
	}
	public String getIniPrenom() {
		return iniPrenom;
	}
	public void setIniPrenom(String iniPrenom) {
		this.iniPrenom = iniPrenom;
	}
	public String getNomDirection() {
		return NomDirection;
	}
	public void setNomDirection(String nomDirection) {
		NomDirection = nomDirection;
	}
	public String getNomDepart() {
		return NomDepart;
	}
	public void setNomDepart(String nomDepart) {
		NomDepart = nomDepart;
	}
	public String getNomApplication() {
		return NomApplication;
	}
	public void setNomApplication(String nomApplication) {
		NomApplication = nomApplication;
	}
	public String getIntituleMaintenance() {
		return intituleMaintenance;
	}
	public void setIntituleMaintenance(String intituleMaintenance) {
		this.intituleMaintenance = intituleMaintenance;
	}
	public Date getDateEnvoi() {
		return dateEnvoi;
	}
	public void setDateEnvoi(Date dateEnvoi) {
		this.dateEnvoi = dateEnvoi;
	}
	public Date getDateModif() {
		return dateModif;
	}
	public void setDateModif(Date dateModif) {
		this.dateModif = dateModif;
	}
		
		

		
	 	
>>>>>>> branch 'master' of https://github.com/rahalsad/MCOproject
}