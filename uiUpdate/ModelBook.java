package com.book.model;

import org.springframework.data.mongodb.core.index.Indexed;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

@Document("reserve")
public class ModelBook {

	@Id
	private String ticketId;
	@Indexed

	private String trainId;
	private String name;
	private String age;
	private String gender;
	private String email;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	
	public ModelBook() {
		
	}
	
	public ModelBook(String ticketId, String trainId, String name, String age, String gender,String email,
			LocalDate date) {
		super();
		this.ticketId = ticketId;
		
		this.trainId = trainId;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.date = date;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getId() {
		return ticketId;
	}
	public void setId(String id) {
		ticketId = id;
	}

	public String getTrainId() {
		return trainId;
	}
	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
}
