package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Notice {
    private String id;
    private String title;
    private String logo;
    private String description;
    private long updateAt;
    private String member;
    private String href;
    private String memberLink;
}
