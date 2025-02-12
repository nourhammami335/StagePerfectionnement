package com.example.demo.controller;

import com.example.demo.model.Voiture;
import com.example.demo.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voitures")
@CrossOrigin(origins = "http://localhost:4200") // Autoriser les requêtes CORS depuis Angular
public class VoitureController {
    @Autowired
    private VoitureService voitureService;

    @GetMapping
    public List<Voiture> getAllVoitures() {
        return voitureService.getAllVoitures();
    }

    @GetMapping("/{immatriculation}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Voiture getVoiture(@PathVariable String immatriculation) {
        return voitureService.getVoiture(immatriculation);
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Voiture createVoiture(@RequestBody Voiture voiture) { // Ne pas utiliser @RequestParam
        return voitureService.saveVoiture(voiture);
    }


    @DeleteMapping("/{immatriculation}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteVoiture(@PathVariable String immatriculation) {
        voitureService.deleteVoitureByNumero(immatriculation);
    }

    // Méthode de mise à jour
    @PutMapping("/{immatriculation}/conducteur")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Voiture> updateConducteur(@PathVariable String immatriculation, @RequestBody String conducteurNumero) {
        Voiture updatedVoiture = voitureService.updateConducteur(immatriculation, conducteurNumero);
        if (updatedVoiture != null) {
            return ResponseEntity.ok(updatedVoiture);
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if not found
        }
    }
    @GetMapping("/conducteur/{conducteurNumero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Voiture> getVoituresByConducteur(@PathVariable String conducteurNumero) {
        return voitureService.getVoituresByConducteur(conducteurNumero);
    }

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Void> handleOptions() {
        return ResponseEntity.ok().build();
    }

    // New endpoint for searching
    @GetMapping("/search")
    public List<Voiture> searchVoitures(@RequestParam String term) {
        return voitureService.searchVoitures(term);
    }

}
