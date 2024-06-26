package com.rtbs.bookingservice.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


public class BookingResponse {

	private int bookingId;
	private String boardingStationId, destinationStationId,  bookingClass;
	private int trainId, userId, pricePerTicket, numberOfPassengers;
	private LocalDate departureDate;
	private List<PassengerTicket> passengers;  
	private LocalDateTime bookingDateTime;
	
	public BookingResponse()
	{
		
	}
	
	
	public BookingResponse(int bookingId, String boardingStationId, String destinationStationId, String bookingClass,
			int trainId, int userId, int pricePerTicket, int numberOfPassengers,
			List<PassengerTicket> passengers, LocalDate departureDate, LocalDateTime bookingDateTime) {
		super();
		this.bookingId = bookingId;
		this.boardingStationId = boardingStationId;
		this.destinationStationId = destinationStationId;
		this.bookingClass = bookingClass;
		this.trainId = trainId;
		this.userId = userId;
		this.pricePerTicket = pricePerTicket;
		this.numberOfPassengers = numberOfPassengers;
		this.passengers = passengers;
		this.departureDate = departureDate;
		this.bookingDateTime = bookingDateTime;
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


	public String getBookingClass() {
		return bookingClass;
	}


	public void setBookingClass(String bookingClass) {
		this.bookingClass = bookingClass;
	}


	public int getTrainId() {
		return trainId;
	}


	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
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


	public List<PassengerTicket> getPassengers() {
		return passengers;
	}


	public void setPassengers(List<PassengerTicket> passengers) {
		this.passengers = passengers;
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
