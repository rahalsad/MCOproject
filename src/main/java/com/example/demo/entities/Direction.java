package com.example.demo.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Direction implements Serializable {
	@Id @GeneratedValue
	private Long directId;
	private String directName;
	private String directorName;
//	@OneToMany(mappedBy="direction" ,fetch=FetchType.LAZY)
//	private Collection<Departement> departements;
	@OneToMany(mappedBy="direction" ,fetch=FetchType.LAZY)
	private Collection<FicheSuivi> ficheSuivis;
	public Direction(String directName, String directorName) {
		super();
		this.directName = directName;
		this.directorName = directorName;
	}
	public Direction() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getDirectId() {
		return directId;
	}
	public void setDirectId(Long directId) {
		this.directId = directId;
	}
	public String getDirectName() {
		return directName;
	}
	public void setDirectName(String directName) {
		this.directName = directName;
	}
	public String getDirectorName() {
		return directorName;
	}
	public void setDirectorName(String directorName) {
		this.directorName = directorName;
	}
	/*
	public Collection<Departement> getDepartements() {
		return departements;
	}
	public void setDepartements(Collection<Departement> departements) {
		this.departements = departements;
	}
	*/
	@Override
	public String toString() {
		return "Direction [directId=" + directId + ", directName=" + directName + ", directorName=" + directorName
				+ ", ficheSuivis=" + ficheSuivis + "]";
	}

	

}
