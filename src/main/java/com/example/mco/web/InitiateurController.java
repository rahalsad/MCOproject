 package com.example.mco.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.mco.dao.InitiateurRepository;
import com.example.mco.entities.Initiateur;


@Controller
public class InitiateurController {
	@Autowired 
	private InitiateurRepository initiateurRepository; 
	@RequestMapping(value="/init")
	public String index(Model model,
			@RequestParam(name="page", defaultValue="0")int p,
			@RequestParam(name="size", defaultValue="7")int s,
			@RequestParam(name="mc", defaultValue="")String mc) {
		Page<Initiateur> pageinitiateurs=initiateurRepository.chercher("%"+mc+"%",new PageRequest(p,s));
		
		model.addAttribute("listInitiateurs", pageinitiateurs.getContent());
		int [] pages=new int[pageinitiateurs.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",s);
		model.addAttribute("pageCourante",p);
		model.addAttribute("mc",mc);
		
		
		return "initiateurs.html";		
	}
	@RequestMapping(value="/delete",method=RequestMethod.GET)
	
    public String delete(Long iniId,String mc,int page, int size) {
       initiateurRepository.deleteById(iniId);
       return "redirect:/init?page="+page+"&size="+size+"&mc="+mc;
       
    }
	@RequestMapping(value="/form",method=RequestMethod.GET)
	public String formInitiateur(Model model ) {
		model.addAttribute("initiateur",new Initiateur());
		return "FormInitiateur.html"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/edit",method=RequestMethod.GET)
	public String edit(Model model ,Long iniId) {
		Initiateur i=initiateurRepository.findById(iniId).orElse(null);
		model.addAttribute("initiateur",i);
		return "EditInitiateur.html"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/save",method=RequestMethod.POST)
	public String save(Model model ,@Valid Initiateur initiateur,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "FormInitiateur.html";
		initiateurRepository.save(initiateur);
		return "Confirmation.html"; //LE NOM DE LA VUE.HTML
	
	}
}
