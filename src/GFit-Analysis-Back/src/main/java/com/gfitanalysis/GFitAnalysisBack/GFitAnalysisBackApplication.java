package com.gfitanalysis.GFitAnalysisBack;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewardsKey;
import com.gfitanalysis.GFitAnalysisBack.services.ExerciseServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.RewardServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@SpringBootApplication()
public class GFitAnalysisBackApplication implements CommandLineRunner {
	
	@Autowired
	UserServiceI userService;
	
	@Autowired
	RewardServiceI rewardService;
	
	@Autowired
	ExerciseServiceI exerciseService;

	public static void main(String[] args) {
		SpringApplication.run(GFitAnalysisBackApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		// User
		
		User user1 = new User();
		user1.setDisplayName("manolo");
		user1.setEmail("manolo@gmail.com");
		user1.setRole("user");
		user1.setPhotoURL(null);
		
		// Exercises
		
		Exercise exercise1 = new Exercise();
		exercise1.setCaloriesBurned(1200);
		exercise1.setEstimatedSteps(4000);
		exercise1.setDate("2021/04/18");
		exercise1.setUser(user1);
		
//		exerciseService.save(exercise1);
		
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(exercise1);
		
		user1.setExercise(exercises);

		// Rewards
		
		Reward reward1 = new Reward();
		reward1.setBadgeImg(null);
		reward1.setName("Primera medalla!");
		reward1.setType("Bronce");
		
		// User Rewards	[N:M Table between User and Reward]
		
		UserRewards userReward = new UserRewards();
		userReward.setDate("18/04/2021");
		userReward.setUser(user1);
		userReward.setReward(reward1);
		
		// User rewards id [Composed id of UserRewards]
		
		UserRewardsKey userRewardsId = new UserRewardsKey();
		userRewardsId.setRewardId(reward1.getIdReward());
		userRewardsId.setUserId(user1.getId());
		
		userReward.setId(userRewardsId);
		
		Set<UserRewards> userRewards = new HashSet<UserRewards>();
		userRewards.add(userReward);
		
		// Final sets
		
		reward1.setUserRewards(userRewards);
		user1.setUserRewards(userRewards);
		
		// Add user to database
		
		userService.save(user1);		
		
	}

}
