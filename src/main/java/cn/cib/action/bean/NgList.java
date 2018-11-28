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
public class NgList {
    private String id;
    private String user;
    private String title;
    private String avatar;
    private int cover;
    private Object status;
    private int percent;
    private String logo;
    private String href;
    private long updatedAt;
    private long createdAt;
    private String subDescription;
    private String description;
    private int activeUser;
    private int newUser;
    private int star;
    private int like;
    private int message;
    private String content;
    private List<Map> member;
}
