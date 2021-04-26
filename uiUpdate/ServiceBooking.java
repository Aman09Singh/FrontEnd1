package com.book.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.book.model.ModelBook;
import com.book.repository.RepositoryBook;

@Service
public class ServiceBooking {
	
	@Autowired
	RepositoryBook bookRepo;

	public ModelBook reserveTicket(ModelBook book) {
		
		return bookRepo.save(book);
	}
}
