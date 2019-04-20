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

import com.example.demo.dao.ApplicationRepository;
import com.example.demo.entities.Application;

@Controller

public class ApplicationController {
	@Autowired 
	private ApplicationRepository applicationRepository; 
	@RequestMapping(value="/app")
	public String app(Model model,
			@RequestParam(name="page", defaultValue="0")int pag,
			@RequestParam(name="size", defaultValue="7")int siz,
			@RequestParam(name="mc3", defaultValue="")String mc3) {
		Page<Application> pageapplications=applicationRepository.chercher("%"+mc3+"%",new PageRequest(pag,siz));
		
		model.addAttribute("listApplications", pageapplications.getContent());
		int [] pages=new int[pageapplications.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",siz);
		model.addAttribute("pageCourante",pag);
		model.addAttribute("mc3",mc3);
		
		
		return "applications";		
	}
	@RequestMapping(value="/deleteapp",method=RequestMethod.GET)
	
    public String deleteapp(Long appId,String mc3,int page, int size) {
       applicationRepository.deleteById(appId);
       return "redirect:/app?page="+page+"&size="+size+"&mc3="+mc3;
       
    }
	@RequestMapping(value="/formapp",method=RequestMethod.GET)
	public String formApplication(Model model ) {
		model.addAttribute("application",new Application());
		return "FormApplication"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/editapp",method=RequestMethod.GET)
	public String editapp(Model model ,Long appId) {
		Application a=applicationRepository.findById(appId).orElse(null);
		model.addAttribute("application",a);
		return "EditApplication"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/saveapp",method=RequestMethod.POST)
	public String saveapp(Model model ,@Valid Application application,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "FormApplication";
		applicationRepository.save(application);
		return "ConfirmationApp"; //LE NOM DE LA VUE.HTML
	
	}
}
