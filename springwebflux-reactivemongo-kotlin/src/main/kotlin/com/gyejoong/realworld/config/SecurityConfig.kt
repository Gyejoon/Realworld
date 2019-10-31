package com.gyejoong.realworld.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.SecurityWebFiltersOrder
import org.springframework.web.cors.CorsConfiguration
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.web.cors.reactive.CorsWebFilter
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource


@Configuration
@EnableWebFluxSecurity
class SecurityConfig {

    @Bean
    fun corsFilter(): CorsWebFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.addAllowedOrigin("*")
        config.addAllowedHeader("*")
        config.addAllowedMethod("OPTIONS")
        config.addAllowedMethod("HEAD")
        config.addAllowedMethod("GET")
        config.addAllowedMethod("PUT")
        config.addAllowedMethod("POST")
        config.addAllowedMethod("DELETE")
        config.addAllowedMethod("PATCH")
        source.registerCorsConfiguration("/**", config)
        return CorsWebFilter(source)
    }

    @Bean
    fun configure(http: ServerHttpSecurity): SecurityWebFilterChain =
            http
                    .csrf()
                    .disable()
                    .addFilterAt(corsFilter(), SecurityWebFiltersOrder.CORS)
                    .headers()
                    .frameOptions().disable()
                    .cache().disable()
                    .and()
                    .cors()
                    .and()
                    .authorizeExchange()
                    .anyExchange().permitAll()
                    .and()
                    .httpBasic().disable()
                    .formLogin().disable()
                    .logout().disable()
                    .build()

}