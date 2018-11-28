package cn.cib.action.dto;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@ToString(doNotUseGetters = true)
public class LoginResultDTO {
    public String msg;
    public Map user;
}
