package com.gyejoong.realworld.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User(
        @Id
        val id: String? = null,
        val name: String,
        val username: String,
        val password: String
)