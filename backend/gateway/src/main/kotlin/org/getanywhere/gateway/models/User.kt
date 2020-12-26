package org.getanywhere.gateway.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import javax.validation.constraints.Email
import javax.validation.constraints.Size

@Document(collection = "users")
data class User(
        @Id
        val id: String,
        @Size(max = 100)
        val username: String,
        @Size(max = 100)
        @Email
        val email: String,
        @Size(max = 200)
        val password: String,
        @DBRef
        val roles: Set<Role> = HashSet()
)
