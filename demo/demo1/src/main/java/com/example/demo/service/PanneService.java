// PanneService.java
package com.example.demo.service;

import com.example.demo.model.Panne;
import com.example.demo.repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneService {
    @Autowired
    private PanneRepository panneRepository;

    public Panne savePanne(Panne panne) {
        return panneRepository.save(panne);
    }

    public List<Panne> getAllPannes() {
        return panneRepository.findAll();
    }
    public void deletePanne(Long id) {
        panneRepository.deleteById(id);
    }

   public List<Panne> getPannesByConducteur(String conducteurNumero) {
        return panneRepository.findByConducteurNumero(conducteurNumero);
    }
   // PanneService.java
 /* public List<Panne> getPannesByConducteurId(String conducteurNumero) {
       return panneRepository.findByConducteurNumero(conducteurNumero);
   }*/

    public Panne updateStatut(Long id, String statut) {
        Panne panne = panneRepository.findById(id).orElseThrow(() -> new RuntimeException("Panne not found"));
        panne.setStatut(statut);
        return panneRepository.save(panne);
    }
}