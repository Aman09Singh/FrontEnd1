package com.book.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.model.ModelBook;
import com.book.service.ServiceBooking;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/reserve")
public class ControllerBook {

	@Autowired
	ServiceBooking bookService;
	
	@PostMapping("/add")
	public ModelBook reserveTicket(@RequestBody ModelBook book){
		return bookService.reserveTicket(book);
	}
}
