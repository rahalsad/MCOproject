package com.example.demo.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


import com.example.demo.dao.SProgrammeRepository;
import com.example.demo.entities.SProgramme;

@Controller
public class SProgrammeController {
	@Autowired 
	private SProgrammeRepository sProgrammeRepository; 
	@RequestMapping(value="/prog")
	public String prog(Model model,
			@RequestParam(name="page", defaultValue="0")int page,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="mc4", defaultValue="")String mc4) {
		Page<SProgramme> pagesProgrammes=sProgrammeRepository.chercher("%"+mc4+"%",new PageRequest(page,size));
		
		model.addAttribute("listSProgrammes", pagesProgrammes.getContent());
		int [] pages=new int[pagesProgrammes.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",page);
		model.addAttribute("mc4",mc4);
		
		
		return "sProgrammes";		
	}
	@RequestMapping(value="/deleteprog",method=RequestMethod.GET)
	
    public String deleteprog(Long progId,String mc4,int page, int size) {
       sProgrammeRepository.deleteById(progId);
       return "redirect:/prog?page="+page+"&size="+size+"&mc4="+mc4;
       
    }
	@RequestMapping(value="/formprog",method=RequestMethod.GET)
	public String formSProgramme(Model model ) {
		model.addAttribute("sProgramme",new SProgramme());
		return "FormSProgramme"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/editprog",method=RequestMethod.GET)
	public String editprog(Model model ,Long progId) {
		SProgramme s=sProgrammeRepository.findById(progId).orElse(null);
		model.addAttribute("sProgramme",s);
		return "EditSProgramme"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/saveprog",method=RequestMethod.POST)
	public String saveprog(Model model ,@Valid SProgramme sProgramme,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "FormSProgramme";
		sProgrammeRepository.save(sProgramme);
		return "ConfirmationProg"; //LE NOM DE LA VUE.HTML
	
	}
}
