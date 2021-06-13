package com.gfitanalysis.GFitAnalysisBack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.gfitanalysis.GFitAnalysisBack.model.BadgeType;
import com.gfitanalysis.GFitAnalysisBack.model.DataType;
import com.gfitanalysis.GFitAnalysisBack.model.Reward;
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
		
		/*
		User user1 = new User();
		user1.setDisplayName("manolo");
		user1.setEmail("manolo@gmail.com");
		user1.setRole("user");
		user1.setPhotoURL(null);
		*/
		
		// Add user to database
		
		/*userService.save(user1);*/
		
		// Rewards
		
		//  Rewards for steps
		
		Reward reward1 = new Reward();
		Reward reward2 = new Reward();
		Reward reward3 = new Reward();
		
		reward1.setName("One small step for a man...");
		reward1.setDescription("The user reached 100 steps.");
		reward1.setDataType(DataType.STEPS);
		reward1.setConditionNum(100);
		reward1.setBadgeType(BadgeType.BRONZE);
		reward1.setBadgeImg("https://drive.google.com/uc?id=1-8KiZsf_0lCJG4AIQShgksyCESUZss0s");
		
		reward2.setName("Walkthrough");
		reward2.setDescription("The user reached 10000 steps.");
		reward2.setDataType(DataType.STEPS);
		reward2.setConditionNum(10000);
		reward2.setBadgeType(BadgeType.SILVER);
		reward2.setBadgeImg("https://drive.google.com/uc?id=13JnIy2Hx5woceGRyC0bSpgSv6gV71wGR");
		
		reward3.setName("Forrest Gump");
		reward3.setDescription("The user reached 100000 steps.");
		reward3.setDataType(DataType.STEPS);
		reward3.setConditionNum(100000);
		reward3.setBadgeType(BadgeType.GOLD);
		reward3.setBadgeImg("https://drive.google.com/uc?id=1wcP9F3CFin2j2vJVGhGiGGYo1Ad-LznY");
		
		//  Rewards for calories
		
		Reward reward4 = new Reward();
		Reward reward5 = new Reward();
		Reward reward6 = new Reward();
		
		reward4.setName("Taking it seriously");
		reward4.setDescription("The user burned 100 calories.");
		reward4.setDataType(DataType.CALORIES);
		reward4.setConditionNum(100);
		reward4.setBadgeType(BadgeType.BRONZE);
		reward4.setBadgeImg("https://drive.google.com/uc?id=1-8KiZsf_0lCJG4AIQShgksyCESUZss0s");
		
		reward5.setName("Warming");
		reward5.setDescription("The user burned 10000 calories.");
		reward5.setDataType(DataType.CALORIES);
		reward5.setConditionNum(10000);
		reward5.setBadgeType(BadgeType.SILVER);
		reward5.setBadgeImg("https://drive.google.com/uc?id=13JnIy2Hx5woceGRyC0bSpgSv6gV71wGR");
		
		reward6.setName("Burnout");
		reward6.setDescription("The user burned 100000 calories.");
		reward6.setDataType(DataType.CALORIES);
		reward6.setConditionNum(100000);
		reward6.setBadgeType(BadgeType.GOLD);
		reward6.setBadgeImg("https://drive.google.com/uc?id=1wcP9F3CFin2j2vJVGhGiGGYo1Ad-LznY");
		
		// Add rewards to database
		
		rewardService.save(reward1);
		rewardService.save(reward2);
		rewardService.save(reward3);
		rewardService.save(reward4);
		rewardService.save(reward5);
		rewardService.save(reward6);
		
	}

}
