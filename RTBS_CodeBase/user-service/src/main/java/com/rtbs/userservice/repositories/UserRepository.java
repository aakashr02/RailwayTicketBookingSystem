package com.rtbs.userservice.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rtbs.userservice.models.MyUser;

public interface UserRepository extends JpaRepository<MyUser, Integer> {
	public Optional<MyUser> findByEmail(String email);
}
