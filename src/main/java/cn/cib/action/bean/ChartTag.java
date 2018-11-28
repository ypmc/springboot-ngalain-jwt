package cn.cib.action.bean;


import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class ChartTag {
    private String x;
    private int value;
    private int category;
}
