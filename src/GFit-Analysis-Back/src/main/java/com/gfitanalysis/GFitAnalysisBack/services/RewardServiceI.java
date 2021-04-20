package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;

public interface RewardServiceI {
	
	public List<Reward> getByUserRewards(UserRewards userRewards);
	
	public Reward getByName(String name);

	public Reward save(Reward reward);

}
