<!DOCTYPE html>
<?php /* Copyright 2019 Vancoiver Film School */ ?>
<html>
    <head>
        <title>Catapults Editor</title>
        <meta name="description" content="Catapults Editor">
        <link type="text/css" rel="stylesheet" href="css/style_base.css">
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <link type="text/css" rel="stylesheet" href="css/media.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script> 
    </head>
    <body>
        <section id="app-wrapper" class="flex-container flex-column box-border">
            <header id="intro" class="flex-item box-border align-text-center">
            This is the header and title
            </header>

            <section id="editor-area" class="editor flex-item flex-container flex-row box-border align-self-center">
                <div id="level-form" class="flex-item box-border">
                    <form id="level-data-form" action="save_data.php" _target="_blank" method="get">
                        Name:           <input type="text" name="levelName" value="" placeholder="level-1" /><br/>
                        Collidables:    <input type="text" name="collidables" value="" placeholder="10" /><br/>
                        Ammo:           <input type="text" name="ammoCount" value="" placeholder="10" /><br/>
                        Background:     <input type="text" name="backgroundName" value="" placeholder="background" /><br/>
                        <input type="submit" name="submit" value="Save" class="button"/>
                        <div id="new-level-btn" class="button">New...</div><br/>
                        <div id="save-as-level-btn" class="button">Save as...</div>
                    </form>
                </div>

                <div id="editor-wrapper" class="flex-center-item box-border">
                    <div id="edit-window"><?php // programatically generated ?></div>
                </div>

                <div id="library-wrapper" class="flex-item box-border">
                    <ul>
                    <div class="item" style="background-image: url(./images/background.png);" ></div>
                    <div class="item"></div>
                    </ul>
                    <div id="add-obstacle-btn" class="button">Add...</div>
                </div>

            </section>
            <footer class="flex-item box-border align-text-center">
            Copyright (C) 2019 Scott Henshaw in cooperation with Vancouver Film School,
            All Right Reserved
            </footer>
        </section>
        <script type="module" src="scripts/main.js"></script>
    </body>
</html>