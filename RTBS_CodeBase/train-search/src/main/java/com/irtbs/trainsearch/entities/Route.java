package com.irtbs.trainsearch.entities;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Route {
	@Id
	@Column(name="route_id")
	private int routeId;
	@Column(name="train_id")
	private int trainId;
	@Column(name="station_id")
	private int stationId;
	@Column(name="stop_number")
	private int stopNumber;
	@Column(name="arrival_time")
	private LocalTime arrTime;
	@Column(name="departure_time")
	private LocalTime deptTime;
	@Column(name="distance_to_next_stop")
	private int distToNext;
	public int getRouteId() {
		return routeId;
	}
	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}
	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public int getStationId() {
		return stationId;
	}
	public void setStationId(int stationId) {
		this.stationId = stationId;
	}
	public int getStopNumber() {
		return stopNumber;
	}
	public void setStopNumber(int stopNumber) {
		this.stopNumber = stopNumber;
	}
	public LocalTime getArrTime() {
		return arrTime;
	}
	public void setArrTime(LocalTime arrTime) {
		this.arrTime = arrTime;
	}
	public LocalTime getDeptTime() {
		return deptTime;
	}
	public void setDeptTime(LocalTime deptTime) {
		this.deptTime = deptTime;
	}
	public int getDistToNext() {
		return distToNext;
	}
	public void setDistToNext(int distToNext) {
		this.distToNext = distToNext;
	}
	@Override
	public String toString() {
		return "Route [routeId=" + routeId + ", trainId=" + trainId + ", stationId=" + stationId + ", stopNumber="
				+ stopNumber + ", arrTime=" + arrTime + ", deptTime=" + deptTime + ", distToNext=" + distToNext + "]";
	}
	
}
