package cn.cib.action.service.impl;

import cn.cib.action.bean.Activity;
import cn.cib.action.bean.Notice;
import cn.cib.action.service.ApiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;

@Slf4j
@Service
public class ApiServiceImpl implements ApiService {
    private List<String> desc;
    private List<String> avatars;
    private List<String> titles;
    private List<String> user;
    private List<String> covers;

    @Override
    public List<Notice> getNotice() {
        List<Notice> noticeList = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            noticeList.add(Notice.builder()
                    .id(String.valueOf(1000 + i))
                    .title(titles.get(i))
                    .logo(avatars.get(i))
                    .description(desc.get(i))
                    .updateAt(Calendar.getInstance().getTime().getTime())
                    .member("Member" + i)
                    .href("")
                    .member("")
                    .build());
        }
        return noticeList;
    }

    @Override
    public List<Activity> getActivity() {
        List<Activity> activities = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Map user = new HashMap<>();
            Map group = new HashMap<>();
            Map project = new HashMap<>();
            user.put("name", "name" + i);
            user.put("avatar", avatars.get(i % avatars.size()));

            group.put("name", "group" + i);
            group.put("link", "http://github.com");

            project.put("name", "project" + i);
            project.put("link", "http://github.com");

            activities.add(Activity.builder()
                    .group(group)
                    .id("trend-" + i)
                    .updatedAt(Calendar.getInstance().getTime().getTime())
                    .user(user)
                    .project(project)
                    .template("在 @{group} 新建项目 @{project}")
                    .build());
        }
        return activities;
    }

    @PostConstruct
    public void init() {
        desc = List.of(
                "那是一种内在的东西， 他们到达不了，也无法触及的",
                "希望是一个好东西，也许是最好的，好东西是不会消亡的",
                "生命就像一盒巧克力，结果往往出人意料",
                "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
                "那时候我只会想自己想要什么，从不想自己拥有什么"
        );

        titles = List.of(
                "Alipay",
                "Angular",
                "Ant Design",
                "Ant Design Pro",
                "Bootstrap",
                "React",
                "Vue",
                "Webpack"
        );
        avatars = List.of(
                "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png", // Alipay
                "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png", // Angular
                "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png", // Ant Design
                "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png", // Ant Design Pro
                "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png", // Bootstrap
                "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png", // React
                "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png", // Vue
                "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"  // Webpack
        );

        user = List.of(
                "卡色",
                "cipchk",
                "付小小",
                "曲丽丽",
                "林东东",
                "周星星",
                "吴加好",
                "朱偏右",
                "鱼酱",
                "乐哥",
                "谭小仪",
                "仲尼"
        );

        covers = List.of(
                "https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png",
                "https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png",
                "https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png",
                "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
        );
    }
}
