package cn.cib.action.bean;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class UserGeo {
    private Map province;
    private Map city;
}
