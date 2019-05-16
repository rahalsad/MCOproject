package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.dao.RoleRepository;
import com.example.demo.dao.UserRepository;
import com.example.demo.entities.Direction;
import com.example.demo.entities.Users;
import com.example.demo.entities.role;

@Controller
public class validController {
	
	@Autowired 
	private UserRepository userRepository; 
	
	@Autowired
	private RoleRepository roleRepository;
	
	
	@RequestMapping(value="/inscription")
	public String inscription(Model model,
			@RequestParam(name="page", defaultValue="0")int pag,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="mc1", defaultValue="")String mc1) {
		Page<Users> pU=userRepository.chercher("%"+mc1+"%",new PageRequest(pag,size));
		
		model.addAttribute("listInscription", pU.getContent());
		int [] pages=new int[pU.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",pag);
		model.addAttribute("mc1",mc1);
		
		
		return "ListInscrp.html";		
	}
	
@RequestMapping(value="/validateUser",method=RequestMethod.GET)
 public void validateUser(@RequestParam(name="userId") long id){
	
			Users user= userRepository.findById(id).orElse(null);
			
			user.setActive(true);
			
			role r= roleRepository.findByName("INITIATEUR");
			
			System.out.println("-----------------"+r.getId());
			
		//	user.setRole(roleRepository.findById(r.getId()).orElse(null));
			user.setRole(r);
			
			userRepository.flush();
			
			//roleRepository.flush();
			
			
		    //userRepository.flush();
	
	
}
	

	
	
@RequestMapping(value="/refus",method=RequestMethod.GET)
	
    public String refus(Long userId,String mc1,int page, int size) {
       userRepository.deleteById(userId);
       return "redirect:/ListInscrp.html?page="+page+"&size="+size+"&mc1="+mc1;
       
    }
	
}
