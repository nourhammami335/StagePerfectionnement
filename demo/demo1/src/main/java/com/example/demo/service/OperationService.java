package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Operation;
import com.example.demo.repository.OperationRepository;
import com.example.demo.repository.VoitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OperationService {
    @Autowired
    private OperationRepository operationRepository;
    @Autowired
    private VoitureRepository voitureRepository;

    public List<Operation> getAllOperations() {
        return operationRepository .findAll();
    }

    public Operation getOperation(Long id) {
        return operationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Operation not found with id: " + id));
    }

    public Operation saveOperation(Operation operation) {
        if (operation.getVoiture() == null) {
            throw new IllegalArgumentException("Voiture must not be null");
        }
        return operationRepository.save(operation);
    }

    public void deleteOperation(Long id) {
        operationRepository.deleteById(id);
    }

    public Operation updateOperation(Long id, Operation operationDetails) {
        Operation existingOperation = operationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Operation not found with id: " + id));

        // Update only the specified fields
        if (operationDetails.getDateVidange() != null) {
            existingOperation.setDateVidange(operationDetails.getDateVidange());
        }
        if (operationDetails.getDateAssurance() != null) {
            existingOperation.setDateAssurance(operationDetails.getDateAssurance());
        }
        if (operationDetails.getDateVisite() != null) {
            existingOperation.setDateVisite(operationDetails.getDateVisite());
        }

        return operationRepository.save(existingOperation);
    }
    public List<Operation> findOperationsByImmatriculation(String immatriculation) {
        return operationRepository.findByVoiture_ImmatriculationContaining(immatriculation);
    }
/*
    public List<Operation> searchOperations(String immatriculation, Date dateVidange, Date dateAssurance, Date dateVisite) {
        return operationRepository.searchOperations(immatriculation, dateVidange, dateAssurance, dateVisite);
    }*/
}