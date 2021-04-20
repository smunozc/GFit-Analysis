package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "USER")
public class User implements Serializable{
	
	private static final long serialVersionUID = -8256830502886936252L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = false, unique = true)
	private String username;
	
	@Lob
	@Column(length=100000, nullable = true)
	private byte[] profilePicture;
	
	@Column(nullable = true)
	private String role;
	
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	private List<Exercise> exercise;
	
	/*
	@ManyToMany
	@JoinTable(
		name = "user_reward",
		joinColumns = @JoinColumn(name = "user_id"),
		inverseJoinColumns = @JoinColumn(name = "reward_id")
	)
	private List<Reward> rewards;
	*/
	//@JsonManagedReference
	@OneToMany(mappedBy = "user")
	private List<UserRewards> userRewards;
	
	
	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public byte[] getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(byte[] profilePicture) {
		this.profilePicture = profilePicture;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Exercise> getExercise() {
		return exercise;
	}

	public void setExercise(List<Exercise> exercise) {
		this.exercise = exercise;
	}

	public List<UserRewards> getRewards() {
		return userRewards;
	}

	public void setRewards(List<UserRewards> rewards) {
		this.userRewards = rewards;
	}
		
}
