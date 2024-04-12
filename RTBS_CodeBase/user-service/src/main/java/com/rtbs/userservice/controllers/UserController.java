package com.rtbs.userservice.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rtbs.userservice.dto.BookingRequest;
import com.rtbs.userservice.dto.BookingResponse;
import com.rtbs.userservice.dto.CancellationRequest;
import com.rtbs.userservice.dto.Login;
import com.rtbs.userservice.models.MyUser;
import com.rtbs.userservice.repositories.UserRepository;
import com.rtbs.userservice.services.UserService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
//@CrossOrigin("http://localhost:3000")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	@Autowired
	Environment env;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody MyUser user)
	{
		String message = userService.register(user);
		return new ResponseEntity<String>(message, HttpStatus.OK);
	}
	

	
	@PostMapping("/cancelTicket")
    public String cancelTicket(@RequestBody CancellationRequest cancelRequest) {
        return userService.cancelTicket(cancelRequest);
    }


    
    @GetMapping("/")
    public String getMethodName() {
    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	String currentPrincipalName = authentication.getPrincipal().toString();
    	System.out.println("PORT : "+env.getProperty("local.server.port"));
        return currentPrincipalName;

    }
    
    @GetMapping("/userId")
    public int getUserId()
    {
    	return userService.getUserId();
    }
    
    
    @PostMapping ("/bookingRequest")
    public BookingResponse bookTicket(@RequestBody BookingRequest bookingRequest)
    {
    	return userService.bookTicket(bookingRequest);
    	 
    }
    
	@GetMapping("/bookingHistory")
	public List<BookingResponse> getBookingHistory()
	{
		return userService.getBookingHistory();
	}
    
}
