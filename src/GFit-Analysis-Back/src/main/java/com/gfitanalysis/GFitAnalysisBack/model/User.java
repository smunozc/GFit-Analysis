package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "USER")
public class User implements Serializable {

	private static final long serialVersionUID = -8256830502886936252L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(nullable = false)
	private String displayName;

	@Column(nullable = true)
	private String photoURL;

	@Column(nullable = true)
	private String role;

	// @JsonManagedReference
	@OneToMany(mappedBy = "user")
	@Cascade({ CascadeType.SAVE_UPDATE, CascadeType.REMOVE })
	private List<Exercise> exercise;

	// @JsonManagedReference
	@OneToMany(mappedBy = "user")
	@Cascade({ CascadeType.ALL })
	private Set<UserReward> userRewards;

	public User() {
		super();
	}

	public Integer getExerciseSummary(DataType dataType) {

		if (dataType != null) {
			Map<String,Exercise> uniqueExercises = new HashMap<String,Exercise>();

			switch (dataType) {

			case STEPS:

				Integer stepsSummary = 0;
				
				for (Exercise exercise : this.exercise) {
					if(!uniqueExercises.containsKey(exercise.getDate())) {
						uniqueExercises.put(exercise.getDate(), exercise);						
					}
				}
				
				for(Entry<String, Exercise> entry : uniqueExercises.entrySet()) {
					stepsSummary += entry.getValue().getEstimatedSteps();
				}
				
				return stepsSummary;

			case CALORIES:

				Integer caloriesSummary = 0;
				
				for (Exercise exercise : this.exercise) {
					if(!uniqueExercises.containsKey(exercise.getDate())) {
						uniqueExercises.put(exercise.getDate(), exercise);						
					}
				}
				
				for(Entry<String, Exercise> entry : uniqueExercises.entrySet()) {
					caloriesSummary += entry.getValue().getCaloriesBurned();
				}
				
				return caloriesSummary;

			default:

				return null;

			}

		} else {

			return null;

		}

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String username) {
		this.displayName = username;
	}

	public String getPhotoURL() {
		return photoURL;
	}

	public void setPhotoURL(String photoURL) {
		this.photoURL = photoURL;
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

	public Set<UserReward> getUserRewards() {
		return userRewards;
	}

	public void setUserRewards(Set<UserReward> userRewards) {
		this.userRewards = userRewards;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
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
		User other = (User) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		return true;
	}

}
