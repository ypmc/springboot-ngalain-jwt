package cn.cib.action.security;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@ComponentScan(basePackages = "cn.cib.action.security")
public class TriviaUiWebSecurityConfig extends JsonWebTokenSecurityConfig {
    @Override
    protected void setupAuthorization(HttpSecurity http) throws Exception {
        http.authorizeRequests()

                // allow anonymous access to /authenticate endpoint
                .antMatchers("/#/passport/login").permitAll()
                .antMatchers("/login/account").permitAll()
                .antMatchers("/#").permitAll()
                // allow anonymous to common static resources
                .antMatchers(HttpMethod.GET, "/", "/assets/*.*","/assets/**/*.*", "/*.html", "/favicon.ico", "/**/*.html", "/**/*.css", "/**/*.js")
                .permitAll()

                // authenticate all other requests
                .anyRequest().authenticated();
    }
}
