package cn.cib.action.service;

import cn.cib.action.bean.ChartData;
import cn.cib.action.bean.VisitData;

import java.util.List;

public interface ChartService {
    ChartData getChartData();
    Object getChartTags();
    List<VisitData> getChartVisit();
}
