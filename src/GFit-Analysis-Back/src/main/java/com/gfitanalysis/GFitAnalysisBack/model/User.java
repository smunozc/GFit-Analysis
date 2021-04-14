package com.gfitanalysis.GFitAnalysisBack.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

	private int id;
	private String email;
	private String username;
	
	@Lob
	@Column(length=100000)
	private byte[] profilePicture;
	
	private String role;
	
}
