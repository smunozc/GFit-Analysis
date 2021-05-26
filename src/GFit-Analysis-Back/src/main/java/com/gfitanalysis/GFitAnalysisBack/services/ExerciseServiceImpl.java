package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.repository.ExerciseRepositoryI;

@Service
public class ExerciseServiceImpl implements ExerciseServiceI {

	@Autowired
	private ExerciseRepositoryI exerciseRepository;
	
	@Override
	public List<Exercise> getByUser(User user) {
		return this.exerciseRepository.findByUser(user);
	}
	
	@Override
	public Exercise getByDateAndUser(String date, User user) {
		return this.exerciseRepository.findByDateAndUser(date, user);
	}
	
	@Override
	public List<Exercise> getAll() {
		return this.exerciseRepository.findAll();
	}
	
	@Override
	public List<Exercise> getByDateRange(String dateFirst, String dateLast) {
		return this.exerciseRepository.findByDateRange(dateFirst, dateLast);
	}

	@Override
	public Exercise save(Exercise exercise) {
		return this.exerciseRepository.save(exercise);
	}

}
