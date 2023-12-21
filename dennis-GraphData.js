﻿var PFR = [
{ label: "Jan 6th 2023", y: 29},
{ label: "Jan 10th 2023", y: 29},
{ label: "Jan 13th 2023", y: 24},
{ label: "Jan 27th 2023", y: 41},
{ label: "Feb 3rd 2023", y: 28},
{ label: "Feb 18th 2023", y: 34},
{ label: "Feb 24th 2023", y: 25},
{ label: "Feb 28th 2023", y: 38},
{ label: "Mar 3rd 2023", y: 21},
{ label: "Mar 10th 2023", y: 36},
{ label: "Mar 14th 2023", y: 40},
{ label: "Mar 17th 2023", y: 36},
{ label: "Mar 24th 2023", y: 29},
{ label: "Mar 31st 2023", y: 30},
{ label: "Apr 4th 2023", y: 27},
{ label: "Apr 22nd 2023", y: 31},
{ label: "May 26th 2023", y: 28},
{ label: "Jun 9th 2023", y: 26},
{ label: "Aug 8th 2023", y: 27},
{ label: "Aug 22nd 2023", y: 15},
{ label: "Sep 2nd 2023", y: 27},
{ label: "Sep 15th 2023", y: 28},
{ label: "Oct 17th 2023", y: 30},
{ label: "Oct 24th 2023", y: 32},
{ label: "Oct 31st 2023", y: 29},
{ label: "Nov 4th 2023", y: 32},
{ label: "Nov 7th 2023", y: 22},
{ label: "Nov 14th 2023", y: 35},
{ label: "Nov 17th 2023", y: 22},
{ label: "Nov 21st 2023", y: 29},
{ label: "Nov 28th 2023", y: 37},
{ label: "Dec 1st 2023", y: 23},
{ label: "Dec 19th 2023", y: 27},
]
var VPIP = [
{ label: "Jan 6th 2023", y: 57},
{ label: "Jan 10th 2023", y: 64},
{ label: "Jan 13th 2023", y: 63},
{ label: "Jan 27th 2023", y: 75},
{ label: "Feb 3rd 2023", y: 51},
{ label: "Feb 18th 2023", y: 70},
{ label: "Feb 24th 2023", y: 60},
{ label: "Feb 28th 2023", y: 72},
{ label: "Mar 3rd 2023", y: 57},
{ label: "Mar 10th 2023", y: 70},
{ label: "Mar 14th 2023", y: 63},
{ label: "Mar 17th 2023", y: 58},
{ label: "Mar 24th 2023", y: 61},
{ label: "Mar 31st 2023", y: 65},
{ label: "Apr 4th 2023", y: 55},
{ label: "Apr 22nd 2023", y: 60},
{ label: "May 26th 2023", y: 62},
{ label: "Jun 9th 2023", y: 55},
{ label: "Aug 8th 2023", y: 64},
{ label: "Aug 22nd 2023", y: 62},
{ label: "Sep 2nd 2023", y: 66},
{ label: "Sep 15th 2023", y: 64},
{ label: "Oct 17th 2023", y: 58},
{ label: "Oct 24th 2023", y: 63},
{ label: "Oct 31st 2023", y: 66},
{ label: "Nov 4th 2023", y: 57},
{ label: "Nov 7th 2023", y: 55},
{ label: "Nov 14th 2023", y: 66},
{ label: "Nov 17th 2023", y: 46},
{ label: "Nov 21st 2023", y: 54},
{ label: "Nov 28th 2023", y: 64},
{ label: "Dec 1st 2023", y: 56},
{ label: "Dec 19th 2023", y: 61},
]
var Agg = [
{ label: "Jan 6th 2023", y: 33},
{ label: "Jan 10th 2023", y: 35},
{ label: "Jan 13th 2023", y: 30},
{ label: "Jan 27th 2023", y: 34},
{ label: "Feb 3rd 2023", y: 35},
{ label: "Feb 18th 2023", y: 35},
{ label: "Feb 24th 2023", y: 34},
{ label: "Feb 28th 2023", y: 52},
{ label: "Mar 3rd 2023", y: 47},
{ label: "Mar 10th 2023", y: 37},
{ label: "Mar 14th 2023", y: 46},
{ label: "Mar 17th 2023", y: 50},
{ label: "Mar 24th 2023", y: 53},
{ label: "Mar 31st 2023", y: 30},
{ label: "Apr 4th 2023", y: 45},
{ label: "Apr 22nd 2023", y: 40},
{ label: "May 26th 2023", y: 41},
{ label: "Jun 9th 2023", y: 41},
{ label: "Aug 8th 2023", y: 30},
{ label: "Aug 22nd 2023", y: 40},
{ label: "Sep 2nd 2023", y: 38},
{ label: "Sep 15th 2023", y: 38},
{ label: "Oct 17th 2023", y: 43},
{ label: "Oct 24th 2023", y: 45},
{ label: "Oct 31st 2023", y: 40},
{ label: "Nov 4th 2023", y: 38},
{ label: "Nov 7th 2023", y: 39},
{ label: "Nov 14th 2023", y: 44},
{ label: "Nov 17th 2023", y: 32},
{ label: "Nov 21st 2023", y: 42},
{ label: "Nov 28th 2023", y: 42},
{ label: "Dec 1st 2023", y: 46},
{ label: "Dec 19th 2023", y: 35},
]
var wonLost = [
{ label: "Jan 6th 2023", y: 139.4},
{ label: "Jan 10th 2023", y: 278.75},
{ label: "Jan 13th 2023", y: -240.0},
{ label: "Jan 27th 2023", y: -60.0},
{ label: "Feb 3rd 2023", y: -60.0},
{ label: "Feb 18th 2023", y: -80.0},
{ label: "Feb 24th 2023", y: -67.69},
{ label: "Feb 28th 2023", y: 199.12},
{ label: "Mar 3rd 2023", y: 0.94},
{ label: "Mar 10th 2023", y: -100.0},
{ label: "Mar 14th 2023", y: -110.37},
{ label: "Mar 17th 2023", y: -100.0},
{ label: "Mar 24th 2023", y: -60.0},
{ label: "Mar 31st 2023", y: -80.0},
{ label: "Apr 4th 2023", y: -110.0},
{ label: "Apr 22nd 2023", y: -150.0},
{ label: "May 26th 2023", y: 26.74},
{ label: "Jun 9th 2023", y: -80.0},
{ label: "Aug 8th 2023", y: -150.0},
{ label: "Aug 22nd 2023", y: -40.0},
{ label: "Sep 2nd 2023", y: 54.62},
{ label: "Sep 15th 2023", y: -110.0},
{ label: "Oct 17th 2023", y: 174.95},
{ label: "Oct 24th 2023", y: 101.8},
{ label: "Oct 31st 2023", y: 205.25},
{ label: "Nov 4th 2023", y: -130.0},
{ label: "Nov 7th 2023", y: -200.0},
{ label: "Nov 14th 2023", y: -150.00},
{ label: "Nov 17th 2023", y: -100.0},
{ label: "Nov 21st 2023", y: 86.02},
{ label: "Nov 28th 2023", y: -50.00},
{ label: "Dec 1st 2023", y: -200.0},
{ label: "Dec 19th 2023", y: -70},
]
