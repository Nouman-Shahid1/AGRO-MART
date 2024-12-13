package models

import (
	"log"

	"fyp.com/m/db"
)

type ProductCategory struct {
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	ImagePath   string `json:"imagepath"`
}

func (u *ProductCategory) SaveCategory() error {
	query := "INSERT INTO productscategories(name, description, imagepath) VALUES(?,?,?)"
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		log.Printf("Error preparing while saving product category query: %v\n", err)
	}

	defer stmt.Close()
	result, err := stmt.Exec(u.Name, u.Description, u.ImagePath)

	if err != nil {
		log.Printf("Error executing save product query: %v\n", err)
	}
	id, err := result.LastInsertId()
	u.ID = id
	return err
}

func GetAllProductsCategory() ([]ProductCategory, error) {
	query := "SELECT * FROM productscategories"
	rows, err := db.DB.Query(query)
	if err != nil {
		log.Printf("Error querying database: %v\n", err)
	}
	defer rows.Close()
	var productscategories []ProductCategory
	for rows.Next() {
		var productcategory ProductCategory
		err := rows.Scan(&productcategory.ID, &productcategory.Name, &productcategory.Description, &productcategory.ImagePath)
		if err != nil {
			log.Printf("Error scanning rows: %v\n", err)
			return nil, err
		}
		productscategories = append(productscategories, productcategory)
	}
	return productscategories, nil
}


func (productcategory ProductCategory) UpdateProductCategory() error {
	query := `UPDATE productscategories SET `
	params := []interface{}{}

	if productcategory.Name != "" {
		query += "name = ?, "
		params = append(params, productcategory.Name)
	}
	if productcategory.Description != "" {
		query += "description = ?, "
		params = append(params, productcategory.Description)
	}
	if productcategory.ImagePath != "" {
		query += "imagepath = ?, "
		params = append(params, productcategory.ImagePath)
	}


	query = query[:len(query)-2]
	query += " WHERE id = ?"
	params = append(params, productcategory.ID)

	stmt, err := db.DB.Prepare(query)
	if err != nil {
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(params...)
	return err
}

func (productcategory ProductCategory) DeleteProductCategory() error{
	query := "DELETE FROM productscategories WHERE id = ?"
	stmt,err := db.DB.Prepare(query)

	if err != nil {
		return err
	}
	defer stmt.Close()
	_, err = stmt.Exec(productcategory.ID)
	return err
}
