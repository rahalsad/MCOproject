package com.example.mco.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.mco.dao.InitiateurRepository;
import com.example.mco.dao.RoleRepository;
import com.example.mco.dao.UserRepository;
import com.example.mco.entities.Direction;
import com.example.mco.entities.Initiateur;
import com.example.mco.entities.Users;
import com.example.mco.entities.role;

@Controller
public class validController {
	
	@Autowired 
	private UserRepository userRepository; 
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private InitiateurRepository initiateurRepository;
	
	@RequestMapping(value="/inscription")
	public String inscription(Model model,
			@RequestParam(name="page", defaultValue="0")int pag,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="mc1", defaultValue="")String mc1) {
		Page<Users> pU=userRepository.afficher("%"+mc1+"%",new PageRequest(pag,size));
		
		model.addAttribute("listInscription", pU.getContent());
		int [] pages=new int[pU.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",pag);
		model.addAttribute("mc1",mc1);
		
		
		return "ListInscrp";		
	}
	
@RequestMapping(value="/validateUser",method=RequestMethod.GET)
 public String validateUser(@RequestParam(name="userId") long id,String mc1,int page, int size){
	
			Users user= userRepository.findById(id).orElse(null);
			
			
			
			user.setActive(true);
			
			role r= roleRepository.findByName("INITIATEUR");
			
			System.out.println("-----------------"+r.getId());
			
		//	user.setRole(roleRepository.findById(r.getId()).orElse(null));
			user.setRole(r);
			
		    Initiateur initiateur = new Initiateur();
		    initiateur.setIniId(user.getUserId());
		    initiateur.setUsername(user.getUsername());
		    initiateur.setIniEmail(user.getIniEmail());
		    initiateur.setIniName(user.getIniName());
		    initiateur.setIniPrenom(user.getIniPrenom());
		   
		
			initiateur.setMatricule(user.getMatricule());
			initiateur.setIniNumTel(user.getIniNumTel());
			initiateur.setDepName(user.getDepName());
			initiateur.setDirectName(user.getDirectName());
			

		    
		    
		    initiateurRepository.save(initiateur);
			userRepository.flush();
			
			return "confirmValid";
			
			//roleRepository.flush();
			
			
		    //userRepository.flush();
	
	
}
	

	
	
@RequestMapping(value="/refus",method=RequestMethod.GET)
	
    public String refus(Long userId,String mc1,int page, int size) {
       userRepository.deleteById(userId);
       return "redirect:/ListInscrp?page="+page+"&size="+size+"&mc1="+mc1;
       
    }
	
}
