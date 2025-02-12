package com.example.demo.repository;

import com.example.demo.model.Conducteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ConducteurRepository extends JpaRepository<Conducteur, String> {
    //Optional<Object> findByLogin(String username);

    //Optional<Object> findByLoginAndMotdepasse(String login, String motdepasse);
    //Optional<Conducteur> findByLogin(String login);

    Optional<Conducteur> findByLoginAndMotdepasse(String login, String motdepasse);
    Optional<Conducteur> findByLogin(String login);

    // Méthode de recherche mise à jour pour inclure tous les champs
    @Query("SELECT c FROM Conducteur c WHERE " +
            "LOWER(c.nom) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.prenom) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.email) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.adresse) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.departement) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.login) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.motdepasse) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.numero) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.sexe) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "c.age = :age") // Notez que l'âge est un entier, donc vous pouvez le traiter différemment
    List<Conducteur> searchConducteurs(@Param("searchTerm") String searchTerm, @Param("age") Integer age);




}