﻿var PFR = [
{ label: "Feb 4th 2022", y: 12},
{ label: "Feb 18th 2022", y: 9},
{ label: "Feb 25th 2022", y: 7},
{ label: "Mar 4th 2022", y: 8},
{ label: "Mar 11th 2022", y: 11},
{ label: "Mar 18th 2022", y: 13},
{ label: "Mar 25th 2022", y: 7},
{ label: "Apr 1st 2022", y: 11},
{ label: "Apr 8th 2022", y: 7},
{ label: "Apr 22nd 2022", y: 10},
{ label: "Apr 29th 2022", y: 10},
{ label: "May 6th 2022", y: 7},
{ label: "May 13th 2022", y: 13},
{ label: "May 20th 2022", y: 14},
{ label: "May 27th 2022", y: 14},
{ label: "Jun 3rd 2022", y: 15},
{ label: "Jun 10th 2022", y: 13},
{ label: "Jun 17th 2022", y: 15},
{ label: "Jun 24th 2022", y: 19},
{ label: "Jul 1st 2022", y: 31},
{ label: "Jul 8th 2022", y: 20},
{ label: "Jul 15th 2022", y: 21},
{ label: "Jul 29th 2022", y: 12},
{ label: "Aug 5th 2022", y: 22},
{ label: "Aug 12th 2022", y: 21},
{ label: "Aug 19th 2022", y: 18},
{ label: "Aug 26th 2022", y: 26},
{ label: "Sept 2nd 2022", y: 20},
{ label: "Sept 9th 2022", y: 22},
{ label: "Sept 16th 2022", y: 27},
{ label: "Sept 20th 2022", y: 20},
{ label: "Sept 27th 2022", y: 29},
{ label: "Sept 30th 2022", y: 27},
]
var VPIP = [
{ label: "Feb 4th 2022", y: 40},
{ label: "Feb 18th 2022", y: 44},
{ label: "Feb 25th 2022", y: 36},
{ label: "Mar 4th 2022", y: 37},
{ label: "Mar 11th 2022", y: 46},
{ label: "Mar 18th 2022", y: 34},
{ label: "Mar 25th 2022", y: 34},
{ label: "Apr 1st 2022", y: 37},
{ label: "Apr 8th 2022", y: 30},
{ label: "Apr 22nd 2022", y: 39},
{ label: "Apr 29th 2022", y: 31},
{ label: "May 6th 2022", y: 35},
{ label: "May 13th 2022", y: 36},
{ label: "May 20th 2022", y: 37},
{ label: "May 27th 2022", y: 35},
{ label: "Jun 3rd 2022", y: 34},
{ label: "Jun 10th 2022", y: 33},
{ label: "Jun 17th 2022", y: 41},
{ label: "Jun 24th 2022", y: 43},
{ label: "Jul 1st 2022", y: 59},
{ label: "Jul 8th 2022", y: 43},
{ label: "Jul 15th 2022", y: 43},
{ label: "Jul 29th 2022", y: 32},
{ label: "Aug 5th 2022", y: 40},
{ label: "Aug 12th 2022", y: 37},
{ label: "Aug 19th 2022", y: 37},
{ label: "Aug 26th 2022", y: 42},
{ label: "Sept 2nd 2022", y: 38},
{ label: "Sept 9th 2022", y: 46},
{ label: "Sept 16th 2022", y: 49},
{ label: "Sept 20th 2022", y: 46},
{ label: "Sept 27th 2022", y: 47},
{ label: "Sept 30th 2022", y: 47},
]
var Agg = [
{ label: "Feb 4th 2022", y: 32},
{ label: "Feb 18th 2022", y: 36},
{ label: "Feb 25th 2022", y: 30},
{ label: "Mar 4th 2022", y: 34},
{ label: "Mar 11th 2022", y: 28},
{ label: "Mar 18th 2022", y: 34},
{ label: "Mar 25th 2022", y: 30},
{ label: "Apr 1st 2022", y: 30},
{ label: "Apr 8th 2022", y: 28},
{ label: "Apr 22nd 2022", y: 32},
{ label: "Apr 29th 2022", y: 36},
{ label: "May 6th 2022", y: 29},
{ label: "May 13th 2022", y: 28},
{ label: "May 20th 2022", y: 38},
{ label: "May 27th 2022", y: 31},
{ label: "Jun 3rd 2022", y: 32},
{ label: "Jun 10th 2022", y: 36},
{ label: "Jun 17th 2022", y: 35},
{ label: "Jun 24th 2022", y: 35},
{ label: "Jul 1st 2022", y: 36},
{ label: "Jul 8th 2022", y: 35},
{ label: "Jul 15th 2022", y: 35},
{ label: "Jul 29th 2022", y: 35},
{ label: "Aug 5th 2022", y: 33},
{ label: "Aug 12th 2022", y: 32},
{ label: "Aug 19th 2022", y: 30},
{ label: "Aug 26th 2022", y: 32},
{ label: "Sept 2nd 2022", y: 29},
{ label: "Sept 9th 2022", y: 35},
{ label: "Sept 16th 2022", y: 36},
{ label: "Sept 20th 2022", y: 26},
{ label: "Sept 27th 2022", y: 33},
{ label: "Sept 30th 2022", y: 34},
]
var wonLost = [
{ label: "Feb 4th 2022", y: -40.0},
{ label: "Feb 18th 2022", y: 95.44},
{ label: "Feb 25th 2022", y: 112.8},
{ label: "Mar 4th 2022", y: -133.17},
{ label: "Mar 11th 2022", y: 6.24},
{ label: "Mar 18th 2022", y: 56.32},
{ label: "Mar 25th 2022", y: 58.07},
{ label: "Apr 1st 2022", y: 0.12},
{ label: "Apr 8th 2022", y: -80.0},
{ label: "Apr 22nd 2022", y: 27.37},
{ label: "Apr 29th 2022", y: 15.00},
{ label: "May 6th 2022", y: 83.08},
{ label: "May 13th 2022", y: 6.35},
{ label: "May 20th 2022", y: -40.0},
{ label: "May 27th 2022", y: 113.64},
{ label: "Jun 3rd 2022", y: -131.28},
{ label: "Jun 10th 2022", y: 243.80},
{ label: "Jun 17th 2022", y: 6.7},
{ label: "Jun 24th 2022", y: -77.40},
{ label: "Jul 1st 2022", y: -40.00},
{ label: "Jul 8th 2022", y: -260.0},
{ label: "Jul 15th 2022", y: 51.05},
{ label: "Jul 29th 2022", y: -40.0},
{ label: "Aug 5th 2022", y: 403.61},
{ label: "Aug 12th 2022", y: 5.91},
{ label: "Aug 19th 2022", y: 396.93},
{ label: "Aug 26th 2022", y: 52.40},
{ label: "Sept 2nd 2022", y: 217.77},
{ label: "Sept 9th 2022", y: 65.57},
{ label: "Sept 16th 2022", y: -229.06},
{ label: "Sept 20th 2022", y: 157.93},
{ label: "Sept 27th 2022", y: -250.0},
{ label: "Sept 30th 2022", y: -240},
]
