package cn.cib.action.controller;

import cn.cib.action.dto.LoginResultDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@Slf4j
public class LoginController {

//    @PostMapping("/login/account")
//    public LoginResultDTO login(@RequestParam("userName") String userName, @RequestParam("password") String password) {
//        log.info("userName is {}, password is {}", userName, password);
//        if (!("admin".equals(userName) && "admin".equals(password))) {
//            return LoginResultDTO.builder().msg("Invalid username or password!").build();
//        } else {
//            Map<Object, Object> map = new HashMap<>();
//            map.put("token", UUID.randomUUID().toString());
//            map.put("name", "admin");
//            map.put("email", "test@qq.com");
//            map.put("id", 10000);
//            map.put("time", Calendar.getInstance().getTime().getTime());
//
//            LoginResultDTO loginResultDTO = LoginResultDTO.builder()
//                    .msg("ok")
//                    .user(map)
//                    .build();
//            return loginResultDTO;
//        }
//    }
}


