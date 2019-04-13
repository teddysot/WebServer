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
        <script src="./lib/Box2dWeb-2.1.a.3.min.js"></script>
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
                        <div id="save-level-btn" class="button">Save</div>
                        <div id="load-level-btn" class="button">Load</div><br/>
                        <div id="new-level-btn" class="button">New...</div>
                        <div id="testConsole" class="button">TestConsole</div>
                    </form>
                </div>

                <div id="editor-wrapper" class="flex-center-item box-border">
                </div>

                <div id="library-wrapper" class="flex-item box-border">
                    <ul>
                    </ul>
                    <div id="add-obstacle-btn" class="button">Add...</div>
                </div>

                <!-- https://www.youtube.com/watch?v=gLWIYk0Sd38 -->
                <div class="input-bg-modal">
                    <div class="input-modal-contents">
                        <div class="input-close">+</div>
                        <form action="">
                            Type:   <input id="type" type="text" placeholder="ex.image"> <br/> <br/>
                            Name:   <input id="name" type="text" placeholder="ex.name"> <br/> <br/>
                            Height:  <input id="height" type="text" placeholder="ex.150px"> <br/> <br/>
                            Width:  <input id="width" type="text" placeholder="ex.150px"> <br/> <br/>
                            Texture:    <input id="texture" type="text" placeholder="ex.name.png"> <br/> <br/>
                            Shape:  <input id="shape" type="text" placeholder="ex.squre"> <br/> <br/>
                            Friction:   <input id="friction" type="text" placeholder="ex.9.8"> <br/> <br/>
                            Mass:   <input id="mass" type="text" placeholder="ex.10.0"> <br/> <br/>
                            Restitution:    <input id="restitution" type="text" placeholder="ex."> <br/> <br/>
                            <div id="add-image-btn" class="button">Add</div>
                        </form>
                    </div>
                </div>

                <div class="edit-bg-modal">
                    <div class="edit-modal-contents">
                        <div class="edit-close">+</div>
                        <form action="">
                            FileName:   <input id="filenameF" type="text" placeholder="name.png"> <br/> <br/>
                            Width:  <input id="widthF" type="text" placeholder="150px"> <br/> <br/>
                            Height:  <input id="heightF" type="text" placeholder="150px"> <br/> <br/>
                            <div id="add-image-btn" class="button">Add</div>
                        </form>
                    </div>
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