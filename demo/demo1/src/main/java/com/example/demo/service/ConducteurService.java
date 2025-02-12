package com.example.demo.service;

import com.example.demo.model.Conducteur;
import com.example.demo.repository.ConducteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConducteurService {
    @Autowired
    private ConducteurRepository conducteurRepository;

    public List<Conducteur> getAllConducteurs() {
        return conducteurRepository.findAll();
    }


    public Conducteur getConducteur(String numero) {
        return conducteurRepository.findById(numero).orElse(null);
    }

    public Conducteur saveConducteur(Conducteur conducteur) {
        return conducteurRepository.save(conducteur);
    }
    public boolean deleteConducteur(String numero) {
        if (conducteurRepository.existsById(numero)) {
            conducteurRepository.deleteById(numero);
            return true;
        } else {
            return false;
        }
    }
    public Conducteur updateLoginAndPassword(String numero, String login, String motdepasse) {
        Conducteur conducteur = conducteurRepository.findById(numero).orElse(null);

        if (conducteur != null) {
            conducteur.setLogin(login);
            conducteur.setMotdepasse(motdepasse);
            return conducteurRepository.save(conducteur);
        }

        return null; // Retourne null si le conducteur n'existe pas
    }
    public Conducteur getConducteurByLoginAndPassword(String login, String motdepasse) {
        return (Conducteur) conducteurRepository.findByLoginAndMotdepasse(login, motdepasse).orElse(null);
    }

    public Conducteur getConducteurByLogin(String login) {
        return (Conducteur) conducteurRepository.findByLogin(login).orElse(null);
    }
    // Méthode pour trouver un conducteur par ID
    public Conducteur findById(String id) {
        Optional<Conducteur> conducteur = conducteurRepository.findById(id);
        return conducteur.orElse(null); // Retourne le conducteur ou null si non trouvé
    }

    // New method for searching
    public List<Conducteur> searchConducteurs(String searchTerm, Integer age) {
        return conducteurRepository.searchConducteurs(searchTerm, age);
    }

}