package com.gyejoong.realworld.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import reactor.core.publisher.Mono
import java.time.LocalDateTime

@Document
data class Article(
        @Id
        val id: String,
        val slug: String,
        val title: String,
        val description: String,
        val body: String,
        val tagList: Mono<String>,
        val createdAt: LocalDateTime,
        val updatedAt: LocalDateTime,
        val favorited: Boolean,
        val favoritesCount: Int,
        val author: User
)