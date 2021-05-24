package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gfitanalysis.GFitAnalysisBack.model.DataType;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;

public interface RewardRepositoryI extends JpaRepository<Reward, Long>{
	
	/**
	 * Finds a reward by its name.
	 * @param name of the reward.
	 * @return a reward.
	 */
	public Reward findByName(String name);
	
	/**
	 * Finds a set of rewards by the user that achieved them.
	 * @param userRewards userRewards entity that links reward with user.
	 * @return a set of rewards.
	 */
	public Set<Reward> findByUserRewards(UserReward userRewards);
	
	/**
	 * Finds a set of rewards by the dataType and the conditionNum.
	 * @param dataType is the type of data being checked.
	 * @param conditionNum is the measure of data being checked.
	 * @return a set of rewards.
	 */
	public Set<Reward> findByDataTypeAndConditionNumLessThanEqual(DataType dataType, Integer conditionNum);

}
