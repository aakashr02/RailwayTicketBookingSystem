package com.rtbs.bookingservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rtbs.bookingservice.dtos.PassengerDTO;
import com.rtbs.bookingservice.models.Booking;
import java.util.List;


public interface BookingRepository extends JpaRepository<Booking, Integer> {

	public List<Booking> findByUserIdOrderByBookingDateTimeDesc(int userId);
}