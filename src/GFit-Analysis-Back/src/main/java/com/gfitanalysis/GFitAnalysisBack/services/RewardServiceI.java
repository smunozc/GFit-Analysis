package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;
import java.util.Set;

import com.gfitanalysis.GFitAnalysisBack.model.DataType;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;

public interface RewardServiceI {
	
	public Set<Reward> getByUserRewards(UserReward userRewards);
	
	public Reward getByName(String name);

	public Reward save(Reward reward);
	
	public void delete(Reward reward);
	
	public Set<Reward> getByDataTypeAndConditionNum(DataType dataType, Integer conditionNum);
	
	public List<Reward> getAll();

}
