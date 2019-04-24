
package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import org.springframework.validation.BindingResult;
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

@RequestMapping(value="/saveFiche",method=RequestMethod.POST)
public String saveFiche(Model model ,@Valid Fiche fiche,
		BindingResult bindingResult) {
	if (bindingResult.hasErrors())
		return "fiche";
	ficheRepository.save(fiche);
	return "confirmDemande"; //LE NOM DE LA VUE.HTML

}

}
