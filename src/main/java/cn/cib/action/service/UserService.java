package cn.cib.action.service;

import cn.cib.action.bean.User;
import cn.cib.action.dto.LoginResultDTO;

public interface UserService {
    User getCurrent();

    LoginResultDTO login(String userName, String password);


    String register();

    String avatar();
}
