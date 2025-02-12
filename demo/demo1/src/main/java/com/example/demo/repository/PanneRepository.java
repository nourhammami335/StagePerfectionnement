// PanneRepository.java
package com.example.demo.repository;

import com.example.demo.model.Panne;
import com.example.demo.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PanneRepository extends JpaRepository<Panne, Long> {
   List<Panne> findByConducteurNumero(String conducteurNumero);
   // PanneRepository.java
  //List<Panne> findByConducteurId(String conducteurId);
}