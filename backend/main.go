package main

import (
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	log.Fatal(http.ListenAndServe(":8080", handlers.AllowedOrigins([]string{"*"}))(router)))
}