﻿var PFR = [
{ label: "Jan 12th 2024", y: 11},
{ label: "Jan 20th 2024", y: 15},
{ label: "Jan 26th 2024", y: 10},
{ label: "Feb 2nd 2024", y: 24},
{ label: "Feb 9th 2024", y: 10},
{ label: "Feb 16th 2024", y: 17},
{ label: "Feb 23rd 2024", y: 8},
{ label: "Mar 1st 2024", y: 13},
{ label: "Mar 15th 2024", y: 19},
{ label: "Mar 22nd 2024", y: 13},
{ label: "Apr 6th 2024", y: 9},
{ label: "Apr 12th 2024", y: 12},
{ label: "Apr 19th 2024", y: 18},
{ label: "Apr 23rd 2024", y: 16},
{ label: "Apr 26th 2024", y: 16},
{ label: "Apr 30th 2024", y: 19},
{ label: "May 3rd 2024", y: 13},
{ label: "May 7th 2024", y: 17},
{ label: "May 10th 2024", y: 18},
{ label: "May 14th 2024", y: 16},
{ label: "May 17th 2024", y: 23},
{ label: "May 18th 2024", y: 14},
{ label: "May 21st 2024", y: 23},
{ label: "May 24th 2024", y: 20},
{ label: "May 28th 2024", y: 25},
{ label: "Jun 4th 2024", y: 19},
{ label: "Jun 11th 2024", y: 17},
{ label: "Jun 14th 2024", y: 15},
]
var VPIP = [
{ label: "Jan 12th 2024", y: 25},
{ label: "Jan 20th 2024", y: 39},
{ label: "Jan 26th 2024", y: 28},
{ label: "Feb 2nd 2024", y: 39},
{ label: "Feb 9th 2024", y: 21},
{ label: "Feb 16th 2024", y: 42},
{ label: "Feb 23rd 2024", y: 23},
{ label: "Mar 1st 2024", y: 33},
{ label: "Mar 15th 2024", y: 42},
{ label: "Mar 22nd 2024", y: 29},
{ label: "Apr 6th 2024", y: 25},
{ label: "Apr 12th 2024", y: 28},
{ label: "Apr 19th 2024", y: 22},
{ label: "Apr 23rd 2024", y: 31},
{ label: "Apr 26th 2024", y: 26},
{ label: "Apr 30th 2024", y: 33},
{ label: "May 3rd 2024", y: 33},
{ label: "May 7th 2024", y: 32},
{ label: "May 10th 2024", y: 37},
{ label: "May 14th 2024", y: 34},
{ label: "May 17th 2024", y: 35},
{ label: "May 18th 2024", y: 29},
{ label: "May 21st 2024", y: 37},
{ label: "May 24th 2024", y: 38},
{ label: "May 28th 2024", y: 48},
{ label: "Jun 4th 2024", y: 31},
{ label: "Jun 11th 2024", y: 37},
{ label: "Jun 14th 2024", y: 34},
]
var Agg = [
{ label: "Jan 12th 2024", y: 42},
{ label: "Jan 20th 2024", y: 31},
{ label: "Jan 26th 2024", y: 32},
{ label: "Feb 2nd 2024", y: 38},
{ label: "Feb 9th 2024", y: 40},
{ label: "Feb 16th 2024", y: 33},
{ label: "Feb 23rd 2024", y: 39},
{ label: "Mar 1st 2024", y: 32},
{ label: "Mar 15th 2024", y: 41},
{ label: "Mar 22nd 2024", y: 34},
{ label: "Apr 6th 2024", y: 37},
{ label: "Apr 12th 2024", y: 38},
{ label: "Apr 19th 2024", y: 43},
{ label: "Apr 23rd 2024", y: 46},
{ label: "Apr 26th 2024", y: 46},
{ label: "Apr 30th 2024", y: 33},
{ label: "May 3rd 2024", y: 42},
{ label: "May 7th 2024", y: 37},
{ label: "May 10th 2024", y: 40},
{ label: "May 14th 2024", y: 41},
{ label: "May 17th 2024", y: 48},
{ label: "May 18th 2024", y: 36},
{ label: "May 21st 2024", y: 52},
{ label: "May 24th 2024", y: 37},
{ label: "May 28th 2024", y: 39},
{ label: "Jun 4th 2024", y: 32},
{ label: "Jun 11th 2024", y: 35},
{ label: "Jun 14th 2024", y: 36},
]
var wonLost = [
{ label: "Jan 12th 2024", y: 62.90},
{ label: "Jan 20th 2024", y: -150.0},
{ label: "Jan 26th 2024", y: -149.86},
{ label: "Feb 2nd 2024", y: 30.67},
{ label: "Feb 9th 2024", y: 137.26},
{ label: "Feb 16th 2024", y: -71.31},
{ label: "Feb 23rd 2024", y: 27.82},
{ label: "Mar 1st 2024", y: -140.0},
{ label: "Mar 15th 2024", y: 4.37},
{ label: "Mar 22nd 2024", y: -45.7},
{ label: "Apr 6th 2024", y: 80.99},
{ label: "Apr 12th 2024", y: 63.52},
{ label: "Apr 19th 2024", y: 26.12},
{ label: "Apr 23rd 2024", y: 11.27},
{ label: "Apr 26th 2024", y: 58.89},
{ label: "Apr 30th 2024", y: -70.0},
{ label: "May 3rd 2024", y: 59.88},
{ label: "May 7th 2024", y: 86.68},
{ label: "May 10th 2024", y: 42.05},
{ label: "May 14th 2024", y: 15.03},
{ label: "May 17th 2024", y: 32.76},
{ label: "May 18th 2024", y: 31.11},
{ label: "May 21st 2024", y: 80.36},
{ label: "May 24th 2024", y: 40.08},
{ label: "May 28th 2024", y: -46.99},
{ label: "Jun 4th 2024", y: 31.24},
{ label: "Jun 11th 2024", y: 11.09},
{ label: "Jun 14th 2024", y: 225.02},
]
