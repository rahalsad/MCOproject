package com.example.demo.web;

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

import com.example.demo.dao.FicheSuiviRepository;
import com.example.demo.entities.FicheSuivi;
import com.example.demo.services.FicheSuiviService;

@RestController
@RequestMapping("api/chart")
public class FicheSuiviRestController {
	@Autowired
	private FicheSuiviService ficheSuiviService;
	
	@Autowired FicheSuiviRepository ficheR;

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
		}
		
		
	}
}


