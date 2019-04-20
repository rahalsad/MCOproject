package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class Initiateur implements Serializable{
	@Id @GeneratedValue
	private Long iniId;
	@NotEmpty 
	@Size(min=4,max=20)
	private String iniName;
	@NotEmpty
	@Size(min=4,max=20)
	private String iniPrenom;
	@NotEmpty
	@Size(min=4,max=40)
	private String iniEmail;
	
    private String iniNumTel;
	public Initiateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Initiateur(String iniName, String iniPrenom, String iniEmail, String iniNumTel) {
		super();
		this.iniName = iniName;
		this.iniPrenom = iniPrenom;
		this.iniEmail = iniEmail;
		this.iniNumTel = iniNumTel;
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
	
    

}
