package com.rtbs.bookingservice.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "passenger")
public class Passenger {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int passengerId;
	
	private String name, gender, cateringOption, status;
	private int age, bookingId, seatNo;

	public int getPassengerId() {
		return passengerId;
	}

	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	
	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public Passenger(String name, String gender, String cateringOption, int age, int bookingId, String status) {
		super();
		this.name = name;
		this.gender = gender;
		this.cateringOption = cateringOption;
		this.age = age;
		this.status = status;
		this.bookingId = bookingId;
		this.seatNo = 25;
	}

	public Passenger() {
		super();
	}

	@Override
	public String toString() {
		return "Passenger [passengerId=" + passengerId + ", name=" + name + ", gender=" + gender + ", cateringOption="
				+ cateringOption + ", status=" + status + ", age=" + age + ", bookingId=" + bookingId + ", seatNo="
				+ seatNo + "]";
	}
		
	
	
}