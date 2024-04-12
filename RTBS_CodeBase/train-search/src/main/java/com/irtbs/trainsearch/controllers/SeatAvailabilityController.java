package com.irtbs.trainsearch.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.irtbs.dto.SeatAvailabilityAndPrice;
import com.irtbs.trainsearch.entities.SeatAvailability;
import com.irtbs.trainsearch.repositories.SeatAvailabilityRepository;
import com.irtbs.trainsearch.repositories.StationRepository;


@RestController
//@CrossOrigin("http://localhost:3000")
public class SeatAvailabilityController {
	@Autowired
	SeatAvailabilityRepository seatAvailabilityRepo;
	
	@Autowired
	StationRepository stationRepo;
	
	@GetMapping("/seats")
	public List<SeatAvailability> getSeats()
	{
		return seatAvailabilityRepo.findAll();
	}
	
	@PutMapping("/book-ticket")
	public List<Integer> bookSeats(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam String fstation, @RequestParam String tstation, @RequestParam int seats) {
		
		try {
			List<Integer> confirmationStatus = new ArrayList<Integer>();
			int fid = stationRepo.findByStationName(fstation).get().getStationId();
			int tid = stationRepo.findByStationName(tstation).get().getStationId();
			int minSeats = seatAvailabilityRepo.getSeatAvailability(coach_type, date, train_id, fid, tid);
			seatAvailabilityRepo.bookTickets(coach_type, date, train_id, fid, tid, seats);
			if(minSeats<=0)
			{
				confirmationStatus.add(0);
				confirmationStatus.add(seats);
			}
			else if(minSeats>=seats)
			{
				confirmationStatus.add(seats);
				confirmationStatus.add(0);
			}
			else
			{
				confirmationStatus.add(minSeats);
				confirmationStatus.add(seats - minSeats);
			}
			return confirmationStatus;
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
		return null;
	}
	
	
	
	@PutMapping("/cancel-ticket")
	public boolean cancelSeats(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam String fstation, @RequestParam String tstation, @RequestParam int seats) {
		
		try {
			
			int fid = stationRepo.findByStationName(fstation).get().getStationId();
			int tid = stationRepo.findByStationName(tstation).get().getStationId();
			
			seatAvailabilityRepo.cancelTickets(coach_type, date, train_id, fid, tid, seats);
			
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
		return false;
	}
	
	
	
	@GetMapping("/seat-ids")
	public List<Integer> getSeatIds(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam int fstation, @RequestParam int tstation) {
		
		seatAvailabilityRepo.getSeatAvailability(coach_type, date, train_id, fstation, tstation);
		return null;
	}
	
	@GetMapping("/seat-availability-price")
	public List<SeatAvailabilityAndPrice> getSeatAvailabilityAndPrice(@RequestParam int fromStopNo, @RequestParam int toStopNo, @RequestParam int trainId , @RequestParam String date, @RequestParam String coachType)
	{
		return seatAvailabilityRepo.getSeatAvailabilityAndPrice(fromStopNo, toStopNo, trainId, date, coachType);
	}
}
