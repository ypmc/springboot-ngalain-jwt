package cn.cib.action.service;

import java.util.List;
import java.util.Map;

public interface GeoService {
    List<Map<String,String>> getProvince();
    List<Map<String,String>> getCity(String id);
}
