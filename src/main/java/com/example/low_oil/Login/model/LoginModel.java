package com.example.low_oil.Login.model;

import lombok.*;

@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginModel {
    private String inputId="";
    private String inputPwd="";
}
