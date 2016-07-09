--
-- Table structure for table `Stock_td`
--

CREATE TABLE IF NOT EXISTS `Stock_td` (
  `Purchases_id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_id` int(11) NOT NULL,
  `Supplier_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `quantity` varchar(4) NOT NULL,
  `cost` decimal(19,2) NOT NULL,
  `totalCost` decimal(19,2) NOT NULL,
  PRIMARY KEY (`Purchases_id`),
  UNIQUE KEY `Purchases_id` (`Purchases_id`)
);
--
-- Dumping data for table `Stock_td`
--

INSERT INTO `Stock_td` (`Purchases_id`, `Product_id`, `Supplier_id`, `date`, `quantity`, `cost`, `totalCost`) VALUES
(1, 4, 1, '2015-01-23', '3', 7.00, 21.00),
(2, 7, 1, '2015-01-23', '3', 3.50, 10.50),
(3, 8, 1, '2015-01-23', '4', 4.50, 18.00),
(4, 6, 1, '2015-01-23', '2', 4.50, 9.00),
(5, 5, 1, '2015-01-23', '2', 5.00, 10.00),
(6, 2, 1, '2015-01-23', '1', 17.00, 17.00),
(7, 9, 1, '2015-01-23', '3', 20.00, 60.00),
(8, 1, 1, '2015-01-23', '4', 7.00, 28.00),
(9, 10, 1, '2015-01-23', '5', 8.00, 40.00),
(10, 13, 2, '2015-01-28', '4', 1.00, 4.00),
(11, 14, 2, '2015-01-28', '10', 1.50, 15.00),
(12, 15, 2, '2015-01-28', '60', 3.00, 180.00),
(13, 11, 3, '2015-01-28', '1', 20.00, 20.00),
(14, 12, 3, '2015-01-28', '3', 3.00, 9.00),
(15, 3, 1, '2015-01-28', '30', 9.00, 270.00),
(16, 4, 1, '2015-01-28', '15', 7.00, 105.00),
(17, 7, 1, '2015-01-28', '36', 3.50, 126.00),
(18, 8, 1, '2015-01-28', '24', 4.50, 108.00),
(19, 6, 1, '2015-01-28', '24', 4.50, 108.00),
(20, 5, 1, '2015-01-28', '15', 5.00, 75.00),
(21, 2, 1, '2015-01-28', '15', 17.00, 255.00),
(22, 9, 1, '2015-01-28', '15', 20.00, 300.00),
(23, 1, 1, '2015-01-28', '25', 7.00, 175.00),
(24, 10, 1, '2015-01-28', '10', 8.00, 80.00),
(25, 11, 3, '2015-02-02', '1', 20.00, 20.00),
(26, 12, 3, '2015-02-02', '3', 3.00, 9.00),
(27, 13, 2, '2015-02-03', '12', 1.00, 12.00),
(28, 14, 2, '2015-02-03', '100', 1.50, 150.00),
(29, 15, 2, '2015-02-03', '240', 3.00, 720.00),
(30, 11, 3, '2015-02-04', '2', 20.00, 40.00),
(31, 12, 3, '2015-02-04', '5', 3.00, 15.00),
(32, 3, 4, '2015-02-04', '4', 11.00, 44.00),
(33, 2, 4, '2015-02-04', '4', 24.00, 96.00),
(34, 13, 2, '2015-02-06', '8', 1.00, 8.00),
(35, 14, 2, '2015-02-06', '100', 1.50, 150.00),
(36, 15, 2, '2015-02-06', '150', 3.00, 450.00),
(37, 12, 3, '2015-02-06', '5', 3.00, 15.00),
(38, 3, 1, '2015-02-06', '30', 9.00, 270.00),
(39, 4, 1, '2015-02-06', '15', 7.00, 105.00),
(40, 7, 1, '2015-02-06', '36', 3.50, 126.00),
(41, 8, 1, '2015-02-06', '18', 4.50, 81.00),
(42, 6, 1, '2015-02-06', '24', 4.50, 108.00),
(43, 5, 1, '2015-02-06', '15', 5.00, 75.00),
(44, 2, 1, '2015-02-06', '25', 17.00, 425.00),
(45, 9, 1, '2015-02-06', '5', 20.00, 100.00),
(46, 1, 1, '2015-02-06', '10', 7.00, 70.00),
(47, 10, 1, '2015-02-06', '10', 8.00, 80.00),
(48, 17, 5, '2015-02-09', '20', 10.00, 200.00),
(49, 1, 4, '2015-02-09', '3', 9.50, 28.50),
(50, 13, 2, '2015-02-10', '4', 1.00, 4.00),
(51, 14, 2, '2015-02-10', '20', 1.50, 30.00),
(52, 15, 2, '2015-02-10', '150', 3.00, 450.00),
(53, 3, 1, '2015-02-10', '10', 9.00, 90.00),
(54, 4, 1, '2015-02-10', '15', 7.00, 105.00),
(55, 7, 1, '2015-02-10', '18', 3.50, 63.00),
(56, 5, 1, '2015-02-10', '5', 5.00, 25.00),
(57, 16, 1, '2015-02-10', '20', 25.00, 500.00),
(58, 2, 1, '2015-02-10', '10', 17.00, 170.00),
(59, 9, 1, '2015-02-10', '5', 20.00, 100.00),
(60, 1, 1, '2015-02-10', '10', 7.00, 70.00),
(61, 10, 1, '2015-02-10', '15', 8.00, 120.00),
(62, 11, 3, '2015-02-11', '2', 20.00, 40.00),
(63, 18, 3, '2015-02-11', '20', 2.00, 40.00),
(64, 1, 4, '2015-02-12', '3', 9.50, 28.50),
(65, 13, 2, '2015-02-13', '4', 1.00, 4.00),
(66, 15, 2, '2015-02-13', '50', 3.00, 150.00),
(67, 11, 3, '2015-02-13', '3', 20.00, 60.00),
(68, 12, 3, '2015-02-13', '5', 3.00, 15.00),
(69, 5, 4, '2015-02-13', '5', 8.50, 42.50),
(70, 3, 1, '2015-02-13', '5', 9.00, 45.00),
(71, 7, 1, '2015-02-13', '12', 3.50, 42.00),
(72, 6, 1, '2015-02-13', '12', 4.50, 54.00),
(73, 2, 1, '2015-02-13', '20', 17.00, 340.00),
(74, 1, 1, '2015-02-13', '15', 7.00, 105.00),
(75, 10, 1, '2015-02-13', '5', 8.00, 40.00),
(76, 11, 3, '2015-02-14', '1', 20.00, 20.00),
(77, 5, 4, '2015-02-14', '2', 8.50, 17.00),
(78, 4, 4, '2015-02-16', '2', 8.50, 17.00),
(79, 8, 4, '2015-02-16', '2', 7.50, 15.00),
(80, 6, 4, '2015-02-16', '1', 6.50, 6.50),
(81, 5, 4, '2015-02-16', '2', 8.50, 17.00),
(82, 9, 4, '2015-02-16', '1', 30.00, 30.00),
(83, 1, 4, '2015-02-16', '6', 9.50, 57.00),
(84, 14, 2, '2015-02-17', '60', 1.50, 90.00),
(85, 15, 2, '2015-02-17', '12', 3.00, 36.00),
(86, 3, 1, '2015-02-17', '15', 9.00, 135.00),
(87, 4, 1, '2015-02-17', '10', 7.00, 70.00),
(88, 7, 1, '2015-02-17', '24', 3.50, 84.00),
(89, 8, 1, '2015-02-17', '12', 4.50, 54.00),
(90, 6, 1, '2015-02-17', '12', 4.50, 54.00),
(91, 5, 1, '2015-02-17', '10', 5.00, 50.00),
(92, 2, 1, '2015-02-17', '15', 17.00, 255.00),
(93, 9, 1, '2015-02-17', '5', 20.00, 100.00),
(94, 1, 1, '2015-02-17', '15', 7.00, 105.00),
(95, 10, 1, '2015-02-17', '5', 8.00, 40.00),
(96, 11, 3, '2015-02-18', '1', 20.00, 20.00),
(97, 12, 3, '2015-02-18', '5', 3.00, 15.00),
(98, 11, 3, '2015-02-19', '2', 20.00, 40.00),
(99, 1, 4, '2015-02-19', '1', 9.50, 9.50),
(100, 13, 2, '2015-02-20', '20', 1.00, 20.00),
(101, 14, 2, '2015-02-20', '90', 1.50, 135.00),
(102, 15, 2, '2015-02-20', '20', 3.00, 60.00),
(103, 11, 3, '2015-02-20', '2', 20.00, 40.00),
(104, 12, 3, '2015-02-20', '3', 3.00, 9.00),
(105, 3, 1, '2015-02-20', '10', 9.00, 90.00),
(106, 2, 1, '2015-02-20', '10', 17.00, 170.00),
(107, 9, 1, '2015-02-20', '5', 20.00, 100.00),
(108, 1, 1, '2015-02-20', '15', 7.00, 105.00),
(109, 10, 1, '2015-02-20', '10', 8.00, 80.00),
(110, 4, 4, '2015-02-23', '3', 9.00, 27.00),
(111, 13, 2, '2015-02-24', '10', 1.00, 10.00),
(112, 14, 2, '2015-02-24', '90', 1.50, 135.00),
(113, 15, 2, '2015-02-24', '8', 3.00, 24.00),
(114, 3, 1, '2015-02-24', '15', 9.00, 135.00),
(115, 4, 1, '2015-02-24', '10', 7.00, 70.00),
(116, 7, 1, '2015-02-24', '18', 3.50, 63.00),
(117, 8, 1, '2015-02-24', '6', 4.50, 27.00),
(118, 6, 1, '2015-02-24', '6', 4.50, 27.00),
(119, 5, 1, '2015-02-24', '10', 5.00, 50.00),
(120, 2, 1, '2015-02-24', '15', 17.00, 255.00),
(121, 1, 1, '2015-02-24', '20', 7.00, 140.00),
(122, 10, 1, '2015-02-24', '15', 8.00, 120.00),
(123, 12, 3, '2015-02-25', '5', 3.00, 15.00),
(124, 11, 3, '2015-02-26', '2', 20.00, 40.00),
(125, 12, 3, '2015-02-26', '5', 3.00, 15.00),
(126, 3, 4, '2015-02-26', '1', 11.00, 11.00),
(127, 6, 4, '2015-02-26', '2', 6.50, 13.00),
(128, 5, 4, '2015-02-26', '1', 8.50, 8.50),
(129, 9, 4, '2015-02-26', '1', 30.00, 30.00),
(130, 13, 2, '2015-02-27', '10', 1.00, 10.00),
(131, 14, 2, '2015-02-27', '60', 1.50, 90.00),
(132, 11, 3, '2015-02-27', '5', 20.00, 100.00),
(133, 12, 3, '2015-02-27', '5', 3.00, 15.00),
(134, 3, 1, '2015-02-27', '20', 9.00, 180.00),
(135, 4, 1, '2015-02-27', '15', 7.00, 105.00),
(136, 7, 1, '2015-02-27', '24', 3.50, 84.00),
(137, 8, 1, '2015-02-27', '12', 4.50, 54.00),
(138, 6, 1, '2015-02-27', '12', 4.50, 54.00),
(139, 5, 1, '2015-02-27', '15', 5.00, 75.00),
(140, 2, 1, '2015-02-27', '15', 17.00, 255.00),
(141, 9, 1, '2015-02-27', '10', 20.00, 200.00),
(142, 1, 1, '2015-02-27', '20', 7.00, 140.00),
(143, 10, 1, '2015-02-27', '15', 8.00, 120.00),
(144, 11, 3, '2015-02-28', '2', 20.00, 40.00),
(145, 12, 3, '2015-02-28', '3', 3.00, 9.00),
(146, 4, 4, '2015-02-28', '3', 8.50, 25.50),
(147, 5, 4, '2015-02-28', '2', 8.50, 17.00),
(148, 10, 4, '2015-02-28', '5', 11.00, 55.00),
(149, 11, 3, '2015-03-01', '2', 20.00, 40.00),
(150, 12, 3, '2015-03-01', '5', 3.00, 15.00),
(151, 4, 4, '2015-03-01', '3', 8.50, 25.50),
(152, 5, 4, '2015-03-01', '2', 8.50, 17.00),
(153, 10, 4, '2015-03-01', '3', 11.00, 33.00);

-- --------------------------------------------------------