package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.validation.Valid;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMethod;
import com.example.demo.dao.FicheSuiviRepository;
import com.example.demo.entities.FicheSuivi;

@Controller

public class FicheSuiviController {
	@Autowired
	private FicheSuiviRepository ficheSuiviRepository; 
	@RequestMapping(value="/ficheSuivi",method=RequestMethod.GET)
	public String ficheSuivi(Model model ) {
		model.addAttribute("ficheSuivi",new FicheSuivi());
		return "ficheSuivi"; //LE NOM DE LA VUE.HTML

	}


@RequestMapping(value="/saveFiSui",method=RequestMethod.POST)
public String saveFiSui(Model model ,@Valid FicheSuivi ficheSuivi,
		BindingResult bindingResult) {
	if (bindingResult.hasErrors())
		return "ficheSuivi";
	ficheSuiviRepository.save(ficheSuivi);
	return "confirmFiSui"; //LE NOM DE LA VUE.HTML

}

}