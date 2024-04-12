package com.rtbs.userservice.models;

import com.fasterxml.jackson.databind.ObjectMapper;



import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


import java.io.IOException;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class CustomFilter extends AbstractAuthenticationProcessingFilter {

    public CustomFilter() {
        super(new AntPathRequestMatcher("/login", "POST"));
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        String username, password;

        try {
            Map<String, String> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);
            username = requestMap.get("email");
            password = requestMap.get("password");
            System.out.println("EMAIL : "+username+"  PSWD : "+password);
        } catch (IOException e) {
            throw new AuthenticationServiceException(e.getMessage(), e);
        }

        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(
                username, password);
        
        authRequest.setDetails(authenticationDetailsSource.buildDetails(request));

        return this.getAuthenticationManager().authenticate(authRequest);
    }
    
    
    @Override
    protected void successfulAuthentication(jakarta.servlet.http.HttpServletRequest request, jakarta.servlet.http.HttpServletResponse response,  jakarta.servlet.FilterChain chain, Authentication authResult) throws IOException, jakarta.servlet.ServletException {

            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authResult);
            //SecurityContextHolder.setContext(context);
            HttpSessionSecurityContextRepository secRepo = new HttpSessionSecurityContextRepository();
            secRepo.saveContext(context, request, response);

            super.successfulAuthentication(request, response, chain, authResult);
    }

}
