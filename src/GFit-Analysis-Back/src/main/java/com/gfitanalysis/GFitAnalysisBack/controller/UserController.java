package com.gfitanalysis.GFitAnalysisBack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.services.ExerciseServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class UserController {

	@Autowired
	private UserServiceI userService;
	
	@Autowired
	private ExerciseServiceI exerciseService;
	
	
	/**
	 * This method allows the front end to send login information from the user.
	 * @param userLogin is the user sent from the front end.
	 * @return returns the user to the front once it has been through the database.
	 */
	@PostMapping("/login")
	public User loginUser(@RequestBody User userLogin) {

		User user = userService.getByEmail(userLogin.getEmail());

		if (user != null) {
			if(userLogin.getDisplayName() != null) {
				user.setDisplayName(userLogin.getDisplayName());
			}
			if(userLogin.getPhotoURL() != null) {
				user.setPhotoURL(userLogin.getPhotoURL());
			}
			userService.save(user);
			return userService.getByEmail(user.getEmail());
		} else {

			if(userLogin.getEmail().equals("salvador.munoz.cordero@gmail.com")) {
				userLogin.setRole("admin");
			}
			
			userService.save(userLogin);
			return userService.getByEmail(userLogin.getEmail());
		}
	}
	
	/**
	 * This method saves exercise data of the user, it is bucketed by days.
	 * @param userLogin user data sent by the front-end.
	 * @return the user after going through the database.
	 */
	@PostMapping("/save")
	public User saveUserWithData(@RequestBody User userLogin) {

		User user = userService.getByEmail(userLogin.getEmail());

		if (user != null) {
			if(userLogin.getExercise() != null) {
				user.getExercise().addAll(userLogin.getExercise());
				
				for (Exercise exercise : userLogin.getExercise()) {
					this.exerciseService.save(exercise);
				}
				
			}
			userService.save(user);
			return user;
		} else {
			// IN THEORY IT SHOULD NEVER ENTER IN THIS ELSE BLOCK (because the user should already exist)
			System.out.println("It entered in the else block...");
			userService.save(userLogin);
			return userService.getByEmail(userLogin.getEmail());
		}
	}
	
	/**
	 * This method deletes the specified user.
	 * @param userToDelete User entity to be deleted.
	 * @return true if the user was successfully deleted or false if it wasn't.
	 */
	@PostMapping(value = "/delete")
	public boolean deleteUser(@RequestBody User userToDelete) {
		
		User user = userService.getByEmail(userToDelete.getEmail());

		if (user != null) {
			userService.delete(user);
			if(userService.getByEmail(user.getEmail()) == null) {
				return true;
			} else {
				return false;
			}
		} else {
			// IN THEORY IT SHOULD NEVER ENTER IN THIS ELSE BLOCK (because the user should already exist)
			System.out.println("It entered in the else block...");
			return false;
		}
		
	}
	
	
	/**
	 * This method changes the specified User's role.
	 * @param userToChange User to be modified.
	 * @return true if the role change was successful or false if it wasn't.
	 */
	@PostMapping(value = "/changeRole")
	public boolean changeRole(@RequestBody User userToChange) {
		User user = userService.getByEmail(userToChange.getEmail());

		if (user != null) {
			user.setRole(userToChange.getRole());
			userService.save(user);
			if(userService.getByEmail(user.getEmail()).getRole() == userToChange.getRole()) {
				return true;
			} else {
				return false;
			}
		} else {
			// IN THEORY IT SHOULD NEVER ENTER IN THIS ELSE BLOCK (because the user should already exist)
			System.out.println("It entered in the else block...");
			return false;
		}
	}
	
	/**
	 * This method returns all the users in the database.
	 * @return a list of users.
	 */
	@GetMapping(value = "/getAllUsers")
	public List<User> getAllUsers(){
		return this.userService.getAll();
	}

}
