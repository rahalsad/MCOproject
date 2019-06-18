package com.example.mco.web;



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
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mco.dao.DepartementRepository;
import com.example.mco.dao.DirectionRepository;
import com.example.mco.entities.Departement;
import com.example.mco.entities.Direction;


@Controller
public class DepartementController {
	@Autowired 
	private DepartementRepository departementRepository; 
	
	@Autowired 
	private DirectionRepository directionR;
	
	@RequestMapping(value="/dep")
	public String dep(Model model,
			@RequestParam(name="page", defaultValue="0")int page,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="mc2", defaultValue="")String mc2) {
		Page<Departement> pagedepartements=departementRepository.chercher("%"+mc2+"%",new PageRequest(page,size));
		
		model.addAttribute("listDepartements", pagedepartements.getContent());
		int [] pages=new int[pagedepartements.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",page);
		model.addAttribute("mc2",mc2);
		
		
		return "departements";		
	}
	@RequestMapping(value="/deletedep",method=RequestMethod.GET)
	
    public String deletedep(Long depId,String mc2,int page, int size) {
       departementRepository.deleteById(depId);
       return "redirect:/dep?page="+page+"&size="+size+"&mc2="+mc2;
       
    }
	@RequestMapping(value="/formdep",method=RequestMethod.GET)
	public String formDepartement(Model model ) {
		model.addAttribute("departement",new Departement());
		model.addAttribute("directions",directionR.findAll());
		
		return "FormDepartement"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/editdep",method=RequestMethod.GET)
	public String editdep(Model model ,Long depId) {
		Departement p=departementRepository.findById(depId).orElse(null);
		model.addAttribute("departement",p);
		return "EditDepartement"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/savedep",method=RequestMethod.POST)
	public String savedep(Model model ,@Valid Departement departement,@RequestParam("directId") long id_dir, BindingResult bindingResult) { 
		if (bindingResult.hasErrors())
			return "FormDepartement";
		Direction d=directionR.findById(id_dir).orElse(null);
		departement.setDirection(d);
		departementRepository.save(departement);
		return "ConfirmationDep"; //LE NOM DE LA VUE.HTML
	
	}
	
	
	@RequestMapping(value="/directionByDd",method=RequestMethod.POST)
	@ResponseBody
	public String getDirection(@RequestParam("depId") long id_dep) { 
		
	
		Departement d=departementRepository.findById(id_dep).orElse(null);
		
		return d.getDirection().getDirectName();
	
	}
	
	
	
}

