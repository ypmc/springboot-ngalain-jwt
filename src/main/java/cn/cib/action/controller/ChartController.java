package cn.cib.action.controller;

import cn.cib.action.bean.ChartData;
import cn.cib.action.bean.ChartTag;
import cn.cib.action.bean.VisitData;
import cn.cib.action.service.ChartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class ChartController {

    @Autowired
    private ChartService chartService;

    @GetMapping("/chart")
    public ChartData chart() {
        return chartService.getChartData();
    }

    @GetMapping("/chart/tags")
    public Object chartTags() {
        return chartService.getChartTags();
    }

    @GetMapping("/chart/visit")
    public List<VisitData> chartVisit() {
        return chartService.getChartVisit();
    }


}


