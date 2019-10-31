package com.gyejoong.realworld.repository

import com.gyejoong.realworld.domain.Article
import org.springframework.data.mongodb.repository.ReactiveMongoRepository

interface ArticleRepository: ReactiveMongoRepository<Article, String> {
}