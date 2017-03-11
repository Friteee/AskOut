<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit22c3c43d216ca922ec1d956d9cd733a8
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twilio\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twilio\\' => 
        array (
            0 => __DIR__ . '/..' . '/twilio/sdk/Twilio',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit22c3c43d216ca922ec1d956d9cd733a8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit22c3c43d216ca922ec1d956d9cd733a8::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}