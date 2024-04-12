package com.irtbs.trainsearch.repositories;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.irtbs.trainsearch.entities.SeatAvailability;

import jakarta.transaction.Transactional;

@Repository
public interface SeatAvailabilityRepository extends JpaRepository<SeatAvailability, Integer>{
	
	@Transactional
	@Modifying
	@Query(value = "update seatavailability s inner join traincoach tc on tc.train_coach_id = s.train_coach_id \r\n"
			+ "	inner join coach c on c.coach_id = tc.coach_id \r\n"
			+ "    set s.seats_available=s.seats_available - :seats \r\n"
			+ "    where c.type=:c_type and s.journey_start_date = :date \r\n"
			+ "	and s.route_id in  (select route_id from route where train_id = :t_id and stop_number between (select stop_number from route where train_id =:t_id and station_id=:fst) and (select stop_number-1 from route where train_id=:t_id and station_id=:tst))\r\n"
			+ "", nativeQuery = true)
	public void bookTickets(@Param("c_type")String c_type,@Param("date") Date date,@Param("t_id") int t_id, @Param("fst") int fst,@Param("tst") int tst,@Param("seats") int seats);
	
}
