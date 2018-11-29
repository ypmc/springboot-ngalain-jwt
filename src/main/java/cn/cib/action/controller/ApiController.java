package cn.cib.action.controller;

import cn.cib.action.bean.Activity;
import cn.cib.action.bean.NgList;
import cn.cib.action.bean.Notice;
import cn.cib.action.dto.ApiDTO;
import cn.cib.action.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/notice")
    public List<Notice> getNotice() {
        return apiService.getNotice();
    }

    @GetMapping("/activities")
    public List<Activity> getActivity() {
        return apiService.getActivity();
    }

    @GetMapping("list")
    public List<NgList> getList(@RequestParam(value = "pageIndex", required = false) Integer pageIndex
            , @RequestParam(value = "pageSize", required = false) Integer pageSize) {
        return apiService.getList(pageIndex, pageSize);
    }
}
