package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Operation;
import com.example.demo.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/operations")

public class OperationController {
    @Autowired
    private OperationService operationService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Operation> getAllOperations() {
        return operationService.getAllOperations();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Operation getOperation(@PathVariable Long id) {
        Operation operation = operationService.getOperation(id);
        if (operation == null) {
            throw new ResourceNotFoundException("Opération non trouvée avec l'ID : " + id);
        }
        return operation;
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Operation createOperation(@RequestBody Operation operation) {
        operation.setId(null); // Supprimez l'ID pour forcer l'insertion
        return operationService.saveOperation(operation);
    }


    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteOperation(@PathVariable Long id) {

        Operation operation = operationService.getOperation(id);
        if (operation == null) {
            throw new ResourceNotFoundException("Opération non trouvée avec l'ID : " + id);
        }
        operationService.deleteOperation(id);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Operation> updateOperation(@PathVariable Long id, @RequestBody Operation operationDetails) {
        Operation updatedOperation = operationService.updateOperation(id, operationDetails);
        return ResponseEntity.ok(updatedOperation);
    }
    @GetMapping("/search")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Operation> getOperationsByImmatriculation(@RequestParam String immatriculation) {
        List<Operation> operations = operationService.findOperationsByImmatriculation(immatriculation);
        if (operations.isEmpty()) {
            throw new ResourceNotFoundException("Aucune opération trouvée pour l'immatriculation : " + immatriculation);
        }
        return operations;
    }


    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Void> handleOptions() {
        return ResponseEntity.ok().build();
    }

    /*@GetMapping("/search")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Operation> searchOperations(
            @RequestParam(required = false) String immatriculation,
            @RequestParam(required = false) Date dateVidange,
            @RequestParam(required = false) Date dateAssurance,
            @RequestParam(required = false) Date dateVisite) {

        List<Operation> operations = operationService.searchOperations(immatriculation, dateVidange, dateAssurance, dateVisite);
        if (operations.isEmpty()) {
            throw new ResourceNotFoundException("Aucune opération trouvée avec les critères fournis.");
        }
        return operations;
    }*/
}