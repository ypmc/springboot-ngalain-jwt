package cn.cib.action.controller;

import cn.cib.action.service.GeoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("geo")
public class GeoController {

    @Autowired
    private GeoService geoService;

    @GetMapping("/province")
    public List<Map<String, String>> getProvince() {
        return geoService.getProvince();
    }

    @GetMapping("/{id}")
    public List<Map<String, String>> getCity(@PathVariable("id") String id) {
        return geoService.getCity(id);
    }

}
