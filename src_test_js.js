"use strict";
(self["webpackChunkassignment_5"] = self["webpackChunkassignment_5"] || []).push([["src_test_js"],{

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


/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _uefaClubMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uefaClubMap */ "./src/uefaClubMap.js");
/* harmony import */ var _barChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barChart */ "./src/barChart.js");
/* harmony import */ var _airportBubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./airportBubble */ "./src/airportBubble.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var allTimeRankingByClub = "https://gist.githubusercontent.com/mhendy25/971de005f98140e41d6e1d50ab24eac5/raw/058a9fa78e96fa2e54368a166f9ea804dc8b3dc5/gistfile1.txt";
function useBarChartData(csvPath) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dataAll = _React$useState2[0],
    setData = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    (0,d3__WEBPACK_IMPORTED_MODULE_2__.csv)(csvPath).then(function (data) {
      console.log("my data", data);
      data.forEach(function (d) {
        d.Titles = +d.Titles;
      });
      setData(data);
    })["catch"](function (err) {
      console.log("catched error", err);
    });
  }, []);
  return dataAll;
}
var barChartData = useBarChartData(allTimeRankingByClub);
console.log("inside test", barChartData);

/***/ })

}]);
//# sourceMappingURL=src_test_js.js.map