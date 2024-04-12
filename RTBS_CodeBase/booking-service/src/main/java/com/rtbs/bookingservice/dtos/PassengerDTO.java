package com.rtbs.bookingservice.dtos;



public class PassengerDTO {


	private String name, gender, cateringOption;
	private int age;
	public PassengerDTO(String name, String gender, String cateringOption, int age) {
		super();
		this.name = name;
		this.gender = gender;
		this.cateringOption = cateringOption;
		this.age = age;
	}
	public PassengerDTO() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCateringOption() {
		return cateringOption;
	}
	public void setCateringOption(String cateringOption) {
		this.cateringOption = cateringOption;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
}
