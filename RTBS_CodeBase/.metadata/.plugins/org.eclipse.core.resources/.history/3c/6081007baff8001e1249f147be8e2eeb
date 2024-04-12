package com.irtbs.trainsearch.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.irtbs.dto.StationDTO;
import com.irtbs.trainsearch.entities.Station;

@Repository
public interface StationRepository extends JpaRepository<Station, Integer>{
	@Query(value="SELECT\r\n"
			+ "    fs.station_id AS from_station_id,\r\n"
			+ "    ts.station_id AS to_station_id\r\n"
			+ "FROM\r\n"
			+ "    station fs\r\n"
			+ "    INNER JOIN station ts ON fs.station_name = :fromStation AND ts.station_name = :toStation", nativeQuery=true)
	public List<StationDTO> getStationId(@Param("fromStation") String fromStation, @Param("toStation") String toStation);
}
