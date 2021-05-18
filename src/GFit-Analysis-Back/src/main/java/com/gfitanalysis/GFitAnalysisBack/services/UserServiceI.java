package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import com.gfitanalysis.GFitAnalysisBack.model.User;

public interface UserServiceI {
	
	public User getByEmail(String email);
	
	public List<User> getAll();

	public User save(User user);
	
	public void delete(User user);

}
