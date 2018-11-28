package cn.cib.action.service;

import cn.cib.action.bean.AdvancedOperation;
import cn.cib.action.bean.Goods;
import cn.cib.action.bean.Progress;

import java.util.List;

public interface ProfileService {
    List<Goods> getGoods();

    List<Progress> getProgress();

    AdvancedOperation getAdvancedOperation();
}
