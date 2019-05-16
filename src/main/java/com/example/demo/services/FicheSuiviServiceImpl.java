package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.FicheSuiviRepository;
import com.example.demo.entities.FicheSuivi;
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
