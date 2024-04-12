package com.irtbs.trainsearch.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="seatavailability")
public class SeatAvailability {
	@Id
	@Column(name="seat_availability_id")
	private int seatAvId;
	@Column(name="route_id")
	private int routeId;
	@Column(name="journey_start_date")
	private LocalDate jStartDate;
	@Column(name="train_coach_id")
	private int trainCoachId;
	@Column(name="price_to_next_stop")
	private int priceToNext;
	@Column(name="seats_available")
	private int seatsAv;
	public int getSeatAvId() {
		return seatAvId;
	}
	public void setSeatAvId(int seatAvId) {
		this.seatAvId = seatAvId;
	}
	public int getRouteId() {
		return routeId;
	}
	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}
	public LocalDate getjStartDate() {
		return jStartDate;
	}
	public void setjStartDate(LocalDate jStartDate) {
		this.jStartDate = jStartDate;
	}
	public int getTrainCoachId() {
		return trainCoachId;
	}
	public void setTrainCoachId(int trainCoachId) {
		this.trainCoachId = trainCoachId;
	}
	public int getSeatsAv() {
		return seatsAv;
	}
	public void setSeatsAv(int seatsAv) {
		this.seatsAv = seatsAv;
	}
	public int getPriceToNext() {
		return priceToNext;
	}
	public void setPriceToNext(int priceToNext) {
		this.priceToNext = priceToNext;
	}
	@Override
	public String toString() {
		return "SeatAvailability [seatAvId=" + seatAvId + ", routeId=" + routeId + ", jStartDate=" + jStartDate
				+ ", trainCoachId=" + trainCoachId + ", priceToNext=" + priceToNext + ", seatsAv=" + seatsAv + "]";
	}
	
	
	
}
