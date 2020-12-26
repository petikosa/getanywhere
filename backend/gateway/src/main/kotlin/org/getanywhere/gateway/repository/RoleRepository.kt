package org.getanywhere.gateway.repository

import org.getanywhere.gateway.models.Role
import org.springframework.data.mongodb.repository.MongoRepository

interface RoleRepository : MongoRepository<Role, String> {
    fun findByName(name: Role.RoleType): Role?
}