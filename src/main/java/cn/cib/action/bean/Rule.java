package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Rule {
    private int key;
    private boolean disabled;
    private String href;
    private Object avatar;
    private String no;
    private String title;
    private String owner;
    private String description;
    private long callNo;
    private long status;
    private long updatedAt;
    private long createdAt;
    private long progress;
}
