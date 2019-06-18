package com.example.mco.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class FileInfo {
	@Id @GeneratedValue
	private Long id;
	private String filename;
	  private String url;
	  @ManyToOne
		@JoinColumn(name = "CODE_App")
		private Application application;
	public FileInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FileInfo(String filename, String url, Application application) {
		super();
		this.filename = filename;
		this.url = url;
		this.application = application;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Application getApplication() {
		return application;
	}
	public void setApplication(Application application) {
		this.application = application;
	}
	public FileInfo(String filename, Application application) {
		super();
		this.filename = filename;
		this.application = application;
	}
	public FileInfo(String filename, String url) {
		super();
		this.filename = filename;
		this.url = url;
	}
	
	 
}
