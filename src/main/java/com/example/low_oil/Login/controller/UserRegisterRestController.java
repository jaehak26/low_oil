package com.example.low_oil.Login.controller;

import com.example.low_oil.Login.model.UserRegisterModel;
import com.example.low_oil.Login.service.UserRegisterService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@AllArgsConstructor
@RequestMapping(path="/api")
public class UserRegisterRestController {

    UserRegisterService userRegisterService;

    @PostMapping("/userRegister")
    public HashMap<String, String> userRegister(UserRegisterModel userRegisterModel){
        HashMap<String,String> hashMap = new HashMap<>();
        //System.out.println(userRegisterModel);

        String isRegisterAble = userRegisterService.actionUserRegister(userRegisterModel);

        // "" or "true" or "false"
        hashMap.put("isRegisterAble",isRegisterAble);

        return hashMap;
    }
}
