package com.gfitanalysis.GFitAnalysisBack.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gfitanalysis.GFitAnalysisBack.model.User;
import com.gfitanalysis.GFitAnalysisBack.repository.UserRepositoryI;

@Service
public class UserServiceImpl implements UserServiceI {
	
	@Autowired
	private UserRepositoryI userRepository;

	@Override
	public User getByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAll() {
		return this.userRepository.findAll();
	}

	@Override
	public void delete(User user) {
		this.userRepository.delete(user);
	}

}
