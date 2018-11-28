package cn.cib.action.controller;

import cn.cib.action.dto.ApiDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class OpenApi {

    @GetMapping("{id}")
    public ApiDTO getTransactionStatus(@PathVariable("id") String id) {
        return ApiDTO.ok(id);
    }
}
