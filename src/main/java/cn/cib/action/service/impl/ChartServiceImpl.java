package cn.cib.action.service.impl;

import cn.cib.action.bean.*;
import cn.cib.action.service.ChartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
@Slf4j
public class ChartServiceImpl implements ChartService {
    @Override
    public ChartData getChartData() {
        List<VisitData> visitData = getVisitData(List.of(7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5));
        List<VisitData> visitData2 = getVisitData(List.of(1, 6, 4, 8, 3, 7, 2));
        return ChartData.builder()
                .visitData(visitData)
                .visitData2(visitData2)
                .salesData(getSalesData())
                .searchData(getSearchData())
                .salesTypeData(getSalesTypeData((int) Math.random() * 1000))
                .salesTypeDataOffline(getSalesTypeData((int) Math.random() * 1000))
                .salesTypeDataOnline(getSalesTypeData((int) Math.random() * 1000))
                .offlineData(getOfflineData())
                .offlineChartData(getOfflineChartData())
                .radarData(getRadarData())
                .build();
    }

    @Override
    public Object getChartTags() {

        var object = "[{\"x\":\"毕节市\",\"value\":45,\"category\":1},{\"x\":\"毕节市\",\"value\":45,\"category\":1},{\"x\":\"天津市\",\"value\":88,\"category\":1},{\"x\":\"林芝地区\",\"value\":72,\"category\":1},{\"x\":\"嘉兴市\",\"value\":16,\"category\":0},{\"x\":\"海南藏族自治州\",\"value\":82,\"category\":1},{\"x\":\"焦作市\",\"value\":7,\"category\":1},{\"x\":\"九龙\",\"value\":52,\"category\":1},{\"x\":\"迪庆藏族自治州\",\"value\":33,\"category\":0},{\"x\":\"迪庆藏族自治州\",\"value\":23,\"category\":0},{\"x\":\"桂林市\",\"value\":63,\"category\":1},{\"x\":\"绥化市\",\"value\":41,\"category\":1},{\"x\":\"克孜勒苏柯尔克孜自治州\",\"value\":23,\"category\":2},{\"x\":\"广元市\",\"value\":76,\"category\":1},{\"x\":\"三沙市\",\"value\":6,\"category\":1},{\"x\":\"荆州市\",\"value\":60,\"category\":1},{\"x\":\"三亚市\",\"value\":90,\"category\":1},{\"x\":\"清远市\",\"value\":52,\"category\":1},{\"x\":\"通辽市\",\"value\":37,\"category\":2},{\"x\":\"重庆市\",\"value\":52,\"category\":1},{\"x\":\"长治市\",\"value\":20,\"category\":1},{\"x\":\"北京市\",\"value\":38,\"category\":1},{\"x\":\"阿拉善盟\",\"value\":20,\"category\":1},{\"x\":\"高雄市\",\"value\":11,\"category\":2},{\"x\":\"北京市\",\"value\":95,\"category\":1},{\"x\":\"黄南藏族自治州\",\"value\":57,\"category\":0},{\"x\":\"九龙\",\"value\":33,\"category\":1},{\"x\":\"延边朝鲜族自治州\",\"value\":67,\"category\":0},{\"x\":\"天津市\",\"value\":80,\"category\":0},{\"x\":\"承德市\",\"value\":14,\"category\":1},{\"x\":\"宝鸡市\",\"value\":16,\"category\":1},{\"x\":\"唐山市\",\"value\":57,\"category\":1},{\"x\":\"海东市\",\"value\":52,\"category\":0},{\"x\":\"遵义市\",\"value\":71,\"category\":1},{\"x\":\"合肥市\",\"value\":60,\"category\":0},{\"x\":\"杭州市\",\"value\":1000,\"category\":1},{\"x\":\"甘南藏族自治州\",\"value\":15,\"category\":1},{\"x\":\"成都市\",\"value\":27,\"category\":2},{\"x\":\"那曲地区\",\"value\":58,\"category\":1},{\"x\":\"张家口市\",\"value\":46,\"category\":0},{\"x\":\"那曲地区\",\"value\":20,\"category\":2},{\"x\":\"南充市\",\"value\":13,\"category\":0},{\"x\":\"辽源市\",\"value\":53,\"category\":0},{\"x\":\"文山壮族苗族自治州\",\"value\":20,\"category\":0},{\"x\":\"香港岛\",\"value\":78,\"category\":1},{\"x\":\"楚雄彝族自治州\",\"value\":25,\"category\":0},{\"x\":\"上海市\",\"value\":77,\"category\":2},{\"x\":\"玉林市\",\"value\":44,\"category\":0},{\"x\":\"荆州市\",\"value\":57,\"category\":1},{\"x\":\"哈密地区\",\"value\":17,\"category\":1},{\"x\":\"三沙市\",\"value\":65,\"category\":0},{\"x\":\"廊坊市\",\"value\":5,\"category\":1},{\"x\":\"晋中市\",\"value\":81,\"category\":2},{\"x\":\"香港岛\",\"value\":35,\"category\":2},{\"x\":\"锦州市\",\"value\":27,\"category\":1},{\"x\":\"巴音郭楞蒙古自治州\",\"value\":83,\"category\":2},{\"x\":\"延边朝鲜族自治州\",\"value\":33,\"category\":2},{\"x\":\"淮安市\",\"value\":27,\"category\":2},{\"x\":\"咸阳市\",\"value\":43,\"category\":2},{\"x\":\"巴中市\",\"value\":29,\"category\":1},{\"x\":\"盐城市\",\"value\":95,\"category\":0},{\"x\":\"北京市\",\"value\":18,\"category\":0},{\"x\":\"三明市\",\"value\":81,\"category\":0},{\"x\":\"哈密地区\",\"value\":88,\"category\":0},{\"x\":\"辽阳市\",\"value\":79,\"category\":1},{\"x\":\"忻州市\",\"value\":96,\"category\":0},{\"x\":\"固原市\",\"value\":29,\"category\":1},{\"x\":\"乌海市\",\"value\":74,\"category\":2},{\"x\":\"晋城市\",\"value\":92,\"category\":1},{\"x\":\"徐州市\",\"value\":62,\"category\":1},{\"x\":\"上海市\",\"value\":7,\"category\":0},{\"x\":\"咸阳市\",\"value\":80,\"category\":2},{\"x\":\"嘉兴市\",\"value\":57,\"category\":0},{\"x\":\"许昌市\",\"value\":4,\"category\":2},{\"x\":\"三亚市\",\"value\":67,\"category\":1},{\"x\":\"定西市\",\"value\":85,\"category\":0},{\"x\":\"淮安市\",\"value\":88,\"category\":1},{\"x\":\"张掖市\",\"value\":31,\"category\":1},{\"x\":\"佳木斯市\",\"value\":69,\"category\":1},{\"x\":\"荆州市\",\"value\":43,\"category\":0},{\"x\":\"阜阳市\",\"value\":96,\"category\":1},{\"x\":\"西安市\",\"value\":68,\"category\":0},{\"x\":\"佳木斯市\",\"value\":69,\"category\":1},{\"x\":\"伊春市\",\"value\":91,\"category\":1},{\"x\":\"保山市\",\"value\":11,\"category\":0},{\"x\":\"马鞍山市\",\"value\":68,\"category\":1},{\"x\":\"杭州市\",\"value\":77,\"category\":2},{\"x\":\"抚州市\",\"value\":82,\"category\":2},{\"x\":\"张家口市\",\"value\":24,\"category\":2},{\"x\":\"双鸭山市\",\"value\":75,\"category\":2},{\"x\":\"铜川市\",\"value\":87,\"category\":1},{\"x\":\"襄阳市\",\"value\":72,\"category\":1},{\"x\":\"吴忠市\",\"value\":43,\"category\":1},{\"x\":\"贵港市\",\"value\":42,\"category\":2},{\"x\":\"包头市\",\"value\":13,\"category\":0},{\"x\":\"漯河市\",\"value\":51,\"category\":2},{\"x\":\"岳阳市\",\"value\":10,\"category\":2},{\"x\":\"抚顺市\",\"value\":69,\"category\":1},{\"x\":\"甘南藏族自治州\",\"value\":52,\"category\":1},{\"x\":\"北京市\",\"value\":94,\"category\":2},{\"x\":\"黔南布依族苗族自治州\",\"value\":64,\"category\":0},{\"x\":\"天津市\",\"value\":88,\"category\":1},{\"x\":\"林芝地区\",\"value\":72,\"category\":1},{\"x\":\"嘉兴市\",\"value\":16,\"category\":0},{\"x\":\"海南藏族自治州\",\"value\":82,\"category\":1},{\"x\":\"焦作市\",\"value\":7,\"category\":1},{\"x\":\"九龙\",\"value\":52,\"category\":1},{\"x\":\"迪庆藏族自治州\",\"value\":33,\"category\":0},{\"x\":\"迪庆藏族自治州\",\"value\":33,\"category\":0},{\"x\":\"桂林市\",\"value\":63,\"category\":1},{\"x\":\"绥化市\",\"value\":41,\"category\":1},{\"x\":\"克孜勒苏柯尔克孜自治州\",\"value\":23,\"category\":2},{\"x\":\"广元市\",\"value\":76,\"category\":1},{\"x\":\"三沙市\",\"value\":6,\"category\":1},{\"x\":\"荆州市\",\"value\":60,\"category\":1},{\"x\":\"三亚市\",\"value\":90,\"category\":1},{\"x\":\"清远市\",\"value\":52,\"category\":1},{\"x\":\"通辽市\",\"value\":37,\"category\":2},{\"x\":\"重庆市\",\"value\":52,\"category\":1},{\"x\":\"长治市\",\"value\":20,\"category\":1},{\"x\":\"北京市\",\"value\":38,\"category\":1},{\"x\":\"阿拉善盟\",\"value\":20,\"category\":1},{\"x\":\"高雄市\",\"value\":11,\"category\":2},{\"x\":\"北京市\",\"value\":95,\"category\":1},{\"x\":\"黄南藏族自治州\",\"value\":57,\"category\":0},{\"x\":\"九龙\",\"value\":33,\"category\":1},{\"x\":\"延边朝鲜族自治州\",\"value\":67,\"category\":0},{\"x\":\"天津市\",\"value\":80,\"category\":0},{\"x\":\"承德市\",\"value\":14,\"category\":1},{\"x\":\"宝鸡市\",\"value\":16,\"category\":1},{\"x\":\"唐山市\",\"value\":57,\"category\":1},{\"x\":\"海东市\",\"value\":52,\"category\":0},{\"x\":\"遵义市\",\"value\":71,\"category\":1},{\"x\":\"合肥市\",\"value\":60,\"category\":0},{\"x\":\"杭州市\",\"value\":1000,\"category\":1},{\"x\":\"甘南藏族自治州\",\"value\":15,\"category\":1},{\"x\":\"成都市\",\"value\":27,\"category\":2},{\"x\":\"那曲地区\",\"value\":58,\"category\":1},{\"x\":\"张家口市\",\"value\":46,\"category\":0},{\"x\":\"那曲地区\",\"value\":20,\"category\":2},{\"x\":\"南充市\",\"value\":13,\"category\":0},{\"x\":\"辽源市\",\"value\":53,\"category\":0},{\"x\":\"文山壮族苗族自治州\",\"value\":20,\"category\":0},{\"x\":\"香港岛\",\"value\":78,\"category\":1},{\"x\":\"楚雄彝族自治州\",\"value\":25,\"category\":0},{\"x\":\"上海市\",\"value\":77,\"category\":2},{\"x\":\"玉林市\",\"value\":44,\"category\":0},{\"x\":\"荆州市\",\"value\":57,\"category\":1},{\"x\":\"哈密地区\",\"value\":17,\"category\":1},{\"x\":\"三沙市\",\"value\":65,\"category\":0},{\"x\":\"廊坊市\",\"value\":5,\"category\":1},{\"x\":\"晋中市\",\"value\":81,\"category\":2},{\"x\":\"香港岛\",\"value\":35,\"category\":2},{\"x\":\"锦州市\",\"value\":27,\"category\":1},{\"x\":\"巴音郭楞蒙古自治州\",\"value\":83,\"category\":2},{\"x\":\"延边朝鲜族自治州\",\"value\":33,\"category\":2},{\"x\":\"淮安市\",\"value\":27,\"category\":2},{\"x\":\"咸阳市\",\"value\":43,\"category\":2},{\"x\":\"巴中市\",\"value\":29,\"category\":1},{\"x\":\"盐城市\",\"value\":95,\"category\":0},{\"x\":\"北京市\",\"value\":18,\"category\":0},{\"x\":\"三明市\",\"value\":81,\"category\":0},{\"x\":\"哈密地区\",\"value\":88,\"category\":0},{\"x\":\"辽阳市\",\"value\":79,\"category\":1},{\"x\":\"忻州市\",\"value\":96,\"category\":0},{\"x\":\"固原市\",\"value\":29,\"category\":1},{\"x\":\"乌海市\",\"value\":74,\"category\":2},{\"x\":\"晋城市\",\"value\":92,\"category\":1},{\"x\":\"徐州市\",\"value\":62,\"category\":1},{\"x\":\"上海市\",\"value\":7,\"category\":0},{\"x\":\"咸阳市\",\"value\":80,\"category\":2},{\"x\":\"嘉兴市\",\"value\":57,\"category\":0},{\"x\":\"许昌市\",\"value\":4,\"category\":2},{\"x\":\"三亚市\",\"value\":67,\"category\":1},{\"x\":\"定西市\",\"value\":85,\"category\":0},{\"x\":\"淮安市\",\"value\":88,\"category\":1},{\"x\":\"张掖市\",\"value\":31,\"category\":1},{\"x\":\"佳木斯市\",\"value\":69,\"category\":1},{\"x\":\"荆州市\",\"value\":43,\"category\":0},{\"x\":\"阜阳市\",\"value\":96,\"category\":1},{\"x\":\"西安市\",\"value\":68,\"category\":0},{\"x\":\"佳木斯市\",\"value\":69,\"category\":1},{\"x\":\"伊春市\",\"value\":91,\"category\":1},{\"x\":\"保山市\",\"value\":11,\"category\":0},{\"x\":\"马鞍山市\",\"value\":68,\"category\":1},{\"x\":\"杭州市\",\"value\":77,\"category\":2},{\"x\":\"抚州市\",\"value\":82,\"category\":2},{\"x\":\"张家口市\",\"value\":24,\"category\":2},{\"x\":\"双鸭山市\",\"value\":75,\"category\":2},{\"x\":\"铜川市\",\"value\":87,\"category\":1},{\"x\":\"襄阳市\",\"value\":72,\"category\":1},{\"x\":\"吴忠市\",\"value\":43,\"category\":1},{\"x\":\"贵港市\",\"value\":42,\"category\":2},{\"x\":\"包头市\",\"value\":13,\"category\":0},{\"x\":\"漯河市\",\"value\":51,\"category\":2},{\"x\":\"岳阳市\",\"value\":10,\"category\":2},{\"x\":\"抚顺市\",\"value\":69,\"category\":1},{\"x\":\"甘南藏族自治州\",\"value\":52,\"category\":1},{\"x\":\"北京市\",\"value\":94,\"category\":2},{\"x\":\"黔南布依族苗族自治州\",\"value\":64,\"category\":0}]";

        return object;
    }

    @Override
    public List<VisitData> getChartVisit() {
        List<VisitData> visitData = getVisitData(List.of(7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5));
        return visitData;
    }


    private List<VisitData> getVisitData(List<Integer> fakeY) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        ArrayList<VisitData> visitDataList = new ArrayList<>(fakeY.size());
        for (var i = 0; i < fakeY.size(); i += 1) {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DATE, i);
            VisitData visitData = VisitData.builder()
                    .x(sdf.format(calendar.getTime()))
                    .y(fakeY.get(i))
                    .build();
            visitDataList.add(visitData);
        }
        return visitDataList;
    }


    private List<SalesData> getSalesData() {
        List<SalesData> salesDataList = new ArrayList<>(12);
        for (var i = 0; i < 12; i += 1) {
            salesDataList.add(SalesData.builder()
                    .x(String.format("%s月", i + 1))
                    .y((int) (Math.random() * 1000) + 200)
                    .build());
        }
        return salesDataList;
    }

    private List<SearchData> getSearchData() {
        List<SearchData> searchDataList = new ArrayList<>(50);
        for (var i = 0; i < 50; i += 1) {
            searchDataList.add(SearchData.builder()
                    .count((int) Math.floor(Math.random() * 1000))
                    .range((int) Math.floor(Math.random() * 100))
                    .status((int) Math.floor((Math.random() * 10) % 2))
                    .keyword(String.format("搜索关键词-%s", i))
                    .index(i + 1)
                    .build());
        }
        return searchDataList;
    }

    private List<SalesTypeData> getSalesTypeData(int type) {
        List<SalesTypeData> salesTypeDataList = new ArrayList<>();
        salesTypeDataList.add(SalesTypeData.builder()
                .x("家用电器")
                .y(4544 - type)
                .build());
        salesTypeDataList.add(SalesTypeData.builder()
                .x("食用酒水")
                .y(3321 - type)
                .build());
        salesTypeDataList.add(SalesTypeData.builder()
                .x("个护健康")
                .y(3113 - type)
                .build());
        salesTypeDataList.add(SalesTypeData.builder()
                .x("服饰箱包")
                .y(2341 - type)
                .build());
        salesTypeDataList.add(SalesTypeData.builder()
                .x("母婴产品")
                .y(1231 - type)
                .build());
        salesTypeDataList.add(SalesTypeData.builder()
                .x("其他")
                .y(1231 - type)
                .build());
        return salesTypeDataList;
    }

    private List<OfflineData> getOfflineData() {
        List<OfflineData> offlineDataList = new ArrayList<>(10);
        for (var i = 0; i < 10; i += 1) {
            offlineDataList.add(OfflineData.builder()
                    .name(String.format("门店%s", i + 1))
                    .cvr(Math.ceil(Math.random() * 9) / 10)
                    .build());
        }
        return offlineDataList;
    }

    private List<OfflineChartData> getOfflineChartData() {
        List<OfflineChartData> offlineChartDataList = new ArrayList<>(20);
        for (var i = 0; i < 20; i += 1) {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DATE, i + 1);
            offlineChartDataList.add(OfflineChartData.builder()
                    .x(calendar.getTime().getTime())
                    .y1((int) Math.floor(Math.random() * 100) + 10)
                    .y2((int) Math.floor(Math.random() * 100) + 10)
                    .build());
        }

        return offlineChartDataList;
    }

    private List<RadarData> getRadarData() {
        List<RadarData> radarDataList = new ArrayList<>();
        return radarDataList;
    }
}
