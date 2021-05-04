package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;

@Repository
public interface ExerciseRepositoryI extends JpaRepository<Exercise, Long> {

	/**
	 * Finds a list of exercises by the user that did them
	 * @param user who did the exercises
	 * @return a list of exercises
	 */
	public List<Exercise> findByUser(User user);

	/**
	 * Finds the exercise by its completion date and the user that did it.
	 * @param date of the activity.
	 * @param user who did the activity.
	 * @return an Exercise object
	 */
	public Exercise findByDateAndUser(String date, User user);
	
	// public Exercise update

}
