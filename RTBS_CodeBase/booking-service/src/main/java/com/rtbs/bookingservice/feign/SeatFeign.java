package com.rtbs.bookingservice.feign;

import java.sql.Date;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("TRAIN-SEARCH")
public interface SeatFeign {

	
	@PutMapping("/book-ticket")
	public List<Integer> bookSeats(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam String fstation, @RequestParam String tstation, @RequestParam int seats);
	
	@PutMapping("/cancel-ticket")
	public boolean cancelSeats(@RequestParam String coach_type, @RequestParam Date date, @RequestParam int train_id, @RequestParam String fstation, @RequestParam String tstation, @RequestParam int seats);
	

}