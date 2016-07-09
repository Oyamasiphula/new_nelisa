--
-- Table structure for table `Suppliers_td`
--

CREATE TABLE IF NOT EXISTS `Suppliers_td` (
  `Supplier_id` int(11) NOT NULL AUTO_INCREMENT,
  `Supplier_name` text NOT NULL,
  PRIMARY KEY (`Supplier_id`)
);

--
-- Dumping data for table `Suppliers_td`
--

INSERT INTO `Suppliers_td` (`Supplier_id`, `Supplier_name`) VALUES
(1, 'Makro'),
(2, 'Epping Market'),
(3, 'HomeMade'),
(4, 'Joe Spaza Shop'),
(5, 'ChinaTown');

-- -------------------------------------------------------