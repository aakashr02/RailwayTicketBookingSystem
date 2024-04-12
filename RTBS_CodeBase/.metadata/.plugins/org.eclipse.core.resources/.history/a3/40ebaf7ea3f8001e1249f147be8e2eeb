package com.irtbs.trainsearch.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.trainsearch.entities.SeatAvailability;
import com.irtbs.trainsearch.repositories.SeatAvailabilityRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class SeatAvailabilityController {
	@Autowired
	SeatAvailabilityRepository seatAvailabilityRepo;
	
	@GetMapping("/seats")
	public List<SeatAvailability> getSeats()
	{
		return seatAvailabilityRepo.findAll();
	}
	
	@PutMapping("/book-ticket")
	public boolean bookSeats(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam int fstation, @RequestParam int tstation, @RequestParam int seats) {
		
		try {
			seatAvailabilityRepo.bookTickets(coach_type, date, train_id, fstation, tstation, seats);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
		return false;
	}
}
