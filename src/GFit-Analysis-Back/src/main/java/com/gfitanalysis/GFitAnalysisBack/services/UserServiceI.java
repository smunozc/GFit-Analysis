package com.gfitanalysis.GFitAnalysisBack.services;

import com.gfitanalysis.GFitAnalysisBack.model.User;

public interface UserServiceI {
	
	public User getByEmail(String email);

	public User save(User user1);

}
