<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => array(
        // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
        'server' => 'localhost',

        // The database username to connect with.
        'user' => 'homestead',

        // The database password to connect with.
        'password' => 'secret',

        // The name of the database to select.
        'database' => 'bucaboot-craft',
    ),
    '.com' => array(
      // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
        'server' => 'localhost',

        // The database username to connect with.
        'user' => 'db128018',

        // The database password to connect with.
        'password' => 'N!ceb00tylicious',

        // The name of the database to select.
        'database' => 'db128018_craft',
    ),

);
