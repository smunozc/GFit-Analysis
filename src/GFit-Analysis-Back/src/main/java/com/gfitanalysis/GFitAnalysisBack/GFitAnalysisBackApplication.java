package com.gfitanalysis.GFitAnalysisBack;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserRewards;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@SpringBootApplication()
public class GFitAnalysisBackApplication implements CommandLineRunner {
	
	@Autowired
	UserServiceI userService;

	public static void main(String[] args) {
		SpringApplication.run(GFitAnalysisBackApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		// User
		
		User user1 = new User();
		user1.setUsername("manolo");
		user1.setEmail("manolo@gmail.com");
		user1.setRole("admin");
		user1.setProfilePicture(null);
		
		// Exercises
		
		Exercise exercise1 = new Exercise();
		exercise1.setCaloriesBurned(1200);
		exercise1.setEstimatedSteps(4000);
		exercise1.setDate("18/04/2021");
		exercise1.setUser(user1);
		
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(exercise1);
		
		user1.setExercise(exercises);

		// Rewards
		
		Reward reward1 = new Reward();
		reward1.setBadgeImg(null);
		reward1.setName("Primera medalla!");
		reward1.setType("Bronce");
		
		// User Rewards
		
		UserRewards userReward = new UserRewards();
		userReward.setDate("18/04/2021");
		//userReward.setUser(user1);
		//userReward.setReward(reward1);
		
		List<UserRewards> userRewards = new ArrayList<UserRewards>();
		userRewards.add(userReward);
		
		// Final sets
		
		reward1.setUserRewards(userRewards);
		user1.setRewards(userRewards);
		
		// Add user to database
		
		userService.save(user1);		
		
	}

}
