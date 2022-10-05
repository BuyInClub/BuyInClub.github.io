﻿var PFR = [
{ label: "Jan 4th 2022", y: 4},
{ label: "Jan 7th 2022", y: 5},
{ label: "Jan 11th 2022", y: 2},
{ label: "Jan 14th 2022", y: 9},
{ label: "Jan 18th 2022", y: 7},
{ label: "Jan 21st 2022", y: 4},
{ label: "Jan 25th 2022", y: 5},
{ label: "Jan 28th 2022", y: 4},
{ label: "Jan 29th 2022", y: 8},
{ label: "Feb 4th 2022", y: 6},
{ label: "Feb 8th 2022", y: 5},
{ label: "Mar 11th 2022", y: 5},
{ label: "Mar 15th 2022", y: 4},
{ label: "Mar 18th 2022", y: 5},
{ label: "Mar 25th 2022", y: 8},
{ label: "Apr 1st 2022", y: 4},
{ label: "Apr 5th 2022", y: 3},
{ label: "Apr 8th 2022", y: 9},
{ label: "Apr 12th 2022", y: 6},
{ label: "Apr 15th 2022", y: 4},
{ label: "Apr 19th 2022", y: 6},
{ label: "Apr 26th 2022", y: 2},
{ label: "May 3rd 2022", y: 4},
{ label: "May 6th 2022", y: 1},
{ label: "May 24th 2022", y: 4},
{ label: "Jun 3rd 2022", y: 6},
{ label: "Jun 7th 2022", y: 1},
{ label: "Jun 28th 2022", y: 0},
{ label: "Jul 1st 2022", y: 6},
{ label: "Jul 5th 2022", y: 7},
{ label: "Aug 5th 2022", y: 1},
{ label: "Aug 16th 2022", y: 1},
{ label: "Aug 26th 2022", y: 3},
{ label: "Sept 2nd 2022", y: 7},
{ label: "Sept 6th 2022", y: 6},
{ label: "Sept 9th 2022", y: 6},
{ label: "Sept 13th 2022", y: 4},
{ label: "Sept 20th 2022", y: 1},
{ label: "Sept 27th 2022", y: 6},
{ label: "Sept 30th 2022", y: 5},
]
var VPIP = [
{ label: "Jan 4th 2022", y: 35},
{ label: "Jan 7th 2022", y: 35},
{ label: "Jan 11th 2022", y: 35},
{ label: "Jan 14th 2022", y: 39},
{ label: "Jan 18th 2022", y: 34},
{ label: "Jan 21st 2022", y: 25},
{ label: "Jan 25th 2022", y: 28},
{ label: "Jan 28th 2022", y: 38},
{ label: "Jan 29th 2022", y: 48},
{ label: "Feb 4th 2022", y: 40},
{ label: "Feb 8th 2022", y: 35},
{ label: "Mar 11th 2022", y: 36},
{ label: "Mar 15th 2022", y: 34},
{ label: "Mar 18th 2022", y: 34},
{ label: "Mar 25th 2022", y: 38},
{ label: "Apr 1st 2022", y: 43},
{ label: "Apr 5th 2022", y: 38},
{ label: "Apr 8th 2022", y: 20},
{ label: "Apr 12th 2022", y: 45},
{ label: "Apr 15th 2022", y: 42},
{ label: "Apr 19th 2022", y: 38},
{ label: "Apr 26th 2022", y: 25},
{ label: "May 3rd 2022", y: 47},
{ label: "May 6th 2022", y: 34},
{ label: "May 24th 2022", y: 40},
{ label: "Jun 3rd 2022", y: 17},
{ label: "Jun 7th 2022", y: 31},
{ label: "Jun 28th 2022", y: 57},
{ label: "Jul 1st 2022", y: 25},
{ label: "Jul 5th 2022", y: 31},
{ label: "Aug 5th 2022", y: 19},
{ label: "Aug 16th 2022", y: 23},
{ label: "Aug 26th 2022", y: 42},
{ label: "Sept 2nd 2022", y: 28},
{ label: "Sept 6th 2022", y: 35},
{ label: "Sept 9th 2022", y: 36},
{ label: "Sept 13th 2022", y: 40},
{ label: "Sept 20th 2022", y: 34},
{ label: "Sept 27th 2022", y: 47},
{ label: "Sept 30th 2022", y: 31},
]
var Agg = [
{ label: "Jan 4th 2022", y: 54},
{ label: "Jan 7th 2022", y: 47},
{ label: "Jan 11th 2022", y: 44},
{ label: "Jan 14th 2022", y: 53},
{ label: "Jan 18th 2022", y: 39},
{ label: "Jan 21st 2022", y: 48},
{ label: "Jan 25th 2022", y: 43},
{ label: "Jan 28th 2022", y: 41},
{ label: "Jan 29th 2022", y: 52},
{ label: "Feb 4th 2022", y: 45},
{ label: "Feb 8th 2022", y: 28},
{ label: "Mar 11th 2022", y: 45},
{ label: "Mar 15th 2022", y: 45},
{ label: "Mar 18th 2022", y: 48},
{ label: "Mar 25th 2022", y: 33},
{ label: "Apr 1st 2022", y: 42},
{ label: "Apr 5th 2022", y: 47},
{ label: "Apr 8th 2022", y: 41},
{ label: "Apr 12th 2022", y: 48},
{ label: "Apr 15th 2022", y: 45},
{ label: "Apr 19th 2022", y: 42},
{ label: "Apr 26th 2022", y: 38},
{ label: "May 3rd 2022", y: 47},
{ label: "May 6th 2022", y: 18},
{ label: "May 24th 2022", y: 42},
{ label: "Jun 3rd 2022", y: 42},
{ label: "Jun 7th 2022", y: 33},
{ label: "Jun 28th 2022", y: 0},
{ label: "Jul 1st 2022", y: 50},
{ label: "Jul 5th 2022", y: 41},
{ label: "Aug 5th 2022", y: 29},
{ label: "Aug 16th 2022", y: 52},
{ label: "Aug 26th 2022", y: 45},
{ label: "Sept 2nd 2022", y: 53},
{ label: "Sept 6th 2022", y: 47},
{ label: "Sept 9th 2022", y: 48},
{ label: "Sept 13th 2022", y: 34},
{ label: "Sept 20th 2022", y: 42},
{ label: "Sept 27th 2022", y: 56},
{ label: "Sept 30th 2022", y: 40},
]
var wonLost = [
{ label: "Jan 4th 2022", y: 78.49},
{ label: "Jan 7th 2022", y: -80.00},
{ label: "Jan 11th 2022", y: 76.47},
{ label: "Jan 14th 2022", y: -140.0},
{ label: "Jan 18th 2022", y: -100.0},
{ label: "Jan 21st 2022", y: 11.85},
{ label: "Jan 25th 2022", y: -50.00},
{ label: "Jan 28th 2022", y: -160.0},
{ label: "Jan 29th 2022", y: -18.77},
{ label: "Feb 4th 2022", y: 35.92},
{ label: "Feb 8th 2022", y: -20.0},
{ label: "Mar 11th 2022", y: -40.0},
{ label: "Mar 15th 2022", y: -20.0},
{ label: "Mar 18th 2022", y: 87.1},
{ label: "Mar 25th 2022", y: -80.0},
{ label: "Apr 1st 2022", y: -60.0},
{ label: "Apr 5th 2022", y: -40.0},
{ label: "Apr 8th 2022", y: -80.0},
{ label: "Apr 12th 2022", y: -80.0},
{ label: "Apr 15th 2022", y: -60.0},
{ label: "Apr 19th 2022", y: -40.0},
{ label: "Apr 26th 2022", y: -40.0},
{ label: "May 3rd 2022", y: 42.79},
{ label: "May 6th 2022", y: -40.0},
{ label: "May 24th 2022", y: 21.57},
{ label: "Jun 3rd 2022", y: 8.5},
{ label: "Jun 7th 2022", y: -60.0},
{ label: "Jun 28th 2022", y: -20.0},
{ label: "Jul 1st 2022", y: -40.0},
{ label: "Jul 5th 2022", y: 14.65},
{ label: "Aug 5th 2022", y: -40.0},
{ label: "Aug 16th 2022", y: -40.0},
{ label: "Aug 26th 2022", y: 6.17},
{ label: "Sept 2nd 2022", y: -80.0},
{ label: "Sept 6th 2022", y: -40.0},
{ label: "Sept 9th 2022", y: -54.38},
{ label: "Sept 13th 2022", y: -19.01},
{ label: "Sept 20th 2022", y: 3.15},
{ label: "Sept 27th 2022", y: 44.13},
{ label: "Sept 30th 2022", y: -80},
]
