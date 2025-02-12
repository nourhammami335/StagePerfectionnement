package com.example.demo.model;


import jakarta.persistence.*;

@Entity
@Table(name="Conducteur")
public class Conducteur {

   @Id
  // @GeneratedValue(strategy = GenerationType.IDENTITY)
   //@OneToMany(mappedBy = "Conducteur", cascade = CascadeType.ALL, fetch =FetchType.LAZY)
    private String numero; // Primary Key
    private String nom;
    private String prenom;
    private int age;
    private String sexe;
    private String email;
    private String adresse;
    private String departement;
    private String login;
    private String motdepasse;

    // Getters et Setters
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public String getDepartement() {
        return departement;
    }

    public void setDepartement(String departement) {
        this.departement = departement;
    }

    public String getLogin(){return login;}
    public void setLogin(String login){this.login=login;}
    public String getMotdepasse(){return motdepasse;}

    public void setMotdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
    }
}