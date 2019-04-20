package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ResponsableMCO implements Serializable{
	@Id @GeneratedValue
	private Long resId;
    private String resName;
	private String resPrenom;
	private String resEmail;
    private String resNumTel;
	public ResponsableMCO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ResponsableMCO(String resName, String resPrenom, String resEmail, String resNumTel) {
		super();
		this.resName = resName;
		this.resPrenom = resPrenom;
		this.resEmail = resEmail;
		this.resNumTel = resNumTel;
	}
	public Long getResId() {
		return resId;
	}
	public void setResId(Long resId) {
		this.resId = resId;
	}
	public String getResName() {
		return resName;
	}
	public void setResName(String resName) {
		this.resName = resName;
	}
	public String getResPrenom() {
		return resPrenom;
	}
	public void setResPrenom(String resPrenom) {
		this.resPrenom = resPrenom;
	}
	public String getResEmail() {
		return resEmail;
	}
	public void setResEmail(String resEmail) {
		this.resEmail = resEmail;
	}
	public String getResNumTel() {
		return resNumTel;
	}
	public void setResNumTel(String resNumTel) {
		this.resNumTel = resNumTel;
	}
    
    

}
