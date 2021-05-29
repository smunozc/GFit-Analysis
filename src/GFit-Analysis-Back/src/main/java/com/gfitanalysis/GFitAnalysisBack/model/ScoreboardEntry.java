package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

public class ScoreboardEntry implements Serializable, Comparable<ScoreboardEntry> {

	private static final long serialVersionUID = -3135515172358837847L;

	private User user;

	private Integer score;

	public ScoreboardEntry() {
	}

	public ScoreboardEntry(User user, Integer score) {
		super();
		this.user = user;
		this.score = score;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ScoreboardEntry other = (ScoreboardEntry) obj;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

	@Override
	public int compareTo(ScoreboardEntry u) {
		if (getScore() == null || u.getScore()== null) {
			return 0;
		}
		return getScore().compareTo(u.getScore());
	}

}
