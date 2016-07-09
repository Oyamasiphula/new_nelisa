-- Table structure for table `Categories_td`
--

CREATE TABLE IF NOT EXISTS `Categories_td` (
  `Category_id` int(11) NOT NULL AUTO_INCREMENT,
  `Category_name` text NOT NULL,
  PRIMARY KEY (`Category_id`)
);

--
-- Dumping data for table `Categories_td`
--

INSERT INTO `Categories_td` (`Category_id`, `Category_name`) VALUES
(1, 'Short_Life_Groceries'),
(2, 'Tinned_Food'),
(3, 'Beverages'),
(4, 'Long_Life_Groceries'),
(5, 'Toiletries'),
(6, 'Fruit'),
(7, 'Novelty_Goods'),
(8, 'Luxuries');

-- --------------------------------------------------------