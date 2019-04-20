package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.dao.ApplicationRepository;
import com.example.demo.dao.DepartementRepository;
import com.example.demo.dao.DirectionRepository;
import com.example.demo.dao.InitiateurRepository;
import com.example.demo.dao.ResponsableMCORepository;
import com.example.demo.dao.SProgrammeRepository;
import com.example.demo.entities.Application;
import com.example.demo.entities.Departement;
import com.example.demo.entities.Direction;
import com.example.demo.entities.Initiateur;
import com.example.demo.entities.ResponsableMCO;
import com.example.demo.entities.SProgramme;


@SpringBootApplication
public class TestApplication implements CommandLineRunner {
	
	
	@Autowired
	private DepartementRepository departementRepository;
	@Autowired
	private DirectionRepository directionRepository;
	@Autowired
	private InitiateurRepository initiateurRepository;
	@Autowired
	private ResponsableMCORepository responsableMCORepository;
	@Autowired
	private ApplicationRepository applicationRepository;
	@Autowired
	private SProgrammeRepository sProgrammeRepository;

	
	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}
	@Override
	public void run(String...arg0) throws Exception{
		
		
		
		
		/*
		 * 
		 * ResponsableMCO r1=responsableMCORepository.save(new
		 * ResponsableMCO("Driouech","Asmaa","driouech@gamil.com","0652847956"));
		 * ResponsableMCO r2=responsableMCORepository.save(new
		 * ResponsableMCO("EL MAKHLOUF","Ilham","elmakhlouf@gamil.com","0648691235"));
		 * ResponsableMCO r3=responsableMCORepository.save(new
		 * ResponsableMCO("Lafsihi","Said","Lafsihi@gamil.com","0625696812"));
		 * ResponsableMCO r4=responsableMCORepository.save(new
		 * ResponsableMCO("Laaroussi","Said","laaroussi@gamil.com","0633212516"));
		 * 
		 * 
		 * 
		 * Initiateur i1=initiateurRepository.save(new
		 * Initiateur("Dahbi","cccc","dahbi@gamil.com","0614236958")); Initiateur
		 * i2=initiateurRepository.save(new
		 * Initiateur("Markho","bbcc","markho@gamil.com","0631594274")); Initiateur
		 * i3=initiateurRepository.save(new
		 * Initiateur("Maher","acca","maher@gamil.com","0658947514")); Initiateur
		 * i4=initiateurRepository.save(new
		 * Initiateur("Ayachik","qqkc","ayachi@gamil.com","0625694713")); Initiateur
		 * i5=initiateurRepository.save(new
		 * Initiateur("hfgtn","gtrn","hgtf@gamil.com","0614236925"));
		 * 
		 * 
		 * 
		 * 
		 * 
		 * //DateFormat df=new SimpeDateFormat("yyyy-MM-dd);---->df.parse("2009-12-15")
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * Direction d1=new Direction("Risque &Support","Othmane MAIMOUN");
		 * departementRepository.save(new
		 * Departement("Comptabilité, Finance & Pilotage","Fatima ASSOURI",d1));
		 * Direction d2=new
		 * Direction("Banque de Financement et d’Investissement","Mustapha ZARAIDI");
		 * departementRepository.save(new
		 * Departement("Activités Marchés de Capitaux","Mohamed HAMMADI",d2));
		 * 
		 * 
		 * 
		 * Application a1=new Application("CDRBJ"); sProgrammeRepository.save(new
		 * SProgramme("DRFF","hyfrhj",a1)); Application a2=new Application("ZEAR");
		 * sProgrammeRepository.save(new SProgramme("LOKJGFFF","hhjjdhb",a2));
		 */
		 
		 
		 
		
		 
		 
	
}


}
