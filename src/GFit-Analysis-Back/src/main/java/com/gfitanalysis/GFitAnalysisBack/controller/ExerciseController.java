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
import com.gfitanalysis.GFitAnalysisBack.model.ExerciseUserWrapper;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.services.ExerciseServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@RestController
@RequestMapping("/exercise")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class ExerciseController {

	@Autowired
	private ExerciseServiceI exerciseService;
	
	@PostMapping("/postData")
	public Exercise postExerciseData(@RequestBody ExerciseUserWrapper postExerciseUserWrapper) {
		
		Exercise exercise = exerciseService.getByDateAndUser(postExerciseUserWrapper.getExercise().getDate(), postExerciseUserWrapper.getUser());

		if (exercise != null) {
			return exercise;
		} else {
			exerciseService.save(postExerciseUserWrapper.getExercise());
			Exercise newExercise = exerciseService.getByDateAndUser(postExerciseUserWrapper.getExercise().getDate(), postExerciseUserWrapper.getUser());
			return newExercise;
		}
	}
	
	/*
	@GetMapping("/getAll")
	public ResponseEntity<?> getAllUsers(){
		List<User> response = this.userService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
	}
	*/
	
	@GetMapping(value = "/getAllExerciseData")
	public List<Exercise> getAllExercise(){
		return this.exerciseService.getAll();
	}

}
