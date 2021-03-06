package com.example.mco.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;



@Entity
public class Departement implements Serializable {
	@Id
	@GeneratedValue
	private Long depId;
	
	private String depName;
	
	private String directDep;
	@ManyToOne
	@JoinColumn(name = "CODE_DIR")
	private Direction direction;

	public Departement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Departement(String depName, String directDep, Direction direction) {
		super();
		this.depName = depName;
		this.directDep = directDep;
		this.direction = direction;
	}

	public Long getDepId() {
		return depId;
	}

	public void setDepId(Long depId) {
		this.depId = depId;
	}

	public String getDepName() {
		return depName;
	}

	public void setDepName(String depName) {
		this.depName = depName;
	}

	public String getDirectDep() {
		return directDep;
	}

	public void setDirectDep(String directDep) {
		this.directDep = directDep;
	}

	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}

	@Override
	public String toString() {
		return "Departement [depId=" + depId + ", depName=" + depName + ", directDep=" + directDep + ", direction="
				+ direction.getDirectId() + "]";
	}

}
