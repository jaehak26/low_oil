package com.example.low_oil.Login.controller;

import com.example.low_oil.Login.model.LoginModel;
import com.example.low_oil.Login.service.UserLoginService;
import com.example.low_oil.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@AllArgsConstructor
@RequestMapping(path="/api")
public class LoginRestController {

    @Autowired
    UserLoginService userLoginService;

    @PostMapping("/login")
    public HashMap<String,String> afterClickLoginButton(LoginModel loginModel){
        HashMap<String,String> hashMap = new HashMap<>();

        //System.out.println(loginModel);

        String isUserExist = userLoginService.acionLogin(loginModel);

        hashMap.put("isUserExist",isUserExist);
        hashMap.put("inputId", loginModel.getInputId());

        return hashMap;
    }
}
