package cn.cib.action.service;

import cn.cib.action.bean.Rule;

import java.util.List;

public interface RuleService {
    List<Rule> getRule();

    void saveRule(String description);

    boolean removeRule(String nos);
}
