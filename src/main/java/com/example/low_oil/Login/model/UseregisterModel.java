package com.example.low_oil.Login.model;

import lombok.*;

import javax.persistence.Column;


@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UseregisterModel {
    private String userId="";
    private String userPwd="";
    private String userEmail;
    private String userPhone;
}
