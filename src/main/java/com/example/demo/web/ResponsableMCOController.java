package com.example.demo.web;

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

import com.example.demo.dao.ResponsableMCORepository;
import com.example.demo.entities.ResponsableMCO;

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




@Controller
public class ResponsableMCOController {
	@Autowired 
	private ResponsableMCORepository responsableMCORepository; 
	@RequestMapping(value="/respo")
	public String respo(Model model,
			@RequestParam(name="page", defaultValue="0")int pa,
			@RequestParam(name="size", defaultValue="5")int si,
			@RequestParam(name="mcl", defaultValue="")String mcl) {
		Page<ResponsableMCO> pageresponsableMCOs=responsableMCORepository.chercher("%"+mcl+"%",new PageRequest(pa,si));
		
		model.addAttribute("listResponsableMCOs", pageresponsableMCOs.getContent());
		int [] pages=new int[pageresponsableMCOs.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",si);
		model.addAttribute("pageCourante",pa);
		model.addAttribute("mcl",mcl);
		
		
		return "responsableMCOs.html";		
	}
	@RequestMapping(value="/deleteres",method=RequestMethod.GET)
	
    public String deleteres(Long resId,String mcl,int page, int size) {
       responsableMCORepository.deleteById(resId);
       return "redirect:/respo.html?page="+page+"&size="+size+"&mcl="+mcl;
       
    }
	@RequestMapping(value="/formres",method=RequestMethod.GET)
	public String formResponsableMCO(Model model ) {
		model.addAttribute("responsableMCO",new ResponsableMCO());
		return "FormResponsableMCO.html"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/editres",method=RequestMethod.GET)
	public String editres(Model model ,Long resId) {
		ResponsableMCO r=responsableMCORepository.findById(resId).orElse(null);
		model.addAttribute("responsableMCO",r);
		return "EditResponsableMCO.html"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/saveres",method=RequestMethod.POST)
	public String saveres(Model model ,@Valid ResponsableMCO responsableMCO,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "FormResponsableMCO.html";
		responsableMCORepository.save(responsableMCO);
		
		return "ConfirmationRes.html"; //LE NOM DE LA VUE.HTML
	
	}
}
