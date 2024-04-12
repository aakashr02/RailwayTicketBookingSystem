package com.irtbs.trainsearch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.dto.StationDTO;
import com.irtbs.trainsearch.entities.Station;
import com.irtbs.trainsearch.repositories.StationRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class StationController {
	@Autowired
	StationRepository stationRepo;
	
	@GetMapping("/stations")
	public List<Station> getStations(){
		return stationRepo.findAll();
	}
	@GetMapping("/station-id")
	public List<StationDTO> getStationIds(@RequestParam("fromStation") String fromStation,
            @RequestParam("toStation") String toStation){
		return stationRepo.getStationId(fromStation, toStation);
	}
}
