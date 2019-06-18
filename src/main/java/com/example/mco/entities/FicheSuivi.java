package com.example.mco.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class FicheSuivi implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ref;
	@NotEmpty (message = "Ce champ est OBLIGATOIRE")
	private String iniName;
	
	private String NomDirection;
	
	private String NomDepart;
	
	private String NomApplication;
	
	private String intituleMaintenance;
	
	private String dateEnvoi;

	private Long chargeEstim;
	
	private Long chargeConsom;
	
	private Long tauxAvanc;

	private String statut;

	private String respo;

	private String type;
	
	private String remarque;
	
	private String dateModif;

	//@JsonFormat(pattern="yyyy-MM-dd")
	private String dateCharge;
	
	private String dateProd;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODE_DIR")
	private Direction direction;

	public FicheSuivi(String nomDepart) {
		super();
		NomDepart = nomDepart;
	}

	public FicheSuivi() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public FicheSuivi(String iniName, String nomDirection, String nomDepart, String nomApplication,
			String intituleMaintenance, String dateEnvoi, Long chargeEstim, Long chargeConsom, Long tauxAvanc,
			String statut, String respo, String type, String remarque, String dateModif, String dateCharge,
			String dateProd, Direction direction) {
		super();
		this.iniName = iniName;
		NomDirection = nomDirection;
		NomDepart = nomDepart;
		NomApplication = nomApplication;
		this.intituleMaintenance = intituleMaintenance;
		this.dateEnvoi = dateEnvoi;
		this.chargeEstim = chargeEstim;
		this.chargeConsom = chargeConsom;
		this.tauxAvanc = tauxAvanc;
		this.statut = statut;
		this.respo = respo;
		this.type = type;
		this.remarque = remarque;
		this.dateModif = dateModif;
		this.dateCharge = dateCharge;
		this.dateProd = dateProd;
		this.direction = direction;
	}

	public Long getRef() {
		return ref;
	}

	public void setRef(Long ref) {
		this.ref = ref;
	}

	public String getIniName() {
		return iniName;
	}

	public void setIniName(String iniName) {
		this.iniName = iniName;
	}

	public String getNomDirection() {
		return NomDirection;
	}

	public void setNomDirection(String nomDirection) {
		NomDirection = nomDirection;
	}

	public String getNomDepart() {
		return NomDepart;
	}

	public void setNomDepart(String nomDepart) {
		NomDepart = nomDepart;
	}

	public String getNomApplication() {
		return NomApplication;
	}

	public void setNomApplication(String nomApplication) {
		NomApplication = nomApplication;
	}

	public String getIntituleMaintenance() {
		return intituleMaintenance;
	}

	public void setIntituleMaintenance(String intituleMaintenance) {
		this.intituleMaintenance = intituleMaintenance;
	}

	public String getDateEnvoi() {
		return dateEnvoi;
	}

	public void setDateEnvoi(String dateEnvoi) {
		this.dateEnvoi = dateEnvoi;
	}

	public Long getChargeEstim() {
		return chargeEstim;
	}

	public void setChargeEstim(Long chargeEstim) {
		this.chargeEstim = chargeEstim;
	}

	public Long getChargeConsom() {
		return chargeConsom;
	}

	public void setChargeConsom(Long chargeConsom) {
		this.chargeConsom = chargeConsom;
	}

	public Long getTauxAvanc() {
		return tauxAvanc;
	}

	public void setTauxAvanc(Long tauxAvanc) {
		this.tauxAvanc = tauxAvanc;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getRespo() {
		return respo;
	}

	public void setRespo(String respo) {
		this.respo = respo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRemarque() {
		return remarque;
	}

	public void setRemarque(String remarque) {
		this.remarque = remarque;
	}

	public String getDateModif() {
		return dateModif;
	}

	public void setDateModif(String dateModif) {
		this.dateModif = dateModif;
	}

	public String getDateCharge() {
		return dateCharge;
	}

	public void setDateCharge(String dateCharge) {
		this.dateCharge = dateCharge;
	}

	public String getDateProd() {
		return dateProd;
	}

	public void setDateProd(String dateProd) {
		this.dateProd = dateProd;
	}

	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}

	@Override
	public String toString() {
		return "FicheSuivi [ref=" + ref + ", iniName=" + iniName + ", NomDirection=" + NomDirection + ", NomDepart="
				+ NomDepart + ", NomApplication=" + NomApplication + ", intituleMaintenance=" + intituleMaintenance
				+ ", dateEnvoi=" + dateEnvoi + ", chargeEstim=" + chargeEstim + ", chargeConsom=" + chargeConsom
				 + ", statut=" + statut + ", respo=" + respo + ", type=" + type
				+ ", remarque=" + remarque + ", dateModif=" + dateModif + ", dateCharge=" + dateCharge + ", dateProd="
				+ dateProd + ", direction=" + direction + "]";
	}

}