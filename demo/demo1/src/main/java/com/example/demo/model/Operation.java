package com.example.demo.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Operation")
public class Operation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_voiture", referencedColumnName = "immatriculation")
    private Voiture voiture;

    private Date dateVidange;
    private Date dateAssurance;
    private Date dateVisite;

    public Long getId(){
        return  id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public Voiture getVoiture(){
        return voiture;
    }
    public void setVoiture(Voiture voiture){
        this.voiture=voiture;
    }
    public Date getDateVidange(){
        return dateVidange;
    }
    public void setDateVidange(Date dateVidange){
        this.dateVidange=dateVidange;
    }
    public Date getDateAssurance(){
        return dateAssurance;
    }
    public void setDateAssurance(Date dateAssurance){
        this.dateAssurance=dateAssurance;
    }
    public Date getDateVisite(){
        return dateVisite;
    }
    public void setDateVisite(Date dateVisite){
        this.dateVisite=dateVisite;
    }

}
