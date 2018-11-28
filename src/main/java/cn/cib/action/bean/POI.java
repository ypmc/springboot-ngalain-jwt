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
public class POI {
    private int total;
    private List<Map<String, Object>> list;
}
