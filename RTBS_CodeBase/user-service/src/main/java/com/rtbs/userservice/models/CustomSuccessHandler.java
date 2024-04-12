package com.rtbs.userservice.models;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CustomSuccessHandler implements AuthenticationSuccessHandler {

	    private ObjectMapper objectMapper = new ObjectMapper();

	    @Override
	    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
	            throws IOException, ServletException {
	        Object principal = authentication.getPrincipal();
	        String strJson = objectMapper.writeValueAsString(principal);
	        response.setContentType("application/json");
	        response.getWriter().write(strJson);
//	        authentication.setAuthenticated(true);
	    }
	
}
