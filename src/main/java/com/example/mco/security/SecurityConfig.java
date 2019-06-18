
package com.example.mco.security;

import java.util.Base64.Encoder;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.vote.RoleVoter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled=true)


public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	    http.authorizeRequests().antMatchers("/submitEnrollment").permitAll().and().csrf().disable();
	}
	//@Autowired
	//private SimpleAuthenticationSuccessHandler successHandler;
	//@Autowired
	
	 /* @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }*/

	/*protected void config(AuthenticationManagerBuilder auth, DataSource datasource) throws Exception {
		//les utilisateur sont dans la memoire
		auth.inMemoryAuthentication().withUser("admin").password("{noop}123").roles("ADMIN");
		auth.inMemoryAuthentication().withUser("ResponsableMCO").password("{noop}123").roles("MCO");
		auth.inMemoryAuthentication().withUser("initiateur").password("{noop}123").roles("INITIATEUR");

		 //BCryptPasswordEncoder encoder = passwordEncoder();
			
			 auth.jdbcAuthentication()                
		    .dataSource(datasource)
		    .usersByUsernameQuery("select username as principal, password as credentials, true from users where username = ? and active=1 " )               
		    .authoritiesByUsernameQuery("select username as principal, role as role from users where username = ? and active=1" )                
		    .rolePrefix("ROLE_").passwordEncoder(NoOpPasswordEncoder.getInstance());
			 
			
			 }
	

	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.authorizeRequests()
			.antMatchers("/login").permitAll()
			.antMatchers("/registration").permitAll()
			.antMatchers("/saveUser").permitAll()
			.antMatchers("/index").hasRole("ADMIN")
			//.antMatchers("/fiche").hasRole("INITIATEUR")
			//.antmatchers("/delete","/edit").hasRole("ADMIN");
			.antMatchers("/css/**","/js/**","/image/**").permitAll()
				.anyRequest()
					.authenticated()
					.and()
					.formLogin()
						.loginPage("/login")   
							.permitAll()
			//http.exceptionHandling().accessDeniedPage("/403");		
								
						;}
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("initiateur").password("password").roles("INITIATEUR")
                .and()
                .withUser("admin").password("password").roles("ADMIN");
    }
	@Bean
    public RoleVoter roleVoter() {
        RoleVoter roleVoter = new RoleVoter();
        roleVoter.setRolePrefix("");
        return roleVoter;
    }*/

}
