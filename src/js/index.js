import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import sidebar from 'theia-sticky-sidebar';


import '../css/style.scss';

jQuery(function ($) {

    'use strict';

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
    if(jQuery.isEmptyObject(sidebar)){
        sidebar.theiaStickySidebar();
    }

}); // JQuery end
