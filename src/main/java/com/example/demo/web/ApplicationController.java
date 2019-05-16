package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.dao.ApplicationRepository;
import com.example.demo.dao.DepartementRepository;
import com.example.demo.dao.DirectionRepository;
import com.example.demo.entities.Application;
import com.example.demo.entities.Departement;

@Controller
public class ApplicationController {
	@Autowired 
	private ApplicationRepository applicationRepository; 
	

	
	@RequestMapping(value="/app")
	public String app(Model model,
			@RequestParam(name="page", defaultValue="0")int page,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="mc2", defaultValue="")String mc2) {
		Page<Application> pageapplications=applicationRepository.chercher("%"+mc2+"%",new PageRequest(page,size));
		
		model.addAttribute("listapplications", pageapplications.getContent());
		int [] pages=new int[pageapplications.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",page);
		model.addAttribute("mc2",mc2);
		
		
		return "applications";		
	}

}
