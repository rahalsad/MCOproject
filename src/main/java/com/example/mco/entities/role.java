package com.example.mco.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class role implements Serializable {
	
	
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Id;
    
    @OneToMany(mappedBy= "role", cascade = CascadeType.ALL)
    List<Users> users;
    
    

    public List<Users> getUsers() {
		return users;
	}


	public void setUsers(List<Users> users) {
		this.users = users;
	}


	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}

	private String role;
	

	

	public role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public role(String role) {
		super();
		this.role = role;
		
	}

	
	
   
    

}
