package com.irtbs.trainsearch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.trainsearch.entities.Route;
import com.irtbs.trainsearch.repositories.RouteRepository;

@RestController
public class RouteController {
	@Autowired
	RouteRepository routeRepo;
	
	@GetMapping("/routes")
	public List<Route> getRoutes()
	{
		return routeRepo.findAll();
	}
}
