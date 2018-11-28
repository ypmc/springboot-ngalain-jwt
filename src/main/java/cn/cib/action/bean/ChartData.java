package cn.cib.action.bean;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@ToString(doNotUseGetters = true)
@AllArgsConstructor
@NoArgsConstructor
public class ChartData {
    private List<OfflineChartData> offlineChartData;
    private List<OfflineData> offlineData;
    private List<RadarData> radarData;
    private List<SalesData> salesData;
    private List<SalesTypeData> salesTypeData;
    private List<SalesTypeData> salesTypeDataOffline;
    private List<SalesTypeData> salesTypeDataOnline;
    private List<SearchData> searchData;
    private List<VisitData> visitData;
    private List<VisitData> visitData2;

}
