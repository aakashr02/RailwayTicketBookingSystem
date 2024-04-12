package com.irtbs.trainsearch.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.dto.TrainRouteDetailsDTO;
import com.irtbs.dto.TrainSearchDTO;
import com.irtbs.trainsearch.entities.Train;
import com.irtbs.trainsearch.repositories.TrainRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class TrainController {
	@Autowired
	TrainRepository trainRepo;
	
	@GetMapping("/trains")
	public List<Train> getTrains()
	{
		return trainRepo.findAll();
	}
	
	@GetMapping("/train-search")
	public List<TrainSearchDTO> searchTrain(@RequestParam("fromStationId") int fromStation,
            @RequestParam("toStationId") int toStation,
            @RequestParam("date") Date date){
		
		return trainRepo.fetchTrainDetails(fromStation, toStation, date);
	}
	
	@GetMapping("/train-route-details")
	public List<TrainRouteDetailsDTO> getTrainRouteDetails(@RequestParam("trainName") String trainName){
		return trainRepo.fetchTrainRouteDetails(trainName);
	}

}
