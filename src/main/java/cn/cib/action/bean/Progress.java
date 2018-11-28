package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class Progress {
    private String key;
    private String time;
    private String rate;
    private String status;
    private String operator;
    private String cost;
}
