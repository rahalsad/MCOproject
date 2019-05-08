package com.example.demo.web;

import java.text.SimpleDateFormat;
import java.util.Date;

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

import com.example.demo.dao.DepartementRepository;
import com.example.demo.dao.DirectionRepository;
import com.example.demo.dao.FicheSuiviRepository;
import com.example.demo.entities.Departement;
import com.example.demo.entities.Direction;
import com.example.demo.entities.FicheSuivi;

@Controller
public class FicheSuiviController {
	@Autowired
	private FicheSuiviRepository ficheSuiviRepository;

	@Autowired
	private DepartementRepository departementR;

	@Autowired
	private DirectionRepository directionRepository;

	// controlleur cote Responsable mco
	@RequestMapping(value = "/ficheList")
	public String ficheList(Model model, @RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "7") int size,
			@RequestParam(name = "mc5", defaultValue = "") String mc5) {
		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.chercher("%" + mc5 + "%", new PageRequest(page, size));

		// Page<FicheSuivi> pageficheSuiviss=ficheSuiviRepository.separer2(new
		// PageRequest(page,size));
		// model.addAttribute("listFicheSuiviss", pageficheSuiviss.getContent());
		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		model.addAttribute("mc5", mc5);

		// ficheSuiviRepository.findById(ref)

		return "historiqueFiche";

	}

	// controlleur cote Responsable mco
	@RequestMapping(value = "/listDemande")
	public String listDemande(Model model,

			@RequestParam(name = "page", defaultValue = "0") int page,

			@RequestParam(name = "size", defaultValue = "3") int size,

			@RequestParam(name = "mc5", defaultValue = "") String mc5) {
		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.chercher("%" + mc5 + "%", new PageRequest(page, size));
		// Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.separer( new
		// PageRequest(page, size));
		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		model.addAttribute("mc5", mc5);

		return "ListDemandes";

	}

	// controlleur cote Responsable mco

	@RequestMapping(value = "/deleteFiSui", method = RequestMethod.GET)

	public String deleteFiSui(Long ref, String mc5, int page, int size) {
		ficheSuiviRepository.deleteById(ref);
		return "redirect:/ficheList?page=" + page + "&size=" + size + "&mc5=" + mc5;

	}

//	@GetMapping("/changeDep")
//	public String change(Model model, String depName, FicheSuivi ficheSuivi) {
//		System.out.println("Departement Name : " + depName);
//		System.out.println("Departement : " + departementR.findBydepName(depName));
//		Long id = departementR.findBydepName(depName).getDirection().getDirectId();
//		directionRepository.findById(id).orElse(null);
//		return "fiche";
//	}

	@RequestMapping(value = "/fiche", method = RequestMethod.GET)
	public String fiche(Model model, String depName, FicheSuivi ficheSuivi) {

		if (depName != null) {
			System.out.println("Departement Name : " + depName);
			System.out.println("Departement : " + departementR.findBydepName(depName));
			Departement departement = departementR.findBydepName(depName);
			Long id = departementR.findBydepName(depName).getDirection().getDirectId();
			System.out.println("Id : " + id);
			Direction direction = directionRepository.findByDirectId(id);
			model.addAttribute("directName", direction.getDirectName());
			model.addAttribute("selectDepartement", depName);
//			FicheSuivi fiche = ficheSuiviRepository.findFicheByDepartNameAndDirectName(directionName, departementName);
//			System.out.println("Fiche : " + fiche.getIniName());
//			model.addAttribute("ficheSuivi",fiche);
		}else {
			model.addAttribute("selectDepartement","Select your departement");
		}

		model.addAttribute("ficheSuivi", new FicheSuivi());

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

	}

	// controlleur cote Responsable mco
	@RequestMapping(value = "/saveFicheSui", method = RequestMethod.POST)

	public String saveFicheSui(Model model, @Valid FicheSuivi ficheSuivi, BindingResult bindingResult) {
		if (bindingResult.hasErrors())
			return "EditFiSui";
		ficheSuiviRepository.save(ficheSuivi);
		return "ConfirmFiSui";
		// LE NOM DE LA VUE.HTML

	}

//controlleur cote Responsable 	mco
	@RequestMapping(value = "/editfiSui", method = RequestMethod.GET)
	public String editfiSui(Model model, Long ref) {
		FicheSuivi fs = ficheSuiviRepository.findById(ref).orElse(null);
		model.addAttribute("ficheSuivi", fs);
		return "EditFiSui"; // LE NOM DE LA VUE.HTML

	}

//controlleur cote Responsable 	initiateur
	@RequestMapping(value = "/saveFiche", method = RequestMethod.POST) // == @PostMapping("/saveFiche")
	public String saveFiche(Model model, @Valid FicheSuivi ficheSuivi, BindingResult bindingResult) throws Exception {
		if (bindingResult.hasErrors())
			return "fiche";
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date = new Date();
		ficheSuivi.setDateEnvoi(formatter.format(date));

		ficheSuiviRepository.save(ficheSuivi);
		sendEmail();
		return "ConfirmFiSui";// nom de la vue
	}

//db departement ash ghadi nselectionniw gtli lia ?! db ana bghit une fois n selectionni departement tla3 lia direction li huwa fiha Okay 
//controlleur cote Responsable 	initiateur

	@RequestMapping(value = "/historiqueIni")
	public String historiqueIni(Model model, @RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "7") int size,
			@RequestParam(name = "mc5", defaultValue = "") String mc5) {
//	Page<FicheSuivi> pageficheSuivis=ficheSuiviRepository.chercher("%"+mc5+"%",new PageRequest(page,size));

		Page<FicheSuivi> pageficheSuivis = ficheSuiviRepository.separer2(new PageRequest(page, size));

		model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
		int[] pages = new int[pageficheSuivis.getTotalPages()];
		model.addAttribute("pages", pages);
		model.addAttribute("size", size);
		model.addAttribute("pageCourante", page);
		model.addAttribute("mc5", mc5);

		// ficheSuiviRepository.findById(ref)

		return "historiqueIni";

	}
	/*
	 * @Autowired DepartementRepository departementRepository;
	 * 
	 * @RequestMapping(value="/getDepName",method=RequestMethod.POST)
	 * 
	 * public String getDepName(Model model, String s) { String
	 * s1=departementRepository.findDirectionByDept(s);
	 * model.addAttribute("dirName", s1); System.out.println("hhhhhhhhhhhhhhhh"+s1);
	 * return s1;
	 * 
	 * }
	 */

	// fin kt3amrii dik la liste dyel les departement hna fl controller wach fin
	// kan7t les donn
	/*
	 * @RequestMapping(value = "/motif") public String motif(Model model,
	 * 
	 * @RequestParam(name = "page", defaultValue = "0") int page,
	 * 
	 * @RequestParam(name = "size", defaultValue = "3") int size,
	 * 
	 * @RequestParam(name = "mc5", defaultValue = "") String mc5) { Page<FicheSuivi>
	 * pageficheSuivis = ficheSuiviRepository.decision( new PageRequest(page,
	 * size)); model.addAttribute("listFicheSuivis", pageficheSuivis.getContent());
	 * int[] pages = new int[pageficheSuivis.getTotalPages()];
	 * model.addAttribute("pages", pages); model.addAttribute("size", size);
	 * model.addAttribute("pageCourante		", page); model.addAttribute("mc5",
	 * mc5);
	 * 
	 * return "ConfirmFiSui";
	 * 
	 * }
	 */

}
