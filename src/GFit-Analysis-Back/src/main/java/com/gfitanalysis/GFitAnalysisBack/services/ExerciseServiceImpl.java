package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.repository.ExerciseRepositoryI;

public class ExerciseServiceImpl implements ExerciseServiceI {

	@Autowired
	private ExerciseRepositoryI exerciseRepository;
	
	@Override
	public List<Exercise> getByUser(User user) {
		return this.exerciseRepository.findByUser(user);
	}

	@Override
	public Exercise save(Exercise exercise) {
		return this.exerciseRepository.save(exercise);
	}

}
