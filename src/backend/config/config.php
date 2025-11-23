<?php
/**
 * Конфигурация приложения
 */

// Загрузка переменных окружения
if (file_exists(__DIR__ . '/../../.env')) {
    $env = parse_ini_file(__DIR__ . '/../../.env');
    foreach ($env as $key => $value) {
        $_ENV[$key] = $value;
    }
}

// Настройки базы данных PostgreSQL
define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
define('DB_PORT', $_ENV['DB_PORT'] ?? 5432);
define('DB_NAME', $_ENV['DB_NAME'] ?? 'your_database');
define('DB_USER', $_ENV['DB_USER'] ?? 'postgres');
define('DB_PASSWORD', $_ENV['DB_PASSWORD'] ?? '');
define('DB_CHARSET', $_ENV['DB_CHARSET'] ?? 'utf8');

// Настройки сервера
define('FRONTEND_PORT', $_ENV['FRONTEND_PORT'] ?? 3000);
define('BACKEND_PORT', $_ENV['BACKEND_PORT'] ?? 3002);

// Режим работы
define('ENVIRONMENT', $_ENV['ENVIRONMENT'] ?? 'development');
// Конвертируем строку "true"/"false" в булево значение
$debug = $_ENV['DEBUG'] ?? 'false';
define('DEBUG', filter_var($debug, FILTER_VALIDATE_BOOLEAN));

