package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
public class FicheSuivi {
	@Id @GeneratedValue
private Long ref;
@DateTimeFormat(pattern = "dd/MM/yyyy")
// This is for bind Date with @ModelAttribute
  @Temporal(TemporalType.DATE)
  @Column(name = "recep_date")
private Date dateRecept;
private Date dateModif;
private Date dateCharge;
private Date dateProd;
private Long chargeEstim;
private Long chargeConsom;
private Double tauxAvanc;
private String statut;
public FicheSuivi() {
	super();
	// TODO Auto-generated constructor stub
}
public FicheSuivi(Date dateRecept, Date dateModif, Date dateCharge, Date dateProd, Long chargeEstim, Long chargeConsom,
		Double tauxAvanc, String statut) {
	super();
	this.dateRecept = dateRecept;
	this.dateModif = dateModif;
	this.dateCharge = dateCharge;
	this.dateProd = dateProd;
	this.chargeEstim = chargeEstim;
	this.chargeConsom = chargeConsom;
	this.tauxAvanc = tauxAvanc;
	this.statut = statut;
}
public Long getRef() {
	return ref;
}
public void setRef(Long ref) {
	this.ref = ref;
}
public Date getDateRecept() {
	return dateRecept;
}
public void setDateRecept(Date dateRecept) {
	this.dateRecept = dateRecept;
}
public Date getDateModif() {
	return dateModif;
}
public void setDateModif(Date dateModif) {
	this.dateModif = dateModif;
}
public Date getDateCharge() {
	return dateCharge;
}
public void setDateCharge(Date dateCharge) {
	this.dateCharge = dateCharge;
}
public Date getDateProd() {
	return dateProd;
}
public void setDateProd(Date dateProd) {
	this.dateProd = dateProd;
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
public Double getTauxAvanc() {
	return tauxAvanc;
}
public void setTauxAvanc(Double tauxAvanc) {
	this.tauxAvanc = tauxAvanc;
}
public String getStatut() {
	return statut;
}
public void setStatut(String statut) {
	this.statut = statut;
}

}
