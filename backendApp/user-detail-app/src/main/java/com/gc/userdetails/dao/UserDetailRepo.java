package com.gc.userdetails.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gc.userdetails.model.UserDetail;

@Repository
public interface UserDetailRepo extends JpaRepository<UserDetail ,Long> {

}
 