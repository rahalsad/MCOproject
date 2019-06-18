package com.example.mco.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mco.dao.FicheSuiviRepository;
import com.example.mco.entities.FicheSuivi;
@Service("FicheSuiviService")
public class FicheSuiviServiceImpl implements FicheSuiviService{
   @Autowired
	private FicheSuiviRepository ficheSuiviRepository;
	@Override
	public Iterable<FicheSuivi> findAll() {
		// TODO Auto-generated method stub
		return ficheSuiviRepository.findAll();
	}

}
