 package com.example.demo.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.example.demo.dao.UserRepository;
import com.example.demo.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
	public class UserService  {
	@Autowired
	private UserRepository userRepository ;
	//@Secured(value= {"ROLE_ADMIN"})
	@RequestMapping(value = "/saveUtilisateurs",method = RequestMethod.GET)
	public Users saveUtilisateur (Users u) {
		return userRepository.save(u);
	}
	
	//pour returner une page des utilisateurs
	//@Secured(value= {"ROLE_ADMIN","ROLE_UTILISATEUR"})
	@RequestMapping(value = "/utilisateurs")
	public Page<Users> listUtilisateurs(int page,int size){
		return userRepository.findAll(new PageRequest(page, size));
		
	}
	
	//permet returner l'utilisateur et ses roles qui est authentifier
	@RequestMapping(value="/getLogedUser")
	public Map<String, Object> getLogedser(HttpServletRequest httpServletRequest){
		HttpSession httpSession = httpServletRequest.getSession();
		SecurityContext securityContext = (SecurityContext)
				httpSession.getAttribute("SPRING_SECURITY_CONTEXT");
		String username = securityContext.getAuthentication().getName();
		String password = (String) securityContext.getAuthentication().getCredentials();
		List<String> role = new ArrayList<>();
		for(GrantedAuthority ga:securityContext.getAuthentication().getAuthorities()) {
				role.add(ga.getAuthority());
		}
		Map<String, Object> params = new HashMap<>();
		params.put("username", username);
		params.put("role", role);
		params.put("password", password);
		return params;
	}
	@RequestMapping(value="/")
	public String home(){
	return "redirect:/index";
	}
	
	
	/*@RequestMapping(value="/login")
	public String login(){
	return "login.html"}*/
	
}
