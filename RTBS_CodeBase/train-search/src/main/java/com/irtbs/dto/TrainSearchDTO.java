package com.irtbs.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public interface TrainSearchDTO {
	
	public int getTrain_id();
	public String getTrain_name();
	public String getDays();
	public LocalDate getJourney_start_date();
	public LocalTime getStart();
	public LocalTime getReach();
	public String getSource();
	public String getDestination();
	public int getBeginStopNo();
	public int getEndStopNo();
}
