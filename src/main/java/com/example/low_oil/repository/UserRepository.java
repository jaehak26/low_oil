package com.example.low_oil.repository;

import com.example.low_oil.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

//상속만 하면 끝남
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUserId(String userId);
    UserEntity findByUserIdAndUserPwd(String userId, String userPwd);

}
