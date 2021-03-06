<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitefb1e98de0c0b3f90441f98ab8d099e5
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitefb1e98de0c0b3f90441f98ab8d099e5', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitefb1e98de0c0b3f90441f98ab8d099e5', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitefb1e98de0c0b3f90441f98ab8d099e5::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
