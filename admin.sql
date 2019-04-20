-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 20 avr. 2019 à 21:45
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `admin`
--

-- --------------------------------------------------------

--
-- Structure de la table `application`
--

DROP TABLE IF EXISTS `application`;
CREATE TABLE IF NOT EXISTS `application` (
  `app_id` bigint(20) NOT NULL,
  `app_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`app_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `application`
--

INSERT INTO `application` (`app_id`, `app_name`) VALUES
(58, 'app77'),
(56, 'CDRBJ'),
(70, 'cc'),
(69, 'app1');

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `dep_id` bigint(20) NOT NULL,
  `dep_name` varchar(255) DEFAULT NULL,
  `direct_dep` varchar(255) DEFAULT NULL,
  `code_dir` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`dep_id`),
  KEY `FKbgek58ns2oswbu56spxw9sg57` (`code_dir`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`dep_id`, `dep_name`, `direct_dep`, `code_dir`) VALUES
(1, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 2),
(3, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 4),
(5, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 6),
(7, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 8),
(9, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 10),
(11, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 12),
(22, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 23),
(24, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 25),
(35, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 36),
(37, 'Activités Marchés de Capitaux22', 'Mohamed HAMMADI', NULL),
(51, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 52),
(53, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 54);

-- --------------------------------------------------------

--
-- Structure de la table `direction`
--

DROP TABLE IF EXISTS `direction`;
CREATE TABLE IF NOT EXISTS `direction` (
  `direct_id` bigint(20) NOT NULL,
  `direct_name` varchar(255) DEFAULT NULL,
  `director_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`direct_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `direction`
--

INSERT INTO `direction` (`direct_id`, `direct_name`, `director_name`) VALUES
(2, 'Risque &Support22', 'Othmane MAIMOUN'),
(4, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(6, 'Risque &Support', 'Othmane MAIMOUN'),
(8, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(10, 'Risque &Support', 'Othmane MAIMOUN'),
(12, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(23, 'Risque &Support', 'Othmane MAIMOUN'),
(25, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(36, 'Risque &Support', 'Othmane MAIMOUN'),
(38, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(52, 'Risque &Support', 'Othmane MAIMOUN'),
(54, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(59),
(59),
(59),
(59);

-- --------------------------------------------------------

--
-- Structure de la table `initiateur`
--

DROP TABLE IF EXISTS `initiateur`;
CREATE TABLE IF NOT EXISTS `initiateur` (
  `ini_id` bigint(20) NOT NULL,
  `ini_email` varchar(40) NOT NULL,
  `ini_name` varchar(20) NOT NULL,
  `ini_num_tel` varchar(255) DEFAULT NULL,
  `ini_prenom` varchar(20) NOT NULL,
  PRIMARY KEY (`ini_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `initiateur`
--

INSERT INTO `initiateur` (`ini_id`, `ini_email`, `ini_name`, `ini_num_tel`, `ini_prenom`) VALUES
(17, 'dahbi@gamil.com', 'Dahbi', '0614236958', 'cccc'),
(18, 'markho@gamil.com', 'Markho', '0631594274', 'bbcc'),
(19, 'maher@gamil.com', 'Maher', '0658947514', 'acca'),
(20, 'ayachi@gamil.com', 'Ayachik', '0625694713', 'qqkc'),
(21, 'hgtf@gamil.com', 'hfgtn', '0614236925', 'gtrn'),
(30, 'dahbi@gamil.com', 'Dahbi', '0614236958', 'cccc'),
(31, 'markho@gamil.com', 'Markho', '0631594274', 'bbcc'),
(32, 'maher@gamil.com', 'Maher', '0658947514', 'acca'),
(33, 'ayachi@gamil.com', 'Ayachik', '0625694713', 'qqkc'),
(34, 'hgtf@gamil.com', 'hfgtn', '0614236925', 'gtrn'),
(46, 'dahbi@gamil.com', 'Dahbi', '0614236958', 'cccc'),
(47, 'markho@gamil.com', 'Markho', '0631594274', 'bbcc'),
(48, 'maher@gamil.com', 'Maher', '0658947514', 'acca'),
(49, 'ayachi@gamil.com', 'Ayachik', '0625694713', 'qqkc'),
(50, 'hgtf@gamil.com', 'hfgtn', '0614236925', 'gtrn');

-- --------------------------------------------------------

--
-- Structure de la table `responsablemco`
--

DROP TABLE IF EXISTS `responsablemco`;
CREATE TABLE IF NOT EXISTS `responsablemco` (
  `res_id` bigint(20) NOT NULL,
  `res_email` varchar(255) DEFAULT NULL,
  `res_name` varchar(255) DEFAULT NULL,
  `res_num_tel` varchar(255) DEFAULT NULL,
  `res_prenom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`res_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `responsablemco`
--

INSERT INTO `responsablemco` (`res_id`, `res_email`, `res_name`, `res_num_tel`, `res_prenom`) VALUES
(13, 'driouech@gamil.com', 'Driouech', '0652847956', 'Asmaa'),
(14, 'elmakhlouf@gamil.com', 'EL MAKHLOUF', '0648691235', 'Ilham'),
(15, 'Lafsihi@gamil.com', 'Lafsihi', '0625696812', 'Said'),
(16, 'laaroussi@gamil.com', 'Laaroussi', '0633212516', 'Said'),
(26, 'driouech@gamil.com', 'Driouech', '0652847956', 'Asmaa'),
(27, 'elmakhlouf@gamil.com', 'EL MAKHLOUF', '0648691235', 'Ilham'),
(28, 'Lafsihi@gamil.com', 'Lafsihi', '0625696812', 'Said'),
(29, 'laaroussi@gamil.com', 'Laaroussi', '0633212516', 'Said'),
(42, 'driouech@gamil.com', 'Driouech', '0652847956', 'Asmaa'),
(43, 'elmakhlouf@gamil.com', 'EL MAKHLOUF', '0648691235', 'Ilham'),
(44, 'Lafsihi@gamil.com', 'Lafsihi', '0625696812', 'Said'),
(45, 'laaroussi@gamil.com', 'Laaroussi', '0633212516', 'Said');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `role` varchar(255) NOT NULL,
  KEY `role` (`role`),
  KEY `role_2` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`role`) VALUES
('ADMIN'),
('INITIATEUR'),
('ResposableMCO');

-- --------------------------------------------------------

--
-- Structure de la table `sprogramme`
--

DROP TABLE IF EXISTS `sprogramme`;
CREATE TABLE IF NOT EXISTS `sprogramme` (
  `prog_id` bigint(20) NOT NULL,
  `descriptif` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `code_app` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`prog_id`),
  KEY `FKhyeolrcabvvdl15ederxcod8f` (`code_app`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sprogramme`
--

INSERT INTO `sprogramme` (`prog_id`, `descriptif`, `libelle`, `code_app`) VALUES
(55, 'hyfrhj', 'DRFF', 56),
(57, 'hhjjdhb', 'LOKJGFFF', 58);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `password`, `username`, `active`) VALUES
(1, '1234', 'admin', 1),
(2, '123', 'ResponsableMCO', 1),
(3, '123456', 'initiateur', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  KEY `username` (`username`,`role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_role`
--

INSERT INTO `user_role` (`username`, `role`) VALUES
('admin', 'ADMIN'),
('admin', 'ADMIN'),
('initiateur', 'INITIATEUR'),
('initiateur', 'INITIATEUR'),
('ResponsableMCO', 'ResponsableMCO'),
('ResponsableMCO', 'ResponsableMCO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
