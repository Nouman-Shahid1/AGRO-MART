package utils

import (
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const secretKey = "supersecret"
func GenerateToken(userName string, userID int64, role string) (string, error){
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username":userName,
		"userId":userID,
		"role": role,
		"exp": time.Now().Add(time.Hour * 2).Unix(),
	})
	return token.SignedString([]byte(secretKey))
}

func VerifyToken(token string) (int64, string, error){
	parsed, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error){
		_, ok := token.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, errors.New("unexpected signing method")
		}
		return []byte(secretKey), nil
	})
	if err != nil{
		return 0, "", errors.New("couldnt parse token")
	}
	tokenisValid := parsed.Valid
	if !tokenisValid{
		return 0, "", errors.New("INVALID TOKEN")
	}
	claims, ok := parsed.Claims.(jwt.MapClaims)
	if !ok {
		return 0, "", errors.New("INVALID TOKEN CLAIMS")
	}

	userId := int64(claims["userId"].(float64))
	role := claims["role"].(string)

	return userId, role,  nil
}