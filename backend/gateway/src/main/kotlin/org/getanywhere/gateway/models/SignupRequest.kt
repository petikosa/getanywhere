package org.getanywhere.gateway.models

data class SignupRequest(val username: String, val email: String, val roles: Set<String>)
