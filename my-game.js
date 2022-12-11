
/* The Id of the starting situation. */
game.start = "start";

/* Adding game situations */
game.addSituation({
    id: "start",
    text: $("#s_001").html()
});

game.addSituation({
    id: "start-soldier",
    text: $("#s_start-soldier").html(), 
    onEnter: function(character, game, from) {
        // character.setQuality("skill", character.qualities.strength + 3);
        // character.setQuality("skill", character.qualities.willpower + 1);
        // character.setQuality("skill", character.qualities.charisma + 1);
    }
});

game.addSituation({
    id: "s_003_menhirs",
    text: $("#s_003_menhirs").html()
});

game.addSituation({
    id: "s_004_menhirs_look",
    text: $("#s_004_menhirs_look").html()
});

game.addSituation({
    id: "s_005_menhirs_hear",
    text: $("#s_005_menhirs_hear").html()
});

game.addSituation({
    id: "s_006_menhirs_enter",
    text: $("#s_006_menhirs_enter").html()
});

game.addSituation({
    id: "end-lawful-good",
    text: $("#s_end-001").html()
});


// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */

// character.addQuality("strength", "integer", 1);
// character.addQuality("intelect", "integer", 1);
// character.addQuality("willpower", "integer", 1);
// character.addQuality("charisma", "integer", 1);
// character.addQuality("experience", "integer", 0);

