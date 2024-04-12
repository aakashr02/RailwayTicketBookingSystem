package com.irtbs.trainsearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.irtbs.trainsearch.entities.TrainCoach;

@Repository
public interface TrainCoachRepository extends JpaRepository<TrainCoach, Integer>{

}
