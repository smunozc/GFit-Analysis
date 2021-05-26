package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.ExerciseId;
import com.gfitanalysis.GFitAnalysisBack.model.User;

@Repository
public interface ExerciseRepositoryI extends JpaRepository<Exercise, ExerciseId> {

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
	
	/**
	 * Finds an exercise by its id
	 */
	public Optional<Exercise> findById(ExerciseId id);
	
	/**
	 * Finds a list of exercise in a range of dates.
	 * @param dateFirst is the date where the range starts.
	 * @param dateLast is the date where the range finishes.
	 * @return a list of exercises.
	 */
	@Query("SELECT e FROM Exercise e WHERE e.date BETWEEN ?1 AND ?2")
	public List<Exercise> findByDateRange(String dateFirst, String dateLast);

}
