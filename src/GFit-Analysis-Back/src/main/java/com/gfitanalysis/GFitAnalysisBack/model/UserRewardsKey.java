package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserRewardsKey implements Serializable {

	private static final long serialVersionUID = -1790754260642100887L;
	
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "reward_id")
	private Integer rewardId;

	public UserRewardsKey() {
		super();
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getRewardId() {
		return rewardId;
	}

	public void setRewardId(Integer rewardId) {
		this.rewardId = rewardId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + rewardId;
		result = prime * result + userId;
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
		UserRewardsKey other = (UserRewardsKey) obj;
		if (rewardId != other.rewardId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}

}
