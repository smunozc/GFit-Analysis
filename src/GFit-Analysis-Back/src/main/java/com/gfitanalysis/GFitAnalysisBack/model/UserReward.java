package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "USER_REWARDS")
public class UserReward implements Serializable {

	private static final long serialVersionUID = -7191199132267720250L;

	@EmbeddedId
	private UserRewardsKey id;
	
	@JsonBackReference
	@ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
	private User user;
	
	// @JsonManagedReference
	@ManyToOne
	@Cascade({ CascadeType.SAVE_UPDATE })
    @MapsId("rewardId")
    @JoinColumn(name = "reward_id")
	private Reward reward;
	
	@Column(nullable = false)
	private String date;

	public UserReward() {
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((reward == null) ? 0 : reward.hashCode());
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
		UserReward other = (UserReward) obj;
		if (reward == null) {
			if (other.reward != null)
				return false;
		} else if (!reward.equals(other.reward))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

}
