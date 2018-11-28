package cn.cib.action.security;


import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashMap;
import java.util.Set;

public class JsonWebTokenAuthentication extends AbstractAuthenticationToken {
    private static final long serialVersionUID = -6855809445272533821L;

    private UserDetails principal;
    private String jsonWebToken;
    private HashMap<String, Set<String>> privileges;

    public JsonWebTokenAuthentication(UserDetails principal, String jsonWebToken) {
        super(principal.getAuthorities());
        this.principal = principal;
        this.jsonWebToken = jsonWebToken;
    }

    public JsonWebTokenAuthentication(UserDetails principal, String jsonWebToken, HashMap<String, Set<String>> privileges) {
        super(principal.getAuthorities());
        this.principal = principal;
        this.jsonWebToken = jsonWebToken;
        this.privileges = privileges;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    public String getJsonWebToken() {
        return jsonWebToken;
    }

    @Override
    public Object getPrincipal() {
        return principal;
    }
}
