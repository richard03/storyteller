var game; // export this from a namespace

(function($) {

    game = {
        start: '', // the id of the starting situation
        situations: {}, // the list of all situations
        history: [], // the full story so far

        /**
         * Prepare the situation for later use
         */
        addSituation: function(cfg) {
            if (cfg.id) {
                game.situations[cfg.id] = cfg;
            } else throw 'Parameter "id" is not set or not a string';
        },

        /**
         * Show the situation on display
         */
        presentSituation: function(id, selectedOption, cfg) {
            if (id && game.situations[id]) {

                let content$ = $('.ge--content');

                // remove options list
                content$.find('ul.ge--options').remove();

                // show selected option instead
                if (selectedOption) {
                    content$.find('.ge--situation').last()
                        .append('<hr><p class="ge--selected-option">' + selectedOption + '</p><hr>');
                }

                let situation$ = content$.find('.ge--situation');
                let newSituation$ = $('<div class="ge--situation" style="display: none">' + game.situations[id].text + '</div>');

                if ( situation$.length == 0 ) {
                    // render new content
                    newSituation$
                        .appendTo(content$)
                        .show("blind", "slow");

                } else if ( situation$.length == 1 ) {
                    // save previous situation in history
                    game.history.push( situation$.eq(0).html() );

                    // render new content
                    newSituation$
                        .appendTo(content$)
                        .show("blind", "slow");

                } else {
                    // save content in history
                    game.history.push( situation$.eq(1).html() );

                    // hide situation we don't need anymore
                    var situation0 = situation$.eq(0);
                    situation$.eq(0)
                        .hide("blind", "slow", function () {
                            situation0.remove();

                            // render new content
                            newSituation$
                                .appendTo(content$)
                                .show("blind", "slow");
                        });
                }
                
            } else throw 'game.presentSituation: situation id not valid.';
        },

        /**
         * Start the game engine
         */
        run: function() {
            game.presentSituation(game.start);
            $('.ge--content').on('click', 'ul.ge--options>li', function (e) {
                let link$ = $(this);
                let id = link$.data('ref');
                let selectedOption = link$.html();
                if (game.situations[id]) {
                    game.presentSituation(id, selectedOption);
                } else throw 'game.run: situation "' + id + '" doesn\'t exist';
            });
            $('.ge--content-wrapper').show();
        }
    }

    $(window).on('load', game.run);

}(jQuery));