
  package com.example.mco.web;
  
  import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired; import
  org.springframework.data.domain.Page; import
  org.springframework.data.domain.PageRequest; import
  org.springframework.stereotype.Controller; import
  org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import
  org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import
  org.springframework.web.bind.annotation.RequestParam;

import com.example.mco.dao.ApplicationRepository;
import com.example.mco.dao.DepartementRepository;
import com.example.mco.dao.DirectionRepository;
import com.example.mco.dao.InitiateurRepository;
import com.example.mco.entities.Application;
import com.example.mco.entities.Departement;
import com.example.mco.entities.FicheSuivi;
import com.example.mco.entities.Initiateur;
  
  @Controller public class ApplicationController {
  
	  @Autowired 
		private ApplicationRepository applicationRepository; 
		@RequestMapping(value="/app")
		public String app(Model model,
				@RequestParam(name="page", defaultValue="0")int p,
				@RequestParam(name="size", defaultValue="7")int s,
				@RequestParam(name="mc", defaultValue="")String mc) {
			Page<Application> pageapplications=applicationRepository.chercher("%"+mc+"%",new PageRequest(p,s));
			
			model.addAttribute("listApplications", pageapplications.getContent());
			int [] pages=new int[pageapplications.getTotalPages()];
			model.addAttribute("pages",pages);
			model.addAttribute("size",s);
			model.addAttribute("pageCourante",p);
			model.addAttribute("mc",mc);
			
			
			return "applications.html";		
		}
		@RequestMapping(value="/deleteApp",method=RequestMethod.GET)
		
	    public String deleteApp(Long appId,String mc,int page, int size) {
			applicationRepository.deleteById(appId);
	       return "redirect:/app?page="+page+"&size="+size+"&mc="+mc;
	       
	    }
		@RequestMapping(value="/formApp",method=RequestMethod.GET)
		public String formApplication(Model model ) {
			model.addAttribute("application",new Application());
			return "FormApplication.html"; //LE NOM DE LA VUE.HTML
		
		}

	/*
	 * @RequestMapping(value = "/editApp", method={RequestMethod.POST,
	 * RequestMethod.GET}) public String editApp(Model model, Long appId) {
	 * Application app = applicationRepository.findById(appId).orElse(null);
	 * model.addAttribute("application", app); return "EditApplication";
	 */
		//}
		@RequestMapping(value="/saveApp",method=RequestMethod.POST)
		public String saveApp(Model model ,@Valid Application application,
				BindingResult bindingResult) {
			if (bindingResult.hasErrors())
				return "FormApplication";
			applicationRepository.save(application);
			return "redirect:/app?"; //LE NOM DE LA VUE.HTML
		
		}
  
  
  }
 