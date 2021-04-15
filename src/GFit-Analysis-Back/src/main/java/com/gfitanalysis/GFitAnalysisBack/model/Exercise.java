package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "EXERCISE")
public class Exercise implements Serializable{

	private static final long serialVersionUID = 4178561054882074019L;
	
	/*
	@Id
	@Column(name = "exercise_id", nullable = false, unique = true)
	private String date;
	*/
	
	@EmbeddedId
	private ExercisePK exercisePK;
	
	@Column(nullable = true)
	private int caloriesBurned;
	
	@Column(nullable = true)
	private int estimatedSteps;

	public int getCaloriesBurned() {
		return caloriesBurned;
	}

	public void setCaloriesBurned(int caloriesBurned) {
		this.caloriesBurned = caloriesBurned;
	}

	public int getEstimatedSteps() {
		return estimatedSteps;
	}

	public void setEstimatedSteps(int estimatedSteps) {
		this.estimatedSteps = estimatedSteps;
	}

}
