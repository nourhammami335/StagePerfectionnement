package com.example.demo.service;

import com.example.demo.model.Conducteur;
import com.example.demo.repository.ConducteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private ConducteurRepository conducteurRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Conducteur conducteur = conducteurRepository.findByLogin(username)
                .orElseThrow(() -> new UsernameNotFoundException("User  not found with username: " + username));

        // Return UserDetails with plain text password
        return new org.springframework.security.core.userdetails.User(
                conducteur.getLogin(),
                conducteur.getMotdepasse(), // This should be the plain text password
                Collections.emptyList() // You can add roles here if necessary
        );
    }
}