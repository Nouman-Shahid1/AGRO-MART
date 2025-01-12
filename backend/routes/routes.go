package routes

import (
	"fyp.com/m/middleware"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine) {
	userRoutes := server.Group("/users")
	{
		// Fetch all users
		userRoutes.GET("", getUsers)

		// Fetch a user by ID
		userRoutes.GET("/:id", getUser)

		// Create about information for a user
		userRoutes.POST("/about", create_about)

		// Update user by ID
		userRoutes.PUT("/:id", updateUser)

		// Delete a user by ID
		userRoutes.DELETE("/:id", deleteUser)
	}

	// Authentication routes
	server.POST("/signup", signUp) // Endpoint for user signup
	server.POST("/login", login)   // Endpoint for user login

	server.GET("/search-bar", searchProduct)
	server.GET("/getallcategories", getProductsCategories)
	server.GET("/getallproducts", getProducts)

	authenticated := server.Group("/products")
	authenticated.Use(middleware.Authenticate)
	{
		authenticated.POST("/new-product", createProduct)
		authenticated.PUT("/update-product/:id", updateProduct)
		authenticated.DELETE("/delete-product/:id", deleteProduct)
		authenticated.GET("/get-Product/:id", getProductsbyuserid)
	}

	// Remove authentication for the new-category route
	server.POST("/category/new-category", createProductCategory) // Public route for creating a category

	// Keep other category routes authenticated
	categoryRoutes := server.Group("/category")
	categoryRoutes.Use(middleware.Authenticate)
	{
		categoryRoutes.POST("/new-category", createProductCategory)
		
	}
}
