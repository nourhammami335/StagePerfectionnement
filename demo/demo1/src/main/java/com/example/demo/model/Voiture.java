package com.example.demo.model;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Voiture")
public class Voiture {
    @Id
    @Column(name = "immatriculation", unique = true, nullable = false)
    private String immatriculation;// Primary Key
    private String modele;
    private String marque;
    private String carburant;
    @ManyToOne
    @JoinColumn(name="conducteur_id", referencedColumnName = "numero", nullable = false)
    private Conducteur conducteur;

    // Getters et Setters
    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getCarburant() {
        return carburant;
    }

    public void setCarburant(String carburant) {
        this.carburant = carburant;
    }
    public Conducteur getConducteur(){
        return conducteur;
    }
    public void setConducteur(Conducteur conducteur){
        this.conducteur=conducteur;
    }
}