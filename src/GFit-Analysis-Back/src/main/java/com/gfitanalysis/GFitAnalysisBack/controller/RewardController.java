package com.gfitanalysis.GFitAnalysisBack.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gfitanalysis.GFitAnalysisBack.model.Reward;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.model.UserReward;
import com.gfitanalysis.GFitAnalysisBack.services.RewardServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.UserRewardServiceI;
import com.gfitanalysis.GFitAnalysisBack.services.UserServiceI;

@RestController
@RequestMapping("/reward")
@CrossOrigin(origins = "https://gfit-analysis.web.app", allowedHeaders = "*", exposedHeaders = "Authorization")
public class RewardController {

	@Autowired
	private RewardServiceI rewardService;

	@Autowired
	private UserServiceI userService;

	@Autowired
	private UserRewardServiceI userRewardService;

	/**
	 * This method allows the front end to save a new badge.
	 * 
	 * @param reward is the reward sent from the front end.
	 * @return returns true if the reward was successfully uploaded, false if it
	 *         already is in the database or it couldn't upload correctly.
	 */
	@PostMapping("/save")
	public Reward saveReward(@RequestBody Reward rewardFront) {

		Reward reward = rewardService.getByName(rewardFront.getName());

		if (reward != null) {
			return null;
		} else {
			rewardService.save(rewardFront);
			return rewardService.getByName(rewardFront.getName());
		}

	}

	/**
	 * This method deletes the specified user.
	 * 
	 * @param userToDelete User entity to be deleted.
	 * @return true if the user was successfully deleted or false if it wasn't.
	 */
	@PostMapping(value = "/delete")
	public boolean deleteReward(@RequestBody Reward rewardFront) {

		Reward reward = rewardService.getByName(rewardFront.getName());

		if (reward != null) {
			rewardService.delete(reward);
			
			if (rewardService.getByName(rewardFront.getName()) == null) {
				return true;
			} else {
				return false;
			}
		} else {
			// IN THEORY IT SHOULD NEVER ENTER IN THIS ELSE BLOCK (because the reward should
			// already exist)
			System.out.println("It entered in the else block...");
			return false;
		}

	}

	/**
	 * This method allows the front end to get unachieved badges.
	 * 
	 * @param reward.
	 * @return returns a list of Rewards if it finds unachieved badges, if not,
	 *         returns null.
	 */
	@PostMapping("/getUnachieved")
	public List<Reward> getUnachievedBadges(@RequestBody User userFront) {

		User user = userService.getByEmail(userFront.getEmail());

		if (user != null) {
			Set<UserReward> userRewards = userRewardService.getByUser(user);
			List<Reward> allRewards = rewardService.getAll();
			List<Reward> unachievedBadges = new ArrayList<Reward>();

			for (UserReward userReward : userRewards) {
				allRewards.remove(userReward.getReward());
			}
			unachievedBadges.addAll(allRewards);

			if (unachievedBadges.size() > 0) {
				return unachievedBadges;
			} else {
				return null;
			}

		} else {
			return null;
		}

	}

	/**
	 * This method returns all the rewards in the database.
	 * 
	 * @return a list of rewards.
	 */
	@GetMapping(value = "/getAllRewards")
	public List<Reward> getAllUsers() {
		return this.rewardService.getAll();
	}

}
