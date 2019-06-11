-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2019 at 10:25 PM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE IF NOT EXISTS `Customers` (
  `id` int(6) unsigned NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `age` int(6) DEFAULT NULL,
  `gender` varchar(30) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `dateOfJoining` int(6) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`id`, `firstname`, `lastname`, `age`, `gender`, `location`, `dateOfJoining`) VALUES
(1, 'Ned', 'Stark', 50, 'male', '5 Main St, Boston', 2005),
(2, 'Jaime', 'Lannister', 30, 'male', '48 Main St, Boston', 2000),
(3, 'Daenerys', 'Targaryen', 25, 'female', '36 Dartmouth St, Malden', 2008),
(4, 'Arya', 'Stark', 16, 'female', '183 Pleasant St, Malden', 2010),
(5, 'Sansa', 'Stark', 22, 'female', '13 Pleasant St, Malden', 2011),
(6, 'Jon', 'Snow', 26, 'male', '39 Florence St, Malden', 2007),
(7, 'Cersei', 'Lannister', 30, 'female', '48 Main St, Boston', 2000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customers`
--
ALTER TABLE `Customers`
  MODIFY `id` int(6) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
