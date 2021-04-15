package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ExercisePK implements Serializable{
	
	private static final long serialVersionUID = 7767383695200353322L;

	private String date;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_exercise", nullable = false, updatable = false)
	private User user;
	
	public ExercisePK(String date, User user) {
		super();
		this.date = date;
		this.user = user;
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
