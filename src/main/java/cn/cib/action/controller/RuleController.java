package cn.cib.action.controller;

import cn.cib.action.bean.Rule;
import cn.cib.action.service.RuleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("rule")
@Slf4j
public class RuleController {

    @Autowired
    private RuleService ruleService;

    @GetMapping
    public List<Rule> getRule() {
        return ruleService.getRule();
    }

    @PostMapping
    public void saveRule(@RequestBody Map map) {
        log.info("request body is {}", map);
        ruleService.saveRule(String.valueOf(map.getOrDefault("description", "")));
    }

    @DeleteMapping("{nos}")
    public boolean removeRule(@PathVariable("nos") String nos) {
        log.info("removeRule request param is {}", nos);
        ruleService.removeRule(nos);
        return true;
    }
}
