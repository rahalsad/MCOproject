
package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.demo.dao.FicheRepository;

import com.example.demo.entities.Fiche;


@Controller

public class FicheController {
	@Autowired
	private FicheRepository ficheRepository; 
	
	
	@RequestMapping(value="/fiche",method=RequestMethod.GET)
	public String fiche(Model model ) {
		model.addAttribute("fiche",new Fiche());
		return "fiche"; //LE NOM DE LA VUE.HTML
	
	}
	

	@RequestMapping(value="/ListDemandes")
	public String fiche(Model model,
			@RequestParam(name="page", defaultValue="0")int page,
			@RequestParam(name="size", defaultValue="7")int size,
			@RequestParam(name="motcle", defaultValue="")String motcle) {
		Page<Fiche> pageDemandes=ficheRepository.chercher("%"+motcle+"%",new PageRequest(page,size));
		
		model.addAttribute("listDemandes", pageDemandes.getContent());
		int [] pages=new int[pageDemandes.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",page);
		model.addAttribute("motcle",motcle);
		
		
		return "ListDemandes";		
	}
	




	@Autowired
    private JavaMailSender sender;
    @RequestMapping("/envoyer")
    @ResponseBody
    String envoyer() {
        try {
            sendEmail();
         
            return "Email Sent!";
        }catch(Exception ex) {
            return "Error in sending email: "+ex;
        }
    }
 
    private void sendEmail() throws Exception{
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
       
        helper.setTo("sadiqi.fatima.ezzahra@gmail.com");
        helper.setText("vous avez une nouvelle demande");
        helper.setSubject("Demande de maintenance");
         
        sender.send(message);
    }



	
	
@RequestMapping(value="/saveFiche",method=RequestMethod.POST)

public String saveFiche(Model model ,@Valid Fiche fiche,
		BindingResult bindingResult) throws Exception {
	if (bindingResult.hasErrors())
		return "fiche";
	SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
    Date date = new Date(); 
    fiche.setDateEnvoi(formatter.format(date));
    
    ficheRepository.save(fiche);
    sendEmail();
    return "confirmDemande";
    
    

	 //LE NOM DE LA VUE.HTML


}
}


