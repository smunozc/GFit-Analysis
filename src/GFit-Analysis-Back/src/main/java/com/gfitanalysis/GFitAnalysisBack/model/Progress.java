package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

public class Progress implements Serializable {

	private static final long serialVersionUID = -8585357742098445312L;
	
	private int totalSteps;
	
	private int totalCalories;
	
	public Progress() {}

	public Progress(int totalSteps, int totalCalories) {
		super();
		this.totalSteps = totalSteps;
		this.totalCalories = totalCalories;
	}

	public int getTotalSteps() {
		return totalSteps;
	}

	public void setTotalSteps(int totalSteps) {
		this.totalSteps = totalSteps;
	}

	public int getTotalCalories() {
		return totalCalories;
	}

	public void setTotalCalories(int totalCalories) {
		this.totalCalories = totalCalories;
	}

}
