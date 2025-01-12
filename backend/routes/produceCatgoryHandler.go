package routes

import (
	"fmt"
	"net/http"
	"strconv"
	"time"

	"fyp.com/m/models"
	"github.com/gin-gonic/gin"
)

func createProductCategory(context *gin.Context) {
	name := context.PostForm("name")
	description := context.PostForm("description")
	file, err := context.FormFile("image")
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Image upload failed"})
		return
	}
	randomFileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), file.Filename)
	filePath := fmt.Sprintf("static/images/%s", randomFileName)
	if err := context.SaveUploadedFile(file, filePath); err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to save image"})
		return
	}

	productcategory := models.ProductCategory{
		Name:        name,
		Description: description,
		ImagePath:   filePath,
	}

	err = productcategory.SaveCategory()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt save product category", "error": err.Error()})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "Product category created successfully", "product": productcategory})
}

func getProductsCategories(context *gin.Context) {
	products, err := models.GetAllProductsCategory()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch products categories", "error": err.Error()})
		return
	}
	context.JSON(http.StatusOK, products)
}

func updateProductCategory(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch product category id"})
	}
	userId := context.GetInt64("userId")
	product, err := models.GetProductByID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch product"})
	}
	if product.UserID != userId {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Not authorized to update product"})
		return
	}
	var updatedproduct models.Product
	err = context.ShouldBindJSON(&updatedproduct)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt bind json to product"})
		return
	}
	updatedproduct.ID = id
	err = updatedproduct.UpdateProduct()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": fmt.Sprintf("Couldn't update product, error: %s", err)})
		return
	}
	context.JSON(http.StatusOK, gin.H{"message": "Product updated"})
}

func deleteProductCategory(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse product id for delete"})
		return
	}
	product, err := models.GetProductByID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch product for delete"})
	}
	userID := context.GetInt64("userId")
	if product.UserID != userID {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Not authorized to delete event"})
		return
	}
	err = product.DeleteProduct()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch product"})
		return
	}
	context.JSON(http.StatusOK, gin.H{"message": "Product deleted"})

}
