package com.example.low_oil.Login.service;

import com.example.low_oil.Login.model.UserRegisterModel;
import com.example.low_oil.entity.UserEntity;
import com.example.low_oil.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserRegisterService {
    @Autowired
    UserRepository userRepository;

    public String actionUserRegister(UserRegisterModel userRegisterModel){

        if(userRegisterModel.getUserId().equals("") || userRegisterModel.getUserPwd().equals("")
        ||userRegisterModel.getUserId().equals("undefined") || userRegisterModel.getUserPwd().equals("undefined")){
            return "";
        }

        //Optional.ofNullable Optional객체로 포장해줌
        Optional<UserEntity> result = Optional.ofNullable(
                userRepository.findByUserId(userRegisterModel.getUserId()));

        if(result.isPresent()){
            return "false";
        }

        //회원 등록
        UserEntity userEntity = UserEntity.builder()
                .userId(userRegisterModel.getUserId())
                .userPwd(userRegisterModel.getUserPwd())
                .userEmail(userRegisterModel.getUserEmail())
                .userPhone(userRegisterModel.getUserPhone())
                .build();

        userRepository.save(userEntity);

        return "true";
    }
}
