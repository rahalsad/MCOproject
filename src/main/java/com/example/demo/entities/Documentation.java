package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Documentation implements Serializable{
	@Id @GeneratedValue
	private Long docId;
	private String docName;
	@ManyToOne
	@JoinColumn(name = "CODE_APP")
	private Application application;
	public Documentation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Documentation(String docName, Application application) {
		super();
		this.docName = docName;
		this.application = application;
	}
	public Long getDocId() {
		return docId;
	}
	public void setDocId(Long docId) {
		this.docId = docId;
	}
	public String getDocName() {
		return docName;
	}
	public void setDocName(String docName) {
		this.docName = docName;
	}
	public Application getApplication() {
		return application;
	}
	public void setApplication(Application application) {
		this.application = application;
	}
	

}
