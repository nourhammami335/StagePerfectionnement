/*package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Désactiver CSRF
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Autoriser toutes les requêtes
                );
        return http.build();

    }
}*/
package com.example.demo.config;

import com.example.demo.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                /*.csrf(csrf -> csrf.disable()) // Disable CSRF protection for simplicity
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() // Allow access to authentication API
                        .anyRequest().authenticated() // All other requests require authentication
                )*/
                .csrf(csrf -> csrf.disable()) // Désactiver CSRF
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Autoriser toutes les requêtes
                );
                //.httpBasic(withDefaults()); // Use HTTP Basic authentication

        return http.build();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService); // Use the UserDetailsService without password encoding
    }
}