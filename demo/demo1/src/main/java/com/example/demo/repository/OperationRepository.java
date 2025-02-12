package com.example.demo.repository;

import com.example.demo.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface OperationRepository extends JpaRepository<Operation, Long> {
    List<Operation> findByVoiture_ImmatriculationContaining(String immatriculation);

   /* @Query("SELECT o FROM Operation o WHERE " +
            "(:immatriculation IS NULL OR o.voiture.immatriculation LIKE %:immatriculation%) AND " +
            "(:dateVidange IS NULL OR o.dateVidange = :dateVidange) AND " +
            "(:dateAssurance IS NULL OR o.dateAssurance = :dateAssurance) AND " +
            "(:dateVisite IS NULL OR o.dateVisite = :dateVisite)")
    List<Operation> searchOperations(@Param("immatriculation") String immatriculation,
                                     @Param("dateVidange") Date dateVidange,
                                     @Param("dateAssurance") Date dateAssurance,
                                     @Param("dateVisite") Date dateVisite);*/
}
