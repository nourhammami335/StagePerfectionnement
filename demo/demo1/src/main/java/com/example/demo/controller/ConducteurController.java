package com.example.demo.controller;

import com.example.demo.model.Conducteur;
import com.example.demo.service.ConducteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conducteurs")
 // Autoriser les requêtes CORS depuis Angular
public class ConducteurController {
    @Autowired

    private ConducteurService conducteurService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Conducteur> getAllConducteurs() {
        return conducteurService.getAllConducteurs();
    }
    @GetMapping("/{numero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Conducteur getConducteur(@PathVariable String numero) {
        return conducteurService.getConducteur(numero);
    }
    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Conducteur> createConducteur(@RequestBody Conducteur conducteur) {
        // Add logic to save the Conducteur object
        return ResponseEntity.ok(conducteurService.saveConducteur(conducteur));
    }
    @PutMapping("/update/{numero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Conducteur> updateConducteur(@PathVariable String numero,
                                                       @RequestParam String login,
                                                       @RequestParam String motdepasse) {
        Conducteur conducteur = conducteurService.updateLoginAndPassword(numero, login, motdepasse);

        if (conducteur != null) {
            return new ResponseEntity<>(conducteur, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Si le conducteur n'est pas trouvé
        }
    }

    @DeleteMapping("/{numero}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> deleteConducteur(@PathVariable String numero) {
        boolean isDeleted = conducteurService.deleteConducteur(numero);
        if (isDeleted) {
            return ResponseEntity.ok("Conducteur with numero " + numero + " deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Conducteur with numero " + numero + " not found.");
        }
    }

    @GetMapping("/search")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Conducteur> searchConducteurs(@RequestParam String term, @RequestParam(required = false) Integer age) {
        return conducteurService.searchConducteurs(term, age);
    }

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Void> handleOptions() {
        return ResponseEntity.ok().build();
    }

}