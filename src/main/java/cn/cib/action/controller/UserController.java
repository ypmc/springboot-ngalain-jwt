package cn.cib.action.controller;

import cn.cib.action.bean.User;
import cn.cib.action.dto.LoginResultDTO;
import cn.cib.action.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/current")
    public User getCurrent() {
        return userService.getCurrent();
    }

    @PostMapping("/user/avatar")
    public String avatar() {
        return userService.avatar();
    }

    @PostMapping("/login/account")
    public LoginResultDTO login(@RequestBody Map<String, String> map) {
        log.info("login request map is {}", map);
        return userService.login(map.getOrDefault("userName", "")
                , map.getOrDefault("password", ""));
    }

    @PostMapping("/register")
    public String register() {
        return "ok";
    }
}


