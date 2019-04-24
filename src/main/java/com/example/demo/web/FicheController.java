package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.Valid;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;


import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.dao.FicheRepository;

import com.example.demo.entities.Fiche;


@Controller

public class FicheController {
	@Autowired
	private FicheRepository ficheRepository; 
	
	@RequestMapping(value="/fiche",method=RequestMethod.GET)
	public String fiche(Model model ) {
		model.addAttribute("fiche",new Fiche());
		return "fiche"; //LE NOM DE LA VUE.HTML
	
	}
	

	@RequestMapping(value="/ListDemandes")
	public String fiche(Model model,
			@RequestParam(name="page", defaultValue="0")int p,
			@RequestParam(name="size", defaultValue="7")int s,
			@RequestParam(name="motcle", defaultValue="")String motcle) {
		Page<Fiche> pageDemandes=ficheRepository.chercher("%"+motcle+"%",new PageRequest(p,s));
		
		model.addAttribute("listDemandes", pageDemandes.getContent());
		int [] pages=new int[pageDemandes.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",s);
		model.addAttribute("pageCourante",p);
		model.addAttribute("motcle",motcle);
		
		
		return "ListDemandes";		
	}
	

@RequestMapping(value="/saveFiche",method=RequestMethod.POST)
public String saveFiche(Model model ,@Valid Fiche fiche,
		BindingResult bindingResult) {
	
	if (bindingResult.hasErrors())
		return "fiche";
	SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
    Date date = new Date(); 
    fiche.setDateEnvoi(formatter.format(date));
    
	ficheRepository.save(fiche);
	
	return "confirmDemande"; //LE NOM DE LA VUE.HTML

}
	
}
