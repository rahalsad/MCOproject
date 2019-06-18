
package com.example.mco.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class Documentation implements Serializable {

	@Id

	@GeneratedValue
	private Long docId;
	private String docName;
	private String pathD;

	@ManyToOne

	@JoinColumn(name = "CODE_APP")
	private Application application;

	public Documentation() {
		super();

	}

	public Documentation(String docName, String pathD, Application application) {
		super();
		this.docName = docName;
		this.pathD = pathD;
		this.application = application;
	}

	public Documentation(String docName, String type, byte[] data) {
		super();
		this.docName = docName;
		this.pathD = pathD;

	}

	public Documentation(String docName) {
		super();
		this.docName = docName;

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

	public String getPathD() {
		return pathD;
	}

	public void setPathD(String pathD) {
		this.pathD = pathD;
	}

	


	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

}
