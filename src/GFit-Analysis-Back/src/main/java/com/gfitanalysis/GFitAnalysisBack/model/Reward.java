package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
import java.util.Set;

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
	private int id;
	
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
	
	@JsonBackReference
	@OneToMany(mappedBy = "reward")
	private Set<UserRewards> userRewards;

	public Reward() {
		super();
	}

	public int getIdReward() {
		return id;
	}

	public void setIdReward(int idReward) {
		this.id = idReward;
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

	public Set<UserRewards> getUserRewards() {
		return userRewards;
	}

	public void setUserRewards(Set<UserRewards> userRewards) {
		this.userRewards = userRewards;
	}

}
