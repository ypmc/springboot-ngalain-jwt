package cn.cib.action.service.impl;

import cn.cib.action.bean.User;
import cn.cib.action.bean.UserGeo;
import cn.cib.action.dto.LoginResultDTO;
import cn.cib.action.jsonwebtoken.AuthTokenDetailsDTO;
import cn.cib.action.jsonwebtoken.JsonWebTokenUtility;
import cn.cib.action.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Override
    public User getCurrent() {
        List<Map> tags = List.of(
                Map.of("key", 0, "label", "很有想法"),
                Map.of("key", 1, "label", "专注撩妹"),
                Map.of("key", 2, "label", "帅"),
                Map.of("key", 3, "label", "通吃"),
                Map.of("key", 4, "label", "专职后端"),
                Map.of("key", 5, "label", "海纳百川")
        );
        return User.builder()
                .name("kk")
                .avatar("https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png")
                .userid("00000001")
                .email("test@test.com")
                .signature("海纳百川，有容乃大")
                .title("算法专家")
                .group("蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED")
                .tags(tags)
                .notifyCount(14)
                .country("中国")
                .address("上海市上海中心")
                .phone("13212341234")
                .geographic(UserGeo.builder()
                        .province(Map.of("label", "上海", "key", "3300000"))
                        .city(Map.of("label", "市辖区", "key", "330100"))
                        .build())
                .build();
    }

    @Override
    public LoginResultDTO login(String userName, String password) {
        if (!(userName.equals("admin") || userName.equals("user")) && !password.equals("admin")) {
            return LoginResultDTO.builder().msg("Invalid username or password").build();
        }
        JsonWebTokenUtility jsonWebTokenUtility = new JsonWebTokenUtility();
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 1);
        AuthTokenDetailsDTO authTokenDetailsDTO = AuthTokenDetailsDTO.builder()
                .email(userName + "@test.com")
                .userId(userName)
                .expirationDate(calendar.getTime())
                .roleNames(List.of("admin"))
                .privileges(List.of("admin"))
                .build();
        return LoginResultDTO.builder()
                .msg("ok")
                .user(Map.of("token", jsonWebTokenUtility.createJsonWebToken(authTokenDetailsDTO)
                        , "name", userName
                        , "email", userName + "@test.com"
                        , "id", UUID.randomUUID().toString()
                        , "time", Calendar.getInstance().getTime().getTime()
                ))
                .build();
    }

    @Override
    public String register() {
        return "ok";
    }

    @Override
    public String avatar() {
        return "ok";
    }
}
