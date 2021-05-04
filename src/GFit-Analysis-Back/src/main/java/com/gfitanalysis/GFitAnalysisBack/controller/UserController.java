package com.gfitanalysis.GFitAnalysisBack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
			if(userLogin.getExercise() != null) {
				user.getExercise().addAll(userLogin.getExercise());				
			}
			userService.save(user);
			return user;
		} else {
			userService.save(userLogin);
			User newUser = userService.getByEmail(userLogin.getEmail());
			return newUser;
		}
	}
	
	/**
	 * This method basically does exactly the same as loginUser (saves the user) but has a different name. May be changed in the future.
	 * @param userLogin user data sent by the front-end.
	 * @return the user after going through the database.
	 */
	@PostMapping("/save")
	public User saveUserWithData(@RequestBody User userLogin) {

		User user = userService.getByEmail(userLogin.getEmail());

		if (user != null) {
			if(userLogin.getExercise() != null) {
				user.getExercise().addAll(userLogin.getExercise());		
			}
			userService.save(user);
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
