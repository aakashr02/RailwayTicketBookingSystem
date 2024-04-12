package com.rtbs.userservice.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.rtbs.userservice.dto.BookingRequest;
import com.rtbs.userservice.dto.BookingResponse;
import com.rtbs.userservice.dto.CancellationRequest;
import com.rtbs.userservice.dto.Login;
import com.rtbs.userservice.feign.BookingFeign;
import com.rtbs.userservice.models.MyUser;
import com.rtbs.userservice.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Autowired
	BookingFeign bookingFeign;
	
	
	
	public String register(MyUser user)    
	{
		if(  userRepo.findByEmail(user.getEmail()).orElse(null).equals(null))
		{
			user.setPassword(passwordEncoder.encode( user.getPassword() ));
			userRepo.save(user);
			return "Registration Successful";
		}
		return "This Mail ID is Already Registered";
	}
	
	
	
	public BookingResponse bookTicket(BookingRequest bookingRequest)
	{


		bookingRequest.setUserId(this.getUserId());
		
		return bookingFeign.bookTicket(bookingRequest);

	}
	
	public String cancelTicket(CancellationRequest cancelRequest)
	{
		cancelRequest.setUserId(this.getUserId());
		
		System.out.println(cancelRequest);
		
		return bookingFeign.cancelTicket(cancelRequest);
	}
	
	public List<BookingResponse> getBookingHistory()
	{
		
		return bookingFeign.getBookingHistory(this.getUserId());
	}


	public int getUserId() {
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	String currentPrincipalName = authentication.getName();
		
		return userRepo.findByEmail(currentPrincipalName).get().getUserId();
		
	}
}
