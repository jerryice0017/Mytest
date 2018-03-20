-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 19, 2018 at 06:12 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.25-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `website`
--

-- --------------------------------------------------------

--
-- Table structure for table `Online_booking`
--

CREATE TABLE `Online_booking` (
  `Username` varchar(20) NOT NULL,
  `Number_of_guests` int(3) NOT NULL,
  `Date` varchar(50) NOT NULL,
  `Time` varchar(20) NOT NULL,
  `Special_request` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Online_booking`
--

INSERT INTO `Online_booking` (`Username`, `Number_of_guests`, `Date`, `Time`, `Special_request`) VALUES
('nnnnnnnn', 4, '2018-03-29', '12:00 - 13:00', ''),
('nnnnnnnn', 1, '2018-03-23', '19:30 - 20:30', ''),
('nnnnnnnn', 23, '2018-03-24', '21:00 - 22:00', 'gdfg'),
('nnnnnnnn', 12, '2018-03-28', '19:30 - 20:30', ''),
('nnnnnnnn', 2, '2018-03-25', '20:00 - 21:00', 'fdgfgs');

-- --------------------------------------------------------

--
-- Table structure for table `Sign_up`
--

CREATE TABLE `Sign_up` (
  `Username` varchar(20) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Phone` varchar(8) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Sign_up`
--

INSERT INTO `Sign_up` (`Username`, `Password`, `Name`, `Gender`, `Phone`, `Email`) VALUES
('nnnnnnnn', '22222222', 'OKOK', 'Male', '11111111', 'sdf@fd.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Online_booking`
--
ALTER TABLE `Online_booking`
  ADD KEY `Username` (`Username`);

--
-- Indexes for table `Sign_up`
--
ALTER TABLE `Sign_up`
  ADD PRIMARY KEY (`Username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Online_booking`
--
ALTER TABLE `Online_booking`
  ADD CONSTRAINT `Online_booking_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `Sign_up` (`Username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
