package com.gfitanalysis.GFitAnalysisBack.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class UserRewards {
	
	@EmbeddedId
	private UserRewardsKey id;
	
	//@JsonBackReference
	@ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
	private User user;
	
	//@JsonManagedReference
	@ManyToOne
    @MapsId("rewardId")
    @JoinColumn(name = "reward_id")
	private Reward reward;
	
	@Column(nullable = false)
	private String date;

	public UserRewards() {
		super();
	}

	public UserRewardsKey getId() {
		return id;
	}

	public void setId(UserRewardsKey id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Reward getReward() {
		return reward;
	}

	public void setReward(Reward reward) {
		this.reward = reward;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
