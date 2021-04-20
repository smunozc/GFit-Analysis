package com.gfitanalysis.GFitAnalysisBack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;

public interface RewardRepositoryI extends JpaRepository<Reward, Long>{
	
	public Reward findByName(String name);
	
	public List<Reward> findByUserRewards(UserRewards userRewards);

}
