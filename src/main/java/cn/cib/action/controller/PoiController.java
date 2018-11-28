package cn.cib.action.controller;

import cn.cib.action.bean.POI;
import cn.cib.action.service.PoiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("pois")
public class PoiController {

    @Autowired
    private PoiService poiService;

    @GetMapping
    public POI getPois() {
        return poiService.getPois();
    }


}
