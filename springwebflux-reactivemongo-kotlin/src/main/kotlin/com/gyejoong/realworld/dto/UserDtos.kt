package com.gyejoong.realworld.dto

import com.fasterxml.jackson.annotation.JsonRootName
import com.gyejoong.realworld.domain.User

data class UserAuth(
        val email: String,
        val token: String,
        val username: String,
        val bio: String,
        val image: String? = null
)

fun User.toAuth(token: String) =
        UserAuth(
                email = email,
                token = token,
                username = username,
                bio = bio,
                image = image
        )


@JsonRootName("profile")
data class ProfileResponse(
        val username: String,
        val bio: String,
        val image: String,
        val following: Boolean
)