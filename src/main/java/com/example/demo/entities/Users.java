package com.example.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity

public class Users implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	private String username;
	private String password;
	private String matricule;
	private String iniNumTel;
	private String depName;
	private String directName;
	private String iniEmail;
	private boolean active;

	@ManyToOne
	@JoinColumn(name = "role")
	private role role;

	public role getRole() {
		return role;
	}

	public void setRole(role role) {
		this.role = role;
	}

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(String username, String password, String matricule, String iniNumTel, String depName,
			String directName, String iniEmail, boolean active, role role) {
		super();
		this.username = username;
		this.password = password;
		this.matricule = matricule;
		this.iniNumTel = iniNumTel;
		this.depName = depName;
		this.directName = directName;
		this.iniEmail = iniEmail;
		this.active = active;
		this.role = role;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

	public String getIniNumTel() {
		return iniNumTel;
	}

	public void setIniNumTel(String iniNumTel) {
		this.iniNumTel = iniNumTel;
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

	public String getIniEmail() {
		return iniEmail;
	}

	public void setIniEmail(String iniEmail) {
		this.iniEmail = iniEmail;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
