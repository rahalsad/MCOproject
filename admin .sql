-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 24 avr. 2019 à 07:59
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
-- Structure de la table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `dep_id` bigint(20) NOT NULL,
  `dep_name` varchar(255) DEFAULT NULL,
  `direct_dep` varchar(255) DEFAULT NULL,
  `direction_name` varchar(255) DEFAULT NULL,
  `code_dir` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`dep_id`),
  KEY `FKbgek58ns2oswbu56spxw9sg57` (`code_dir`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`dep_id`, `dep_name`, `direct_dep`, `direction_name`, `code_dir`) VALUES
(45, 'Comptabilité, Finance & Pilotage', 'Fatima ASSOURI', 'Risque &Support', 40),
(46, 'Activités support', 'Othmane MAIMOUNI ', 'Risque &Support', 40),
(47, 'Risque & conformité', 'Jaouad  EL JAAFARI', 'Risque &Support', 40),
(48, 'Décisionnel & Reporting', 'Samira BYOUZ', 'Risque &Support', 40),
(49, 'Activités Marchés de Capitaux', 'Mohamed HAMMADI', 'Banque de Financement et d’Investissement', 41),
(50, 'Flux & Trade', 'Abdelaziz MARKHO', 'Banque de Financement et d’Investissement', 41),
(51, 'Activités B2P', 'Abdelghafour MAHER', 'Banque de Détail', 42),
(52, 'Activités BPME', 'Noureddine DAHBI', 'Banque de Détail', 42),
(53, 'Innovation & Multicanal', 'Mustapha CHAROF', 'Banque de Détail', 42),
(54, 'Financement', 'Milouda RADDAOUI', 'Banque de Détail', 42),
(55, 'Bases de Données, Planification é Pilotage des Systèmes', 'El Mostafa SRHIR', 'Production', 43),
(56, 'Administration des Solutions', 'El mehdi HABLA', 'Production', 43),
(57, 'Administration de la Plateforme de la Banque des Marchés', 'Mohamed AZRIDOU', 'Production', 43),
(58, 'Support Utilisateur', 'El Houssaine FARHI', 'Centre de Services', 44);

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
(40, 'Risque &Support', 'Othmane MAIMOUNI'),
(41, 'Banque de Financement et d’Investissement', 'Mustapha ZARAIDI'),
(42, 'Banque de Détail', 'Mohamed EL AYACHI'),
(43, 'Production', 'Jalal RGUIG '),
(44, 'Centre de Services', 'El Mostafa NABLI');

-- --------------------------------------------------------

--
-- Structure de la table `fiche`
--

DROP TABLE IF EXISTS `fiche`;
CREATE TABLE IF NOT EXISTS `fiche` (
  `id` bigint(20) NOT NULL,
  `nom_application` varchar(255) DEFAULT NULL,
  `nom_depart` varchar(255) DEFAULT NULL,
  `nom_direction` varchar(255) DEFAULT NULL,
  `inc_date` date DEFAULT NULL,
  `date_modif` datetime DEFAULT NULL,
  `ini_name` varchar(255) DEFAULT NULL,
  `intitule_maintenance` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `fiche_suivi`
--

DROP TABLE IF EXISTS `fiche_suivi`;
CREATE TABLE IF NOT EXISTS `fiche_suivi` (
  `ref` bigint(20) NOT NULL,
  `charge_consom` bigint(20) DEFAULT NULL,
  `charge_estim` bigint(20) DEFAULT NULL,
  `date_charge` datetime DEFAULT NULL,
  `date_modif` datetime DEFAULT NULL,
  `date_prod` datetime DEFAULT NULL,
  `recep_date` date DEFAULT NULL,
  `respo` varchar(255) DEFAULT NULL,
  `taux_avanc` double DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ref`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
(59),
(59),
(59),
(59),
(59),
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
(2, 'omaimouni@cpm.co.ma', 'MAIMOUNI ', '0000000000', 'Othmane '),
(3, 'fassouri@cpm.co.ma', 'ASSOURI', '0000000000', 'Fatima '),
(4, 'jeljaafari@cpm.co.ma', 'EL JAAFARI', '0000000000', 'Jaouad  '),
(5, 'sbyouz@cpm.co.ma', 'BYOUZ', '0000000000', 'Samira '),
(6, 'mzaraidi@cpm.co.ma', 'ZARAIDI', '0000000000', 'Mustapha'),
(7, 'mhammadi@cpm.co.ma', 'HAMMADI', '0000000000', 'Mohamed '),
(8, 'amarkho@cpm.co.ma', 'MARKHO', '0000000000', 'Abdelaziz '),
(9, 'melayachi@cpm.co.ma', 'EL AYACHI', '0000000000', 'Mohamed'),
(10, 'amaher@cpm.co.ma', 'MAHER', '0000000000', 'Abdelghafour'),
(11, 'ndahbi@cpm.co.ma', 'DAHBI', '0000000000', 'Noureddine '),
(12, 'mcharof@cpm.co.ma', 'CHAROF', '0000000000', 'Mustapha '),
(13, 'mraddaoui@cpm.co.ma', 'RADDAOUI', '0000000000', 'Milouda'),
(14, 'jrguig@cpm.co.ma', 'RGUIG ', '0000000000', 'Jalal'),
(15, 'esrhir@cpm.co.ma', 'SRHIR', '0000000000', 'El Mostafa '),
(16, 'ehabla@cpm.co.ma', 'HABLA', '0000000000', 'El mehdi '),
(17, 'mazridou@cpm.co.ma', 'AZRIDOU', '0000000000', 'Mohamed'),
(18, 'enabli@cpm.co.ma', 'NABLI', '0000000000', 'El Mostafa '),
(19, 'efarhi@cpm.co.ma', 'FARHI', '0000000000', 'El Houssaine'),
(39, 'jeljaafari@cpm.co.ma', 'EL JAAFARI1', '0000000000', 'Jaouad  ');

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
(20, 'slaaroussi@cpm.co.ma', 'LAAROUSSI', '0000000000', 'Said'),
(21, 'Adriouech@cpm.co.ma', 'DRIOUECH', '0000000000', 'Asmaa'),
(24, 'slafsihi@cpm.co.ma', 'LAFSIHI', '0000000000', 'Said'),
(27, 'ielmakhlouf@cpm.co.ma', 'EL MAKHLOUF', '0000000000', 'Ilham');

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
