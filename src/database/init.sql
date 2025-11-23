-- Инициализация базы данных PostgreSQL
-- Здесь будут SQL-команды для создания таблиц и начальных данных

-- Пример создания базы данных (выполните от имени суперпользователя):
-- CREATE DATABASE your_database;
-- \c your_database;

-- Пример создания таблицы:
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Создание индексов:
-- CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Вставка начальных данных:
-- INSERT INTO users (email) VALUES ('admin@example.com') ON CONFLICT (email) DO NOTHING;

