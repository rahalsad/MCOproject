package com.example.mco.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.mco.dao.DirectionRepository;
import com.example.mco.dao.FicheSuiviRepository;
import com.example.mco.entities.Direction;
import com.example.mco.entities.FicheSuivi;

@RestController
@RequestMapping("api/chart")
public class FicheSuiviRestController {
	@Autowired
	private FicheSuiviService ficheSuiviService;
	
	@Autowired FicheSuiviRepository ficheR;
	
	@Autowired DirectionRepository dirs;

	@RequestMapping(value = "/findall", method = RequestMethod.GET, produces = { MimeTypeUtils.APPLICATION_JSON_VALUE })
	public Iterable<FicheSuivi> findAll() {

		return ficheSuiviService.findAll();
	}
	@RequestMapping(value = "/cat1", method = RequestMethod.GET, produces = { MimeTypeUtils.APPLICATION_JSON_VALUE })
	@ResponseBody
	public ResponseEntity<?> cat1() {
		
		List<FicheSuivi> fiches= ficheR.cat1("%Corrective%", 100);
		
		List<FicheSuivi> fiches2= ficheR.cat1("%Ameliorative%", 100);

		List<FicheSuivi> fiches3= ficheR.cat1("%Evolutive%", 100);

		Return1 r1= new Return1(ficheR.cat1("%Corrective%", 100).size(),ficheR.cat1("%Ameliorative%", 100).size(),ficheR.cat1("%Evolutive%", 100).size());
		
		Return1 r2= new Return1(ficheR.cat2("%Corrective%", 100).size(),ficheR.cat2("%Ameliorative%", 100).size(),ficheR.cat2("%Evolutive%", 100).size());

		Return2 rr= new Return2(r1,r2);
		
List<Direction> directions= dirs.findAll();
		
		
		directions.forEach(direction->{
			
			R4 ret4 =new R4(); 
			
			ret4.setFinalisees(ficheR.dir1("%"+direction.getDirectName()+"%", 100).size());
			ret4.setEnCours(ficheR.dir2("%"+direction.getDirectName()+"%", 100).size());
			ret4.setName(direction.getDirectName());
			
			rr.add(ret4);
		});
		
		
	
	    
		
		
		return new ResponseEntity<>(rr,HttpStatus.OK);
	}
	
	private class Return1{
		
		private int  correctives;
		
		private int  amelioratives;
		
		private int  evolutives;

		public int getCorrectives() {
			return correctives;
		}

		public void setCorrectives(int correctives) {
			this.correctives = correctives;
		}

		public int getAmelioratives() {
			return amelioratives;
		}

		public void setAmelioratives(int amelioratives) {
			this.amelioratives = amelioratives;
		}

		public int getEvolutives() {
			return evolutives;
		}

		public void setEvolutives(int evolutives) {
			this.evolutives = evolutives;
		}

		public Return1(int correctives,int amelioratives, int evolutives) {
			super();
			this.correctives = correctives;
			this.amelioratives = amelioratives;
			this.evolutives = evolutives;
		}
		
		
	}
	
	class Return2 {
		
		private Return1 finalisees;
		
		private Return1 enCours;
		
		private List<R4> ret4;
		
		public void add(R4 r4) {
			ret4.add(r4);
		}
		
		

		public Return1 getFinalisees() {
			return finalisees;
		}

		public void setFinalisees(Return1 finalisees) {
			this.finalisees = finalisees;
		}

		public Return1 getEnCours() {
			return enCours;
		}

		public void setEnCours(Return1 enCours) {
			this.enCours = enCours;
		}

		public Return2(Return1 finalisees, Return1 enCours) {
			super();
			this.finalisees = finalisees;
			this.enCours = enCours;
			ret4 = new ArrayList<>();

		}



		public List<R4> getRet4() {
			return ret4;
		}



		public void setRet4(List<R4> ret4) {
			this.ret4 = ret4;
		}
		
		
	}
	
	@RequestMapping(value = "/chartDir", method = RequestMethod.GET, produces = { MimeTypeUtils.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> chart1() {
		
		List<Direction> directions= dirs.findAll();
		
		R3  ret3 = new R3();
		
		directions.forEach(direction->{
			
			R4 ret4 =new R4(); 
			
			ret4.setFinalisees(ficheR.dir1("%"+direction.getDirectName()+"%", 100).size());
			ret4.setEnCours(ficheR.dir2("%"+direction.getDirectName()+"%", 100).size());
			ret4.setName(direction.getDirectName());
			
			ret3.addR4(ret4);
		});

		return new ResponseEntity<>(ret3,HttpStatus.OK);
	}
	
	
	class R3 {
		
		List<R4> dirss;
		
		

		public R3() {
			super();
			this.dirss= new ArrayList<FicheSuiviRestController.R4>();
			// TODO Auto-generated constructor stub
		}

		public List<R4> getDirss() {
			return dirss;
		}

		public void setDirss(List<R4> dirss) {
			this.dirss = dirss;
		}

		public R3(List<R4> dirss) {
			super();
			this.dirss = dirss;
		}
		
		public void addR4(R4 r) {
			this.dirss.add(r);
		}
		
	}
	
	class R4 {
		
		int finalisees;
		
		int enCours;
		
		String name;

		public int getFinalisees() {
			return finalisees;
		}

		public void setFinalisees(int finalisees) {
			this.finalisees = finalisees;
		}

		public int getEnCours() {
			return enCours;
		}

		public void setEnCours(int enCours) {
			this.enCours = enCours;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public R4(int finalisees, int enCours, String name) {
			super();
			this.finalisees = finalisees;
			this.enCours = enCours;
			this.name = name;
		}

		public R4() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
	}
	

}


