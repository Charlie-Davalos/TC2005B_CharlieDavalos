-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 14-03-2023 a las 01:48:17
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `durometros` (
    `id` int(11) NOT NULL,
    `nombre` varchar(200) NOT NULL,
    `imagen` varchar(512) DEFAULT NULL,
    `descripcion` varchar(1000) NOT NULL,
    `marca` int(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `durometros` (`id`, `nombre`, `imagen`, `descripcion`, `marca`, `created_at`) VALUES
(1, 'Máquina probadora de durezas Vickers y MicroVickers 0.005kgf-62.5kgf KB 30 S FA', 'https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png', 'Máquina totalmente automática Vickers KB 30 S FA.\r\n\r\nLa nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.', 1, '2023-03-13 18:54:54'),
(2, 'Máquina probadora de durezas Vickers y MicroVickers 0,01 kgf-62,5 kgf KB 30 SR', 'https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i52debb27af1c48ed/version/1520446905/image.png', 'Intervalo de prueba en diferentes etapas de extensión 30 y 62,5 kgf. Las máquinas probadoras de durezas KB se adaptan de manera óptima a las necesidades del usuario.', 1, '2023-03-13 18:56:43'),
(3, 'Medidor de espesor de pared', 'https://image.jimcdn.com/app/cms/image/transf/dimension=314x10000:format=png/path/s09cbab276dc8a8fd/image/i8f34e17a567ff6c6/version/1596649492/image.png', '• Patente UA202002129 por MICROTECH\r\n\r\n• Para medir paredes de tubos\r\n\r\n• Indicador analógico, digital o computarizado.\r\n\r\n• Punto de contacto estándar con un diámetro de 6 mm (modificaciones disponibles con otros dimetros)\r\n\r\n• Modificación con transferencia inalámbrica de datos a dispositivos Windows, Android, iOS con una distancia de hasta 50 m\r\n\r\n• Control metrológico al 100% en laboratorio acreditado por ISO17025 (Ilac MRA)', 2, '2023-03-13 18:58:14'),
(4, 'SOPORTE COMPUTARIZADO para control de rigidez de tuberías', 'https://image.jimcdn.com/app/cms/image/transf/dimension=379x10000:format=png/path/s09cbab276dc8a8fd/image/i6233bbbdcf7916a0/version/1596650043/image.png', '• Patente UA99686, UA103982, UA126928, UA131637, UA99931, WO2016124992 por MICROTECH\r\n• Soporte computarizado de 1 o 2 ejes para el control de la rigidez de la tubería.\r\n• Microcomputadora integrada con pantalla táctil a color de 1,5 \"\r\n• Funciones: Go / NoGo, Max / Min, administrador de memoria, compensación de errores matemáticos y de temperatura', 2, '2023-03-13 18:59:53'),
(5, 'Durómetro Shore HP', 'https://image.jimcdn.com/app/cms/image/transf/dimension=260x10000:format=png/path/s09cbab276dc8a8fd/image/if0903f1bb229919a/version/1530645146/image.png', 'Todo el chasis de HP está hecho de aluminio, que proporciona un peso ligero y durabilidad. Cada unidad de HP es cuidadosamente ensamblada y calibrada por los técnicos de Bareiss', 3, '2023-03-13 19:02:34'),
(6, 'ANALIZADOR DE HIDRÓGENO  HM 330 SN', 'https://image.jimcdn.com/app/cms/image/transf/dimension=90x10000:format=png/path/s09cbab276dc8a8fd/image/i375ea7145130f59a/version/1653515963/image.png', 'Analizador de hidrógeno móvil para fundición de aluminio con documentación específica del usuario.  Funcionamiento automático, rápido y exacto con resultados reproducibles.  Controlado por microprocesador y fácil de usar.  Probador de hidrógeno basado en el principio de la \"primera burbuja\".  Tiempo de medición <30 seg.  Software para el registro y la administración automáticos de los datos medidos.', 4, '2023-03-13 19:13:14');
ALTER TABLE `durometros`
ADD PRIMARY KEY (`id`);
ALTER TABLE `durometros`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;
