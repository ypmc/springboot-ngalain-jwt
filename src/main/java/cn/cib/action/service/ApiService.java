package cn.cib.action.service;

import cn.cib.action.bean.Activity;
import cn.cib.action.bean.NgList;
import cn.cib.action.bean.Notice;

import java.util.List;

public interface ApiService {
    List<Notice> getNotice();

    List<Activity> getActivity();

    List<NgList> getList(int pageIndex, int pageSize);
}
