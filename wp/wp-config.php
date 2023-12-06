<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

$db_password = 'admin';
if ($_SERVER['HTTP_HOST'] === 'power-tools.local:8888') {
    $db_password = 'admin';
    define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/wp/');
    define('WP_SITEURL', WP_HOME);
} else {
    $_SERVER['HTTPS'] = 'on';
    define('WP_HOME', 'https://' . $_SERVER['HTTP_HOST'] . '/wp/');
    define('WP_SITEURL', WP_HOME);
}

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'power-tools');

/** Database username */
define('DB_USER', 'admin');

/** Database password */
define('DB_PASSWORD', $db_password);

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'LHU@!6!+Tg&z~2e-RG^!P`m(|.Q4X=`xY*HBP8w7k4v&hC+r=Pui`=t}f7SH)g%i');
define('SECURE_AUTH_KEY',  'ZYDag~x[~:z:R/F:HEAJx|$PqtWXO?E~OFn3U|HI]$q_Cz0inStTk?%PLxcSkuMe');
define('LOGGED_IN_KEY',    '}<*LBa`]f4I>A@uBLU,Hw3B>BL %[cA~[(^|XnWNhso|LUPd@{gR%#sC!*=1KoGQ');
define('NONCE_KEY',        '6C5S=+X)J7t6_CP6P(=89~y).+-nZ1E%#EmF5FDC~Pn}<}uxH8QMh!DiDiUueL`v');
define('AUTH_SALT',        'E9=_Jgy:Nx|@c,l:nn>kz};Jw DA{EA`CxIic-/(|79dU)iTOs1#; X}Zb /|c<b');
define('SECURE_AUTH_SALT', 'rcpHmX!?HYUEHhpVHT+R5z3ah-KTE,*M_mrJ<D/f]sI~(8PN/zM{}lNcnkWIc/md');
define('LOGGED_IN_SALT',   '1M_i9Z>FlKA=rO](OK_<=M>c!S^GExQrwtPoJQz<l<GU?C=!I|:,OmQbVNK<Zd]m');
define('NONCE_SALT',       'j;R+cI~y{S+Rpe{-xa|[uo#/tWRF-45F?u9z]$tZ(]QOMjSVuUW,Yewk6S9n`EHk');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
