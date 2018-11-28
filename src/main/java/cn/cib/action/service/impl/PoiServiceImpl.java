package cn.cib.action.service.impl;

import cn.cib.action.bean.POI;
import cn.cib.action.service.PoiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class PoiServiceImpl implements PoiService {

    @Override
    public POI getPois() {
        Map<String, Object> brand1 = new HashMap<>();
        Map<String, Object> brand2 = new HashMap<>();
        brand1.put("id", 10000);
        brand1.put("user_id", 1);
        brand1.put("name", "测试品牌");
        brand1.put("branch_name", "测试分店");
        brand1.put("geo", 310105);
        brand1.put("country", "中国");
        brand1.put("province", "上海");
        brand1.put("city", "上海市");
        brand1.put("district", "长宁区");
        brand1.put("address", "中山公园");
        brand1.put("tel", "15900000000");
        brand1.put("categories", "美食);粤菜);湛江菜");
        brand1.put("lng", 121.41707989151003);
        brand1.put("lat", 31.218656214644792);
        brand1.put("recommend", "推荐品");
        brand1.put("special", "特色服务");
        brand1.put("introduction", "商户简介");
        brand1.put("open_time", "营业时间");
        brand1.put("avg_price", 260);
        brand1.put("reason", null);
        brand1.put("status", 1);
        brand1.put("status_str", "待审核");
        brand1.put("status_wx", 1);
        brand1.put("modified", "1505826527288");
        brand1.put("created", "1505826527288");

        brand2.put("id", 10001);
        brand2.put("user_id", 2);
        brand2.put("name", "测试品牌2");
        brand2.put("branch_name", "测试分店2");
        brand2.put("geo", 310105);
        brand2.put("country", "中国");
        brand2.put("province", "上海");
        brand2.put("city", "上海市");
        brand2.put("district", "长宁区");
        brand2.put("address", "中山公园");
        brand2.put("tel", "15900000000");
        brand2.put("categories", "美食);粤菜);湛江菜");
        brand2.put("lng", 121.41707989151003);
        brand2.put("lat", 31.218656214644792);
        brand2.put("recommend", "推荐品");
        brand2.put("special", "特色服务");
        brand2.put("introduction", "商户简介");
        brand2.put("open_time", "营业时间");
        brand2.put("avg_price", 260);
        brand2.put("reason", null);
        brand2.put("status", 1);
        brand2.put("status_str", "待审核");
        brand2.put("status_wx", 1);
        brand2.put("modified", "1505826527288");
        brand2.put("created", "1505826527288");
        return POI.builder()
                .total(2)
                .list(List.of(brand1, brand2))
                .build();
    }
}
