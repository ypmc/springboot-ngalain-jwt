package cn.cib.action.controller;

import cn.cib.action.bean.Activity;
import cn.cib.action.bean.Notice;
import cn.cib.action.dto.ApiDTO;
import cn.cib.action.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
