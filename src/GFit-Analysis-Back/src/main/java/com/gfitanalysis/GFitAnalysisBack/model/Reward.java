package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "REWARD")
public class Reward implements Serializable{

	private static final long serialVersionUID = 6112989436599505122L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reward_id")
	private int idReward;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String type;
	
	@Lob
	@Column(length=100000, nullable = true)
	private byte[] badgeImg;
	
	/*
	@ManyToMany(mappedBy = "rewards")
	private List<User> users;
	*/
	
	//@JsonBackReference
	@OneToMany(mappedBy = "reward")
	private List<UserRewards> userRewards;

	public Reward() {
		super();
	}

	public int getIdReward() {
		return idReward;
	}

	public void setIdReward(int idReward) {
		this.idReward = idReward;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getBadgeImg() {
		return badgeImg;
	}

	public void setBadgeImg(byte[] badgeImg) {
		this.badgeImg = badgeImg;
	}

	public List<UserRewards> getUserRewards() {
		return userRewards;
	}

	public void setUserRewards(List<UserRewards> userRewards) {
		this.userRewards = userRewards;
	}

}
