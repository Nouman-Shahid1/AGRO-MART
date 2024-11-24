package routes

import (
	"net/http"
	"strconv"

	"fyp.com/m/models"
	"github.com/gin-gonic/gin"
)

func getUsers(context *gin.Context){
    users, err := models.GetAllUsers()
    if err != nil{
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch users", "error":err.Error()})
        return
    }
    context.JSON(http.StatusOK, users) 
}

func signUp(context *gin.Context){
    var user models.User
    err := context.ShouldBindJSON(&user)
    if err != nil {
        context.JSON(http.StatusBadRequest, gin.H{"message": "Couldnt parse request data"})
        return
    }
    err = user.Save()
    if err != nil {
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt save user", "error":   err.Error()})
        return
    }
    context.JSON(http.StatusCreated, gin.H{"message": "User created", "event": user})
}

func deleteUser(context *gin.Context){  
    id, err := strconv.ParseInt(context.Param("id"),10,64) 
    if err != nil {
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse user id for delete"})
        return
    }
    err = models.Delete(id)
    if err != nil{
        context.JSON(http.StatusInternalServerError, gin.H{"message": "COuldnt delete user"})
        return
    }
}

func updateUser(context *gin.Context){


}

func getUser(context *gin.Context){
    id, err := strconv.ParseInt(context.Param("id"),10,64)
    if err != nil{
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse user id for get"})
        return
    }
    user, err := models.GetUserbyID(id)
    if err != nil {
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch user"})
    }
    context.JSON(http.StatusOK, user)


}