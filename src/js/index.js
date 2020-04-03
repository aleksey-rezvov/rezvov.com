'use strict';

import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import sidebar from 'theia-sticky-sidebar';
import {getNavigatorLanguage} from './utils'

import '../css/style.scss';
import '../img/arezvov.png';
import '../img/favicon.png';

const location = window.location.pathname;
// console.info( `location ${location} `);
if(location == '/') {
    let lang = getNavigatorLanguage();
    if(lang != 'ru') {
        lang = 'en'
    }
    window.location.replace(`/${lang}/`);
}
else {
    jQuery(function ($) {
        // --------------------------------------------------------------------
        // PreLoader
        // --------------------------------------------------------------------

        (function () {
            jQuery('#preloader').delay(200).fadeOut('slow');
        }());



        // --------------------------------------------------------------------
        // Sticky Sidebar
        // --------------------------------------------------------------------
        const sidebar = jQuery('.left-col-block, .right-col-block');
        if(sidebar.length){
            sidebar.theiaStickySidebar();
        }
        else {
            console.log(`jQuery('.left-col-block, .right-col-block') returned empty object. Sticky sidebar didn't set.`);
        }
    }); // JQuery end
}
