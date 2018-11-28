package cn.cib.action.controller;

import cn.cib.action.bean.AdvancedOperation;
import cn.cib.action.bean.Goods;
import cn.cib.action.bean.POI;
import cn.cib.action.bean.Progress;
import cn.cib.action.service.PoiService;
import cn.cib.action.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("progress")
    public List<Progress> getProgess() {
        return profileService.getProgress();
    }

    @GetMapping("goods")
    public List<Goods> getGoods() {
        return profileService.getGoods();
    }

    @GetMapping("advanced")
    public AdvancedOperation getAdvanced() {
        return profileService.getAdvancedOperation();
    }


}
