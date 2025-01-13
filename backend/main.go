package main

import (
	"fyp.com/m/db"
	"fyp.com/m/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main(){
	db.InitDB()
	db.CreateTable()
	server := gin.Default()
	server.Static("/static", "./static")
	server.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })
	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))
	routes.RegisterRoutes(server)
	server.Run(":8080")
}