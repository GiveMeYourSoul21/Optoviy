<?php
/**
 * Точка входа для сервера
 * Backend API
 */

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/models/Database.php';
require_once __DIR__ . '/core/router.php';
require_once __DIR__ . '/core/session.php';

// Инициализация приложения
header('Content-Type: application/json; charset=utf-8');

// Обработка запросов
$router = new Router();
$router->handleRequest();

