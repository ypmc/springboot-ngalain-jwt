package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String id;
    private String owner;
    private String title;
    private String avatar;
    private String cover;

}
