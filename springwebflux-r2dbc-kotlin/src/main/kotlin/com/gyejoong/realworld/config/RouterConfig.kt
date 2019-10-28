package com.gyejoong.realworld.config

import com.gyejoong.realworld.repository.UserRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.server.body
import org.springframework.web.reactive.function.server.router
import reactor.core.publisher.Mono

@Configuration
class RouterConfig {

    @Bean
    fun routes(
            userRepository: UserRepository
    ) = router {
        GET("/") {
            ok().body(Mono.just("hello world"))
        }

        ("/api").nest {
            POST("/users/login") {
                TODO("Login 구현")
            }

            POST("/users") {
                TODO("회원가입")
            }

            GET("/user") {
                TODO("Current User")
            }

            PUT("/user") {
                TODO("Update User")
            }

            GET("/tags") {
                TODO("List of Tags")
            }

            ("/profiles").nest {
                POST("/:username/follow") {
                    TODO("follow user")
                }

                DELETE("/:username/follow") {
                    TODO("unFollow User")
                }
            }


            ("/articles").nest {
                GET("/") {
                    TODO("List Articles")
                }

                POST("/") {
                    TODO("Create Article")
                }

                GET("/feed") {
                    TODO("Feed Articles")
                }

                (":/slug").nest {
                    GET("/") {
                        TODO("Get Article")
                    }

                    PUT("/") {
                        TODO("Update Article")
                    }

                    DELETE("/") {
                        TODO("Delete Article")
                    }

                    GET("/comments") {
                        TODO("Get Comments from an Article\n")
                    }

                    POST("/comments") {
                        TODO("Add Comments to an Article")
                    }

                    DELETE("/comments/:id") {
                        TODO("Delete comment")
                    }

                    POST("/favorite") {
                        TODO("Favorite Article")
                    }

                    DELETE("/favorite") {
                        TODO("UnFavorite Article")
                    }
                }
            }
        }
    }

}