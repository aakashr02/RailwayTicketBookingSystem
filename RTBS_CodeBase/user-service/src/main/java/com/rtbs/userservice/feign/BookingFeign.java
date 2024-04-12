package com.rtbs.userservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.rtbs.userservice.dto.BookingRequest;
import com.rtbs.userservice.dto.BookingResponse;
import com.rtbs.userservice.dto.CancellationRequest;


@FeignClient("BOOKING-SERVICE")
public interface BookingFeign {
	
	@PostMapping(value="/bookingRequest", produces = "application/json")
	public BookingResponse bookTicket(@RequestBody BookingRequest bookingRequest);
	
	@PostMapping("/cancelTicket")
	public String cancelTicket(@RequestBody CancellationRequest cancelRequest);
	
	@GetMapping(value="/bookingHistory", produces = "application/json")
	public List<BookingResponse> getBookingHistory(@RequestParam int userId);
	
}
