"use strict";
(self["webpackChunkassignment_5"] = self["webpackChunkassignment_5"] || []).push([["src_airportBubble_js"],{

/***/ "./src/airportBubble.js":
/*!******************************!*\
  !*** ./src/airportBubble.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerBubble: () => (/* binding */ PlayerBubble)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");



function PlayerBubble(props) {
  var width = props.width,
    height = props.height,
    players = props.players;

  // let cities;

  // if (selectedAirline) {
  //   let selectedRoutes = routes.filter((a) => a.AirlineID === selectedAirline);
  //   cities = groupByCity(selectedRoutes);
  // } else {
  //   cities = groupByCity(routes);
  // }

  // cities = cities.sort((a, b) => a.Count - b.Count);

  var maxRadius = width * 0.15;
  var radiusScale = (0,d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear)().range([2, maxRadius]).domain([10, 140]);
  var simulation = (0,d3__WEBPACK_IMPORTED_MODULE_2__.forceSimulation)(players).force("x", (0,d3__WEBPACK_IMPORTED_MODULE_2__.forceX)(width / 2).strength(0.05)).force("y", (0,d3__WEBPACK_IMPORTED_MODULE_2__.forceY)(height / 2).strength(0.05)).force("collide", (0,d3__WEBPACK_IMPORTED_MODULE_2__.forceCollide)(function (d) {
    return radiusScale(d.Goals) + 2;
  })).stop();
  for (var i = 0; i < 200; ++i) simulation.tick();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, players.map(function (player, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      key: idx,
      cx: player.x,
      cy: player.y,
      r: radiusScale(player.Goals),
      fill: "#2a5599",
      stroke: "black",
      strokeWidth: "2"
    });
  }), players.slice(-5).map(function (player, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      cx: player.x,
      cy: player.y,
      r: radiusScale(player.Goals),
      fill: "#ADD8E6",
      stroke: "black",
      strokeWidth: "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
      x: player.x,
      y: player.y,
      dy: -radiusScale(player.Goals),
      style: {
        textAnchor: "middle",
        stroke: "pink",
        strokeWidth: "0.5em",
        fill: "#992a2a",
        fontSize: 16,
        fontFamily: "cursive",
        paintOrder: "stroke",
        strokeLinejoin: "round"
      }
    }, player.Goals));
  }));
}


/***/ })

}]);
//# sourceMappingURL=src_airportBubble_js.js.map