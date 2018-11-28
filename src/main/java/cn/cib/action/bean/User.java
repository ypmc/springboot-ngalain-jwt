package cn.cib.action.bean;

import lombok.*;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private String name;
    private String avatar;
    private String userid;
    private String email;
    private String signature;
    private String title;
    private String group;
    private List<Map> tags;
    private int notifyCount;
    private String country;
    private String address;
    private String phone;
    private UserGeo geographic;
}
