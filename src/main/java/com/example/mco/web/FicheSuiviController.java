package com.example.mco.web;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mco.dao.ApplicationRepository;
import com.example.mco.dao.DepartementRepository;
import com.example.mco.dao.DirectionRepository;
import com.example.mco.dao.FicheSuiviRepository;
import com.example.mco.dao.ResponsableMCORepository;
import com.example.mco.entities.Application;
import com.example.mco.entities.Departement;
import com.example.mco.entities.Direction;
import com.example.mco.entities.FicheSuivi;
import com.example.mco.entities.ResponsableMCO;

@Controller
public class FicheSuiviController {
	@Autowired
	private FicheSuiviRepository ficheSuiviRepository;

	@Autowired
	private DepartementRepository departementR;

	@Autowired
	private DirectionRepository directionRepository;
	@Autowired
	private ResponsableMCORepository responsableMCORepository;
	@Autowired
	private ApplicationRepository applicationRepository;

	// controlleur cote Responsable mco
	@RequestMapping(value = "/ficheList")
	public String ficheList(Model model,
			@RequestParam(name="page", defaultValue="0")int page,
			@RequestParam(name="size", defaultValue="3")int size,
			@RequestParam(name="mc", defaultValue="")String mc) {
		Page<FicheSuivi> pageficheSuivis=ficheSuiviRepository
				.separer3("%"+mc+"%",new PageRequest(page,size));
		        
		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int [] pages=new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages",pages);
		model.addAttribute("size",size);
		model.addAttribute("pageCourante",page);
		model.addAttribute("mc",mc);

		
		//Page<FicheSuivi> pageficheSuiviss=ficheSuiviRepository.separer2(new PageRequest(pagef,sizef));
		//model.addAttribute("listFicheSuivis", pageficheSuiviss.getContent());
		
		return "historiqueFiche";

	}

	// controlleur cote Responsable mco
	@RequestMapping(value = "/listDemande")
	public String listDemande(Model model,

			@RequestParam(name = "page", defaultValue = "0") int page,

			@RequestParam(name = "size", defaultValue = "4") int size

			) {
		
		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.separer( new PageRequest(page, size));
		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		return "ListDemandes";

	}//try it again

	// controlleur cote Responsable mco

	@RequestMapping(value = "/deleteFiSui", method = RequestMethod.GET)

	public String deleteFiSui(Long ref, String mc, int page, int size) {
		ficheSuiviRepository.deleteById(ref);
		return "redirect:/ficheList?page=" + page + "&size=" + size + "&mc=" + mc;

	}



	@RequestMapping(value = "/fiche", method = RequestMethod.GET)
	public String fiche(Model model, String depName, FicheSuivi ficheSuivi, Long directId) {
		Direction d = new Direction();
		Long id;
		if(directId != null) {
			d.setDirectId(directId);
		}
		
		List<Application> applications = applicationRepository.findAll();
		model.addAttribute("applications",applications);
		
		model.addAttribute("selectApp","Selectionner l'application");
		
		if (depName != null) {
			
			System.out.println("Departement Name : " + depName);
			System.out.println("Departement : " + departementR.findBydepName(depName));
			Departement departement = departementR.findBydepName(depName);
			
			if(d.getDirectId() != null)
				id = d.getDirectId();
			else
				id = departementR.findBydepName(depName).getDirection().getDirectId();
			
			System.out.println("Id : " + id);
			Direction direction = directionRepository.findByDirectId(id);
			model.addAttribute("directName", direction.getDirectName());
			model.addAttribute("selectDepartement", depName);

		}else {
			model.addAttribute("selectDepartement","Selectionner votre departement");
		}

		model.addAttribute("ficheSuivi", new FicheSuivi(depName));
		
		model.addAttribute("departement", departementR.findAll());

		return "fiche"; // LE NOM DE LA VUE.HTML

	}

	@Autowired
	private JavaMailSender sender;

	@RequestMapping("/envoyer")

	@ResponseBody
	String envoyer() {
		try {
			sendEmail();

			return "Email Sent!";
		} catch (Exception ex) {
			return "Error in sending email: " + ex;
		}
	}

	private void sendEmail() throws Exception {
		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		
		helper.setTo("sadiqi.fatima.ezzahra@gmail.com");
		helper.setText("vous avez une nouvelle demande");
		helper.setSubject("Demande de maintenance");
		
		
        sender.send(message);
	}

	// controlleur cote Responsable mco
	@RequestMapping(value = "/saveFicheSui", method = RequestMethod.POST)

	public String saveFicheSui(Model model, @Valid FicheSuivi ficheSuivi, BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "EditFiSui";
		
		ficheSuiviRepository.save(ficheSuivi);
		//System.out.println("Nom depart : " + ficheSuivi.getNomDepart());
		
		return "ConfirmFiSui";
		
		// LE NOM DE LA VUE.HTML
		

	}

//controlleur cote Responsable 	mco
	@RequestMapping(value = "/editfiSui", method = RequestMethod.GET)
	public String editfiSui(Model model, Long ref) {
		/*
		 * List<ResponsableMCO> responsableMCOs = responsableMCORepository.findAll();
		 * 
		 * model.addAttribute("responsableMCOs",responsableMCOs);
		 * model.addAttribute("selectResp","Selectionner votre nom ");
		 */
		FicheSuivi fs = ficheSuiviRepository.findById(ref).orElse(null);
		model.addAttribute("ficheSuivi", fs);
		
		return "EditFiSui"; // LE NOM DE LA VUE.HTML

	}

//controlleur cote 	initiateur
	@RequestMapping(value = "/saveFiche", method = RequestMethod.POST) // == @PostMapping("/saveFiche")
	public String saveFiche(Model model, @Valid FicheSuivi ficheSuivi, BindingResult bindingResult
			) throws Exception {
		System.out.println("save File " + ficheSuivi.getNomApplication()+"\n"+ficheSuivi);
		
		if (bindingResult.hasErrors()) {
			
//			Direction d = new Direction();
//			Long id;
//			
//			if(directId != null) {
//				d.setDirectId(directId);
//				id = d.getDirectId();
//			}else
//				id = departementR.findBydepName(ficheSuivi.getNomDepart()).getDirection().getDirectId();

//			return "redirect:/fiche?depName="+ficheSuivi.getNomDepart()+"&iniName="+ficheSuivi.getIniName()+"&directId="+id;
			return "fiche";
		}
			
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date = new Date();
		ficheSuivi.setDateEnvoi(formatter.format(date));
		//System.out.println("trying to save");
		ficheSuiviRepository.save(ficheSuivi);
		System.out.println("data saved");
		sendEmail();
		return "confirmDemande";// nom de la vue
	}


//controlleur cote Responsable 	initiateur

	@RequestMapping(value = "/historiqueIni")
	public String historiqueIni(Model model, @RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size,
			@RequestParam(name = "mc", defaultValue = "") String mc) {
//	Page<FicheSuivi> pageficheSuivis=ficheSuiviRepository.chercher("%"+mcf+"%",new PageRequest(page,size));

		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.separer3("%"+mc+"%",new PageRequest(page,size));

		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		model.addAttribute("mcf", mc);

		// ficheSuiviRepository.findById(ref)

		return "historiqueIni";

	}
	

	@RequestMapping(value = "/historiqueIniS")
	public String historiqueIniS(Model model, @RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "7") int size,
			@RequestParam(name = "mc", defaultValue = "") String mc) {


		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.separer3("%"+mc+"%",new PageRequest(page,size));

		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		model.addAttribute("mcf", mc);

		// ficheSuiviRepository.findById(ref)

		return "historiqueIniS";

	}
	
	  @RequestMapping(value="/chart", method= RequestMethod.GET) 
	  public String chart() { 
		  return "chart"; 
	  }
	 
	}
	
	 
		
	


