package cn.cib.action.service.impl;

import cn.cib.action.bean.Rule;
import cn.cib.action.service.RuleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class RuleServiceImpl implements RuleService {
    private List<Rule> ruleList;

    @PostConstruct
    public void init() {
        ruleList = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            ruleList.add(Rule.builder()
                    .key(i)
                    .disabled(i % 6 == 0)
                    .href("https://ant.design")
                    .avatar(i % 2 == 0 ? "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png"
                            : "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png")
                    .no("TradeCode" + i)
                    .title("任务" + i)
                    .owner("三毛")
                    .description("描述")
                    .callNo(Calendar.getInstance().getTimeInMillis())
                    .status(Calendar.getInstance().getTimeInMillis() % 4)
                    .updatedAt(Calendar.getInstance().getTime().getTime())
                    .createdAt(Calendar.getInstance().getTime().getTime())
                    .progress(Calendar.getInstance().getTime().getTime() % 5)
                    .build());
        }
    }

    @Override
    public List<Rule> getRule() {
        return ruleList;
    }

    @Override
    public void saveRule(String description) {
        int i = (int) Math.ceil(Math.random() * 10000);
        ruleList.add(Rule.builder()
                .key(i)
                .href("https://github.com")
                .avatar(i % 2 == 0 ? "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png"
                        : "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png")
                .no("TradeCode " + i)
                .title("任务" + i)
                .owner("韩梅梅")
                .description(description)
                .callNo(Calendar.getInstance().getTimeInMillis())
                .status(Calendar.getInstance().getTimeInMillis() % 4)
                .updatedAt(Calendar.getInstance().getTime().getTime())
                .createdAt(Calendar.getInstance().getTime().getTime())
                .progress(Calendar.getInstance().getTime().getTime() % 5)
                .build());
    }

    @Override
    public boolean removeRule(String nos) {
        log.info("request nos is {}", nos);
        String[] arrNo = nos.split(",");
        log.info("before remove {}", ruleList);
        for (String no : arrNo) {
            log.info("no is {}", no);
            ruleList = ruleList.stream().filter(rule -> !rule.getNo().equals(no)).collect(Collectors.toList());
        }
        log.info("after remove {}", ruleList);
        return true;
    }
}
