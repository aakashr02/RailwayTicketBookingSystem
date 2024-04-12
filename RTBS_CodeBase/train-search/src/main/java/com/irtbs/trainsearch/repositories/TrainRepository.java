package com.irtbs.trainsearch.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.irtbs.dto.TrainRouteDetailsDTO;
import com.irtbs.dto.TrainSearchDTO;
import com.irtbs.trainsearch.entities.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Integer>{
	 @Query(value = "select r1.stop_number as beginStopNo, r2.stop_number as endStopNo, tr.train_id, tr.train_name, tr.days, s.journey_start_date, ssn.station_name as source, \r\n"
	 		+ "esn.station_name as destination, r1.departure_time as start, r2.arrival_time as reach\r\n"
	 		+ "from route r1 inner join route r2 on r1.train_id = r2.train_id \r\n"
	 		+ "	inner join seatavailability s on  r1.route_id = s.route_id \r\n"
	 		+ "    inner join traincoach t on s.train_coach_id = t.train_coach_id\r\n"
	 		+ "    inner join coach c on t.coach_id = c.coach_id\r\n"
	 		+ "    inner join train tr on tr.train_id = r1.train_id\r\n"
	 		+ "    inner join station ssn on ssn.station_id = r1.station_id\r\n"
	 		+ "    inner join station esn on esn.station_id = r2.station_id\r\n"
	 		+ "	where r1.station_id = ?1 and r2.station_id=?2 and r1.stop_number<r2.stop_number and s.journey_start_date=?3 and c.type='2AC'", nativeQuery = true)
	    List<TrainSearchDTO> fetchTrainDetails(int fromStation, int toStation, Date date);
	 
	 @Query(value = "SELECT\r\n"
	 		+ "    t.train_id,\r\n"
	 		+ "    t.train_name,\r\n"
	 		+ "    ssn.station_name AS source_station_name,\r\n"
	 		+ "    esn.station_name AS end_station_name,\r\n"
	 		+ "    t.days,\r\n"
	 		+ "    r.stop_number,\r\n"
	 		+ "    r.station_id,\r\n"
	 		+ "    st.station_name,\r\n"
	 		+ "    r.arrival_time,\r\n"
	 		+ "    r.departure_time,\r\n"
	 		+ "    TIMEDIFF(r.departure_time, r.arrival_time) AS halt_time,\r\n"
	 		+ "    SUM(r.distance_to_next_stop) OVER (PARTITION BY t.train_id ORDER BY r.stop_number) AS cumulative_distance\r\n"
	 		+ "FROM\r\n"
	 		+ "    train t\r\n"
	 		+ "    \r\n"
	 		+ "JOIN\r\n"
	 		+ "    route r ON t.train_id = r.train_id\r\n"
	 		+ "JOIN\r\n"
	 		+ "    station st ON r.station_id = st.station_id\r\n"
	 		+ "JOIN\r\n"
	 		+ "    station ssn ON t.source_station_id = ssn.station_id\r\n"
	 		+ "JOIN\r\n"
	 		+ "    station esn ON t.end_station_id = esn.station_id\r\n"
	 		+ "WHERE t.train_name = ?1", nativeQuery=true)
	 List<TrainRouteDetailsDTO> fetchTrainRouteDetails(String trainName);
}
