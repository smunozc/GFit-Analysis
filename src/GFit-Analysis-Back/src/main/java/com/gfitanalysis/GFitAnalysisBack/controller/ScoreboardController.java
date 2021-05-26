package com.gfitanalysis.GFitAnalysisBack.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gfitanalysis.GFitAnalysisBack.model.Exercise;
import com.gfitanalysis.GFitAnalysisBack.model.ScoreboardEntry;
import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.services.ExerciseServiceI;

@RestController
@RequestMapping("/scoreboard")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class ScoreboardController {

	@Autowired
	private ExerciseServiceI exerciseService;

	/**
	 * This method returns the scoreboard of the current competition.
	 * 
	 * @return a map for the scoreboard, User Class being the key and Integer being the value.
	 */
	@GetMapping(value = "/getStepsScoreboard")
	public List<ScoreboardEntry> getScoreboard(@RequestParam String dateStart, @RequestParam String dateEnd) {

		List<Exercise> inRangeExercises = exerciseService.getByDateRange(dateStart, dateEnd);
		Map<User, Integer> classification = new HashMap<>();
		List<ScoreboardEntry> scoreboard = new ArrayList<>();

		if(inRangeExercises != null) {
			
			for (Exercise exercise : inRangeExercises) {
				
				User user = exercise.getUser();
				
				if(classification.containsKey(user)) {
					classification.put(user, (exercise.getEstimatedSteps() + classification.get(user)));
				} else {
					classification.put(user, exercise.getEstimatedSteps());
				}
				
			}
			
			// Sort classification in descending order.
			Map<User, Integer> sortedClassification = classification.entrySet()
	                .stream()
	                .sorted((Map.Entry.comparingByValue()))
	                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
			
			for(Entry<User, Integer> e : sortedClassification.entrySet()) {
				ScoreboardEntry scoreboardEntry = new ScoreboardEntry(e.getKey(), e.getValue());
				scoreboard.add(scoreboardEntry);
			}
			
			return scoreboard;
			
		} else {
			return null;
		}

	}

}
