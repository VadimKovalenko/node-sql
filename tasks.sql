-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 22 2017 г., 15:15
-- Версия сервера: 5.6.34
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `node-sql`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `date` varchar(30) NOT NULL,
  `star` tinyint(4) NOT NULL,
  `creation_date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `text`, `status`, `date`, `star`, `creation_date`) VALUES
(18, 'boom4', 0, '2018-01-19', 1, '1498133271382'),
(20, 'konor', 0, '2017-06-17', 4, '1498133483081'),
(21, 'jason', 0, '2017-08-17', 3, '1498133492975'),
(22, 'pawel', 0, '2017-10-26', 2, '1498133502827'),
(23, 'luck', 0, '2017-10-10', 2, '1498133511483'),
(24, 'slowpock', 0, '2017-08-08', 5, '1498133523251'),
(25, 'bill', 0, '2017-10-20', 5, '1498133536954'),
(26, 'henry', 0, '2017-10-25', 5, '1498133545874'),
(27, 'kamry', 0, '2018-01-12', 4, '1498133558180'),
(28, 'bobo', 0, '2018-01-10', 4, '1498133566279'),
(29, 'linkoln', 0, '2018-01-19', 2, '1498133576530'),
(30, 'jew', 0, '2018-04-13', 5, '1498133592369'),
(31, 'kill the bugs', 0, '2017-06-22', 5, '1498133605281'),
(32, 'looper', 0, '2017-06-17', 4, '1498133626867'),
(33, 'paragon', 0, '2017-09-14', 4, '1498133636593'),
(34, 'lisper', 0, '2017-11-16', 5, '1498133649771'),
(35, 'mailcore', 0, '2018-01-12', 5, '1498133661647'),
(36, 'PollyGone', 0, '2018-04-20', 5, '1498133682870'),
(37, 'BlackSmith', 0, '2018-03-27', 5, '1498133705321');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
