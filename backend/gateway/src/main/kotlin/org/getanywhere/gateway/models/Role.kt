package org.getanywhere.gateway.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "roles")
data class Role(
        @Id
        val id: String,
        val name: RoleType
) {
    enum class RoleType {
        ROLE_USER,
        ROLE_MODERATOR,
        ROLE_ADMIN
    }
}