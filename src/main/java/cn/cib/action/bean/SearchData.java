package cn.cib.action.bean;

import lombok.*;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class SearchData {
    private int index;
    private String keyword;
    private int count;
    private int range;
    private int status;
}
