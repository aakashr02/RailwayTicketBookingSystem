package com.irtbs.trainsearch.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Station {
	@Id
	@Column(name="station_id")
	private int stationId;
	@Column(name="station_name")
	private String stationName;
	private String state;
	public int getStationId() {
		return stationId;
	}
	public void setStationId(int stationId) {
		this.stationId = stationId;
	}
	public String getStationName() {
		return stationName;
	}
	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Override
	public String toString() {
		return "Station [stationId=" + stationId + ", stationName=" + stationName + ", state=" + state + "]";
	}
	
}
