﻿var PFR = [
{ label: "Jan 2nd 2024", y: 6},
{ label: "Jan 5th 2024", y: 3},
{ label: "Jan 6th 2024", y: 2},
{ label: "Jan 9th 2024", y: 1},
{ label: "Jan 12th 2024", y: 6},
{ label: "Jan 16th 2024", y: 2},
{ label: "Jan 19th 2024", y: 2},
{ label: "Jan 23rd 2024", y: 2},
{ label: "Jan 26th 2024", y: 2},
{ label: "Jan 30th 2024", y: 4},
{ label: "Feb 2nd 2024", y: 3},
{ label: "Feb 6th 2024", y: 5},
{ label: "Feb 9th 2024", y: 4},
{ label: "Feb 13th 2024", y: 1},
{ label: "Feb 20th 2024", y: 5},
{ label: "Feb 23rd 2024", y: 3},
{ label: "Feb 27th 2024", y: 1},
{ label: "Mar 1st 2024", y: 2},
{ label: "Mar 2nd 2024", y: 3},
{ label: "Mar 5th 2024", y: 0},
{ label: "Mar 8th 2024", y: 0},
{ label: "Mar 15th 2024", y: 0},
{ label: "Mar 19th 2024", y: 2},
{ label: "Mar 22nd 2024", y: 1},
{ label: "Mar 23rd 2024", y: 0},
{ label: "Mar 26th 2024", y: 2},
{ label: "Mar 29th 2024", y: 3},
{ label: "Apr 2nd 2024", y: 4},
{ label: "Apr 5th 2024", y: 1},
{ label: "Apr 9th 2024", y: 3},
{ label: "Apr 12th 2024", y: 1},
{ label: "Apr 13th 2024", y: 2},
{ label: "Apr 16th 2024", y: 4},
{ label: "Apr 19th 2024", y: 4},
{ label: "Apr 23rd 2024", y: 3},
{ label: "Apr 26th 2024", y: 3},
]
var VPIP = [
{ label: "Jan 2nd 2024", y: 35},
{ label: "Jan 5th 2024", y: 33},
{ label: "Jan 6th 2024", y: 24},
{ label: "Jan 9th 2024", y: 27},
{ label: "Jan 12th 2024", y: 37},
{ label: "Jan 16th 2024", y: 26},
{ label: "Jan 19th 2024", y: 32},
{ label: "Jan 23rd 2024", y: 23},
{ label: "Jan 26th 2024", y: 35},
{ label: "Jan 30th 2024", y: 23},
{ label: "Feb 2nd 2024", y: 41},
{ label: "Feb 6th 2024", y: 35},
{ label: "Feb 9th 2024", y: 34},
{ label: "Feb 13th 2024", y: 37},
{ label: "Feb 20th 2024", y: 41},
{ label: "Feb 23rd 2024", y: 29},
{ label: "Feb 27th 2024", y: 35},
{ label: "Mar 1st 2024", y: 34},
{ label: "Mar 2nd 2024", y: 27},
{ label: "Mar 5th 2024", y: 37},
{ label: "Mar 8th 2024", y: 34},
{ label: "Mar 15th 2024", y: 32},
{ label: "Mar 19th 2024", y: 26},
{ label: "Mar 22nd 2024", y: 32},
{ label: "Mar 23rd 2024", y: 29},
{ label: "Mar 26th 2024", y: 27},
{ label: "Mar 29th 2024", y: 39},
{ label: "Apr 2nd 2024", y: 38},
{ label: "Apr 5th 2024", y: 33},
{ label: "Apr 9th 2024", y: 35},
{ label: "Apr 12th 2024", y: 33},
{ label: "Apr 13th 2024", y: 21},
{ label: "Apr 16th 2024", y: 34},
{ label: "Apr 19th 2024", y: 36},
{ label: "Apr 23rd 2024", y: 36},
{ label: "Apr 26th 2024", y: 31},
]
var Agg = [
{ label: "Jan 2nd 2024", y: 35},
{ label: "Jan 5th 2024", y: 32},
{ label: "Jan 6th 2024", y: 34},
{ label: "Jan 9th 2024", y: 23},
{ label: "Jan 12th 2024", y: 31},
{ label: "Jan 16th 2024", y: 20},
{ label: "Jan 19th 2024", y: 22},
{ label: "Jan 23rd 2024", y: 40},
{ label: "Jan 26th 2024", y: 27},
{ label: "Jan 30th 2024", y: 44},
{ label: "Feb 2nd 2024", y: 34},
{ label: "Feb 6th 2024", y: 33},
{ label: "Feb 9th 2024", y: 39},
{ label: "Feb 13th 2024", y: 24},
{ label: "Feb 20th 2024", y: 25},
{ label: "Feb 23rd 2024", y: 27},
{ label: "Feb 27th 2024", y: 20},
{ label: "Mar 1st 2024", y: 25},
{ label: "Mar 2nd 2024", y: 37},
{ label: "Mar 5th 2024", y: 27},
{ label: "Mar 8th 2024", y: 19},
{ label: "Mar 15th 2024", y: 26},
{ label: "Mar 19th 2024", y: 31},
{ label: "Mar 22nd 2024", y: 30},
{ label: "Mar 23rd 2024", y: 24},
{ label: "Mar 26th 2024", y: 24},
{ label: "Mar 29th 2024", y: 30},
{ label: "Apr 2nd 2024", y: 31},
{ label: "Apr 5th 2024", y: 31},
{ label: "Apr 9th 2024", y: 27},
{ label: "Apr 12th 2024", y: 35},
{ label: "Apr 13th 2024", y: 44},
{ label: "Apr 16th 2024", y: 44},
{ label: "Apr 19th 2024", y: 38},
{ label: "Apr 23rd 2024", y: 37},
{ label: "Apr 26th 2024", y: 36},
]
var wonLost = [
{ label: "Jan 2nd 2024", y: 14.98},
{ label: "Jan 5th 2024", y: 70.47},
{ label: "Jan 6th 2024", y: 33.74},
{ label: "Jan 9th 2024", y: 2.17},
{ label: "Jan 12th 2024", y: 58.26},
{ label: "Jan 16th 2024", y: 35.87},
{ label: "Jan 19th 2024", y: 19.3},
{ label: "Jan 23rd 2024", y: -40.0},
{ label: "Jan 26th 2024", y: 61.82},
{ label: "Jan 30th 2024", y: 3.61},
{ label: "Feb 2nd 2024", y: -16.64},
{ label: "Feb 6th 2024", y: -91.05},
{ label: "Feb 9th 2024", y: 49.89},
{ label: "Feb 13th 2024", y: 63.51},
{ label: "Feb 20th 2024", y: 17.3},
{ label: "Feb 23rd 2024", y: 10.11},
{ label: "Feb 27th 2024", y: -70.0},
{ label: "Mar 1st 2024", y: 20.69},
{ label: "Mar 2nd 2024", y: 24.48},
{ label: "Mar 5th 2024", y: 104.97},
{ label: "Mar 8th 2024", y: -57.15},
{ label: "Mar 15th 2024", y: -24.77},
{ label: "Mar 19th 2024", y: 10.15},
{ label: "Mar 22nd 2024", y: -14.58},
{ label: "Mar 23rd 2024", y: -91.66},
{ label: "Mar 26th 2024", y: 3.80},
{ label: "Mar 29th 2024", y: 129.88},
{ label: "Apr 2nd 2024", y: 55.07},
{ label: "Apr 5th 2024", y: -57.69},
{ label: "Apr 9th 2024", y: 3.15},
{ label: "Apr 12th 2024", y: 120.86},
{ label: "Apr 13th 2024", y: 157.74},
{ label: "Apr 16th 2024", y: 86.87},
{ label: "Apr 19th 2024", y: 111.28},
{ label: "Apr 23rd 2024", y: 1.36},
{ label: "Apr 26th 2024", y: 13.89},
]
