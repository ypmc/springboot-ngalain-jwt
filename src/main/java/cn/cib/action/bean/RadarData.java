package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class RadarData {
    private String name;
    private String label;
    private int value;
}
