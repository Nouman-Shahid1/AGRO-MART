package db

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3" // Import SQLite driver
)

var DB *sql.DB

// InitDB initializes the database connection
func InitDB() {
	var err error
	DB, err = sql.Open("sqlite3", "./api.db") // Assign to the global DB
	if err != nil {
		log.Fatal("Could not connect to database:", err)
	}
	_, err = DB.Exec("PRAGMA foreign_keys = ON;")
	if err != nil {
		log.Fatal("Could not enable foreign key support:", err)
	}
	
	err = DB.Ping()
	if err != nil {
		log.Fatal("Could not establish a connection to the database:", err)
	}
	DB.SetMaxOpenConns(10)
	DB.SetMaxIdleConns(5)
}

// CreateTable creates necessary tables
func CreateTable() {
	createUsersTable := `
	CREATE TABLE IF NOT EXISTS users(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL,
		username TEXT NOT NULL,
		role TEXT NOT NULL DEFAULT 'buyer'
	)
	`
	_, err := DB.Exec(createUsersTable)
	if err != nil {
		log.Fatal("Could not create users table:", err)
	}

	createSellerDescrptionTable := `
	CREATE TABLE IF NOT EXISTS seller_description(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		about TEXT NOT NULL,
		product_type TEXT NOT NULL,
		user_id INTEGER NOT NULL UNIQUE,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)
	`
	_, err = DB.Exec(createSellerDescrptionTable)
    if err != nil {
        log.Fatal("Could not create seller_description table:", err)
    }

	createProductsTable := `
CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    imagepath TEXT NOT NULL,
	user_id INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
`
_, err = DB.Exec(createProductsTable)
if err != nil {
    log.Fatal("Could not create products table:", err)
}


}
