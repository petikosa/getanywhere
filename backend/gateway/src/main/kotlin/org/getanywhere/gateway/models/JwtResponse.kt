package org.getanywhere.gateway.models

data class JwtResponse(
        val token: String,
        val type: String = "Bearer",
        val id: String,
        val username: String,
        val email: String,
        val roles: Set<String>
        )
