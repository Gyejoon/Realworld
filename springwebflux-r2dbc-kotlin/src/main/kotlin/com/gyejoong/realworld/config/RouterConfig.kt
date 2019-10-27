package com.gyejoong.realworld.config

import com.gyejoong.realworld.domain.User
import com.gyejoong.realworld.repository.UserRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.server.body
import org.springframework.web.reactive.function.server.router
import reactor.core.publisher.Mono
import java.net.URI

@Configuration
class RouterConfig {

    @Bean
    fun routes(
            userRepository: UserRepository
    ) = router {
        GET("/") {
            ok().body(Mono.just("hello world"))
        }

        GET("/users") {
            ok().body(userRepository.findAll())
        }

        POST("/users") {
            it.bodyToMono(User::class.java)
                    .flatMap { user -> ok().body(userRepository.save(user)) }
        }
    }

}