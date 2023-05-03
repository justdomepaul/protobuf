package main

import (
	"embed"
	"log"
	"net/http"
)

// content holds our static web server content.
//
//go:embed third_party/OpenAPI/*
var content embed.FS

func main() {
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.FS(content))))
	log.Println("create swagger server on :38080")
	log.Println("Open url: ", "http://localhost:38080/third_party/OpenAPI")
	if err := http.ListenAndServe(":38080", nil); err != nil {
		log.Panicln(err)
	}
}
