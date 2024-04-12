package com.rtbs.bookingservice.models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.cglib.core.Local;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookingId;
	
	private String boardingStationId, destinationStationId, bookingClass;
	private int userId, trainId, pricePerTicket, numberOfPassengers;
	
	private LocalDate departureDate; 
	private LocalDateTime bookingDateTime;
	
	public Booking(String boardingStationId, String destinationStationId, int userId, int trainId,
			int pricePerTicket, int numberOfPassengers, String bookingClass, LocalDate departureDate, LocalDateTime bookingDateTime) {
		super();
		
		this.boardingStationId = boardingStationId;
		this.destinationStationId = destinationStationId;
		this.userId = userId;
		this.trainId = trainId;
		this.pricePerTicket = pricePerTicket;
		this.numberOfPassengers = numberOfPassengers;
		this.bookingClass = bookingClass;
		this.departureDate = departureDate;
		this.bookingDateTime = bookingDateTime;
	}
	
	public Booking() {
		super();
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public String getBoardingStationId() {
		return boardingStationId;
	}

	public void setBoardingStationId(String boardingStationId) {
		this.boardingStationId = boardingStationId;
	}

	public String getDestinationStationId() {
		return destinationStationId;
	}

	public void setDestinationStationId(String destinationStationId) {
		this.destinationStationId = destinationStationId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public int getPricePerTicket() {
		return pricePerTicket;
	}

	public void setPricePerTicket(int pricePerTicket) {
		this.pricePerTicket = pricePerTicket;
	}

	public int getNumberOfPassengers() {
		return numberOfPassengers;
	}

	public void setNumberOfPassengers(int numberOfPassengers) {
		this.numberOfPassengers = numberOfPassengers;
	}

	public String getBookingClass() {
		return bookingClass;
	}

	public void setBookingClass(String bookingClass) {
		this.bookingClass = bookingClass;
	}

	public LocalDate getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}

	public LocalDateTime getBookingDateTime() {
		return bookingDateTime;
	}

	public void setBookingDateTime(LocalDateTime bookingDateTime) {
		this.bookingDateTime = bookingDateTime;
	}
	
	
	
	
	
}
