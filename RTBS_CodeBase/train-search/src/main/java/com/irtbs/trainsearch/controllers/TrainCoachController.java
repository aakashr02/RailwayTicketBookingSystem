package com.irtbs.trainsearch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.trainsearch.entities.TrainCoach;
import com.irtbs.trainsearch.repositories.TrainCoachRepository;

@RestController
public class TrainCoachController {
	@Autowired
	TrainCoachRepository trainCoachRepo;
	
	@GetMapping("/train-coaches")
	public List<TrainCoach> getTrainCoaches()
	{
		return trainCoachRepo.findAll();
	}
}
