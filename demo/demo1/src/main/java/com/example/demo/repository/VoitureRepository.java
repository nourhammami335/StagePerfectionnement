package com.example.demo.repository;

import com.example.demo.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoitureRepository extends JpaRepository<Voiture, String> {
    List<Voiture> findByConducteurNumero(String conducteurNumero);

    // New method for filtering
    @Query("SELECT v FROM Voiture v WHERE " +
            "LOWER(v.immatriculation) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.modele) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.marque) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.carburant) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Voiture> searchVoitures(@Param("searchTerm") String searchTerm);
}