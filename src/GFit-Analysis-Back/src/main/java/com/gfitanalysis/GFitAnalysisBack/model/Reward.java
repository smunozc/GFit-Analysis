package com.gfitanalysis.GFitAnalysisBack.model;

import java.io.Serializable;
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

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "REWARD")
public class Reward implements Serializable {

	private static final long serialVersionUID = 6112989436599505122L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reward_id")
	private int id;

	@Column(nullable = false, unique = true)
	private String name;

	@Column(nullable = false)
	private String description;

	@Column(nullable = false)
	private BadgeType badgeType;

	@Column(nullable = false)
	private DataType dataType;

	@Column(nullable = false)
	private Integer conditionNum;

	@Column(nullable = true)
	private String badgeImg;

	/*
	 * @ManyToMany(mappedBy = "rewards") private List<User> users;
	 */

	@JsonBackReference
	@OneToMany(mappedBy = "reward")
	@Cascade({ CascadeType.ALL })
	private Set<UserReward> userRewards;

	public Reward() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BadgeType getBadgeType() {
		return badgeType;
	}

	public void setBadgeType(BadgeType type) {
		this.badgeType = type;
	}

	public DataType getDataType() {
		return dataType;
	}

	public void setDataType(DataType dataType) {
		this.dataType = dataType;
	}

	public Integer getConditionNum() {
		return conditionNum;
	}

	public void setConditionNum(Integer conditionNum) {
		this.conditionNum = conditionNum;
	}

	public String getBadgeImg() {
		return badgeImg;
	}

	public void setBadgeImg(String badgeImg) {
		this.badgeImg = badgeImg;
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
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Reward other = (Reward) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}
