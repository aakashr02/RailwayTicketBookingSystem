package com.irtbs.trainsearch.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="traincoach")
public class TrainCoach {
	@Id
	@Column(name="train_coach_id")
	private int trainCoachId;
	@Column(name="train_id")
	private int trainId;
	@Column(name="coach_id")
	private int coachId;
	@Column(name="no_of_coach")
	private int noOfCoach;
	public int getTrainCoachId() {
		return trainCoachId;
	}
	public void setTrainCoachId(int trainCoachId) {
		this.trainCoachId = trainCoachId;
	}
	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public int getCoachId() {
		return coachId;
	}
	public void setCoachId(int coachId) {
		this.coachId = coachId;
	}
	public int getNoOfCoach() {
		return noOfCoach;
	}
	public void setNoOfCoach(int noOfCoach) {
		this.noOfCoach = noOfCoach;
	}
	@Override
	public String toString() {
		return "TrainCoach [trainCoachId=" + trainCoachId + ", trainId=" + trainId + ", coachId=" + coachId
				+ ", noOfCoach=" + noOfCoach + "]";
	}
	
}
