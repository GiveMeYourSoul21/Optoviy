<?php
/**
 * Тестовый скрипт для проверки подключения к PostgreSQL
 * Использование: http://localhost:3002/api/test-db.php
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../models/Database.php';

header('Content-Type: application/json; charset=utf-8');

try {
    // Получаем подключение
    $db = Database::getInstance();
    
    // Тестовый запрос
    $result = $db->fetchOne("SELECT version() as version, current_database() as database, current_user as user");
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Подключение к PostgreSQL успешно!',
        'database_info' => $result
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Ошибка подключения к базе данных',
        'error' => DEBUG ? $e->getMessage() : 'Проверьте настройки подключения'
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}

