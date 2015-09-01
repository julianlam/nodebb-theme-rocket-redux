"use strict";
/*global RELATIVE_PATH, app, utils*/

function adjustSubMenu() {
	if ($(document).scrollTop() > 90) {
		$('.sub-header').addClass('fixed');
		$('body').addClass('subHeader-fixed');
	} else {
		$('.sub-header').removeClass('fixed');
		$('body').removeClass('subHeader-fixed');
	}
}

$(document).ready(function () {
    $(window).on('action:ajaxify.contentLoaded', function(err, data) {
        var url = data.url,
        menuItem;

        if (url.match(/^recent/)) {
            menuItem = 'recent';
        } else if (url.match(/^popular/)) {
            menuItem = 'popular';
        } else if (url.match(/^register/)) {
            menuItem = 'register';
        } else if (url.match(/^login/)) {
            menuItem = 'login';
        }

        $('.main-menu li').removeClass('active');
        $('.main-menu .menu-' + menuItem).addClass('active');

        $(document).on('scroll', adjustSubMenu);
        adjustSubMenu();


        buildBreadcrumbs(data.url);
        addPageButtons(data.url);
    });

    $(window).on('action:ajaxify.end', function(e, opts) {
        if (opts.url.match(/^user\/[^\/]+$/)) {
            require(['forum/theme/profile'], function(profile) {
                profile.addListeners();
                profile.cover.load();
            });
        }
    });
});


function addPageButtons(url) {
    $('#page-buttons').html('');

    if (url.match(/^topic/)) {    
        $('.thread-sort').first().appendTo($('#page-buttons')).removeClass('dropup').find('.pull-right').removeClass('pull-right');
        $('.thread-tools').first().appendTo($('#page-buttons')).removeClass('dropup').find('.pull-right').removeClass('pull-right');
    }
}

function enableNewPostButton(url) {
    var $actionButton = $('#action-button'),
        $categoryMenu = $('#category-menu');

    // Reset this button's events
    $('#action-button').removeAttr('data-toggle').off('click');

    if (url === '') {
        $actionButton.attr('data-toggle', 'dropdown');
        var menuItem = '<li role="presentation"><a role="menuitem" tabindex="-1" href="{slug}">{title} <!-- IF unread --><span class="label label-danger">New</span><!-- ENDIF unread --><br /><small>{description}</small></a></li>';

        $categoryMenu.html('');
        var html = '';
        
        $('.card-content h2 a').each(function() {
            var $this = $(this);

            html += templates.parse(menuItem, {
                slug: $this.attr('href'),
                title: $this.text(),
                description: $this.children('input[name="description"]').val(),
                unread: !!$this.children('input[name="unread"]').val()
            });
        });

        $categoryMenu.html(html);
    } else if (url.match(/^topic/)) {
        $('#action-button').on('click', function() {
            if (app.user.uid) {
                $(window).trigger('action:composer.post.new', {
                    tid: ajaxify.data.tid,
                    // pid: undefined,
                    topicName: ajaxify.data.title
                });
            } else {
                ajaxify.go('login');
            }
        });
    } else {
        $('#action-button').on('click', function() {
            if (app.user.uid) {
                $(window).trigger('action:composer.topic.new', {
                    cid: ajaxify.data.cid
                });
            } else {
                ajaxify.go('login');
            }
        });
    }
}

function buildBreadcrumbs(url) {
    if (url === '') {
        ajaxify.data.actionText = '[[rocket:select-category]]';
    } else if (url.match(/^topic/)) {
        ajaxify.data.actionText = 'New Reply';
    } else {
        ajaxify.data.actionText = 'New Topic';
    }

    templates.parse('rocket/breadcrumbs', ajaxify.data, function(breadcrumbHTML) {
        translator.translate(breadcrumbHTML, function(breadcrumbHTML) {
            $('.btn-breadcrumb').replaceWith(breadcrumbHTML);
            enableNewPostButton(url);
        });
    });

    // Remove any breadcrumb added in Persona
    $('ol.breadcrumb').remove();
}