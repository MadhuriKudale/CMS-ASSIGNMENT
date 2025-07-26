-- 1. Registration Master Table
CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100),
  mobile VARCHAR(20),
  email VARCHAR(100),
  child_name VARCHAR(100),
  grade VARCHAR(50),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Parent & Student Table
CREATE TABLE parent_student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  registration_id INT,
  parent_name VARCHAR(100),
  student_name VARCHAR(100),
  relation VARCHAR(50),
  FOREIGN KEY (registration_id) REFERENCES registrations(id)
);

-- 3. Payment Transaction Table
CREATE TABLE payment_transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  registration_id INT,
  amount DECIMAL(10,2) DEFAULT 0.00,
  status VARCHAR(20) DEFAULT 'PENDING',
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (registration_id) REFERENCES registrations(id)
);
