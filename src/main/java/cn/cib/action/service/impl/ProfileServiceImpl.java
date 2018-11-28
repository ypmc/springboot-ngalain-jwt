package cn.cib.action.service.impl;

import cn.cib.action.bean.AdvancedOperation;
import cn.cib.action.bean.Goods;
import cn.cib.action.bean.Operation;
import cn.cib.action.bean.Progress;
import cn.cib.action.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ProfileServiceImpl implements ProfileService {
    @Override
    public List<Goods> getGoods() {
        List<Goods> goodsList = new ArrayList<>();
        goodsList.add(Goods.builder()
                .id("1234561")
                .name("矿泉水 550ml")
                .barcode("12421432143214321")
                .price("2.00")
                .num(1)
                .amount("2.00")
                .build());
        goodsList.add(Goods.builder()
                .id("1234562")
                .name("凉茶 300ml")
                .barcode("12421432143214322")
                .price("3.00")
                .num(2)
                .amount("6.00")
                .build());
        return goodsList;
    }

    @Override
    public List<Progress> getProgress() {
        List<Progress> progressList = new ArrayList<>();
        progressList.add(Progress.builder()
                .key("1")
                .time("2017-10-01 14:10")
                .rate("联系客户")
                .status("processing")
                .operator("取货员 ID1234")
                .cost("5mins")
                .build());
        progressList.add(Progress.builder()
                .key("2")
                .time("2017-10-01 14:05")
                .rate("取货员出发")
                .status("success")
                .operator("取货员 ID1234")
                .cost("1h")
                .build());
        progressList.add(Progress.builder()
                .key("3")
                .time("2017-10-01 13(05")
                .rate("取货员接单")
                .status("success")
                .operator("取货员 ID1234")
                .cost("5mins")
                .build());
        progressList.add(Progress.builder()
                .key("4")
                .time("2017-10-01 13(00")
                .rate("申请审批通过")
                .status("success")
                .operator("系统")
                .cost("1h")
                .build());
        progressList.add(Progress.builder()
                .key("5")
                .time("2017-10-01 12(00")
                .rate("发起退货申请")
                .status("success")
                .operator("用户")
                .cost("5mins")
                .build());
        return null;
    }

    @Override
    public AdvancedOperation getAdvancedOperation() {
        return AdvancedOperation.builder()
                .advancedOperation1(getAdvancedOperation1())
                .advancedOperation2(getAdvancedOperation2())
                .advancedOperation3(getAdvancedOperation3())
                .build();
    }

    private List<Operation> getAdvancedOperation1() {
        List<Operation> operationList = new ArrayList<>();
        operationList.add(Operation.builder()
                .key("op1")
                .type("订购关系生效")
                .name("曲丽丽")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("-")
                .build());
        operationList.add(Operation.builder()
                .key("op2")
                .type("财务复审")
                .name("付小小")
                .status("reject")
                .updatedAt("2017-10-03  19:23:12")
                .memo("不通过原因")
                .build());
        operationList.add(Operation.builder()
                .key("op3")
                .type("部门初审")
                .name("周毛毛")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("-")
                .build());
        operationList.add(Operation.builder()
                .key("op4")
                .type("提交订单")
                .name("林东东")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("很棒")
                .build());
        operationList.add(Operation.builder()
                .key("op5")
                .type("创建订单")
                .name("汗牙牙")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("-")
                .build());
        return operationList;
    }

    private List<Operation> getAdvancedOperation2() {
        List<Operation> operationList = new ArrayList<>();
        operationList.add(Operation.builder()
                .key("op1")
                .type("订购关系生效")
                .name("曲丽丽")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("-")
                .build());
        return operationList;
    }

    private List<Operation> getAdvancedOperation3() {
        List<Operation> operationList = new ArrayList<>();
        operationList.add(Operation.builder()
                .key("op1")
                .type("创建订单")
                .name("汗牙牙")
                .status("agree")
                .updatedAt("2017-10-03  19:23:12")
                .memo("-")
                .build());
        return operationList;
    }
}
