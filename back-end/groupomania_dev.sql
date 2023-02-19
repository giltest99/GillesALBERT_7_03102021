-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : Dim 19 fév. 2023 à 20:12
-- Version du serveur :  8.0.32-0ubuntu0.20.04.2
-- Version de PHP : 7.4.3-4ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania_dev`
--

-- --------------------------------------------------------

--
-- Structure de la table `Likes`
--

CREATE TABLE `Likes` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Likes`
--

INSERT INTO `Likes` (`id`, `user_id`, `post_id`, `createdAt`, `updatedAt`) VALUES
(493, 39, 151, '2023-02-19 16:38:55', '2023-02-19 16:38:55'),
(494, 41, 160, '2023-02-19 17:03:00', '2023-02-19 17:03:00'),
(495, 41, 158, '2023-02-19 17:03:05', '2023-02-19 17:03:05'),
(496, 41, 157, '2023-02-19 17:03:10', '2023-02-19 17:03:10'),
(497, 41, 155, '2023-02-19 17:03:14', '2023-02-19 17:03:14'),
(498, 41, 153, '2023-02-19 17:03:23', '2023-02-19 17:03:23'),
(499, 41, 151, '2023-02-19 17:03:26', '2023-02-19 17:03:26'),
(500, 41, 150, '2023-02-19 17:03:28', '2023-02-19 17:03:28'),
(501, 38, 163, '2023-02-19 17:03:58', '2023-02-19 17:03:58'),
(502, 38, 161, '2023-02-19 17:04:02', '2023-02-19 17:04:02'),
(503, 38, 160, '2023-02-19 17:04:04', '2023-02-19 17:04:04'),
(504, 38, 158, '2023-02-19 17:04:09', '2023-02-19 17:04:09'),
(506, 38, 155, '2023-02-19 17:04:20', '2023-02-19 17:04:20'),
(507, 38, 151, '2023-02-19 17:04:25', '2023-02-19 17:04:25'),
(508, 38, 154, '2023-02-19 17:04:34', '2023-02-19 17:04:34'),
(509, 39, 163, '2023-02-19 17:05:07', '2023-02-19 17:05:07'),
(510, 39, 161, '2023-02-19 17:05:12', '2023-02-19 17:05:12'),
(511, 39, 160, '2023-02-19 17:05:14', '2023-02-19 17:05:14'),
(512, 39, 159, '2023-02-19 17:05:17', '2023-02-19 17:05:17'),
(513, 39, 158, '2023-02-19 17:05:20', '2023-02-19 17:05:20'),
(514, 39, 157, '2023-02-19 17:05:25', '2023-02-19 17:05:25'),
(515, 39, 155, '2023-02-19 17:05:27', '2023-02-19 17:05:27'),
(516, 40, 163, '2023-02-19 17:05:59', '2023-02-19 17:05:59'),
(517, 40, 162, '2023-02-19 17:06:08', '2023-02-19 17:06:08'),
(518, 40, 160, '2023-02-19 17:06:12', '2023-02-19 17:06:12'),
(519, 40, 158, '2023-02-19 17:06:17', '2023-02-19 17:06:17'),
(520, 40, 157, '2023-02-19 17:06:19', '2023-02-19 17:06:19'),
(522, 40, 154, '2023-02-19 17:06:29', '2023-02-19 17:06:29'),
(523, 40, 151, '2023-02-19 17:06:32', '2023-02-19 17:06:32'),
(524, 40, 150, '2023-02-19 17:06:35', '2023-02-19 17:06:35'),
(525, 42, 163, '2023-02-19 17:07:01', '2023-02-19 17:07:01'),
(526, 42, 162, '2023-02-19 17:07:04', '2023-02-19 17:07:04'),
(527, 42, 161, '2023-02-19 17:07:08', '2023-02-19 17:07:08'),
(528, 42, 158, '2023-02-19 17:07:15', '2023-02-19 17:07:15'),
(529, 42, 155, '2023-02-19 17:07:21', '2023-02-19 17:07:21'),
(530, 42, 153, '2023-02-19 17:07:27', '2023-02-19 17:07:27'),
(531, 42, 151, '2023-02-19 17:07:29', '2023-02-19 17:07:29'),
(532, 42, 150, '2023-02-19 17:07:31', '2023-02-19 17:07:31'),
(533, 41, 163, '2023-02-19 17:08:36', '2023-02-19 17:08:36'),
(534, 41, 162, '2023-02-19 17:08:40', '2023-02-19 17:08:40'),
(535, 41, 161, '2023-02-19 17:08:42', '2023-02-19 17:08:42');

-- --------------------------------------------------------

--
-- Structure de la table `Posts`
--

CREATE TABLE `Posts` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Posts`
--

INSERT INTO `Posts` (`id`, `user_id`, `title`, `content`, `attachment`, `createdAt`, `updatedAt`) VALUES
(150, 38, 'Le port de Brest', 'Le port de Brest est un port maritime français de commerce, de plaisance, de passagers (à destination de la presqu’île de Crozon et des îles de l\'Iroise) et de pêche sur la Manche et l\'Atlantique. Il est également un port industriel grâce notamment à la réparation navale, et le principal port militaire français de la façade atlantique.\r\n\r\nSitué à Brest au sud de la ville dans le département du Finistère (29), il profite d\'une situation géographique lui permettant de devenir un des plus grands ports français. Propriété de la Région Bretagne, le port de Brest est exploité par une société portuaire dont la région est l\'actionnaire majoritaire. ', 'http://localhost:3000/images/port-brest.webp_1676823553961.undefined', '2023-02-16 16:19:13', '2023-02-19 16:19:13'),
(151, 38, 'Couché de soleil sur un port breton', 'Hello !\r\nun souvenir de mes vacances en Bretagne.\r\nUn couché de soleil après une journée en bateau sur la rade.\r\nA +', 'http://localhost:3000/images/port-breton.webp_1676823728970.undefined', '2023-02-17 16:22:08', '2023-02-19 16:22:08'),
(153, 38, 'Le pont de l\'Iroise', 'Le pont de l’Iroise enjambe l’Élorn entre Le Relecq-Kerhuon et Plougastel-Daoulas sur la RN165 qui relie Brest à Quimper dans le Finistère. Parmi les ponts à haubans, il possède la troisième plus grande portée principale de France, derrière le pont de Normandie et le pont de Saint-Nazaire et avant le Viaduc de Millau. À la suite d’accidents survenus, dus à une vitesse excessive sur le nouveau pont et en raison du nombre de personnes l\'empruntant pour aller travailler à Brest, un radar a été placé sur l\'ouvrage, en direction de Brest, la vitesse étant limitée sur ce tronçon à 90 km/h. \r\n', 'http://localhost:3000/images/pont_iroise.webp_1676823887759.undefined', '2023-02-19 16:24:47', '2023-02-19 16:24:47'),
(154, 39, 'C\'est lundi !', 'Hello !\r\nEncore un lundi.\r\nBon courage pour la semaine !', 'http://localhost:3000/images/bon-lundi-4.gif_1676824148804.gif', '2023-02-13 16:29:08', '2023-02-19 16:29:08'),
(155, 39, 'Semaine chargée', 'Salut tout le monde,\r\nEncore une semaine chargée !\r\nMais c\'est pas grave !\r\nAllez, courage !', 'http://localhost:3000/images/kermit-jump.webp_1676824445130.undefined', '2023-02-13 16:34:05', '2023-02-19 16:34:05'),
(157, 39, 'Athlète de haut niveau !', 'Moi en vacances !\r\nAttention les yeux !', 'http://localhost:3000/images/dog-holidays.gif_1676824719567.gif', '2023-02-14 16:38:39', '2023-02-19 16:38:39'),
(158, 39, 'Pierre, c\'est pour toi !', 'Hello Pierre,\r\nsi j\'étais dev comme toi, je n\'hésiterais pas un instant !\r\nMoi, j\'ai choisi mon camp !\r\nA +', 'http://localhost:3000/images/dev-week-end.jpg_1676824921549.jpg', '2023-02-16 16:42:01', '2023-02-19 16:42:01'),
(159, 40, 'Un air de vacances', 'Hello Jacques !\r\nLes vacances approchent, donc ça, c\'est cadeau !\r\nA+', 'http://localhost:3000/images/cat-holidays.jpg_1676825133910.jpg', '2023-02-15 16:45:33', '2023-02-19 16:45:33'),
(160, 40, 'Week-end tranquille ', 'Hello !\r\nle week-end dernier a été calme et relax.\r\nDe quoi attaquer la semaine en pleine forme !\r\nBonne semaine à tous.', 'http://localhost:3000/images/cat-glasses.jpeg_1676825249165.jpg', '2023-02-13 16:47:29', '2023-02-19 16:47:29'),
(161, 41, 'Jurassic dev', 'Hello !\r\nles projets sont toujours pleins de promesses (au début...) !\r\nAttention aux surprises, sinon retour au jurassique !\r\nA+\r\n', 'http://localhost:3000/images/dev-budget.jpg_1676825700380.jpg', '2023-02-14 16:55:00', '2023-02-19 16:55:00'),
(162, 41, 'Hiéroglyphes...', 'Salut les devs,\r\nquand j\'ai besoin d\'une regex, la solution si Google a du mal !\r\nVanessa, merci d\'avance de ton aide !\r\nA+', 'http://localhost:3000/images/dev-regex.webp_1676825954873.undefined', '2023-02-14 16:59:14', '2023-02-19 16:59:14'),
(163, 41, 'Being a dev !', 'Salut à tous !\r\nC\'est quoi le métier de dev ?\r\nTout le monde a en fait tout faux !\r\nMême peut-être moi...\r\nA+', 'http://localhost:3000/images/what-dev-is.jpeg_1676826146839.jpg', '2023-02-19 17:02:26', '2023-02-19 17:02:26');

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220821115902-create-user.js'),
('20220821120008-create-post.js'),
('20220821120030-create-like.js');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `biography` text,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `email`, `avatar`, `biography`, `is_admin`, `createdAt`, `updatedAt`) VALUES
(38, 'Hervé LE GAREC', '$2b$10$MFcInr2ilmhMpQz/FzvyWeUTPAKp2StLW.UI8DLQ1/ZimaAWKvbBm', 'herve.legarec@groupomania.com', 'http://localhost:3000/images/default_avatar.jpg', 'Quelques mots...', 0, '2023-02-19 16:11:51', '2023-02-19 16:11:51'),
(39, 'Jacques DUPONT', '$2b$10$pvvYQPBL64SjDPdst356TOGIAFWBBjFPj/Vl4Hv.lY1WT/qmOEQOi', 'jacques.dupont@groupomania.com', 'http://localhost:3000/images/default_avatar.jpg', 'Quelques mots...', 0, '2023-02-19 16:12:29', '2023-02-19 16:12:29'),
(40, 'Vanessa RIGAUD', '$2b$10$y/Tus5a3cdnCnRwc58vV.eWZF/jc5yo5Z1AGJ5631TJaamshM3VzK', 'vanessa.rigaud@groupomania.com', 'http://localhost:3000/images/default_avatar.jpg', 'Quelques mots...', 0, '2023-02-19 16:13:00', '2023-02-19 16:13:00'),
(41, 'Pierre SAUNIER', '$2b$10$PgQSqqY8OBo14KicAfHNUu.cHbYCNnEIMRWpsanPiBzAFH8ztastW', 'pierre.saunier@groupomania.com', 'http://localhost:3000/images/default_avatar.jpg', 'Quelques mots...', 0, '2023-02-19 16:14:40', '2023-02-19 16:14:40'),
(42, 'Admin Groupomania', '$2b$10$3KaNx3mmJSX94KxYf9got..hQS8eCZgeFdO2R30u5/RoeutQXu6Ci', 'admin.group@groupomania.com', 'http://localhost:3000/images/default_avatar.jpg', 'Quelques mots...', 1, '2023-02-19 16:15:20', '2023-02-19 16:15:20');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Index pour la table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Likes`
--
ALTER TABLE `Likes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=536;

--
-- AUTO_INCREMENT pour la table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD CONSTRAINT `Likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Likes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
