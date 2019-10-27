package com.gyejoong.realworld.config

import com.mongodb.reactivestreams.client.MongoClient
import com.mongodb.reactivestreams.client.MongoClients
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories

@Configuration
@EnableReactiveMongoRepositories("com.gyejoong.realworld.repository")
class DatabaseConfig : AbstractReactiveMongoConfiguration() {

    override fun getDatabaseName() = "realworld"

    override fun reactiveMongoClient(): MongoClient =
            MongoClients.create("mongodb://realworld_user:password@localhost:27017/realworld")

}