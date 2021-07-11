package com.gc.userdetails.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gc.userdetails.dao.UserDetailRepo;
import com.gc.userdetails.exception.ResourceNotFoundException;
import com.gc.userdetails.model.UserDetail;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins= "http://localhost:4200")
public class UserDetailController {

	@Autowired
	UserDetailRepo  repo;
	
	/*
	 * This method returns the List of all available users with available details.
	 * @returns List<UserDetail>
	 */
	@GetMapping("/usersDetails")
	public List<UserDetail> getUsersDetils() {
		List<UserDetail> userDetail = repo.findAll();
		return userDetail;
	}


	/*
	 * This method is create user details rest api.
	 */
	@PostMapping("/usersDetails")
	public UserDetail addUser(@RequestBody UserDetail userDetail) {
		return repo.save(userDetail);
	}
    
	/*
	 * This method retrieves user-detail with id.
	 */
	@GetMapping("/usersDetails/{id}")
	public ResponseEntity<UserDetail> getUserDetils(@PathVariable Long id) {
		UserDetail userDetail = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ id));
		return ResponseEntity.ok(userDetail);
	}

    /*
     * This method updated Rest API
     */
	@PostMapping(path = "/userDetailsUpdate")
	public ResponseEntity<UserDetail> updateUserDetils(@RequestBody UserDetail userDetail ) {
		System.out.println(userDetail);
		UserDetail userDetailFromDB = repo.findById(userDetail.getId()).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ userDetail.getId()));
		userDetailFromDB.setCity(userDetail.getCity());
		userDetailFromDB.setState(userDetail.getState());
		userDetailFromDB.setStreet(userDetail.getStreet());
		userDetailFromDB.setPostalCode(userDetail.getPostalCode());
		repo.save(userDetailFromDB);
		return ResponseEntity.ok(userDetailFromDB);

	}


	/*
	 *  This method is User-Details Delete Rest API
	 */
	@DeleteMapping("/usersDetails/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		UserDetail userDetailFromDB = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ id));
		repo.delete(userDetailFromDB);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


	/*
	 * This method is User-Details(Address) Delete Rest API
	 */
	@DeleteMapping("/usersDetails/address/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUserAddress(@PathVariable Long id){
		UserDetail userDetailFromDB = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ id));
		userDetailFromDB.setCity("");
		userDetailFromDB.setState("");
		userDetailFromDB.setStreet("");
		userDetailFromDB.setPostalCode("");
		repo.save(userDetailFromDB);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	/*
	 * user count operation is performed in front-end angular app). 
	 */






}
