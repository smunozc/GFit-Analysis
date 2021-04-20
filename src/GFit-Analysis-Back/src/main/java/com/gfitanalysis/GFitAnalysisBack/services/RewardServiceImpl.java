package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;
import com.gfitanalysis.GFitAnalysisBack.repository.RewardRepositoryI;

public class RewardServiceImpl implements RewardServiceI {

	@Autowired
	private RewardRepositoryI rewardRepository;
	
	@Override
	public List<Reward> getByUserRewards(UserRewards userRewards) {
		return this.rewardRepository.findByUserRewards(userRewards);
	}

	@Override
	public Reward getByName(String name) {
		return this.rewardRepository.findByName(name);
	}

	@Override
	public Reward save(Reward reward) {
		return this.rewardRepository.save(reward);
	}

}
