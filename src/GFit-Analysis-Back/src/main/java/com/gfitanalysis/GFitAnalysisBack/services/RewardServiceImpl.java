package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gfitanalysis.GFitAnalysisBack.model.DataType;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;
import com.gfitanalysis.GFitAnalysisBack.repository.RewardRepositoryI;

@Service
public class RewardServiceImpl implements RewardServiceI {

	@Autowired
	private RewardRepositoryI rewardRepository;
	
	@Override
	public Set<Reward> getByUserRewards(UserReward userRewards) {
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
	
	@Override
	public void delete(Reward reward) {
		this.rewardRepository.delete(reward);
	}

	@Override
	public Set<Reward> getByDataTypeAndConditionNum(DataType dataType, Integer conditionNum) {
		return this.rewardRepository.findByDataTypeAndConditionNumLessThanEqual(dataType, conditionNum);
	}

	@Override
	public List<Reward> getAll() {
		return this.rewardRepository.findAll();
	}

}
