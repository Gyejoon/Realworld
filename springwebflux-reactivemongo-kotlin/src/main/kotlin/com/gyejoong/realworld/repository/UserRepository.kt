package com.gyejoong.realworld.repository

import com.gyejoong.realworld.domain.User
import org.springframework.data.mongodb.repository.ReactiveMongoRepository

interface UserRepository : ReactiveMongoRepository<User, String>