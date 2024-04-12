package com.irtbs.trainsearch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.dto.CoachDTO;
import com.irtbs.trainsearch.entities.Coach;
import com.irtbs.trainsearch.repositories.CoachRepository;

@RestController
public class CoachController {
	@Autowired
	CoachRepository coachRepo;
	
	@GetMapping("/coach")
	public List<Coach> getCoachInfo(){
		return coachRepo.findAll();
	}
	
	@GetMapping("/get-coach-id")
	public CoachDTO fetchCoachId(@RequestParam String ctype) {
		return coachRepo.getCoachId(ctype);
	}
}
