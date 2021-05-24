package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;
import com.gfitanalysis.GFitAnalysisBack.repository.UserRewardRepositoryI;

@Service
public class UserRewardService implements UserRewardServiceI{
	
	@Autowired
	UserRewardRepositoryI userRewardRepository;

	@Override
	public Set<UserReward> getByUser(User user) {
		return userRewardRepository.findByUser(user);
	}

	@Override
	public Set<UserReward> getByReward(Reward reward) {
		return userRewardRepository.findByReward(reward);
	}

	@Override
	public UserReward save(UserReward userReward) {
		return userRewardRepository.save(userReward);
	}

	@Override
	public List<UserReward> getAll() {
		return userRewardRepository.findAll();
	}

}
