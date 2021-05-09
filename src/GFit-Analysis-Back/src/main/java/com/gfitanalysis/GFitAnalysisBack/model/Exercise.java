package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "EXERCISE")
public class Exercise implements Serializable{

	private static final long serialVersionUID = 4178561054882074019L;
	
	@Id
	@Column(nullable = false)
	private String date;
	
	@Column(nullable = true)
	private int caloriesBurned;
	
	@Column(nullable = true)
	private int estimatedSteps;
	
	@JsonBackReference
	@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_user")
	private User user;

	public Exercise() {
		super();
	}

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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
