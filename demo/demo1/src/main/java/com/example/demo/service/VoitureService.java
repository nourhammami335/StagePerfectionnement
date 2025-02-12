package com.example.demo.service;

import com.example.demo.model.Conducteur;
import com.example.demo.model.Voiture;
import com.example.demo.repository.ConducteurRepository;
import com.example.demo.repository.VoitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureService {
    @Autowired
    private VoitureRepository voitureRepository;
    @Autowired
    private ConducteurRepository conducteurRepository;

    public List<Voiture> getAllVoitures() {
        return voitureRepository.findAll();
    }

    public Voiture getVoiture(String immatriculation) {
        return voitureRepository.findById(immatriculation).orElse(null);
    }

    public Voiture saveVoiture(Voiture voiture) { // Plus besoin du String conducteurId
        Conducteur conducteur = conducteurRepository.findById(voiture.getConducteur().getNumero()).orElse(null);
        if (conducteur != null) {
            voiture.setConducteur(conducteur);
        }
        return voitureRepository.save(voiture);
    }


    public void deleteVoitureByNumero(String immatriculation) {
        voitureRepository.deleteById(immatriculation);
    }

    // Méthode pour mettre à jour une voiture
    public Voiture updateConducteur(String immatriculation, String conducteurNumero) {
        Voiture existingVoiture = voitureRepository.findById(immatriculation).orElse(null);
        if (existingVoiture != null) {
            // Find the conducteur by numero
            Conducteur conducteur = conducteurRepository.findById(conducteurNumero).orElse(null);
            if (conducteur != null) {
                // Update only the conducteur field
                existingVoiture.setConducteur(conducteur);
                return voitureRepository.save(existingVoiture);
            }
        }
        return null; // Return null if the voiture or conducteur is not found
    }
    public List<Voiture> getVoituresByConducteur(String conducteurNumero) {
        return voitureRepository.findByConducteurNumero(conducteurNumero);
    }
    // Méthode pour trouver une voiture par l'ID du conducteur
   /* public Voiture findByConducteurId(String conducteurId) {
        return voitureRepository.findByConducteurNumero(conducteurId); // Assurez-vous que cette méthode existe dans le repository
    }*/

    // New method for searching
    public List<Voiture> searchVoitures(String searchTerm) {
        return voitureRepository.searchVoitures(searchTerm);
    }
}
