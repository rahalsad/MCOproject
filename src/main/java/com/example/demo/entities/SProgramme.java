package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class SProgramme {
	@Id @GeneratedValue
	 private Long progId;
	 private String libelle;
	 private String descriptif;
	 @ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="CODE_APP")
	 private Application application;
	public SProgramme(String libelle, String descriptif, Application application) {
		super();
		this.libelle = libelle;
		this.descriptif = descriptif;
		this.application = application;
	}
	public SProgramme() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getProgId() {
		return progId;
	}
	public void setProgId(Long progId) {
		this.progId = progId;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public String getDescriptif() {
		return descriptif;
	}
	public void setDescriptif(String descriptif) {
		this.descriptif = descriptif;
	}
	public Application getApplication() {
		return application;
	}
	public void setApplication(Application application) {
		this.application = application;
	}
}
