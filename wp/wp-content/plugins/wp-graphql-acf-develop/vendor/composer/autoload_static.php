<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9e804fc6f45415f83dd03aeed86e33f0
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPGraphQL\\ACF\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPGraphQL\\ACF\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WPGraphQL\\ACF\\ACF' => __DIR__ . '/../..' . '/src/class-acf.php',
        'WPGraphQL\\ACF\\ACF_Settings' => __DIR__ . '/../..' . '/src/class-acfsettings.php',
        'WPGraphQL\\ACF\\Config' => __DIR__ . '/../..' . '/src/class-config.php',
        'WPGraphQL\\ACF\\LocationRules' => __DIR__ . '/../..' . '/src/location-rules.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9e804fc6f45415f83dd03aeed86e33f0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9e804fc6f45415f83dd03aeed86e33f0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9e804fc6f45415f83dd03aeed86e33f0::$classMap;

        }, null, ClassLoader::class);
    }
}
