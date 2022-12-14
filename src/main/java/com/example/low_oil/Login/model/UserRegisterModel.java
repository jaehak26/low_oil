package com.example.low_oil.Login.model;

import lombok.*;


@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterModel {
    private String userId="";
    private String userPwd="";
    private String userEmail="";
    private String userPhone="";
}
