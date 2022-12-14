package com.example.low_oil.Login.service;

import com.example.low_oil.Login.model.LoginModel;
import com.example.low_oil.entity.UserEntity;
import com.example.low_oil.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserLoginService {
    UserRepository userRepository;


    public String acionLogin(LoginModel loginModel){

        if(loginModel.getInputId().equals("") || loginModel.getInputPwd().equals("")
        || loginModel.getInputId().equals("undefined") || loginModel.getInputPwd().equals("undefined") ){
            return "";
        }

        //Optional.ofNullable Optional객체로 포장해줌
        Optional<UserEntity> result = Optional.ofNullable(
                userRepository.findByUserIdAndUserPwd(loginModel.getInputId(),loginModel.getInputPwd()));

        if(result.isEmpty()){
            return "false";
        }

        return "true";
    }
}
