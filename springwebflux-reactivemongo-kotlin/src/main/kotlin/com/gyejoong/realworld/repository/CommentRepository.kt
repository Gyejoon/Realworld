package com.gyejoong.realworld.repository

import com.gyejoong.realworld.domain.Comment
import org.springframework.data.mongodb.repository.ReactiveMongoRepository

interface CommentRepository : ReactiveMongoRepository<Comment, String> {
}