package cn.cib.action.bean;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Activity {
    private String id;
    private long updatedAt;
    private Map user;
    private Map group;
    private Map project;
    private String template;
}
