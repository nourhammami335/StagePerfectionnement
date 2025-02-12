// PanneController.java
package com.example.demo.controller;

import com.example.demo.model.Panne;
import com.example.demo.model.Voiture;
import com.example.demo.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pannes")
@CrossOrigin(origins = "http://localhost:4200")
public class PanneController {
    @Autowired
    private PanneService panneService;

    @PostMapping
    public ResponseEntity<Panne> createPanne(@RequestBody Panne panne) {
        Panne savedPanne = panneService.savePanne(panne);
        return ResponseEntity.ok(savedPanne);
    }

   /* @PostMapping
    public ResponseEntity<Panne> createPanne(@RequestBody Panne panne) {
        if (panne.getConducteur() == null) {
            throw new IllegalArgumentException("Conducteur must not be null");
        }
        Panne savedPanne = panneService.savePanne(panne);
        return ResponseEntity.ok(savedPanne);
    }*/

    @GetMapping
    public List<Panne> getAllPannes() {
        return panneService.getAllPannes();
    }
    // PanneController.java
    @GetMapping("/count")
    public ResponseEntity<Long> countPannes() {
        long count = panneService.getAllPannes().size();
        return ResponseEntity.ok(count);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable Long id) {
        panneService.deletePanne(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /*@GetMapping("/conducteur/{conducteurNumero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Voiture> getPannesByConducteur(@PathVariable String conducteurNumero) {
        return PanneService.getPannesByConducteur(conducteurNumero);
    }*/
    // PanneController.java
 /* @GetMapping("/conducteur/{conducteurId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Panne> getPannesByConducteurId(@PathVariable String conducteurId) {
        return panneService.getPannesByConducteurId(conducteurId);
    }*/

    @GetMapping("/conducteur/{conducteurNumero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Panne> getPannesByConducteur(@PathVariable String conducteurNumero) {
        return panneService.getPannesByConducteur(conducteurNumero);
    }

    @PutMapping("/{id}/statut")
    public ResponseEntity<Panne> updateStatut(@PathVariable Long id, @RequestParam String statut) {
        Panne updatedPanne = panneService.updateStatut(id, statut);
        return ResponseEntity.ok(updatedPanne);
    }
}