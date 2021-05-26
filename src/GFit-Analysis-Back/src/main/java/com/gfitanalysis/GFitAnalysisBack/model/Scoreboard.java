package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
import java.util.List;

public class Scoreboard implements Serializable {

	// TODO for a future release, Scoreboard should be made into an entity of the
	// database, to store competitions, and also a Scoreboard controller for the
	// administrators to create competitions from the front-end interface.

	private static final long serialVersionUID = -2066876049965771360L;

	private String competitionName;

	private DataType dataType;

	private List<User> users;

	public Scoreboard() {
	}

	public Scoreboard(String competitionName, DataType dataType, List<User> users) {
		super();
		this.competitionName = competitionName;
		this.dataType = dataType;
		this.users = users;
	}

	public String getCompetitionName() {
		return competitionName;
	}

	public void setCompetitionName(String competitionName) {
		this.competitionName = competitionName;
	}

	public DataType getDataType() {
		return dataType;
	}

	public void setDataType(DataType dataType) {
		this.dataType = dataType;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

}
