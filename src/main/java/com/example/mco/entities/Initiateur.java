package com.example.mco.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class Initiateur implements Serializable{
	@Id @GeneratedValue
	private Long iniId;
	
	
	private String iniName;
	
	private String iniPrenom;
	
	//@Email(message = "Email invalide")
	private String iniEmail;
	@Size(max=15,min=10 ,message = "La taille deverait être entre 10 et 15")
    private String iniNumTel;
	
	private String username;
	private String password;
	private String matricule;
	private String depName;
	private String directName;
	private boolean active;
	
	public Initiateur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Initiateur(String iniName,
			String iniPrenom,
			 String iniEmail,
			 String iniNumTel,
			String username, String password, String matricule, String depName, String directName, boolean active) {
		super();
		this.iniName = iniName;
		this.iniPrenom = iniPrenom;
		this.iniEmail = iniEmail;
		this.iniNumTel = iniNumTel;
		this.username = username;
		this.password = password;
		this.matricule = matricule;
		this.depName = depName;
		this.directName = directName;
		this.active = active;
	}

	public Long getIniId() {
		return iniId;
	}

	public void setIniId(Long iniId) {
		this.iniId = iniId;
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

	public String getIniEmail() {
		return iniEmail;
	}

	public void setIniEmail(String iniEmail) {
		this.iniEmail = iniEmail;
	}

	public String getIniNumTel() {
		return iniNumTel;
	}

	public void setIniNumTel(String iniNumTel) {
		this.iniNumTel = iniNumTel;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getDepName() {
		return depName;
	}

	public void setDepName(String depName) {
		this.depName = depName;
	}

	public String getDirectName() {
		return directName;
	}

	public void setDirectName(String directName) {
		this.directName = directName;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	
    

}
