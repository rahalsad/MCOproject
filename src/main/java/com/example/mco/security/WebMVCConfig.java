package com.example.mco.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
public class WebMVCConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		//registry.addViewController("/login").setViewName("login");
		registry.addViewController("/logout").setViewName("login");
		registry.addViewController("/login").setViewName("login");
        registry.addViewController("/index").setViewName("initiateurs");
       // registry.addViewController("/fiche").setViewName("fiche");
        registry.addViewController("/ficheList").setViewName("historiqueFiche");
	}
}


