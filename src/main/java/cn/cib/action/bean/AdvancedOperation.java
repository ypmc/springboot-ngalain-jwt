package cn.cib.action.bean;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class AdvancedOperation {
    private List<Operation> advancedOperation1;
    private List<Operation> advancedOperation2;
    private List<Operation> advancedOperation3;
}
