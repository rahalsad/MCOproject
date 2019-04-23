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

import com.example.demo.dao.DirectionRepository;
import com.example.demo.entities.Direction;



@Controller
public class DirectionController {
	@Autowired 
	private DirectionRepository directionRepository; 
	@RequestMapping(value="/direct")
	public String direct(Model model,
			@RequestParam(name="page", defaultValue="0")int pag,
			@RequestParam(name="size", defaultValue="7")int siz,
			@RequestParam(name="mc1", defaultValue="")String mc1) {
		Page<Direction> pagedirections=directionRepository.chercher("%"+mc1+"%",new PageRequest(pag,siz));
		
		model.addAttribute("listDirections", pagedirections.getContent());
		int [] pages=new int[pagedirections.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",siz);
		model.addAttribute("pageCourante",pag);
		model.addAttribute("mc1",mc1);
		
		
		return "directions";		
	}
	@RequestMapping(value="/deletedir",method=RequestMethod.GET)
	
    public String deletedir(Long directId,String mc1,int page, int size) {
       directionRepository.deleteById(directId);
       return "redirect:/direct?page="+page+"&size="+size+"&mc1="+mc1;
       
    }
	@RequestMapping(value="/formdir",method=RequestMethod.GET)
	public String formDirection(Model model ) {
		model.addAttribute("direction",new Direction());
		return "FormDirection"; //LE NOM DE LA VUE.HTML
	
	}
	@RequestMapping(value="/editdir",method=RequestMethod.GET)
	public String editdir(Model model ,Long directId) {
		Direction d=directionRepository.findById(directId).orElse(null);
		model.addAttribute("direction",d);
		return "EditDirection"; //LE NOM DE LA VUE.HTML
	
	}
	
	@RequestMapping(value="/savedir",method=RequestMethod.POST)
	public String savedir(Model model ,@Valid Direction direction,
			BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "FormDirection";
		directionRepository.save(direction);
		return "ConfirmationDir"; //LE NOM DE LA VUE.HTML
	
	}
	
}
