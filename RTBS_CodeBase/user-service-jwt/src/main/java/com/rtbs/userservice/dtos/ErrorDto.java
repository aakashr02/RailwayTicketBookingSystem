package com.rtbs.userservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class ErrorDto {

    public ErrorDto(String string) {
		// TODO Auto-generated constructor stub
    	this.message = string;
	}
    
    
    public ErrorDto() {
	}

	private String message;
}

