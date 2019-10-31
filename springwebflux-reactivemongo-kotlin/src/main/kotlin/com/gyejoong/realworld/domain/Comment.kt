package com.gyejoong.realworld.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Comment(
        @Id
        val id: String
)