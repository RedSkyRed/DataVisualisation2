var vg_1 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/flowmap.json";
var vg_2 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/T1Worlds.json";
var vg_3 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/gamesplayed.json";
var vg_4 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/winrate.json";
var vg_5 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/KDA.json";
var vg_6 = "https://raw.githubusercontent.com/RedSkyRed/DataVisualisation2/main/js/heatmap.json";

vegaEmbed("#flow_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#t1_worlds", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#gamesplayed", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#winrate", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#kda", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#heatmap", vg_6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);