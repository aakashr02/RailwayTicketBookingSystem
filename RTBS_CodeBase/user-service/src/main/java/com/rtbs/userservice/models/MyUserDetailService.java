package com.rtbs.userservice.models;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.rtbs.userservice.repositories.UserRepository;

@Service
public class MyUserDetailService implements UserDetailsService {

	@Autowired
	private UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		Optional<MyUser> user = repo.findByEmail(email);
		if(user.isPresent())
		{
//			System.out.println("DB EMAIL : "+user.get().getEmail()+" DB PSWD : "+user.get().getPassword());
			return User.builder()
					.username(user.get().getEmail())
					.password(user.get().getPassword()) //"$2a$12$6eiBdveIWZ6F2CP30R7acePpIPpBG0rj7dm04ZoHrTwHxhzTQtZ9C" - aakash
					.roles("USER")
					.build();
			
		}
		else
		{
			throw new UsernameNotFoundException("User "+email+" not found");
		}
		
	}

}
