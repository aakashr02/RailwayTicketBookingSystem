package com.rtbs.bookingservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rtbs.bookingservice.models.Passenger;
import java.util.List;


public interface PassengerRepository extends JpaRepository<Passenger, Integer> {
	public List<Passenger> findByBookingId(int bookingId); 
}
