package com.example.demo.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Application implements Serializable {
	@Id @GeneratedValue
	private Long appId;
	public String appName;
	@OneToMany(mappedBy="application" ,fetch=FetchType.LAZY)
	private Collection<SProgramme> sProgrammes;
	public Application() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getAppId() {
		return appId;
	}
	public void setAppId(Long appId) {
		this.appId = appId;
	}
	public String getAppName() {
		return appName;
	}
	public void setAppName(String appName) {
		this.appName = appName;
	}
	public Collection<SProgramme> getsProgrammes() {
		return sProgrammes;
	}
	public void setsProgrammes(Collection<SProgramme> sProgrammes) {
		this.sProgrammes = sProgrammes;
	}
	public Application(String appName) {
		super();
		this.appName = appName;
	}

}
