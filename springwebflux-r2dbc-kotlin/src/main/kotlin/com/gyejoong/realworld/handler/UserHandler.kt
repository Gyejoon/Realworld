package com.gyejoong.realworld.handler

import com.gyejoong.realworld.repository.UserRepository
import org.springframework.stereotype.Component

@Component
class UserHandler(
        private val userRepository: UserRepository
) {
    fun findAll() = userRepository.findAll()
}