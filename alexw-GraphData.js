﻿var PFR = [
{ label: "Jan 2nd 2024", y: 2},
{ label: "Jan 5th 2024", y: 1},
{ label: "Jan 6th 2024", y: 5},
{ label: "Jan 9th 2024", y: 4},
{ label: "Jan 12th 2024", y: 1},
{ label: "Jan 16th 2024", y: 4},
{ label: "Jan 19th 2024", y: 2},
{ label: "Jan 20th 2024", y: 4},
{ label: "Jan 23rd 2024", y: 6},
{ label: "Jan 26th 2024", y: 2},
{ label: "Jan 27th 2024", y: 8},
{ label: "Jan 30th 2024", y: 6},
{ label: "Feb 2nd 2024", y: 4},
{ label: "Feb 6th 2024", y: 1},
{ label: "Feb 9th 2024", y: 3},
{ label: "Feb 11th 2024", y: 5},
{ label: "Feb 13th 2024", y: 6},
{ label: "Feb 16th 2024", y: 10},
{ label: "Feb 20th 2024", y: 3},
{ label: "Feb 23rd 2024", y: 2},
{ label: "Feb 27th 2024", y: 7},
{ label: "Mar 1st 2024", y: 6},
{ label: "Mar 2nd 2024", y: 4},
{ label: "Mar 5th 2024", y: 7},
{ label: "Mar 8th 2024", y: 3},
{ label: "Mar 12th 2024", y: 6},
{ label: "Mar 15th 2024", y: 4},
{ label: "Mar 19th 2024", y: 6},
]
var VPIP = [
{ label: "Jan 2nd 2024", y: 52},
{ label: "Jan 5th 2024", y: 31},
{ label: "Jan 6th 2024", y: 49},
{ label: "Jan 9th 2024", y: 40},
{ label: "Jan 12th 2024", y: 33},
{ label: "Jan 16th 2024", y: 50},
{ label: "Jan 19th 2024", y: 38},
{ label: "Jan 20th 2024", y: 42},
{ label: "Jan 23rd 2024", y: 52},
{ label: "Jan 26th 2024", y: 39},
{ label: "Jan 27th 2024", y: 47},
{ label: "Jan 30th 2024", y: 60},
{ label: "Feb 2nd 2024", y: 38},
{ label: "Feb 6th 2024", y: 51},
{ label: "Feb 9th 2024", y: 31},
{ label: "Feb 11th 2024", y: 49},
{ label: "Feb 13th 2024", y: 53},
{ label: "Feb 16th 2024", y: 51},
{ label: "Feb 20th 2024", y: 57},
{ label: "Feb 23rd 2024", y: 46},
{ label: "Feb 27th 2024", y: 54},
{ label: "Mar 1st 2024", y: 56},
{ label: "Mar 2nd 2024", y: 44},
{ label: "Mar 5th 2024", y: 58},
{ label: "Mar 8th 2024", y: 52},
{ label: "Mar 12th 2024", y: 54},
{ label: "Mar 15th 2024", y: 48},
{ label: "Mar 19th 2024", y: 52},
]
var Agg = [
{ label: "Jan 2nd 2024", y: 24},
{ label: "Jan 5th 2024", y: 29},
{ label: "Jan 6th 2024", y: 33},
{ label: "Jan 9th 2024", y: 41},
{ label: "Jan 12th 2024", y: 26},
{ label: "Jan 16th 2024", y: 24},
{ label: "Jan 19th 2024", y: 22},
{ label: "Jan 20th 2024", y: 23},
{ label: "Jan 23rd 2024", y: 37},
{ label: "Jan 26th 2024", y: 23},
{ label: "Jan 27th 2024", y: 29},
{ label: "Jan 30th 2024", y: 34},
{ label: "Feb 2nd 2024", y: 32},
{ label: "Feb 6th 2024", y: 29},
{ label: "Feb 9th 2024", y: 27},
{ label: "Feb 11th 2024", y: 27},
{ label: "Feb 13th 2024", y: 23},
{ label: "Feb 16th 2024", y: 18},
{ label: "Feb 20th 2024", y: 19},
{ label: "Feb 23rd 2024", y: 22},
{ label: "Feb 27th 2024", y: 29},
{ label: "Mar 1st 2024", y: 24},
{ label: "Mar 2nd 2024", y: 30},
{ label: "Mar 5th 2024", y: 27},
{ label: "Mar 8th 2024", y: 28},
{ label: "Mar 12th 2024", y: 27},
{ label: "Mar 15th 2024", y: 29},
{ label: "Mar 19th 2024", y: 23},
]
var wonLost = [
{ label: "Jan 2nd 2024", y: -100.0},
{ label: "Jan 5th 2024", y: 302.74},
{ label: "Jan 6th 2024", y: -287.48},
{ label: "Jan 9th 2024", y: -70.0},
{ label: "Jan 12th 2024", y: 126.61},
{ label: "Jan 16th 2024", y: -112.61},
{ label: "Jan 19th 2024", y: -20.64},
{ label: "Jan 20th 2024", y: -61.55},
{ label: "Jan 23rd 2024", y: -100.00},
{ label: "Jan 26th 2024", y: 521.19},
{ label: "Jan 27th 2024", y: -100.0},
{ label: "Jan 30th 2024", y: -80.0},
{ label: "Feb 2nd 2024", y: 174.83},
{ label: "Feb 6th 2024", y: -40.0},
{ label: "Feb 9th 2024", y: -28.86},
{ label: "Feb 11th 2024", y: -50.0},
{ label: "Feb 13th 2024", y: 26.23},
{ label: "Feb 16th 2024", y: -73.15},
{ label: "Feb 20th 2024", y: -110.0},
{ label: "Feb 23rd 2024", y: -78.83},
{ label: "Feb 27th 2024", y: 142.87},
{ label: "Mar 1st 2024", y: -52.83},
{ label: "Mar 2nd 2024", y: -90.0},
{ label: "Mar 5th 2024", y: -99.05},
{ label: "Mar 8th 2024", y: -106.18},
{ label: "Mar 12th 2024", y: -150.0},
{ label: "Mar 15th 2024", y: 102.96},
{ label: "Mar 19th 2024", y: -100.00},
]
