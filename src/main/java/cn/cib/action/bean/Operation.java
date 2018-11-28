package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Operation {

    private String key;
    private String type;
    private String name;
    private String status;
    private String updatedAt;
    private String memo;
}
