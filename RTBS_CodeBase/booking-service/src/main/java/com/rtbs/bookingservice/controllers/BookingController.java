package com.rtbs.bookingservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rtbs.bookingservice.dtos.BookingRequest;
import com.rtbs.bookingservice.dtos.BookingResponse;
import com.rtbs.bookingservice.dtos.CancellationRequest;
import com.rtbs.bookingservice.services.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	BookingService bookingService;

	@PostMapping(value = "/bookingRequest", produces = "application/json")
	public BookingResponse bookTicket(@RequestBody BookingRequest bookingRequest)
	{
		return bookingService.bookTicket(bookingRequest);
	}
	
	@PostMapping("/cancelTicket")
	public String cancelTicket(@RequestBody CancellationRequest cancelRequest)
	{
		return bookingService.cancelTicket(cancelRequest);
	}
	
	@GetMapping(value="/bookingHistory", produces = "application/json")
	public List<BookingResponse> getBookingHistory(@RequestParam int userId)
	{
		return bookingService.getBookingHistory(userId);
	}
}
