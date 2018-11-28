package cn.cib.action.service.impl;

import cn.cib.action.service.GeoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class GeoServiceImpl implements GeoService {

    private List<Map<String, String>> data;

    @Override
    public List<Map<String, String>> getProvince() {
        return data.stream().filter(map -> map.get("id").endsWith("0000")).collect(Collectors.toList());
    }

    @Override
    public List<Map<String, String>> getCity(String id) {
        return data.stream()
                .filter(map -> !map.get("id").endsWith("0000") && map.get("id").startsWith(id))
                .collect(Collectors.toList());
    }

    @PostConstruct
    public void init() {
        data = List.of(
                Map.of("name", "上海", "id", "310000"),
                Map.of("name", "市辖区", "id", "310100"),
                Map.of("name", "北京", "id", "110000"),
                Map.of("name", "市辖区", "id", "110100"),
                Map.of("name", "浙江省", "id", "330000"),
                Map.of("name", "杭州市", "id", "330100"),
                Map.of("name", "宁波市", "id", "330200"),
                Map.of("name", "温州市", "id", "330300"),
                Map.of("name", "嘉兴市", "id", "330400"),
                Map.of("name", "湖州市", "id", "330500"),
                Map.of("name", "绍兴市", "id", "330600"),
                Map.of("name", "金华市", "id", "330700"),
                Map.of("name", "衢州市", "id", "330800"),
                Map.of("name", "舟山市", "id", "330900"),
                Map.of("name", "台州市", "id", "331000"),
                Map.of("name", "丽水市", "id", "331100"));
    }

}
