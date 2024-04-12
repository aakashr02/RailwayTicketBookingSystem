package com.irtbs.trainsearch.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Coach {
	@Id
	@Column(name="coach_id")
	private int coachId;
	private String type;
	private int seats;
	public int getCoachId() {
		return coachId;
	}
	public void setCoachId(int coachId) {
		this.coachId = coachId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	@Override
	public String toString() {
		return "Coach [coachId=" + coachId + ", type=" + type + ", seats=" + seats + "]";
	}
	
}
