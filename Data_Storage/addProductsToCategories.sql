ALTER TABLE Products_td ADD CONSTRAINT fk_Category_id FOREIGN KEY (Category_id) REFERENCES Categories_td(id);
