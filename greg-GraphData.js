﻿var PFR = [
{ label: "Jan 4th 2022", y: 11},
{ label: "Jan 7th 2022", y: 18},
{ label: "Jan 11th 2022", y: 18},
{ label: "Jan 14th 2022", y: 14},
{ label: "Jan 18th 2022", y: 14},
{ label: "Jan 21st 2022", y: 14},
{ label: "Jan 25th 2022", y: 13},
{ label: "Jan 28th 2022", y: 13},
{ label: "Jan 29th 2022", y: 14},
{ label: "Feb 4th 2022", y: 12},
{ label: "Feb 8th 2022", y: 24},
{ label: "Feb 11th 2022", y: 14},
{ label: "Feb 15th 2022", y: 12},
{ label: "Feb 18th 2022", y: 15},
{ label: "Feb 25th 2022", y: 27},
{ label: "Mar 4th 2022", y: 17},
{ label: "Mar 11th 2022", y: 18},
{ label: "Mar 15th 2022", y: 18},
{ label: "Mar 18th 2022", y: 15},
{ label: "Mar 25th 2022", y: 18},
{ label: "Apr 1st 2022", y: 19},
{ label: "Apr 5th 2022", y: 18},
{ label: "Apr 15th 2022", y: 12},
{ label: "Apr 19th 2022", y: 23},
{ label: "Apr 22nd 2022", y: 23},
{ label: "Apr 26th 2022", y: 18},
{ label: "Apr 29th 2022", y: 18},
{ label: "May 3rd 2022", y: 25},
{ label: "May 6th 2022", y: 19},
{ label: "May 13th 2022", y: 21},
{ label: "May 20th 2022", y: 16},
{ label: "May 24th 2022", y: 23},
{ label: "May 27th 2022", y: 17},
{ label: "Jun 3rd 2022", y: 9},
{ label: "Jun 7th 2022", y: 16},
{ label: "Jun 10th 2022", y: 12},
{ label: "Jun 17th 2022", y: 17},
{ label: "Jun 21st 2022", y: 12},
{ label: "Jun 24th 2022", y: 15},
]
var VPIP = [
{ label: "Jan 4th 2022", y: 38},
{ label: "Jan 7th 2022", y: 34},
{ label: "Jan 11th 2022", y: 36},
{ label: "Jan 14th 2022", y: 33},
{ label: "Jan 18th 2022", y: 35},
{ label: "Jan 21st 2022", y: 31},
{ label: "Jan 25th 2022", y: 35},
{ label: "Jan 28th 2022", y: 30},
{ label: "Jan 29th 2022", y: 33},
{ label: "Feb 4th 2022", y: 32},
{ label: "Feb 8th 2022", y: 38},
{ label: "Feb 11th 2022", y: 32},
{ label: "Feb 15th 2022", y: 25},
{ label: "Feb 18th 2022", y: 32},
{ label: "Feb 25th 2022", y: 43},
{ label: "Mar 4th 2022", y: 34},
{ label: "Mar 11th 2022", y: 30},
{ label: "Mar 15th 2022", y: 35},
{ label: "Mar 18th 2022", y: 33},
{ label: "Mar 25th 2022", y: 32},
{ label: "Apr 1st 2022", y: 31},
{ label: "Apr 5th 2022", y: 34},
{ label: "Apr 15th 2022", y: 30},
{ label: "Apr 19th 2022", y: 42},
{ label: "Apr 22nd 2022", y: 44},
{ label: "Apr 26th 2022", y: 35},
{ label: "Apr 29th 2022", y: 36},
{ label: "May 3rd 2022", y: 46},
{ label: "May 6th 2022", y: 35},
{ label: "May 13th 2022", y: 40},
{ label: "May 20th 2022", y: 32},
{ label: "May 24th 2022", y: 40},
{ label: "May 27th 2022", y: 34},
{ label: "Jun 3rd 2022", y: 33},
{ label: "Jun 7th 2022", y: 35},
{ label: "Jun 10th 2022", y: 33},
{ label: "Jun 17th 2022", y: 35},
{ label: "Jun 21st 2022", y: 31},
{ label: "Jun 24th 2022", y: 35},
]
var Agg = [
{ label: "Jan 4th 2022", y: 30},
{ label: "Jan 7th 2022", y: 28},
{ label: "Jan 11th 2022", y: 26},
{ label: "Jan 14th 2022", y: 25},
{ label: "Jan 18th 2022", y: 32},
{ label: "Jan 21st 2022", y: 29},
{ label: "Jan 25th 2022", y: 29},
{ label: "Jan 28th 2022", y: 37},
{ label: "Jan 29th 2022", y: 23},
{ label: "Feb 4th 2022", y: 22},
{ label: "Feb 8th 2022", y: 35},
{ label: "Feb 11th 2022", y: 34},
{ label: "Feb 15th 2022", y: 26},
{ label: "Feb 18th 2022", y: 33},
{ label: "Feb 25th 2022", y: 29},
{ label: "Mar 4th 2022", y: 34},
{ label: "Mar 11th 2022", y: 40},
{ label: "Mar 15th 2022", y: 21},
{ label: "Mar 18th 2022", y: 33},
{ label: "Mar 25th 2022", y: 31},
{ label: "Apr 1st 2022", y: 32},
{ label: "Apr 5th 2022", y: 30},
{ label: "Apr 15th 2022", y: 29},
{ label: "Apr 19th 2022", y: 29},
{ label: "Apr 22nd 2022", y: 29},
{ label: "Apr 26th 2022", y: 32},
{ label: "Apr 29th 2022", y: 37},
{ label: "May 3rd 2022", y: 29},
{ label: "May 6th 2022", y: 28},
{ label: "May 13th 2022", y: 28},
{ label: "May 20th 2022", y: 28},
{ label: "May 24th 2022", y: 26},
{ label: "May 27th 2022", y: 26},
{ label: "Jun 3rd 2022", y: 21},
{ label: "Jun 7th 2022", y: 19},
{ label: "Jun 10th 2022", y: 20},
{ label: "Jun 17th 2022", y: 28},
{ label: "Jun 21st 2022", y: 24},
{ label: "Jun 24th 2022", y: 36},
]
var wonLost = [
{ label: "Jan 4th 2022", y: 264.03},
{ label: "Jan 7th 2022", y: 11.66},
{ label: "Jan 11th 2022", y: -42.16},
{ label: "Jan 14th 2022", y: -9.07},
{ label: "Jan 18th 2022", y: 199.09},
{ label: "Jan 21st 2022", y: -81.44},
{ label: "Jan 25th 2022", y: 171.48},
{ label: "Jan 28th 2022", y: 176.95},
{ label: "Jan 29th 2022", y: -242.19},
{ label: "Feb 4th 2022", y: -157.52},
{ label: "Feb 8th 2022", y: -70.08},
{ label: "Feb 11th 2022", y: 109.61},
{ label: "Feb 15th 2022", y: -200.0},
{ label: "Feb 18th 2022", y: -100.00},
{ label: "Feb 25th 2022", y: 104.11},
{ label: "Mar 4th 2022", y: 198.3},
{ label: "Mar 11th 2022", y: -13.49},
{ label: "Mar 15th 2022", y: 31.49},
{ label: "Mar 18th 2022", y: -52.86},
{ label: "Mar 25th 2022", y: 106.09},
{ label: "Apr 1st 2022", y: 290.14},
{ label: "Apr 5th 2022", y: 39.66},
{ label: "Apr 15th 2022", y: 254.52},
{ label: "Apr 19th 2022", y: -34.05},
{ label: "Apr 22nd 2022", y: -0.12},
{ label: "Apr 26th 2022", y: 115.83},
{ label: "Apr 29th 2022", y: 506.86},
{ label: "May 3rd 2022", y: -208.17},
{ label: "May 6th 2022", y: -200.08},
{ label: "May 13th 2022", y: 127.41},
{ label: "May 20th 2022", y: 73.01},
{ label: "May 24th 2022", y: -126.91},
{ label: "May 27th 2022", y: 205.61},
{ label: "Jun 3rd 2022", y: -188.05},
{ label: "Jun 7th 2022", y: 46.34},
{ label: "Jun 10th 2022", y: -156.61},
{ label: "Jun 17th 2022", y: 131.14},
{ label: "Jun 21st 2022", y: 9.55},
{ label: "Jun 24th 2022", y: 249.04},
]
