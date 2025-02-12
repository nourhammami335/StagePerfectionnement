package com.example.demo.controller;

import com.example.demo.model.Conducteur;
import com.example.demo.model.Panne;
import com.example.demo.model.Voiture;
import com.example.demo.service.ConducteurService;
import com.example.demo.service.VoitureService;
import com.example.demo.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    @Autowired
    private ConducteurService conducteurService;
    @Autowired
    private VoitureService VoitureService;
    @Autowired
    private PanneService panneService;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> login(@RequestParam String login, @RequestParam String motdepasse) {
        Conducteur conducteur = conducteurService.getConducteurByLoginAndPassword(login, motdepasse);
        if (conducteur != null) {
            if ("admin".equals(conducteur.getLogin()) && "admin123".equals(conducteur.getMotdepasse())) {
                return ResponseEntity.ok("Redirect to Admin Menu");
            } else {
                return ResponseEntity.ok("Redirect to User Menu");
            }

        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @GetMapping("/mon-compte")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Conducteur> getMonCompte(@RequestParam String login) {
        Conducteur conducteur = conducteurService.getConducteurByLogin(login);
        return ResponseEntity.ok(conducteur);
    }

    @GetMapping("/ma-voiture")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Voiture>> getMaVoiture(@RequestParam String login) {
        Conducteur conducteur = conducteurService.getConducteurByLogin(login);

        List<Voiture> voitures = VoitureService.getVoituresByConducteur(conducteur.getNumero());
        return ResponseEntity.ok(voitures);
    }

  /* @GetMapping("/ma-panne")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Panne>> getMaPanne(@RequestParam String login) {
        // Récupérer le conducteur par son login
        Conducteur conducteur = conducteurService.getConducteurByLogin(login);

        // Récupérer les pannes associées au conducteur
       List<Panne> pannes = panneService.getPannesByConducteurId(conducteur.getNumero());

        return ResponseEntity.ok(pannes);
    }*/
}