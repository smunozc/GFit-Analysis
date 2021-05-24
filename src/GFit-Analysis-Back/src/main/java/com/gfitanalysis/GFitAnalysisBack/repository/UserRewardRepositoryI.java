package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewardsKey;

@Repository
public interface UserRewardRepositoryI extends JpaRepository<UserReward, UserRewardsKey>{
	
	/**
	 * Finds a UserReward by a specific reward.
	 * @param reward to search for.
	 * @return a list of UserRewards.
	 */
	public Set<UserReward> findByReward(Reward reward);
	
	/**
	 * Finds a list of UserReward by a specific user.
	 * @param user to search for.
	 * @return a list of UserRewards.
	 */
	public Set<UserReward> findByUser(User user);

}
