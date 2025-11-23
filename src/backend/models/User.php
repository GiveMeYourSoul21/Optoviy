<?php
/**
 * Пример модели для работы с пользователями
 */

require_once __DIR__ . '/Database.php';

class User {
    private $db;
    
    public function __construct() {
        $this->db = Database::getInstance();
    }
    
    /**
     * Получить пользователя по ID
     */
    public function getById($id) {
        $sql = "SELECT * FROM users WHERE id = :id";
        return $this->db->fetchOne($sql, ['id' => $id]);
    }
    
    /**
     * Получить пользователя по email
     */
    public function getByEmail($email) {
        $sql = "SELECT * FROM users WHERE email = :email";
        return $this->db->fetchOne($sql, ['email' => $email]);
    }
    
    /**
     * Создать нового пользователя
     */
    public function create($email, $data = []) {
        $sql = "INSERT INTO users (email, created_at) VALUES (:email, NOW()) RETURNING id";
        $stmt = $this->db->query($sql, ['email' => $email]);
        $result = $stmt->fetch();
        return $result['id'] ?? null;
    }
    
    /**
     * Получить всех пользователей
     */
    public function getAll() {
        $sql = "SELECT * FROM users ORDER BY created_at DESC";
        return $this->db->fetchAll($sql);
    }
    
    /**
     * Обновить пользователя
     */
    public function update($id, $data) {
        $fields = [];
        $params = ['id' => $id];
        
        foreach ($data as $key => $value) {
            $fields[] = "$key = :$key";
            $params[$key] = $value;
        }
        
        if (empty($fields)) {
            return false;
        }
        
        $sql = "UPDATE users SET " . implode(', ', $fields) . " WHERE id = :id";
        return $this->db->execute($sql, $params);
    }
    
    /**
     * Удалить пользователя
     */
    public function delete($id) {
        $sql = "DELETE FROM users WHERE id = :id";
        return $this->db->execute($sql, ['id' => $id]);
    }
}

