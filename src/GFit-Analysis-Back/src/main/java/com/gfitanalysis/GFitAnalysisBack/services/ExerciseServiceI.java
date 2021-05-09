package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;

public interface ExerciseServiceI {
	
	public List<Exercise> getByUser(User user);
	
	public Exercise getByDateAndUser(String date, User user);
	
	public List<Exercise> getAll();

	public Exercise save(Exercise exercise);

}
