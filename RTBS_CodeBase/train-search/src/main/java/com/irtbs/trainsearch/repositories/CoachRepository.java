package com.irtbs.trainsearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.irtbs.dto.CoachDTO;
import com.irtbs.trainsearch.entities.Coach;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Integer> {
	@Query(value = "SELECT coach_id FROM coach c1 \r\n"
			+ "WHERE c1.type = :ctype", nativeQuery = true)
	public CoachDTO getCoachId(@Param("ctype") String ctype);
}
