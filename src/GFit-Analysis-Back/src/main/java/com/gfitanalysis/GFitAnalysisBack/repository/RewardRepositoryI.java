package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;

public interface RewardRepositoryI extends JpaRepository<Reward, Long>{
	
	/**
	 * Finds a reward by its name.
	 * @param name of the reward.
	 * @return a reward.
	 */
	public Reward findByName(String name);
	
	/**
	 * Finds a list of rewards by the user that achieved them.
	 * @param userRewards userRewards entity that links reward with user.
	 * @return a list of rewards.
	 */
	public List<Reward> findByUserRewards(UserRewards userRewards);

}
