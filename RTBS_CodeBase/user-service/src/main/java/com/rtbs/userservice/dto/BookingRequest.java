package com.rtbs.userservice.dto;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.rtbs.userservice.dto.PassengerDTO;


public class BookingRequest {
	
	private int userId;
	private String boardingStationId, destinationStationId, bookingClass;
	private int trainId, pricePerTicket, numberOfPassengers;
	private LocalDate departureDate;
	private List<PassengerDTO> passengers;
	
	public BookingRequest(String boardingStationId, String destinationStationId, int trainId,
			int pricePerTicket, int numberOfPassengers, int userId, List<PassengerDTO> passengers, String bookingClass, LocalDate departureDate) {
		super();		
		this.boardingStationId = boardingStationId;
		this.destinationStationId = destinationStationId;
		this.trainId = trainId;
		this.pricePerTicket = pricePerTicket;
		this.numberOfPassengers = numberOfPassengers;
		this.passengers = passengers;
		this.bookingClass = bookingClass;
		this.departureDate = departureDate;
	}
	public BookingRequest() {
		super();
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
	public List<PassengerDTO> getPassengers() {
		return passengers;
	}
	public void setPassengers(List<PassengerDTO> passengers) {
		this.passengers = passengers;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
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
	
	
	
	

}
