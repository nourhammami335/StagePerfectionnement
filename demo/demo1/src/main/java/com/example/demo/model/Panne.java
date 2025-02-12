package com.example.demo.model;

import jakarta.persistence.*;

import java.util.Date;
@Entity
public class Panne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Champ d'identifiant unique

    private String nom;
    private String prenom;
    private String email;
    private String immatriculation;
    private String description;
    private Date datePanne;
    private String statut;
    @ManyToOne
    @JoinColumn(name="conducteur_id", referencedColumnName = "numero", nullable = false)// Assurez-vous que le nom de la colonne correspond à votre base de données
    private Conducteur conducteur;

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDatePanne() {
        return datePanne;
    }

    public void setDatePanne(Date datePanne) {
        this.datePanne = datePanne;
    }

    public Conducteur getConducteur() {
        return conducteur;
    }

    public void setConducteur(Conducteur conducteur) {
        this.conducteur = conducteur;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }
}