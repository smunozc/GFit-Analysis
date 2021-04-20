package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.User;

@Repository
public interface ExerciseRepositoryI extends JpaRepository<Exercise, Long> {
	
	public List<Exercise> findByUser(User user);

}
