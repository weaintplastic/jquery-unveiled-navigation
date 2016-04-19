# Unveiled Navigation

This plugin helps you to create sticky unveiled navigations as seen on [medium.com](http://medium.com). Read more about my intentions here: https://medium.com/@weaintplastic/2108f9a53631

Please find an example over at Codepen: http://codepen.io/weaintplastic/full/RNpXOO/

### Features

- Hides on scroll down
- Unveils on scroll up
- Unveils when reaching the very end of a page
- Special state when on the very top of the page

### Install

- [Download the latest release](https://github.com/weaintplastic/jquery-unveiled-navigation/archive/master.zip).
- Clone the repo: `git clone https://github.com/weaintplastic/jquery-unveiled-navigation.git`.
- Install with [Bower](http://bower.io): `bower install jquery-unveiled-navigation`.


### Usage

    <header class="unveiled-navigation"></header>

    $('.unveiled-navigation').unveiledNavigation();

### Properties

    offset:         0,          // Offset in px for unveiling
    acceleration:   1,          // Acceleration of unveiling/hiding
    topClass:       'at-top',   // Class that will be added when at the top
    timeout:        300,        // Timeout before the navigation gets unveiled on scroll stop
    easing:         'swing',    // Esing function that is used for automatical unveiling/hiding
    duration:       500         // Duration of the automatic unveiling/hiding

### API

You can use the following functions

    $('.unveiled-navigation').data('unveiledNavigation').functionName()


    unveil()        // Call this function to unveil the navigation
    cover()         // Call this function to cover the navigation
    disable()       // Call this function to disable the functionality and show the navigation
    enable()        // Call this function to re-enable the functionality


### Support, Bugs and Feature Requests
Please [open an issue](https://github.com/weaintplastic/jquery-unveiled-navigation/issues/new) for questions and concerns.

### Licencing
Copyright (c) 2015 Roland Lösslein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
