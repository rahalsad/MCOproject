package com.example.demo.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
@Entity
public class Application implements Serializable{
	@Id @GeneratedValue
	private Long appId;
	private String appName;
	@OneToMany(mappedBy="application" ,fetch=FetchType.LAZY)
	private Collection<Documentation> documentation;
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
	public Collection<Documentation> getDocumentation() {
		return documentation;
	}
	public void setDocumentation(Collection<Documentation> documentation) {
		this.documentation = documentation;
	}
	public Application(String appName, Collection<Documentation> documentation) {
		super();
		this.appName = appName;
		this.documentation = documentation;
	}
	public Application() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
