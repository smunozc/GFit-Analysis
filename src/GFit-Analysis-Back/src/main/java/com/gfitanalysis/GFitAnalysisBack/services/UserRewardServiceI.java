package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;
import java.util.Set;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;

public interface UserRewardServiceI {

	public Set<UserReward> getByUser(User user);

	public Set<UserReward> getByReward(Reward reward);

	public UserReward save(UserReward userReward);

	public List<UserReward> getAll();

}
