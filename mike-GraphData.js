﻿var PFR = [
{ label: "Jan 1st 2021", y: 11},
{ label: "Jan 8th 2021", y: 12},
{ label: "Jan 12th 2021", y: 18},
{ label: "Jan 15th 2021", y: 15},
{ label: "Jan 22nd 2021", y: 13},
{ label: "Jan 26th 2021", y: 12},
{ label: "Jan 29th 2021", y: 22},
{ label: "Feb 5th 2021", y: 17},
{ label: "Feb 12th 2021", y: 17},
{ label: "Feb 19th 2021", y: 20},
{ label: "Feb 26th 2021", y: 16},
{ label: "Mar 5th 2021", y: 19},
{ label: "Mar 12th 2021", y: 25},
{ label: "Mar 19th 2021", y: 22},
{ label: "Mar 26th 2021", y: 26},
{ label: "Apr 2nd 2021", y: 25},
{ label: "Apr 9th 2021", y: 27},
{ label: "Apr 16th 2021", y: 25},
{ label: "Apr 23rd 2021", y: 23},
{ label: "Apr 30th 2021", y: 19},
{ label: "May 14th 2021", y: 24},
{ label: "May 21st 2021", y: 21},
{ label: "May 28th 2021", y: 19},
{ label: "June 4th 2021", y: 19},
{ label: "June 11th 2021", y: 19},
{ label: "June 18th 2021", y: 26},
{ label: "June 25th 2021", y: 15},
{ label: "July 9th 2021", y: 27},
{ label: "July 16th 2021", y: 31},
{ label: "July 23rd 2021", y: 25},
{ label: "July 30th 2021", y: 25},
{ label: "Aug 6th 2021", y: 17},
{ label: "Aug 13th 2021", y: 37},
{ label: "Aug 20th 2021", y: 26},
{ label: "Aug 27th 2021", y: 21},
]
var VPIP = [
{ label: "Jan 1st 2021", y: 36},
{ label: "Jan 8th 2021", y: 33},
{ label: "Jan 12th 2021", y: 37},
{ label: "Jan 15th 2021", y: 38},
{ label: "Jan 22nd 2021", y: 43},
{ label: "Jan 26th 2021", y: 38},
{ label: "Jan 29th 2021", y: 44},
{ label: "Feb 5th 2021", y: 36},
{ label: "Feb 12th 2021", y: 34},
{ label: "Feb 19th 2021", y: 39},
{ label: "Feb 26th 2021", y: 35},
{ label: "Mar 5th 2021", y: 41},
{ label: "Mar 12th 2021", y: 52},
{ label: "Mar 19th 2021", y: 52},
{ label: "Mar 26th 2021", y: 49},
{ label: "Apr 2nd 2021", y: 47},
{ label: "Apr 9th 2021", y: 49},
{ label: "Apr 16th 2021", y: 41},
{ label: "Apr 23rd 2021", y: 45},
{ label: "Apr 30th 2021", y: 49},
{ label: "May 14th 2021", y: 40},
{ label: "May 21st 2021", y: 41},
{ label: "May 28th 2021", y: 39},
{ label: "June 4th 2021", y: 44},
{ label: "June 11th 2021", y: 35},
{ label: "June 18th 2021", y: 48},
{ label: "June 25th 2021", y: 37},
{ label: "July 9th 2021", y: 42},
{ label: "July 16th 2021", y: 47},
{ label: "July 23rd 2021", y: 57},
{ label: "July 30th 2021", y: 46},
{ label: "Aug 6th 2021", y: 36},
{ label: "Aug 13th 2021", y: 56},
{ label: "Aug 20th 2021", y: 48},
{ label: "Aug 27th 2021", y: 43},
]
var Agg = [
{ label: "Jan 1st 2021", y: 34},
{ label: "Jan 8th 2021", y: 42},
{ label: "Jan 12th 2021", y: 28},
{ label: "Jan 15th 2021", y: 32},
{ label: "Jan 22nd 2021", y: 31},
{ label: "Jan 26th 2021", y: 32},
{ label: "Jan 29th 2021", y: 44},
{ label: "Feb 5th 2021", y: 48},
{ label: "Feb 12th 2021", y: 48},
{ label: "Feb 19th 2021", y: 45},
{ label: "Feb 26th 2021", y: 44},
{ label: "Mar 5th 2021", y: 33},
{ label: "Mar 12th 2021", y: 35},
{ label: "Mar 19th 2021", y: 30},
{ label: "Mar 26th 2021", y: 35},
{ label: "Apr 2nd 2021", y: 36},
{ label: "Apr 9th 2021", y: 28},
{ label: "Apr 16th 2021", y: 34},
{ label: "Apr 23rd 2021", y: 34},
{ label: "Apr 30th 2021", y: 32},
{ label: "May 14th 2021", y: 37},
{ label: "May 21st 2021", y: 28},
{ label: "May 28th 2021", y: 28},
{ label: "June 4th 2021", y: 40},
{ label: "June 11th 2021", y: 30},
{ label: "June 18th 2021", y: 36},
{ label: "June 25th 2021", y: 32},
{ label: "July 9th 2021", y: 32},
{ label: "July 16th 2021", y: 36},
{ label: "July 23rd 2021", y: 36},
{ label: "July 30th 2021", y: 34},
{ label: "Aug 6th 2021", y: 34},
{ label: "Aug 13th 2021", y: 35},
{ label: "Aug 20th 2021", y: 29},
{ label: "Aug 27th 2021", y: 39},
]
var wonLost = [
{ label: "Jan 1st 2021", y: -10.0},
{ label: "Jan 8th 2021", y: -80.0},
{ label: "Jan 12th 2021", y: 66.67},
{ label: "Jan 15th 2021", y: 81.68},
{ label: "Jan 22nd 2021", y: 67.50},
{ label: "Jan 26th 2021", y: -60.0},
{ label: "Jan 29th 2021", y: 18.52},
{ label: "Feb 5th 2021", y: 275.49},
{ label: "Feb 12th 2021", y: -100.0},
{ label: "Feb 19th 2021", y: -164.64},
{ label: "Feb 26th 2021", y: 125.24},
{ label: "Mar 5th 2021", y: 173.79},
{ label: "Mar 12th 2021", y: 57.46},
{ label: "Mar 19th 2021", y: 159.34},
{ label: "Mar 26th 2021", y: -26.52},
{ label: "Apr 2nd 2021", y: 355.2},
{ label: "Apr 9th 2021", y: 365.94},
{ label: "Apr 16th 2021", y: -80.00},
{ label: "Apr 23rd 2021", y: -120.0},
{ label: "Apr 30th 2021", y: 46.69},
{ label: "May 14th 2021", y: -85.59},
{ label: "May 21st 2021", y: -40.00},
{ label: "May 28th 2021", y: -25.83},
{ label: "June 4th 2021", y: 41.9},
{ label: "June 11th 2021", y: 350.55},
{ label: "June 18th 2021", y: 434.3},
{ label: "June 25th 2021", y: -200.0},
{ label: "July 9th 2021", y: 268.07},
{ label: "July 16th 2021", y: 203.44},
{ label: "July 23rd 2021", y: -280.0},
{ label: "July 30th 2021", y: -140.0},
{ label: "Aug 6th 2021", y: -4.0},
{ label: "Aug 13th 2021", y: 114.98},
{ label: "Aug 20th 2021", y: -101.61},
{ label: "Aug 27th 2021", y: 155.29},
]
