<?php
/**
 * Класс для работы с базой данных PostgreSQL
 */

class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        try {
            // Формируем строку подключения для PostgreSQL
            $dsn = sprintf(
                "pgsql:host=%s;port=%s;dbname=%s;options='--client_encoding=%s'",
                DB_HOST,
                DB_PORT,
                DB_NAME,
                DB_CHARSET
            );
            
            // Создаем подключение через PDO
            $this->connection = new PDO(
                $dsn,
                DB_USER,
                DB_PASSWORD,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
            
        } catch (PDOException $e) {
            if (DEBUG) {
                die("Ошибка подключения к базе данных: " . $e->getMessage());
            } else {
                die("Ошибка подключения к базе данных");
            }
        }
    }
    
    /**
     * Получить единственный экземпляр подключения (Singleton)
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Получить объект PDO подключения
     */
    public function getConnection() {
        return $this->connection;
    }
    
    /**
     * Выполнить запрос с параметрами
     */
    public function query($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            if (DEBUG) {
                error_log("Ошибка SQL: " . $e->getMessage() . " | Запрос: " . $sql);
            }
            throw $e;
        }
    }
    
    /**
     * Получить одну строку
     */
    public function fetchOne($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetch();
    }
    
    /**
     * Получить все строки
     */
    public function fetchAll($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll();
    }
    
    /**
     * Выполнить INSERT/UPDATE/DELETE и вернуть количество затронутых строк
     */
    public function execute($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->rowCount();
    }
    
    /**
     * Начать транзакцию
     */
    public function beginTransaction() {
        return $this->connection->beginTransaction();
    }
    
    /**
     * Подтвердить транзакцию
     */
    public function commit() {
        return $this->connection->commit();
    }
    
    /**
     * Откатить транзакцию
     */
    public function rollback() {
        return $this->connection->rollBack();
    }
    
    /**
     * Получить последний вставленный ID
     */
    public function lastInsertId($sequence = null) {
        return $this->connection->lastInsertId($sequence);
    }
    
    /**
     * Закрыть подключение (обычно не требуется, но можно для явного закрытия)
     */
    public function close() {
        $this->connection = null;
    }
}

