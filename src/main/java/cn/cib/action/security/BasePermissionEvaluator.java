package cn.cib.action.security;

import cn.cib.action.jsonwebtoken.JsonWebTokenUtility;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * @author kangkang lou
 */
@Component
public class BasePermissionEvaluator implements PermissionEvaluator {

    private JsonWebTokenUtility tokenService = new JsonWebTokenUtility();

    @Override
    public boolean hasPermission(Authentication authentication, Object o, Object o1) {
        JsonWebTokenAuthentication jsonWebTokenAuthentication = (JsonWebTokenAuthentication)authentication;
        System.out.println("*****************hasPermission");
        return false;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable serializable, String s, Object o) {
        return false;
    }
}
