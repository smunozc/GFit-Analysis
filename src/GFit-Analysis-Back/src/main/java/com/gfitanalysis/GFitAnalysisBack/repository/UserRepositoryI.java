package com.gfitanalysis.GFitAnalysisBack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gfitanalysis.GFitAnalysisBack.model.User;

@Repository
public interface UserRepositoryI extends JpaRepository<User, Integer> {
	
	public User findByEmail(String email);
	
}
