﻿var PFR = [
{ label: "Jan 6th 2023", y: 17},
{ label: "Feb 3rd 2023", y: 14},
{ label: "Feb 10th 2023", y: 21},
{ label: "Feb 18th 2023", y: 19},
{ label: "Feb 19th 2023", y: 12},
{ label: "Feb 21st 2023", y: 17},
{ label: "Feb 24th 2023", y: 18},
{ label: "Mar 10th 2023", y: 21},
{ label: "Mar 14th 2023", y: 15},
{ label: "Mar 18th 2023", y: 20},
{ label: "Mar 21st 2023", y: 21},
{ label: "Mar 24th 2023", y: 18},
{ label: "Apr 6th 2023", y: 20},
{ label: "Apr 14th 2023", y: 20},
{ label: "Apr 18th 2023", y: 17},
{ label: "Apr 30th 2023", y: 13},
{ label: "May 12th 2023", y: 12},
{ label: "May 19th 2023", y: 17},
{ label: "May 20th 2023", y: 17},
{ label: "May 26th 2023", y: 16},
{ label: "Jun 2nd 2023", y: 18},
{ label: "Jun 6th 2023", y: 9},
{ label: "Jun 9th 2023", y: 17},
{ label: "Jun 23rd 2023", y: 13},
{ label: "Jun 27th 2023", y: 10},
{ label: "Jun 30th 2023", y: 12},
{ label: "Jul 5th 2023", y: 13},
{ label: "Jul 7th 2023", y: 11},
{ label: "Jul 2nd 2023", y: 12},
{ label: "Jul 14th 2023", y: 15},
{ label: "Jul 21st 2023", y: 20},
{ label: "Jul 28th 2023", y: 16},
{ label: "Aug 11th 2023", y: 13},
{ label: "Aug 19th 2023", y: 11},
{ label: "Aug 22nd 2023", y: 7},
{ label: "Aug 25th 2023", y: 10},
{ label: "Aug 29th 2023", y: 11},
{ label: "Sep 15th 2023", y: 17},
]
var VPIP = [
{ label: "Jan 6th 2023", y: 52},
{ label: "Feb 3rd 2023", y: 58},
{ label: "Feb 10th 2023", y: 57},
{ label: "Feb 18th 2023", y: 72},
{ label: "Feb 19th 2023", y: 55},
{ label: "Feb 21st 2023", y: 56},
{ label: "Feb 24th 2023", y: 59},
{ label: "Mar 10th 2023", y: 59},
{ label: "Mar 14th 2023", y: 56},
{ label: "Mar 18th 2023", y: 54},
{ label: "Mar 21st 2023", y: 63},
{ label: "Mar 24th 2023", y: 55},
{ label: "Apr 6th 2023", y: 54},
{ label: "Apr 14th 2023", y: 55},
{ label: "Apr 18th 2023", y: 47},
{ label: "Apr 30th 2023", y: 44},
{ label: "May 12th 2023", y: 43},
{ label: "May 19th 2023", y: 48},
{ label: "May 20th 2023", y: 55},
{ label: "May 26th 2023", y: 58},
{ label: "Jun 2nd 2023", y: 57},
{ label: "Jun 6th 2023", y: 45},
{ label: "Jun 9th 2023", y: 58},
{ label: "Jun 23rd 2023", y: 50},
{ label: "Jun 27th 2023", y: 41},
{ label: "Jun 30th 2023", y: 46},
{ label: "Jul 5th 2023", y: 42},
{ label: "Jul 7th 2023", y: 58},
{ label: "Jul 2nd 2023", y: 49},
{ label: "Jul 14th 2023", y: 56},
{ label: "Jul 21st 2023", y: 58},
{ label: "Jul 28th 2023", y: 48},
{ label: "Aug 11th 2023", y: 55},
{ label: "Aug 19th 2023", y: 49},
{ label: "Aug 22nd 2023", y: 38},
{ label: "Aug 25th 2023", y: 48},
{ label: "Aug 29th 2023", y: 39},
{ label: "Sep 15th 2023", y: 52},
]
var Agg = [
{ label: "Jan 6th 2023", y: 36},
{ label: "Feb 3rd 2023", y: 32},
{ label: "Feb 10th 2023", y: 30},
{ label: "Feb 18th 2023", y: 35},
{ label: "Feb 19th 2023", y: 32},
{ label: "Feb 21st 2023", y: 33},
{ label: "Feb 24th 2023", y: 31},
{ label: "Mar 10th 2023", y: 26},
{ label: "Mar 14th 2023", y: 35},
{ label: "Mar 18th 2023", y: 27},
{ label: "Mar 21st 2023", y: 31},
{ label: "Mar 24th 2023", y: 30},
{ label: "Apr 6th 2023", y: 31},
{ label: "Apr 14th 2023", y: 33},
{ label: "Apr 18th 2023", y: 33},
{ label: "Apr 30th 2023", y: 37},
{ label: "May 12th 2023", y: 31},
{ label: "May 19th 2023", y: 29},
{ label: "May 20th 2023", y: 35},
{ label: "May 26th 2023", y: 34},
{ label: "Jun 2nd 2023", y: 30},
{ label: "Jun 6th 2023", y: 33},
{ label: "Jun 9th 2023", y: 30},
{ label: "Jun 23rd 2023", y: 33},
{ label: "Jun 27th 2023", y: 30},
{ label: "Jun 30th 2023", y: 36},
{ label: "Jul 5th 2023", y: 41},
{ label: "Jul 7th 2023", y: 36},
{ label: "Jul 2nd 2023", y: 34},
{ label: "Jul 14th 2023", y: 36},
{ label: "Jul 21st 2023", y: 35},
{ label: "Jul 28th 2023", y: 39},
{ label: "Aug 11th 2023", y: 40},
{ label: "Aug 19th 2023", y: 45},
{ label: "Aug 22nd 2023", y: 43},
{ label: "Aug 25th 2023", y: 44},
{ label: "Aug 29th 2023", y: 35},
{ label: "Sep 15th 2023", y: 39},
]
var wonLost = [
{ label: "Jan 6th 2023", y: 10.00},
{ label: "Feb 3rd 2023", y: 250.10},
{ label: "Feb 10th 2023", y: -38.8},
{ label: "Feb 18th 2023", y: 75.18},
{ label: "Feb 19th 2023", y: 33.3},
{ label: "Feb 21st 2023", y: -120.0},
{ label: "Feb 24th 2023", y: -200.0},
{ label: "Mar 10th 2023", y: -200.0},
{ label: "Mar 14th 2023", y: 77.37},
{ label: "Mar 18th 2023", y: -100.0},
{ label: "Mar 21st 2023", y: -50.0},
{ label: "Mar 24th 2023", y: -350.0},
{ label: "Apr 6th 2023", y: 0.51},
{ label: "Apr 14th 2023", y: 0.0},
{ label: "Apr 18th 2023", y: -125.0},
{ label: "Apr 30th 2023", y: 0.03},
{ label: "May 12th 2023", y: 90.41},
{ label: "May 19th 2023", y: -74.85},
{ label: "May 20th 2023", y: -13.77},
{ label: "May 26th 2023", y: 89.36},
{ label: "Jun 2nd 2023", y: 109.87},
{ label: "Jun 6th 2023", y: 141.35},
{ label: "Jun 9th 2023", y: 123.52},
{ label: "Jun 23rd 2023", y: -250.0},
{ label: "Jun 27th 2023", y: -190.0},
{ label: "Jun 30th 2023", y: 242.17},
{ label: "Jul 5th 2023", y: 96.49},
{ label: "Jul 7th 2023", y: 88.48},
{ label: "Jul 2nd 2023", y: -32.61},
{ label: "Jul 14th 2023", y: 75.13},
{ label: "Jul 21st 2023", y: -90.0},
{ label: "Jul 28th 2023", y: -68.04},
{ label: "Aug 11th 2023", y: 94.82},
{ label: "Aug 19th 2023", y: 236.76},
{ label: "Aug 22nd 2023", y: 90.17},
{ label: "Aug 25th 2023", y: 56.82},
{ label: "Aug 29th 2023", y: -150.0},
{ label: "Sep 15th 2023", y: 33.53},
]
