package com.irtbs.trainsearch.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.irtbs.trainsearch.entities.Route;

@Repository
public interface RouteRepository extends JpaRepository<Route, Integer>{

}
