package com.irtbs.trainsearch.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="train")
public class Train {
	@Id
	@Column(name="train_id")
	private int trainId;
	@Column(name="train_name")
	private String trainName;
	@Column(name="source_station_id")
	private int sourceStationId;
	@Column(name="end_station_id")
	private int endStationId;
	@Column(name="total_seats")
	private int totalSeats;
	@Column(name="total_coaches")
	private int totalCoaches;
	private String days;
	@Column(name="catering_services")
	private String cateringService;
	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public int getSourceStationId() {
		return sourceStationId;
	}
	public void setSourceStationId(int sourceStationId) {
		this.sourceStationId = sourceStationId;
	}
	public int getEndStationId() {
		return endStationId;
	}
	public void setEndStationId(int endStationId) {
		this.endStationId = endStationId;
	}
	public int getTotalSeats() {
		return totalSeats;
	}
	public void setTotalSeats(int totalSeats) {
		this.totalSeats = totalSeats;
	}
	public int getTotalCoaches() {
		return totalCoaches;
	}
	public void setTotalCoaches(int totalCoaches) {
		this.totalCoaches = totalCoaches;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public String getCateringService() {
		return cateringService;
	}
	public void setCateringService(String cateringService) {
		this.cateringService = cateringService;
	}
	@Override
	public String toString() {
		return "Train [trainId=" + trainId + ", trainName=" + trainName + ", sourceStationId=" + sourceStationId
				+ ", endStationId=" + endStationId + ", totalSeats=" + totalSeats + ", totalCoaches=" + totalCoaches
				+ ", days=" + days + ", cateringService=" + cateringService + "]";
	}
	
	
}
