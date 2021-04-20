package com.gfitanalysis.GFitAnalysisBack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class UserController {

	@Autowired
	private UserServiceI userService;
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User userLogin) {

		User user = userService.getByEmail(userLogin.getEmail());

		if (user != null) {
			return user;
		} else {
			userService.save(userLogin);
			User newUser = userService.getByEmail(userLogin.getEmail());
			return newUser;
		}
	}
	
	/*
	@GetMapping("/getAll")
	public ResponseEntity<?> getAllUsers(){
		List<User> response = this.userService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
	}
	*/
	
	@GetMapping(value = "/getAllUsers")
	public List<User> getAllUsers(){
		return this.userService.getAll();
	}

}
