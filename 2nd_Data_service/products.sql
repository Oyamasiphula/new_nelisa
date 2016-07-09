--
-- Table structure for table `Products_td`
--

CREATE TABLE IF NOT EXISTS `Products_td` (
  `Product_id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_name` text NOT NULL,
  `Category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `Category_id` (`Category_id`)
);

--
-- Dumping data for table `Products_td`
--

INSERT INTO `Products_td` (`Product_id`, `Product_name`, `Category_id`) VALUES
(1, 'Milk 1l', 1),
(2, 'Imasi', 1),
(3, 'Bread', 1),
(4, 'Chakalaka Can', 2),
(5, 'Gold Dish Vegetable Curry Can', 2),
(6, 'Fanta 500ml', 3),
(7, 'Coke 500ml', 3),
(8, 'Cream Soda 500ml', 3),
(9, 'Iwisa Pap 5kg', 4),
(10, 'Top Class Soy Mince', 4),
(11, 'Shampoo 1 litre', 5),
(12, 'Soap Bar', 5),
(13, 'Bananas - loose', 6),
(14, 'Apples - loose', 6),
(15, 'Mixed Sweets 5s', 8),
(16, 'Heart Chocolates', 8),
(17, 'Rose (plastic)', 7),
(18, 'Valentine Cards', 7);

-- --------------------------------------------------------
