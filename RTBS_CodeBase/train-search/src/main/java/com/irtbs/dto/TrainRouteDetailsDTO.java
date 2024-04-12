package com.irtbs.dto;

import java.time.LocalTime;

public interface TrainRouteDetailsDTO {
	public int getTrain_id();
	public String getTrain_name();
	public String getSource_station_name();
	public String getEnd_station_name();
	public String getDays();
	public int getStop_number();
	public int getStation_id();
	public String getStation_name();
	public LocalTime getArrival_time();
	public LocalTime getDeparture_time();
	public LocalTime getHalt_time();
	public int getCumulative_distance();
}
