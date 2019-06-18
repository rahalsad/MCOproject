
package com.mco.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.mco.dao.DepartementRepository;
import com.example.mco.dao.DirectionRepository;
import com.example.mco.dao.InitiateurRepository;
import com.example.mco.dao.ResponsableMCORepository;
import com.example.mco.dao.RoleRepository;
import com.example.mco.dao.UserRepository;
import com.example.mco.entities.Users;
import com.example.mco.entities.role;


/*import com.example.demo.entities.Departement;
import com.example.demo.entities.Direction;
import com.example.demo.entities.Initiateur;
import com.example.demo.entities.ResponsableMCO;*/


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
	private UserRepository userRepository;
	
	
	@Autowired
	private RoleRepository  roleRepository;
	

	
	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}
	@Override
	public void run(String...arg0) throws Exception{
		
		/*userRepository.deleteAll();
		roleRepository.deleteAll();*/
		/*
		role rl= new role("ADMIN");
		roleRepository.save(rl);
		roleRepository.flush();
		
		Users users= new Users();
		users.setPassword("123");
		users.setUsername("admin");
		users.setActive(true);
		users.setRole(rl);
		userRepository.save(users);
	*/
		
		
		
		 /*
		 Users u1=userRepository.save(new
		 Users("Driouech Asmaa","123456","",0652847956,"MCO","MCO","driouech@gamil.com",true);
		  users u2=userRepository.save(new
		 user("EL MAKHLOUF Ilham","0648691235","123456","MCO","MCO","elmakhlouf@gamil.com",true));
		  user u3=userRepository.save(new
		  ResponsableMCO("Lafsihi","Said","Lafsihi@gamil.com","0625696812"));
		 ResponsableMCO r4=responsableMCORepository.save(new
		  ResponsableMCO("Laaroussi","Said","laaroussi@gamil.com","0633212516"));
		  
		  
		Initiateur i1=initiateurRepository.save(new
		 Initiateur("Dahbi","cccc","dahbi@gamil.com","0614236958")); Initiateur
		 i2=initiateurRepository.save(new
		  Initiateur("Markho","bbcc","markho@gamil.com","0631594274")); Initiateur
		  i3=initiateurRepository.save(new
		  Initiateur("Maher","acca","maher@gamil.com","0658947514")); Initiateur
		  i4=initiateurRepository.save(new
		  Initiateur("Ayachik","qqkc","ayachi@gamil.com","0625694713")); Initiateur
		  i5=initiateurRepository.save(new
		  Initiateur("hfgtn","gtrn","hgtf@gamil.com","0614236925"));
		  */
		  
		  
		  
		  
		/* 
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
