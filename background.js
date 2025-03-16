chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Auto Enhancer Installed!");
  console.log("Mouse Tracker Spoofer Extension Installed");

  // Save the tracking data (hardcoded example, you can modify it to load dynamically if needed)
  chrome.storage.local.set({
    trackingData: [
  {
    "time": "2025-03-16T11:02:42.495Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 286,
    "y": 655
  },
  {
    "time": "2025-03-16T11:02:42.501Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 288,
    "y": 653
  },
  {
    "time": "2025-03-16T11:02:42.510Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 289,
    "y": 653
  },
  {
    "time": "2025-03-16T11:02:42.517Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 292,
    "y": 651
  },
  {
    "time": "2025-03-16T11:02:42.524Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 295,
    "y": 649
  },
  {
    "time": "2025-03-16T11:02:42.529Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 300,
    "y": 647
  },
  {
    "time": "2025-03-16T11:02:42.537Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 307,
    "y": 645
  },
  {
    "time": "2025-03-16T11:02:42.545Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 312,
    "y": 643
  },
  {
    "time": "2025-03-16T11:02:42.553Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 316,
    "y": 642
  },
  {
    "time": "2025-03-16T11:02:42.560Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 321,
    "y": 641
  },
  {
    "time": "2025-03-16T11:02:42.569Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 328,
    "y": 640
  },
  {
    "time": "2025-03-16T11:02:42.576Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 335,
    "y": 637
  },
  {
    "time": "2025-03-16T11:02:42.584Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 344,
    "y": 636
  },
  {
    "time": "2025-03-16T11:02:42.595Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 350,
    "y": 636
  },
  {
    "time": "2025-03-16T11:02:42.601Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 358,
    "y": 634
  },
  {
    "time": "2025-03-16T11:02:42.608Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 364,
    "y": 634
  },
  {
    "time": "2025-03-16T11:02:42.616Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 368,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:42.624Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 373,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:42.632Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 377,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:42.639Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 384,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:42.648Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 388,
    "y": 632
  },
  {
    "time": "2025-03-16T11:02:42.656Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 396,
    "y": 630
  },
  {
    "time": "2025-03-16T11:02:42.664Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 407,
    "y": 628
  },
  {
    "time": "2025-03-16T11:02:42.672Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 410,
    "y": 625
  },
  {
    "time": "2025-03-16T11:02:42.680Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 420,
    "y": 622
  },
  {
    "time": "2025-03-16T11:02:42.688Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 428,
    "y": 620
  },
  {
    "time": "2025-03-16T11:02:42.695Z",
    "event": "mouseleave",
    "element": "YTD-MESSAGE-RENDERER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.695Z",
    "event": "mouseleave",
    "element": "YTD-LIVE-CHAT-FRAME",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.695Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.695Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.697Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 433,
    "y": 619
  },
  {
    "time": "2025-03-16T11:02:42.705Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 438,
    "y": 616
  },
  {
    "time": "2025-03-16T11:02:42.712Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 443,
    "y": 615
  },
  {
    "time": "2025-03-16T11:02:42.721Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 447,
    "y": 613
  },
  {
    "time": "2025-03-16T11:02:42.729Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 453,
    "y": 612
  },
  {
    "time": "2025-03-16T11:02:42.737Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 459,
    "y": 609
  },
  {
    "time": "2025-03-16T11:02:42.745Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 463,
    "y": 608
  },
  {
    "time": "2025-03-16T11:02:42.753Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 470,
    "y": 605
  },
  {
    "time": "2025-03-16T11:02:42.761Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 476,
    "y": 604
  },
  {
    "time": "2025-03-16T11:02:42.768Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 479,
    "y": 603
  },
  {
    "time": "2025-03-16T11:02:42.776Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 482,
    "y": 602
  },
  {
    "time": "2025-03-16T11:02:42.784Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 484,
    "y": 601
  },
  {
    "time": "2025-03-16T11:02:42.793Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 486,
    "y": 601
  },
  {
    "time": "2025-03-16T11:02:42.801Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 488,
    "y": 600
  },
  {
    "time": "2025-03-16T11:02:42.809Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 488,
    "y": 599
  },
  {
    "time": "2025-03-16T11:02:42.816Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 492,
    "y": 597
  },
  {
    "time": "2025-03-16T11:02:42.824Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 493,
    "y": 597
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.836Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 500,
    "y": 594
  },
  {
    "time": "2025-03-16T11:02:42.846Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 508,
    "y": 593
  },
  {
    "time": "2025-03-16T11:02:42.850Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 513,
    "y": 590
  },
  {
    "time": "2025-03-16T11:02:42.861Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 524,
    "y": 586
  },
  {
    "time": "2025-03-16T11:02:42.869Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 536,
    "y": 581
  },
  {
    "time": "2025-03-16T11:02:42.879Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 547,
    "y": 576
  },
  {
    "time": "2025-03-16T11:02:42.881Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 556,
    "y": 572
  },
  {
    "time": "2025-03-16T11:02:42.893Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 568,
    "y": 566
  },
  {
    "time": "2025-03-16T11:02:42.896Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 577,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:42.906Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 587,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:42.912Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 596,
    "y": 554
  },
  {
    "time": "2025-03-16T11:02:42.921Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 603,
    "y": 551
  },
  {
    "time": "2025-03-16T11:02:42.928Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 606,
    "y": 550
  },
  {
    "time": "2025-03-16T11:02:42.936Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.936Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.936Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.941Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.941Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.941Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.941Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.941Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.945Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 609,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:42.947Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.947Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.948Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.948Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.949Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 612,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:42.967Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 615,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:42.983Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 616,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.993Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:42.995Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 617,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:42.999Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 618,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:43.002Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 619,
    "y": 544
  },
  {
    "time": "2025-03-16T11:02:43.011Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 621,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:43.021Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 627,
    "y": 542
  },
  {
    "time": "2025-03-16T11:02:43.032Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 629,
    "y": 542
  },
  {
    "time": "2025-03-16T11:02:43.035Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 632,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.044Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.044Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.044Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.044Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.044Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.046Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 636,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.050Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 638,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.061Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 640,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.069Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 643,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.082Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 645,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:43.095Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 648,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:43.101Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 652,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:43.113Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 657,
    "y": 539
  },
  {
    "time": "2025-03-16T11:02:43.117Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 664,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:43.131Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 671,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:43.140Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 676,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:43.144Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 680,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:43.147Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 687,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:43.161Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 695,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:43.166Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 697,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:43.169Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 700,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:43.183Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 704,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.187Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 707,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.198Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 710,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.202Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 712,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.214Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 716,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.219Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 718,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.232Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 719,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:43.237Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 724,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:43.251Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 725,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:43.268Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 726,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:43.280Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 727,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:43.287Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 730,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:43.293Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 732,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:43.306Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 733,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:43.312Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 736,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:43.319Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 738,
    "y": 539
  },
  {
    "time": "2025-03-16T11:02:43.326Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 740,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:43.332Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 742,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.345Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.345Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.345Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.345Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.346Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.349Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 744,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:43.358Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 749,
    "y": 544
  },
  {
    "time": "2025-03-16T11:02:43.364Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 751,
    "y": 544
  },
  {
    "time": "2025-03-16T11:02:43.370Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 756,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:43.376Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 757,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:43.383Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 759,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:43.391Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 760,
    "y": 547
  },
  {
    "time": "2025-03-16T11:02:43.413Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 762,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:43.427Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 764,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:43.432Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 764,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:43.440Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 767,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:43.444Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 769,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:43.449Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.449Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.449Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.449Z",
    "event": "mouseover",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.451Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.451Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.451Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.454Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 772,
    "y": 551
  },
  {
    "time": "2025-03-16T11:02:43.457Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 778,
    "y": 552
  },
  {
    "time": "2025-03-16T11:02:43.474Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 783,
    "y": 553
  },
  {
    "time": "2025-03-16T11:02:43.476Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.476Z",
    "event": "mouseover",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.477Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:43.480Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 791,
    "y": 554
  },
  {
    "time": "2025-03-16T11:02:43.484Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 795,
    "y": 554
  },
  {
    "time": "2025-03-16T11:02:43.493Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 798,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:43.498Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 801,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:43.508Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 802,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:43.517Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 804,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.522Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 805,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.529Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 806,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.578Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 808,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.605Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 810,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.616Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 811,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:43.622Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 813,
    "y": 558
  },
  {
    "time": "2025-03-16T11:02:43.634Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 814,
    "y": 559
  },
  {
    "time": "2025-03-16T11:02:43.664Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 815,
    "y": 560
  },
  {
    "time": "2025-03-16T11:02:43.681Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 816,
    "y": 561
  },
  {
    "time": "2025-03-16T11:02:43.711Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 818,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:43.724Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 820,
    "y": 563
  },
  {
    "time": "2025-03-16T11:02:43.735Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 820,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:43.747Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 821,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:43.754Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 822,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:43.778Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 823,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:43.782Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 824,
    "y": 566
  },
  {
    "time": "2025-03-16T11:02:43.868Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 824,
    "y": 567
  },
  {
    "time": "2025-03-16T11:02:43.878Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 823,
    "y": 567
  },
  {
    "time": "2025-03-16T11:02:43.885Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 821,
    "y": 568
  },
  {
    "time": "2025-03-16T11:02:43.897Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 820,
    "y": 568
  },
  {
    "time": "2025-03-16T11:02:43.910Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 818,
    "y": 569
  },
  {
    "time": "2025-03-16T11:02:43.925Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 816,
    "y": 569
  },
  {
    "time": "2025-03-16T11:02:43.932Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 813,
    "y": 570
  },
  {
    "time": "2025-03-16T11:02:43.941Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 810,
    "y": 571
  },
  {
    "time": "2025-03-16T11:02:43.951Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 804,
    "y": 572
  },
  {
    "time": "2025-03-16T11:02:43.958Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 802,
    "y": 572
  },
  {
    "time": "2025-03-16T11:02:43.966Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 797,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:43.983Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 793,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:43.988Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 792,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.001Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 790,
    "y": 574
  },
  {
    "time": "2025-03-16T11:02:44.009Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 789,
    "y": 574
  },
  {
    "time": "2025-03-16T11:02:44.016Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:44.016Z",
    "event": "mouseover",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:44.017Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:44.019Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 784,
    "y": 574
  },
  {
    "time": "2025-03-16T11:02:44.033Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 781,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.050Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 779,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.057Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 778,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.065Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 777,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.093Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 776,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.098Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 775,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.109Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 774,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.130Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 772,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.145Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 771,
    "y": 575
  },
  {
    "time": "2025-03-16T11:02:44.154Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 770,
    "y": 574
  },
  {
    "time": "2025-03-16T11:02:44.162Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 768,
    "y": 574
  },
  {
    "time": "2025-03-16T11:02:44.177Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 767,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.186Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 766,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.193Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 764,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.218Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 762,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.234Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 761,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:44.430Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 760,
    "y": 572
  },
  {
    "time": "2025-03-16T11:02:44.539Z",
    "event": "mousedown",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:44.649Z",
    "event": "mouseup",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.181Z",
    "event": "mousedown",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.305Z",
    "event": "mouseup",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.655Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 759,
    "y": 571
  },
  {
    "time": "2025-03-16T11:02:45.661Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 756,
    "y": 570
  },
  {
    "time": "2025-03-16T11:02:45.667Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 754,
    "y": 569
  },
  {
    "time": "2025-03-16T11:02:45.675Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 752,
    "y": 568
  },
  {
    "time": "2025-03-16T11:02:45.684Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 750,
    "y": 566
  },
  {
    "time": "2025-03-16T11:02:45.690Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 748,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:45.697Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 747,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:45.706Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 745,
    "y": 563
  },
  {
    "time": "2025-03-16T11:02:45.712Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 744,
    "y": 561
  },
  {
    "time": "2025-03-16T11:02:45.721Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 741,
    "y": 559
  },
  {
    "time": "2025-03-16T11:02:45.729Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 740,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:45.736Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.736Z",
    "event": "mouseover",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.738Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.740Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 736,
    "y": 553
  },
  {
    "time": "2025-03-16T11:02:45.750Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 734,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:45.753Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.753Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.753Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.753Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.757Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.757Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.757Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.762Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 731,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:45.768Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 728,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:45.772Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.772Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.772Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.772Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.772Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.775Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 724,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:45.779Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 720,
    "y": 533
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseover",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.784Z",
    "event": "mouseenter",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:45.789Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 715,
    "y": 526
  },
  {
    "time": "2025-03-16T11:02:45.797Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 711,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:45.807Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 705,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:45.810Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 701,
    "y": 514
  },
  {
    "time": "2025-03-16T11:02:45.817Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 698,
    "y": 510
  },
  {
    "time": "2025-03-16T11:02:45.828Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 694,
    "y": 507
  },
  {
    "time": "2025-03-16T11:02:45.834Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 690,
    "y": 503
  },
  {
    "time": "2025-03-16T11:02:45.843Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 687,
    "y": 498
  },
  {
    "time": "2025-03-16T11:02:45.848Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 683,
    "y": 495
  },
  {
    "time": "2025-03-16T11:02:45.862Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 678,
    "y": 489
  },
  {
    "time": "2025-03-16T11:02:45.865Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 485
  },
  {
    "time": "2025-03-16T11:02:45.875Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 666,
    "y": 481
  },
  {
    "time": "2025-03-16T11:02:45.881Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 660,
    "y": 476
  },
  {
    "time": "2025-03-16T11:02:45.892Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 652,
    "y": 471
  },
  {
    "time": "2025-03-16T11:02:45.897Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 645,
    "y": 466
  },
  {
    "time": "2025-03-16T11:02:45.907Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 636,
    "y": 461
  },
  {
    "time": "2025-03-16T11:02:45.912Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 628,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:45.922Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 621,
    "y": 453
  },
  {
    "time": "2025-03-16T11:02:45.929Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 612,
    "y": 448
  },
  {
    "time": "2025-03-16T11:02:45.937Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 605,
    "y": 444
  },
  {
    "time": "2025-03-16T11:02:45.945Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 598,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:45.953Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 589,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:45.961Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 580,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:45.969Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 563,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:45.977Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 551,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:45.985Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 543,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:45.993Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 535,
    "y": 428
  },
  {
    "time": "2025-03-16T11:02:46.001Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 525,
    "y": 427
  },
  {
    "time": "2025-03-16T11:02:46.009Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 518,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.016Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 509,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.025Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 492,
    "y": 424
  },
  {
    "time": "2025-03-16T11:02:46.033Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 475,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:46.040Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 460,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:46.049Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 444,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:46.057Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:46.065Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 396,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:46.076Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 378,
    "y": 423
  },
  {
    "time": "2025-03-16T11:02:46.080Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 356,
    "y": 423
  },
  {
    "time": "2025-03-16T11:02:46.090Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 334,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 319,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.105Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 297,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.112Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 284,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 273,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.129Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 253,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.137Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 238,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:46.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 229,
    "y": 428
  },
  {
    "time": "2025-03-16T11:02:46.153Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 212,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:46.161Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 198,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:46.169Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 184,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:46.176Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 179,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:46.184Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 173,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:46.193Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 168,
    "y": 440
  },
  {
    "time": "2025-03-16T11:02:46.201Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 164,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:46.209Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 163,
    "y": 442
  },
  {
    "time": "2025-03-16T11:02:46.217Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 160,
    "y": 444
  },
  {
    "time": "2025-03-16T11:02:46.224Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 156,
    "y": 446
  },
  {
    "time": "2025-03-16T11:02:46.233Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 153,
    "y": 449
  },
  {
    "time": "2025-03-16T11:02:46.243Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 147,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:46.249Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 142,
    "y": 455
  },
  {
    "time": "2025-03-16T11:02:46.257Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 139,
    "y": 458
  },
  {
    "time": "2025-03-16T11:02:46.264Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 136,
    "y": 461
  },
  {
    "time": "2025-03-16T11:02:46.273Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 132,
    "y": 464
  },
  {
    "time": "2025-03-16T11:02:46.281Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 128,
    "y": 467
  },
  {
    "time": "2025-03-16T11:02:46.289Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 124,
    "y": 470
  },
  {
    "time": "2025-03-16T11:02:46.296Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 121,
    "y": 474
  },
  {
    "time": "2025-03-16T11:02:46.307Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 115,
    "y": 480
  },
  {
    "time": "2025-03-16T11:02:46.312Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 110,
    "y": 484
  },
  {
    "time": "2025-03-16T11:02:46.321Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 104,
    "y": 490
  },
  {
    "time": "2025-03-16T11:02:46.329Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 100,
    "y": 494
  },
  {
    "time": "2025-03-16T11:02:46.337Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 95,
    "y": 499
  },
  {
    "time": "2025-03-16T11:02:46.345Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 92,
    "y": 502
  },
  {
    "time": "2025-03-16T11:02:46.353Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 89,
    "y": 505
  },
  {
    "time": "2025-03-16T11:02:46.360Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 88,
    "y": 507
  },
  {
    "time": "2025-03-16T11:02:46.369Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 87,
    "y": 509
  },
  {
    "time": "2025-03-16T11:02:46.376Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 85,
    "y": 510
  },
  {
    "time": "2025-03-16T11:02:46.385Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 84,
    "y": 512
  },
  {
    "time": "2025-03-16T11:02:46.393Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 83,
    "y": 513
  },
  {
    "time": "2025-03-16T11:02:46.401Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 82,
    "y": 515
  },
  {
    "time": "2025-03-16T11:02:46.409Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 81,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:46.416Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:46.424Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 521
  },
  {
    "time": "2025-03-16T11:02:46.441Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 522
  },
  {
    "time": "2025-03-16T11:02:46.449Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:46.464Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 525
  },
  {
    "time": "2025-03-16T11:02:46.497Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 526
  },
  {
    "time": "2025-03-16T11:02:46.506Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:46.513Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 80,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:46.522Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 79,
    "y": 531
  },
  {
    "time": "2025-03-16T11:02:46.540Z",
    "event": "mouseleave",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.540Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.540Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.545Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.550Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 78,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:46.556Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 539
  },
  {
    "time": "2025-03-16T11:02:46.566Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:46.568Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.568Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.568Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.569Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.569Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.571Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:46.590Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:46.626Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 547
  },
  {
    "time": "2025-03-16T11:02:46.634Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:46.650Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 550
  },
  {
    "time": "2025-03-16T11:02:46.664Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.665Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.665Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.665Z",
    "event": "mouseover",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.673Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.673Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.673Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:46.675Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 551
  },
  {
    "time": "2025-03-16T11:02:46.678Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 552
  },
  {
    "time": "2025-03-16T11:02:46.686Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 553
  },
  {
    "time": "2025-03-16T11:02:46.691Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:46.706Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 556
  },
  {
    "time": "2025-03-16T11:02:46.713Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 77,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:46.792Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 76,
    "y": 559
  },
  {
    "time": "2025-03-16T11:02:46.808Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 76,
    "y": 560
  },
  {
    "time": "2025-03-16T11:02:46.817Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 76,
    "y": 561
  },
  {
    "time": "2025-03-16T11:02:46.827Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 75,
    "y": 561
  },
  {
    "time": "2025-03-16T11:02:46.834Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 74,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:46.937Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 73,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:46.954Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 72,
    "y": 563
  },
  {
    "time": "2025-03-16T11:02:46.991Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 72,
    "y": 564
  },
  {
    "time": "2025-03-16T11:02:47.058Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 71,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:47.087Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 69,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:47.150Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 68,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:47.263Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 67,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:47.279Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 65,
    "y": 565
  },
  {
    "time": "2025-03-16T11:02:47.451Z",
    "event": "mousedown",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:47.560Z",
    "event": "mouseup",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.147Z",
    "event": "mousedown",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.296Z",
    "event": "mouseup",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.659Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 65,
    "y": 563
  },
  {
    "time": "2025-03-16T11:02:48.667Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 66,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:48.675Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 68,
    "y": 560
  },
  {
    "time": "2025-03-16T11:02:48.681Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 68,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:48.689Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 69,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:48.697Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 70,
    "y": 553
  },
  {
    "time": "2025-03-16T11:02:48.705Z",
    "event": "mousemove",
    "element": "BUTTON",
    "x": 71,
    "y": 551
  },
  {
    "time": "2025-03-16T11:02:48.713Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 72,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:48.721Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.721Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.721Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.721Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.724Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.724Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.724Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.730Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 72,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:48.734Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 73,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:48.741Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 76,
    "y": 544
  },
  {
    "time": "2025-03-16T11:02:48.750Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 76,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:48.754Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.754Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.754Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.754Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.754Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.756Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 77,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:48.765Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 79,
    "y": 539
  },
  {
    "time": "2025-03-16T11:02:48.772Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 80,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:48.784Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 80,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseover",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.794Z",
    "event": "mouseenter",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:48.800Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 82,
    "y": 532
  },
  {
    "time": "2025-03-16T11:02:48.811Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 84,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:48.816Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 85,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:48.826Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 86,
    "y": 525
  },
  {
    "time": "2025-03-16T11:02:48.833Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 88,
    "y": 522
  },
  {
    "time": "2025-03-16T11:02:48.844Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 89,
    "y": 518
  },
  {
    "time": "2025-03-16T11:02:48.864Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 91,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:48.866Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 92,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:48.875Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 92,
    "y": 514
  },
  {
    "time": "2025-03-16T11:02:48.880Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 92,
    "y": 513
  },
  {
    "time": "2025-03-16T11:02:48.896Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 93,
    "y": 512
  },
  {
    "time": "2025-03-16T11:02:48.910Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 93,
    "y": 510
  },
  {
    "time": "2025-03-16T11:02:48.913Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 96,
    "y": 508
  },
  {
    "time": "2025-03-16T11:02:48.925Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 98,
    "y": 505
  },
  {
    "time": "2025-03-16T11:02:48.937Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 100,
    "y": 504
  },
  {
    "time": "2025-03-16T11:02:48.947Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 102,
    "y": 501
  },
  {
    "time": "2025-03-16T11:02:48.954Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 104,
    "y": 498
  },
  {
    "time": "2025-03-16T11:02:48.962Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 105,
    "y": 496
  },
  {
    "time": "2025-03-16T11:02:48.969Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 106,
    "y": 495
  },
  {
    "time": "2025-03-16T11:02:48.976Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 107,
    "y": 493
  },
  {
    "time": "2025-03-16T11:02:48.985Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 108,
    "y": 492
  },
  {
    "time": "2025-03-16T11:02:48.993Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 109,
    "y": 491
  },
  {
    "time": "2025-03-16T11:02:49.002Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 111,
    "y": 489
  },
  {
    "time": "2025-03-16T11:02:49.009Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 115,
    "y": 484
  },
  {
    "time": "2025-03-16T11:02:49.016Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 119,
    "y": 479
  },
  {
    "time": "2025-03-16T11:02:49.025Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 125,
    "y": 473
  },
  {
    "time": "2025-03-16T11:02:49.033Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 130,
    "y": 469
  },
  {
    "time": "2025-03-16T11:02:49.041Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 132,
    "y": 464
  },
  {
    "time": "2025-03-16T11:02:49.048Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 136,
    "y": 461
  },
  {
    "time": "2025-03-16T11:02:49.056Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 138,
    "y": 458
  },
  {
    "time": "2025-03-16T11:02:49.065Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 141,
    "y": 455
  },
  {
    "time": "2025-03-16T11:02:49.072Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 143,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:49.081Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 144,
    "y": 450
  },
  {
    "time": "2025-03-16T11:02:49.088Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 147,
    "y": 447
  },
  {
    "time": "2025-03-16T11:02:49.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 148,
    "y": 443
  },
  {
    "time": "2025-03-16T11:02:49.105Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 150,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:49.112Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 152,
    "y": 438
  },
  {
    "time": "2025-03-16T11:02:49.125Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 154,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:49.128Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 156,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:49.138Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 157,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:49.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 162,
    "y": 427
  },
  {
    "time": "2025-03-16T11:02:49.153Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 164,
    "y": 424
  },
  {
    "time": "2025-03-16T11:02:49.162Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 166,
    "y": 421
  },
  {
    "time": "2025-03-16T11:02:49.170Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 167,
    "y": 420
  },
  {
    "time": "2025-03-16T11:02:49.177Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 168,
    "y": 418
  },
  {
    "time": "2025-03-16T11:02:49.187Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 170,
    "y": 416
  },
  {
    "time": "2025-03-16T11:02:49.194Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 171,
    "y": 415
  },
  {
    "time": "2025-03-16T11:02:49.208Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 172,
    "y": 413
  },
  {
    "time": "2025-03-16T11:02:49.217Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 173,
    "y": 413
  },
  {
    "time": "2025-03-16T11:02:49.225Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 174,
    "y": 412
  },
  {
    "time": "2025-03-16T11:02:49.233Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 174,
    "y": 410
  },
  {
    "time": "2025-03-16T11:02:49.240Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 176,
    "y": 409
  },
  {
    "time": "2025-03-16T11:02:49.250Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 178,
    "y": 406
  },
  {
    "time": "2025-03-16T11:02:49.256Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 184,
    "y": 401
  },
  {
    "time": "2025-03-16T11:02:49.265Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 186,
    "y": 397
  },
  {
    "time": "2025-03-16T11:02:49.272Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 193,
    "y": 390
  },
  {
    "time": "2025-03-16T11:02:49.280Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 200,
    "y": 385
  },
  {
    "time": "2025-03-16T11:02:49.288Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 204,
    "y": 381
  },
  {
    "time": "2025-03-16T11:02:49.296Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 209,
    "y": 377
  },
  {
    "time": "2025-03-16T11:02:49.306Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 212,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:49.312Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 215,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:49.321Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 217,
    "y": 370
  },
  {
    "time": "2025-03-16T11:02:49.329Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 218,
    "y": 370
  },
  {
    "time": "2025-03-16T11:02:49.337Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 218,
    "y": 368
  },
  {
    "time": "2025-03-16T11:02:49.353Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 220,
    "y": 366
  },
  {
    "time": "2025-03-16T11:02:49.360Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 220,
    "y": 365
  },
  {
    "time": "2025-03-16T11:02:49.369Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 222,
    "y": 363
  },
  {
    "time": "2025-03-16T11:02:49.376Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 227,
    "y": 360
  },
  {
    "time": "2025-03-16T11:02:49.385Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 231,
    "y": 357
  },
  {
    "time": "2025-03-16T11:02:49.393Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 239,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:49.401Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 253,
    "y": 344
  },
  {
    "time": "2025-03-16T11:02:49.408Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 268,
    "y": 332
  },
  {
    "time": "2025-03-16T11:02:49.417Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 277,
    "y": 325
  },
  {
    "time": "2025-03-16T11:02:49.425Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 289,
    "y": 316
  },
  {
    "time": "2025-03-16T11:02:49.434Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 298,
    "y": 309
  },
  {
    "time": "2025-03-16T11:02:49.442Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 304,
    "y": 303
  },
  {
    "time": "2025-03-16T11:02:49.449Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 308,
    "y": 300
  },
  {
    "time": "2025-03-16T11:02:49.456Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 310,
    "y": 298
  },
  {
    "time": "2025-03-16T11:02:49.464Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 312,
    "y": 296
  },
  {
    "time": "2025-03-16T11:02:49.473Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 313,
    "y": 295
  },
  {
    "time": "2025-03-16T11:02:49.481Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 314,
    "y": 294
  },
  {
    "time": "2025-03-16T11:02:49.488Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 315,
    "y": 293
  },
  {
    "time": "2025-03-16T11:02:49.496Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 317,
    "y": 293
  },
  {
    "time": "2025-03-16T11:02:49.505Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 320,
    "y": 291
  },
  {
    "time": "2025-03-16T11:02:49.512Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 321,
    "y": 290
  },
  {
    "time": "2025-03-16T11:02:49.521Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 323,
    "y": 290
  },
  {
    "time": "2025-03-16T11:02:49.529Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 324,
    "y": 288
  },
  {
    "time": "2025-03-16T11:02:49.536Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 325,
    "y": 288
  },
  {
    "time": "2025-03-16T11:02:49.544Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 326,
    "y": 288
  },
  {
    "time": "2025-03-16T11:02:49.553Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 328,
    "y": 287
  },
  {
    "time": "2025-03-16T11:02:49.569Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 331,
    "y": 285
  },
  {
    "time": "2025-03-16T11:02:49.577Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 337,
    "y": 283
  },
  {
    "time": "2025-03-16T11:02:49.585Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 344,
    "y": 280
  },
  {
    "time": "2025-03-16T11:02:49.593Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 348,
    "y": 278
  },
  {
    "time": "2025-03-16T11:02:49.601Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 356,
    "y": 276
  },
  {
    "time": "2025-03-16T11:02:49.609Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 369,
    "y": 273
  },
  {
    "time": "2025-03-16T11:02:49.616Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 375,
    "y": 270
  },
  {
    "time": "2025-03-16T11:02:49.624Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 382,
    "y": 269
  },
  {
    "time": "2025-03-16T11:02:49.633Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 388,
    "y": 267
  },
  {
    "time": "2025-03-16T11:02:49.640Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 393,
    "y": 267
  },
  {
    "time": "2025-03-16T11:02:49.649Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 395,
    "y": 266
  },
  {
    "time": "2025-03-16T11:02:49.659Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 396,
    "y": 266
  },
  {
    "time": "2025-03-16T11:02:49.665Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 399,
    "y": 265
  },
  {
    "time": "2025-03-16T11:02:49.673Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 265
  },
  {
    "time": "2025-03-16T11:02:49.681Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 404,
    "y": 264
  },
  {
    "time": "2025-03-16T11:02:49.688Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 410,
    "y": 263
  },
  {
    "time": "2025-03-16T11:02:49.696Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 414,
    "y": 262
  },
  {
    "time": "2025-03-16T11:02:49.705Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 420,
    "y": 260
  },
  {
    "time": "2025-03-16T11:02:49.712Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 428,
    "y": 259
  },
  {
    "time": "2025-03-16T11:02:49.721Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 436,
    "y": 258
  },
  {
    "time": "2025-03-16T11:02:49.729Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 447,
    "y": 257
  },
  {
    "time": "2025-03-16T11:02:49.736Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 456,
    "y": 256
  },
  {
    "time": "2025-03-16T11:02:49.744Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 472,
    "y": 253
  },
  {
    "time": "2025-03-16T11:02:49.753Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 480,
    "y": 253
  },
  {
    "time": "2025-03-16T11:02:49.761Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 491,
    "y": 249
  },
  {
    "time": "2025-03-16T11:02:49.769Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 500,
    "y": 248
  },
  {
    "time": "2025-03-16T11:02:49.776Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 508,
    "y": 247
  },
  {
    "time": "2025-03-16T11:02:49.785Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 512,
    "y": 246
  },
  {
    "time": "2025-03-16T11:02:49.793Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 518,
    "y": 245
  },
  {
    "time": "2025-03-16T11:02:49.801Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 523,
    "y": 244
  },
  {
    "time": "2025-03-16T11:02:49.808Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 528,
    "y": 244
  },
  {
    "time": "2025-03-16T11:02:49.816Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 532,
    "y": 242
  },
  {
    "time": "2025-03-16T11:02:49.825Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 540,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.833Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 544,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.840Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 552,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.849Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 560,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.856Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 566,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.865Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 574,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.872Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 581,
    "y": 241
  },
  {
    "time": "2025-03-16T11:02:49.881Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 585,
    "y": 243
  },
  {
    "time": "2025-03-16T11:02:49.889Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 587,
    "y": 243
  },
  {
    "time": "2025-03-16T11:02:49.896Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 589,
    "y": 243
  },
  {
    "time": "2025-03-16T11:02:49.905Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 591,
    "y": 244
  },
  {
    "time": "2025-03-16T11:02:49.912Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 592,
    "y": 245
  },
  {
    "time": "2025-03-16T11:02:49.921Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 593,
    "y": 245
  },
  {
    "time": "2025-03-16T11:02:49.928Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 595,
    "y": 246
  },
  {
    "time": "2025-03-16T11:02:49.938Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 597,
    "y": 248
  },
  {
    "time": "2025-03-16T11:02:49.945Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 600,
    "y": 249
  },
  {
    "time": "2025-03-16T11:02:49.953Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 604,
    "y": 252
  },
  {
    "time": "2025-03-16T11:02:49.961Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 606,
    "y": 254
  },
  {
    "time": "2025-03-16T11:02:49.969Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 613,
    "y": 254
  },
  {
    "time": "2025-03-16T11:02:49.976Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 616,
    "y": 254
  },
  {
    "time": "2025-03-16T11:02:49.985Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 619,
    "y": 257
  },
  {
    "time": "2025-03-16T11:02:49.993Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 620,
    "y": 257
  },
  {
    "time": "2025-03-16T11:02:50.001Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 623,
    "y": 258
  },
  {
    "time": "2025-03-16T11:02:50.009Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 624,
    "y": 259
  },
  {
    "time": "2025-03-16T11:02:50.017Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 627,
    "y": 260
  },
  {
    "time": "2025-03-16T11:02:50.025Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 628,
    "y": 260
  },
  {
    "time": "2025-03-16T11:02:50.033Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 630,
    "y": 261
  },
  {
    "time": "2025-03-16T11:02:50.040Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 633,
    "y": 263
  },
  {
    "time": "2025-03-16T11:02:50.049Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 636,
    "y": 265
  },
  {
    "time": "2025-03-16T11:02:50.056Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 640,
    "y": 266
  },
  {
    "time": "2025-03-16T11:02:50.065Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 643,
    "y": 268
  },
  {
    "time": "2025-03-16T11:02:50.072Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 648,
    "y": 271
  },
  {
    "time": "2025-03-16T11:02:50.081Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 652,
    "y": 273
  },
  {
    "time": "2025-03-16T11:02:50.088Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 653,
    "y": 275
  },
  {
    "time": "2025-03-16T11:02:50.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 656,
    "y": 277
  },
  {
    "time": "2025-03-16T11:02:50.105Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 658,
    "y": 278
  },
  {
    "time": "2025-03-16T11:02:50.112Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 660,
    "y": 281
  },
  {
    "time": "2025-03-16T11:02:50.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 662,
    "y": 281
  },
  {
    "time": "2025-03-16T11:02:50.130Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 664,
    "y": 284
  },
  {
    "time": "2025-03-16T11:02:50.138Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 664,
    "y": 286
  },
  {
    "time": "2025-03-16T11:02:50.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 666,
    "y": 289
  },
  {
    "time": "2025-03-16T11:02:50.153Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 667,
    "y": 290
  },
  {
    "time": "2025-03-16T11:02:50.161Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 668,
    "y": 291
  },
  {
    "time": "2025-03-16T11:02:50.169Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 668,
    "y": 293
  },
  {
    "time": "2025-03-16T11:02:50.177Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 669,
    "y": 295
  },
  {
    "time": "2025-03-16T11:02:50.185Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 670,
    "y": 297
  },
  {
    "time": "2025-03-16T11:02:50.193Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 670,
    "y": 298
  },
  {
    "time": "2025-03-16T11:02:50.201Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 671,
    "y": 301
  },
  {
    "time": "2025-03-16T11:02:50.208Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 304
  },
  {
    "time": "2025-03-16T11:02:50.216Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 305
  },
  {
    "time": "2025-03-16T11:02:50.224Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 307
  },
  {
    "time": "2025-03-16T11:02:50.233Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 310
  },
  {
    "time": "2025-03-16T11:02:50.241Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 312
  },
  {
    "time": "2025-03-16T11:02:50.249Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 315
  },
  {
    "time": "2025-03-16T11:02:50.257Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 672,
    "y": 317
  },
  {
    "time": "2025-03-16T11:02:50.265Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 670,
    "y": 321
  },
  {
    "time": "2025-03-16T11:02:50.272Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 668,
    "y": 324
  },
  {
    "time": "2025-03-16T11:02:50.281Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 665,
    "y": 327
  },
  {
    "time": "2025-03-16T11:02:50.288Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 663,
    "y": 331
  },
  {
    "time": "2025-03-16T11:02:50.297Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 660,
    "y": 334
  },
  {
    "time": "2025-03-16T11:02:50.306Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 656,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:50.312Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 649,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.321Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 644,
    "y": 347
  },
  {
    "time": "2025-03-16T11:02:50.329Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 637,
    "y": 352
  },
  {
    "time": "2025-03-16T11:02:50.336Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 629,
    "y": 355
  },
  {
    "time": "2025-03-16T11:02:50.345Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 622,
    "y": 360
  },
  {
    "time": "2025-03-16T11:02:50.353Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 613,
    "y": 363
  },
  {
    "time": "2025-03-16T11:02:50.361Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 604,
    "y": 366
  },
  {
    "time": "2025-03-16T11:02:50.369Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 594,
    "y": 368
  },
  {
    "time": "2025-03-16T11:02:50.376Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 586,
    "y": 370
  },
  {
    "time": "2025-03-16T11:02:50.385Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 583,
    "y": 371
  },
  {
    "time": "2025-03-16T11:02:50.393Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 573,
    "y": 372
  },
  {
    "time": "2025-03-16T11:02:50.400Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 564,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.409Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 553,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.417Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 544,
    "y": 374
  },
  {
    "time": "2025-03-16T11:02:50.425Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 540,
    "y": 374
  },
  {
    "time": "2025-03-16T11:02:50.433Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 532,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:50.440Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 524,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:50.449Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 520,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:50.456Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 515,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:50.466Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 509,
    "y": 375
  },
  {
    "time": "2025-03-16T11:02:50.475Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 508,
    "y": 374
  },
  {
    "time": "2025-03-16T11:02:50.480Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 504,
    "y": 374
  },
  {
    "time": "2025-03-16T11:02:50.489Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 501,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.496Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 499,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.504Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 496,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.513Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 493,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:50.521Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 490,
    "y": 372
  },
  {
    "time": "2025-03-16T11:02:50.529Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 485,
    "y": 370
  },
  {
    "time": "2025-03-16T11:02:50.537Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 481,
    "y": 368
  },
  {
    "time": "2025-03-16T11:02:50.545Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 476,
    "y": 367
  },
  {
    "time": "2025-03-16T11:02:50.553Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 468,
    "y": 365
  },
  {
    "time": "2025-03-16T11:02:50.560Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 464,
    "y": 365
  },
  {
    "time": "2025-03-16T11:02:50.569Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 460,
    "y": 362
  },
  {
    "time": "2025-03-16T11:02:50.577Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 455,
    "y": 361
  },
  {
    "time": "2025-03-16T11:02:50.584Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 453,
    "y": 361
  },
  {
    "time": "2025-03-16T11:02:50.593Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 447,
    "y": 359
  },
  {
    "time": "2025-03-16T11:02:50.601Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 441,
    "y": 358
  },
  {
    "time": "2025-03-16T11:02:50.609Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 436,
    "y": 355
  },
  {
    "time": "2025-03-16T11:02:50.616Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 432,
    "y": 353
  },
  {
    "time": "2025-03-16T11:02:50.625Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 426,
    "y": 353
  },
  {
    "time": "2025-03-16T11:02:50.633Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 422,
    "y": 352
  },
  {
    "time": "2025-03-16T11:02:50.640Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 416,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:50.649Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 413,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:50.656Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 410,
    "y": 348
  },
  {
    "time": "2025-03-16T11:02:50.665Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 347
  },
  {
    "time": "2025-03-16T11:02:50.672Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 403,
    "y": 346
  },
  {
    "time": "2025-03-16T11:02:50.681Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 345
  },
  {
    "time": "2025-03-16T11:02:50.689Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 397,
    "y": 345
  },
  {
    "time": "2025-03-16T11:02:50.696Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 345
  },
  {
    "time": "2025-03-16T11:02:50.705Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 390,
    "y": 345
  },
  {
    "time": "2025-03-16T11:02:50.712Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 387,
    "y": 344
  },
  {
    "time": "2025-03-16T11:02:50.721Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 384,
    "y": 344
  },
  {
    "time": "2025-03-16T11:02:50.729Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 382,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.737Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 380,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.744Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 378,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.761Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 376,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.785Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 375,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.792Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 372,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.801Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 371,
    "y": 343
  },
  {
    "time": "2025-03-16T11:02:50.809Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 368,
    "y": 342
  },
  {
    "time": "2025-03-16T11:02:50.816Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 361,
    "y": 342
  },
  {
    "time": "2025-03-16T11:02:50.825Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 360,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:50.834Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 356,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:50.841Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 352,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:50.849Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 348,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:50.856Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 343,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:50.865Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 337,
    "y": 340
  },
  {
    "time": "2025-03-16T11:02:50.872Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 329,
    "y": 340
  },
  {
    "time": "2025-03-16T11:02:50.881Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 320,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:50.888Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 309,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:50.897Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 300,
    "y": 337
  },
  {
    "time": "2025-03-16T11:02:50.905Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 291,
    "y": 337
  },
  {
    "time": "2025-03-16T11:02:50.912Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 286,
    "y": 336
  },
  {
    "time": "2025-03-16T11:02:50.921Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 283,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:50.929Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 282,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:50.937Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 281,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:50.945Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 280,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.014Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 279,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.019Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 277,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.026Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 276,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.034Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 272,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.040Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 269,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.048Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 266,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.056Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 265,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.065Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 264,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.072Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 261,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.081Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 260,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.089Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 258,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 255,
    "y": 335
  },
  {
    "time": "2025-03-16T11:02:51.105Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 248,
    "y": 337
  },
  {
    "time": "2025-03-16T11:02:51.112Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 246,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:51.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 240,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:51.129Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 237,
    "y": 339
  },
  {
    "time": "2025-03-16T11:02:51.136Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 235,
    "y": 339
  },
  {
    "time": "2025-03-16T11:02:51.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 231,
    "y": 340
  },
  {
    "time": "2025-03-16T11:02:51.160Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 228,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:51.169Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 224,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:51.177Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 223,
    "y": 341
  },
  {
    "time": "2025-03-16T11:02:51.185Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 218,
    "y": 344
  },
  {
    "time": "2025-03-16T11:02:51.193Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 215,
    "y": 345
  },
  {
    "time": "2025-03-16T11:02:51.201Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 211,
    "y": 346
  },
  {
    "time": "2025-03-16T11:02:51.209Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 208,
    "y": 348
  },
  {
    "time": "2025-03-16T11:02:51.216Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 204,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:51.225Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 202,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:51.233Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 201,
    "y": 349
  },
  {
    "time": "2025-03-16T11:02:51.241Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 200,
    "y": 350
  },
  {
    "time": "2025-03-16T11:02:51.248Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 198,
    "y": 351
  },
  {
    "time": "2025-03-16T11:02:51.257Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 197,
    "y": 351
  },
  {
    "time": "2025-03-16T11:02:51.265Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 196,
    "y": 352
  },
  {
    "time": "2025-03-16T11:02:51.290Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 195,
    "y": 353
  },
  {
    "time": "2025-03-16T11:02:51.305Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 194,
    "y": 353
  },
  {
    "time": "2025-03-16T11:02:51.312Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 193,
    "y": 354
  },
  {
    "time": "2025-03-16T11:02:51.321Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 192,
    "y": 357
  },
  {
    "time": "2025-03-16T11:02:51.328Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 190,
    "y": 360
  },
  {
    "time": "2025-03-16T11:02:51.336Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 187,
    "y": 365
  },
  {
    "time": "2025-03-16T11:02:51.345Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 186,
    "y": 365
  },
  {
    "time": "2025-03-16T11:02:51.353Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 184,
    "y": 370
  },
  {
    "time": "2025-03-16T11:02:51.361Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 182,
    "y": 373
  },
  {
    "time": "2025-03-16T11:02:51.369Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 180,
    "y": 377
  },
  {
    "time": "2025-03-16T11:02:51.377Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 180,
    "y": 378
  },
  {
    "time": "2025-03-16T11:02:51.385Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 179,
    "y": 380
  },
  {
    "time": "2025-03-16T11:02:51.393Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 178,
    "y": 382
  },
  {
    "time": "2025-03-16T11:02:51.401Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 177,
    "y": 385
  },
  {
    "time": "2025-03-16T11:02:51.409Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 177,
    "y": 389
  },
  {
    "time": "2025-03-16T11:02:51.416Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 177,
    "y": 392
  },
  {
    "time": "2025-03-16T11:02:51.433Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 177,
    "y": 395
  },
  {
    "time": "2025-03-16T11:02:51.441Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 178,
    "y": 397
  },
  {
    "time": "2025-03-16T11:02:51.449Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 178,
    "y": 398
  },
  {
    "time": "2025-03-16T11:02:51.456Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 179,
    "y": 401
  },
  {
    "time": "2025-03-16T11:02:51.472Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 180,
    "y": 402
  },
  {
    "time": "2025-03-16T11:02:51.481Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 180,
    "y": 404
  },
  {
    "time": "2025-03-16T11:02:51.488Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 181,
    "y": 404
  },
  {
    "time": "2025-03-16T11:02:51.496Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 182,
    "y": 405
  },
  {
    "time": "2025-03-16T11:02:51.504Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 183,
    "y": 406
  },
  {
    "time": "2025-03-16T11:02:51.513Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 184,
    "y": 406
  },
  {
    "time": "2025-03-16T11:02:51.521Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 184,
    "y": 407
  },
  {
    "time": "2025-03-16T11:02:51.529Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 185,
    "y": 409
  },
  {
    "time": "2025-03-16T11:02:51.537Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 187,
    "y": 410
  },
  {
    "time": "2025-03-16T11:02:51.545Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 189,
    "y": 412
  },
  {
    "time": "2025-03-16T11:02:51.553Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 191,
    "y": 413
  },
  {
    "time": "2025-03-16T11:02:51.560Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 193,
    "y": 416
  },
  {
    "time": "2025-03-16T11:02:51.570Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 197,
    "y": 418
  },
  {
    "time": "2025-03-16T11:02:51.576Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 200,
    "y": 421
  },
  {
    "time": "2025-03-16T11:02:51.585Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 202,
    "y": 422
  },
  {
    "time": "2025-03-16T11:02:51.593Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 203,
    "y": 424
  },
  {
    "time": "2025-03-16T11:02:51.601Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 204,
    "y": 424
  },
  {
    "time": "2025-03-16T11:02:51.609Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 205,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:51.673Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 207,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:51.681Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 208,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:51.689Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 209,
    "y": 426
  },
  {
    "time": "2025-03-16T11:02:51.705Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 212,
    "y": 427
  },
  {
    "time": "2025-03-16T11:02:51.713Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 214,
    "y": 427
  },
  {
    "time": "2025-03-16T11:02:51.721Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 216,
    "y": 428
  },
  {
    "time": "2025-03-16T11:02:51.729Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 219,
    "y": 428
  },
  {
    "time": "2025-03-16T11:02:51.737Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 222,
    "y": 428
  },
  {
    "time": "2025-03-16T11:02:51.745Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 225,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.753Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 227,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.761Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 228,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.770Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 229,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.777Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 231,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.785Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 233,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.793Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 235,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:51.802Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 240,
    "y": 430
  },
  {
    "time": "2025-03-16T11:02:51.817Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 244,
    "y": 430
  },
  {
    "time": "2025-03-16T11:02:51.825Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 248,
    "y": 430
  },
  {
    "time": "2025-03-16T11:02:51.833Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 255,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:51.841Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 259,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:51.849Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 263,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:51.857Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 265,
    "y": 432
  },
  {
    "time": "2025-03-16T11:02:51.865Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 267,
    "y": 432
  },
  {
    "time": "2025-03-16T11:02:51.873Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 268,
    "y": 432
  },
  {
    "time": "2025-03-16T11:02:51.881Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 269,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.889Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 270,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.897Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 271,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.905Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 272,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.913Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 273,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.921Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 276,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.937Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 278,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:51.945Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 281,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:51.953Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 282,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:51.961Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 285,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:51.969Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 290,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:51.977Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 294,
    "y": 439
  },
  {
    "time": "2025-03-16T11:02:51.985Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 299,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:51.993Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 304,
    "y": 443
  },
  {
    "time": "2025-03-16T11:02:52.001Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 307,
    "y": 445
  },
  {
    "time": "2025-03-16T11:02:52.010Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 308,
    "y": 446
  },
  {
    "time": "2025-03-16T11:02:52.017Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 310,
    "y": 448
  },
  {
    "time": "2025-03-16T11:02:52.025Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 312,
    "y": 449
  },
  {
    "time": "2025-03-16T11:02:52.117Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 313,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:52.146Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 314,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:52.154Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 315,
    "y": 453
  },
  {
    "time": "2025-03-16T11:02:52.162Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 316,
    "y": 456
  },
  {
    "time": "2025-03-16T11:02:52.170Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 317,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:52.178Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 319,
    "y": 460
  },
  {
    "time": "2025-03-16T11:02:52.186Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 320,
    "y": 463
  },
  {
    "time": "2025-03-16T11:02:52.194Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 323,
    "y": 465
  },
  {
    "time": "2025-03-16T11:02:52.202Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 324,
    "y": 467
  },
  {
    "time": "2025-03-16T11:02:52.209Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 325,
    "y": 469
  },
  {
    "time": "2025-03-16T11:02:52.217Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 327,
    "y": 471
  },
  {
    "time": "2025-03-16T11:02:52.225Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 328,
    "y": 472
  },
  {
    "time": "2025-03-16T11:02:52.234Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 328,
    "y": 473
  },
  {
    "time": "2025-03-16T11:02:52.241Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 329,
    "y": 474
  },
  {
    "time": "2025-03-16T11:02:52.249Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 330,
    "y": 476
  },
  {
    "time": "2025-03-16T11:02:52.265Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 331,
    "y": 478
  },
  {
    "time": "2025-03-16T11:02:52.417Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 332,
    "y": 480
  },
  {
    "time": "2025-03-16T11:02:52.425Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 332,
    "y": 481
  },
  {
    "time": "2025-03-16T11:02:52.441Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 332,
    "y": 482
  },
  {
    "time": "2025-03-16T11:02:52.457Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 333,
    "y": 484
  },
  {
    "time": "2025-03-16T11:02:52.466Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 333,
    "y": 485
  },
  {
    "time": "2025-03-16T11:02:52.474Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 334,
    "y": 485
  },
  {
    "time": "2025-03-16T11:02:52.489Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 334,
    "y": 487
  },
  {
    "time": "2025-03-16T11:02:52.497Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 334,
    "y": 488
  },
  {
    "time": "2025-03-16T11:02:52.505Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 335,
    "y": 490
  },
  {
    "time": "2025-03-16T11:02:52.514Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 335,
    "y": 491
  },
  {
    "time": "2025-03-16T11:02:52.522Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 492
  },
  {
    "time": "2025-03-16T11:02:52.529Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 493
  },
  {
    "time": "2025-03-16T11:02:52.546Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 495
  },
  {
    "time": "2025-03-16T11:02:52.553Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 497
  },
  {
    "time": "2025-03-16T11:02:52.562Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 499
  },
  {
    "time": "2025-03-16T11:02:52.570Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 502
  },
  {
    "time": "2025-03-16T11:02:52.577Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 505
  },
  {
    "time": "2025-03-16T11:02:52.586Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 336,
    "y": 509
  },
  {
    "time": "2025-03-16T11:02:52.594Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 334,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:52.602Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 333,
    "y": 524
  },
  {
    "time": "2025-03-16T11:02:52.610Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 332,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:52.618Z",
    "event": "mouseleave",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.618Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.618Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.624Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.629Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 533
  },
  {
    "time": "2025-03-16T11:02:52.634Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:52.639Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:52.641Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.641Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.641Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.641Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.642Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.643Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:52.656Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:52.671Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.671Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.671Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.671Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.671Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.673Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 331,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:52.683Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 330,
    "y": 552
  },
  {
    "time": "2025-03-16T11:02:52.689Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 330,
    "y": 555
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.690Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.691Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.691Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.696Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 328,
    "y": 557
  },
  {
    "time": "2025-03-16T11:02:52.700Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 328,
    "y": 559
  },
  {
    "time": "2025-03-16T11:02:52.709Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 328,
    "y": 561
  },
  {
    "time": "2025-03-16T11:02:52.715Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 328,
    "y": 564
  },
  {
    "time": "2025-03-16T11:02:52.728Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 327,
    "y": 566
  },
  {
    "time": "2025-03-16T11:02:52.731Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 326,
    "y": 567
  },
  {
    "time": "2025-03-16T11:02:52.739Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 324,
    "y": 569
  },
  {
    "time": "2025-03-16T11:02:52.745Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 323,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:52.755Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 321,
    "y": 578
  },
  {
    "time": "2025-03-16T11:02:52.760Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 320,
    "y": 581
  },
  {
    "time": "2025-03-16T11:02:52.774Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 317,
    "y": 584
  },
  {
    "time": "2025-03-16T11:02:52.778Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 316,
    "y": 586
  },
  {
    "time": "2025-03-16T11:02:52.785Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 314,
    "y": 587
  },
  {
    "time": "2025-03-16T11:02:52.797Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 313,
    "y": 589
  },
  {
    "time": "2025-03-16T11:02:52.809Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 312,
    "y": 590
  },
  {
    "time": "2025-03-16T11:02:52.816Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 311,
    "y": 592
  },
  {
    "time": "2025-03-16T11:02:52.824Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 309,
    "y": 593
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.831Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.832Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.835Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 306,
    "y": 596
  },
  {
    "time": "2025-03-16T11:02:52.843Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 304,
    "y": 597
  },
  {
    "time": "2025-03-16T11:02:52.849Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 303,
    "y": 597
  },
  {
    "time": "2025-03-16T11:02:52.863Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 301,
    "y": 600
  },
  {
    "time": "2025-03-16T11:02:52.871Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 299,
    "y": 601
  },
  {
    "time": "2025-03-16T11:02:52.873Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 297,
    "y": 604
  },
  {
    "time": "2025-03-16T11:02:52.880Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 296,
    "y": 605
  },
  {
    "time": "2025-03-16T11:02:52.893Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 294,
    "y": 606
  },
  {
    "time": "2025-03-16T11:02:52.896Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 292,
    "y": 608
  },
  {
    "time": "2025-03-16T11:02:52.909Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 291,
    "y": 610
  },
  {
    "time": "2025-03-16T11:02:52.912Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 288,
    "y": 611
  },
  {
    "time": "2025-03-16T11:02:52.925Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 288,
    "y": 613
  },
  {
    "time": "2025-03-16T11:02:52.929Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 286,
    "y": 613
  },
  {
    "time": "2025-03-16T11:02:52.961Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 284,
    "y": 615
  },
  {
    "time": "2025-03-16T11:02:52.969Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 283,
    "y": 617
  },
  {
    "time": "2025-03-16T11:02:52.976Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 282,
    "y": 618
  },
  {
    "time": "2025-03-16T11:02:52.985Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 281,
    "y": 619
  },
  {
    "time": "2025-03-16T11:02:52.991Z",
    "event": "mouseover",
    "element": "YTD-MESSAGE-RENDERER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.991Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.991Z",
    "event": "mouseenter",
    "element": "YTD-LIVE-CHAT-FRAME",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.991Z",
    "event": "mouseenter",
    "element": "YTD-MESSAGE-RENDERER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:52.992Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 280,
    "y": 621
  },
  {
    "time": "2025-03-16T11:02:53.000Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 278,
    "y": 622
  },
  {
    "time": "2025-03-16T11:02:53.008Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 276,
    "y": 625
  },
  {
    "time": "2025-03-16T11:02:53.015Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 275,
    "y": 626
  },
  {
    "time": "2025-03-16T11:02:53.024Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 273,
    "y": 629
  },
  {
    "time": "2025-03-16T11:02:53.032Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 272,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:53.039Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 271,
    "y": 634
  },
  {
    "time": "2025-03-16T11:02:53.048Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 269,
    "y": 637
  },
  {
    "time": "2025-03-16T11:02:53.055Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 268,
    "y": 639
  },
  {
    "time": "2025-03-16T11:02:53.064Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 266,
    "y": 641
  },
  {
    "time": "2025-03-16T11:02:53.072Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 264,
    "y": 642
  },
  {
    "time": "2025-03-16T11:02:53.080Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 263,
    "y": 645
  },
  {
    "time": "2025-03-16T11:02:53.108Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 263,
    "y": 647
  },
  {
    "time": "2025-03-16T11:02:53.112Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 262,
    "y": 648
  },
  {
    "time": "2025-03-16T11:02:53.122Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 261,
    "y": 649
  },
  {
    "time": "2025-03-16T11:02:53.136Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 261,
    "y": 651
  },
  {
    "time": "2025-03-16T11:02:53.144Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 261,
    "y": 653
  },
  {
    "time": "2025-03-16T11:02:53.152Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 261,
    "y": 654
  },
  {
    "time": "2025-03-16T11:02:53.184Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 261,
    "y": 655
  },
  {
    "time": "2025-03-16T11:02:53.208Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 262,
    "y": 656
  },
  {
    "time": "2025-03-16T11:02:53.216Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 263,
    "y": 657
  },
  {
    "time": "2025-03-16T11:02:53.225Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 264,
    "y": 657
  },
  {
    "time": "2025-03-16T11:02:53.233Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 265,
    "y": 657
  },
  {
    "time": "2025-03-16T11:02:53.240Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 266,
    "y": 658
  },
  {
    "time": "2025-03-16T11:02:53.249Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 267,
    "y": 659
  },
  {
    "time": "2025-03-16T11:02:53.256Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 269,
    "y": 660
  },
  {
    "time": "2025-03-16T11:02:53.265Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 271,
    "y": 660
  },
  {
    "time": "2025-03-16T11:02:53.272Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 273,
    "y": 661
  },
  {
    "time": "2025-03-16T11:02:53.281Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 278,
    "y": 661
  },
  {
    "time": "2025-03-16T11:02:53.289Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 281,
    "y": 662
  },
  {
    "time": "2025-03-16T11:02:53.296Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 288,
    "y": 663
  },
  {
    "time": "2025-03-16T11:02:53.304Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 295,
    "y": 663
  },
  {
    "time": "2025-03-16T11:02:53.312Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 303,
    "y": 664
  },
  {
    "time": "2025-03-16T11:02:53.321Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 315,
    "y": 664
  },
  {
    "time": "2025-03-16T11:02:53.329Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 321,
    "y": 664
  },
  {
    "time": "2025-03-16T11:02:53.337Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 333,
    "y": 664
  },
  {
    "time": "2025-03-16T11:02:53.345Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 348,
    "y": 662
  },
  {
    "time": "2025-03-16T11:02:53.353Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 360,
    "y": 661
  },
  {
    "time": "2025-03-16T11:02:53.361Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 376,
    "y": 658
  },
  {
    "time": "2025-03-16T11:02:53.368Z",
    "event": "mouseover",
    "element": "YT-FORMATTED-STRING",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.368Z",
    "event": "mouseenter",
    "element": "YT-FORMATTED-STRING",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.369Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 387,
    "y": 656
  },
  {
    "time": "2025-03-16T11:02:53.376Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 394,
    "y": 653
  },
  {
    "time": "2025-03-16T11:02:53.385Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 402,
    "y": 649
  },
  {
    "time": "2025-03-16T11:02:53.392Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 415,
    "y": 647
  },
  {
    "time": "2025-03-16T11:02:53.400Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 418,
    "y": 645
  },
  {
    "time": "2025-03-16T11:02:53.409Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 422,
    "y": 644
  },
  {
    "time": "2025-03-16T11:02:53.416Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 424,
    "y": 643
  },
  {
    "time": "2025-03-16T11:02:53.425Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 427,
    "y": 643
  },
  {
    "time": "2025-03-16T11:02:53.433Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 429,
    "y": 641
  },
  {
    "time": "2025-03-16T11:02:53.440Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 431,
    "y": 641
  },
  {
    "time": "2025-03-16T11:02:53.449Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 433,
    "y": 639
  },
  {
    "time": "2025-03-16T11:02:53.456Z",
    "event": "mousemove",
    "element": "YT-FORMATTED-STRING",
    "x": 436,
    "y": 638
  },
  {
    "time": "2025-03-16T11:02:53.464Z",
    "event": "mouseleave",
    "element": "YT-FORMATTED-STRING",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.464Z",
    "event": "mouseover",
    "element": "YTD-MESSAGE-RENDERER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.465Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 441,
    "y": 634
  },
  {
    "time": "2025-03-16T11:02:53.472Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 446,
    "y": 633
  },
  {
    "time": "2025-03-16T11:02:53.480Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 451,
    "y": 629
  },
  {
    "time": "2025-03-16T11:02:53.488Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 456,
    "y": 625
  },
  {
    "time": "2025-03-16T11:02:53.496Z",
    "event": "mousemove",
    "element": "YTD-MESSAGE-RENDERER",
    "x": 463,
    "y": 621
  },
  {
    "time": "2025-03-16T11:02:53.504Z",
    "event": "mouseleave",
    "element": "YTD-MESSAGE-RENDERER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.504Z",
    "event": "mouseleave",
    "element": "YTD-LIVE-CHAT-FRAME",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.504Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.504Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.506Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 470,
    "y": 617
  },
  {
    "time": "2025-03-16T11:02:53.513Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 475,
    "y": 613
  },
  {
    "time": "2025-03-16T11:02:53.522Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 480,
    "y": 609
  },
  {
    "time": "2025-03-16T11:02:53.529Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 487,
    "y": 605
  },
  {
    "time": "2025-03-16T11:02:53.537Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 490,
    "y": 601
  },
  {
    "time": "2025-03-16T11:02:53.546Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 494,
    "y": 598
  },
  {
    "time": "2025-03-16T11:02:53.552Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.552Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.553Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.559Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 497,
    "y": 594
  },
  {
    "time": "2025-03-16T11:02:53.562Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 502,
    "y": 591
  },
  {
    "time": "2025-03-16T11:02:53.570Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 508,
    "y": 585
  },
  {
    "time": "2025-03-16T11:02:53.579Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 512,
    "y": 580
  },
  {
    "time": "2025-03-16T11:02:53.585Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 517,
    "y": 573
  },
  {
    "time": "2025-03-16T11:02:53.594Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 522,
    "y": 569
  },
  {
    "time": "2025-03-16T11:02:53.601Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 530,
    "y": 562
  },
  {
    "time": "2025-03-16T11:02:53.609Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 533,
    "y": 558
  },
  {
    "time": "2025-03-16T11:02:53.616Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 538,
    "y": 556
  },
  {
    "time": "2025-03-16T11:02:53.625Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 540,
    "y": 553
  },
  {
    "time": "2025-03-16T11:02:53.633Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 540,
    "y": 551
  },
  {
    "time": "2025-03-16T11:02:53.642Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 543,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:53.664Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.664Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.664Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.668Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.668Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.668Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.676Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 543,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.679Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.681Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 543,
    "y": 547
  },
  {
    "time": "2025-03-16T11:02:53.685Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 544,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.696Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.698Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 547,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:53.704Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 548,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:53.707Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.707Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.707Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.707Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.707Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.709Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 552,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:53.722Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 556,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseover",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.724Z",
    "event": "mouseenter",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:53.728Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 560,
    "y": 532
  },
  {
    "time": "2025-03-16T11:02:53.731Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 563,
    "y": 531
  },
  {
    "time": "2025-03-16T11:02:53.742Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 564,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:53.745Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 565,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:53.771Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 567,
    "y": 528
  },
  {
    "time": "2025-03-16T11:02:53.776Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 568,
    "y": 528
  },
  {
    "time": "2025-03-16T11:02:53.787Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 568,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:53.800Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 569,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:53.808Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 569,
    "y": 526
  },
  {
    "time": "2025-03-16T11:02:53.828Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 571,
    "y": 526
  },
  {
    "time": "2025-03-16T11:02:53.832Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 573,
    "y": 525
  },
  {
    "time": "2025-03-16T11:02:53.841Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 575,
    "y": 524
  },
  {
    "time": "2025-03-16T11:02:53.848Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 577,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:53.858Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 584,
    "y": 520
  },
  {
    "time": "2025-03-16T11:02:53.864Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 589,
    "y": 519
  },
  {
    "time": "2025-03-16T11:02:53.872Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 596,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:53.881Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 601,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:53.888Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 604,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:53.897Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 608,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:53.922Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 611,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:53.953Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 612,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:53.969Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 613,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:53.976Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 615,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:53.985Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 616,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.001Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 619,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.008Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 620,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.024Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 622,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.033Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 623,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.040Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 624,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.067Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 625,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.075Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 626,
    "y": 518
  },
  {
    "time": "2025-03-16T11:02:54.081Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 628,
    "y": 519
  },
  {
    "time": "2025-03-16T11:02:54.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 629,
    "y": 521
  },
  {
    "time": "2025-03-16T11:02:54.104Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 632,
    "y": 521
  },
  {
    "time": "2025-03-16T11:02:54.113Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 634,
    "y": 524
  },
  {
    "time": "2025-03-16T11:02:54.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 635,
    "y": 525
  },
  {
    "time": "2025-03-16T11:02:54.129Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 637,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:54.136Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 639,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:54.144Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 640,
    "y": 530
  },
  {
    "time": "2025-03-16T11:02:54.153Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 642,
    "y": 532
  },
  {
    "time": "2025-03-16T11:02:54.160Z",
    "event": "mouseleave",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.160Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.160Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.163Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.169Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 642,
    "y": 533
  },
  {
    "time": "2025-03-16T11:02:54.175Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 644,
    "y": 534
  },
  {
    "time": "2025-03-16T11:02:54.218Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 644,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:54.227Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 644,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:54.250Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 645,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:54.330Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 645,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:54.362Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 643,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:54.372Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 640,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:54.379Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.379Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.379Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.379Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.379Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.380Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 636,
    "y": 542
  },
  {
    "time": "2025-03-16T11:02:54.388Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 634,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:54.397Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 632,
    "y": 544
  },
  {
    "time": "2025-03-16T11:02:54.404Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 631,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.413Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 628,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.418Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 626,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.435Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 623,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.447Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 620,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.452Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 618,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.458Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 615,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.468Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 612,
    "y": 547
  },
  {
    "time": "2025-03-16T11:02:54.480Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 608,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.484Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 607,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.492Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 604,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.501Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 601,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.510Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 600,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.514Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 597,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.525Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 595,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.529Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 592,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.540Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 590,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.546Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 588,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.558Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 584,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.562Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 580,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.573Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 576,
    "y": 549
  },
  {
    "time": "2025-03-16T11:02:54.581Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 572,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.589Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 570,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.594Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 567,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.604Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 562,
    "y": 548
  },
  {
    "time": "2025-03-16T11:02:54.613Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 561,
    "y": 547
  },
  {
    "time": "2025-03-16T11:02:54.621Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 559,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.631Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 556,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.635Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 553,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.643Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 551,
    "y": 546
  },
  {
    "time": "2025-03-16T11:02:54.651Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 547,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.659Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 542,
    "y": 545
  },
  {
    "time": "2025-03-16T11:02:54.667Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 538,
    "y": 543
  },
  {
    "time": "2025-03-16T11:02:54.674Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.674Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.674Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.674Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.674Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.676Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 533,
    "y": 541
  },
  {
    "time": "2025-03-16T11:02:54.687Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 529,
    "y": 540
  },
  {
    "time": "2025-03-16T11:02:54.692Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 524,
    "y": 538
  },
  {
    "time": "2025-03-16T11:02:54.701Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 520,
    "y": 537
  },
  {
    "time": "2025-03-16T11:02:54.713Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 517,
    "y": 536
  },
  {
    "time": "2025-03-16T11:02:54.716Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 515,
    "y": 535
  },
  {
    "time": "2025-03-16T11:02:54.729Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 512,
    "y": 533
  },
  {
    "time": "2025-03-16T11:02:54.735Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 509,
    "y": 533
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.740Z",
    "event": "mouseover",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.741Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.741Z",
    "event": "mouseenter",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:54.746Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 506,
    "y": 532
  },
  {
    "time": "2025-03-16T11:02:54.748Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 502,
    "y": 530
  },
  {
    "time": "2025-03-16T11:02:54.754Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 497,
    "y": 529
  },
  {
    "time": "2025-03-16T11:02:54.761Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 493,
    "y": 527
  },
  {
    "time": "2025-03-16T11:02:54.773Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 488,
    "y": 526
  },
  {
    "time": "2025-03-16T11:02:54.784Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 485,
    "y": 525
  },
  {
    "time": "2025-03-16T11:02:54.790Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 483,
    "y": 524
  },
  {
    "time": "2025-03-16T11:02:54.792Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 481,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:54.801Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 480,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:54.810Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 478,
    "y": 523
  },
  {
    "time": "2025-03-16T11:02:54.817Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 477,
    "y": 522
  },
  {
    "time": "2025-03-16T11:02:54.830Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 476,
    "y": 522
  },
  {
    "time": "2025-03-16T11:02:54.833Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 472,
    "y": 521
  },
  {
    "time": "2025-03-16T11:02:54.841Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 469,
    "y": 521
  },
  {
    "time": "2025-03-16T11:02:54.849Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 466,
    "y": 519
  },
  {
    "time": "2025-03-16T11:02:54.861Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 461,
    "y": 517
  },
  {
    "time": "2025-03-16T11:02:54.864Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 457,
    "y": 516
  },
  {
    "time": "2025-03-16T11:02:54.876Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 452,
    "y": 514
  },
  {
    "time": "2025-03-16T11:02:54.880Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 446,
    "y": 513
  },
  {
    "time": "2025-03-16T11:02:54.890Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 440,
    "y": 511
  },
  {
    "time": "2025-03-16T11:02:54.896Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 436,
    "y": 509
  },
  {
    "time": "2025-03-16T11:02:54.906Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 432,
    "y": 509
  },
  {
    "time": "2025-03-16T11:02:54.917Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 427,
    "y": 507
  },
  {
    "time": "2025-03-16T11:02:54.930Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 424,
    "y": 506
  },
  {
    "time": "2025-03-16T11:02:54.934Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 420,
    "y": 506
  },
  {
    "time": "2025-03-16T11:02:54.940Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 416,
    "y": 505
  },
  {
    "time": "2025-03-16T11:02:54.945Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 502
  },
  {
    "time": "2025-03-16T11:02:54.955Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 501
  },
  {
    "time": "2025-03-16T11:02:54.964Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 393,
    "y": 498
  },
  {
    "time": "2025-03-16T11:02:54.972Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 386,
    "y": 495
  },
  {
    "time": "2025-03-16T11:02:54.977Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 379,
    "y": 493
  },
  {
    "time": "2025-03-16T11:02:54.986Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 373,
    "y": 491
  },
  {
    "time": "2025-03-16T11:02:54.992Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 368,
    "y": 489
  },
  {
    "time": "2025-03-16T11:02:55.000Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 364,
    "y": 487
  },
  {
    "time": "2025-03-16T11:02:55.008Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 360,
    "y": 485
  },
  {
    "time": "2025-03-16T11:02:55.023Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 484
  },
  {
    "time": "2025-03-16T11:02:55.028Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 356,
    "y": 482
  },
  {
    "time": "2025-03-16T11:02:55.043Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 351,
    "y": 481
  },
  {
    "time": "2025-03-16T11:02:55.049Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 350,
    "y": 480
  },
  {
    "time": "2025-03-16T11:02:55.084Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 348,
    "y": 479
  },
  {
    "time": "2025-03-16T11:02:55.165Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 347,
    "y": 479
  },
  {
    "time": "2025-03-16T11:02:55.181Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 346,
    "y": 479
  },
  {
    "time": "2025-03-16T11:02:55.221Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 345,
    "y": 478
  },
  {
    "time": "2025-03-16T11:02:55.254Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 344,
    "y": 477
  },
  {
    "time": "2025-03-16T11:02:55.294Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 343,
    "y": 477
  },
  {
    "time": "2025-03-16T11:02:55.303Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 342,
    "y": 477
  },
  {
    "time": "2025-03-16T11:02:55.368Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 341,
    "y": 477
  },
  {
    "time": "2025-03-16T11:02:55.389Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 340,
    "y": 477
  },
  {
    "time": "2025-03-16T11:02:55.445Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 339,
    "y": 476
  },
  {
    "time": "2025-03-16T11:02:55.781Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 339,
    "y": 475
  },
  {
    "time": "2025-03-16T11:02:55.909Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 339,
    "y": 474
  },
  {
    "time": "2025-03-16T11:02:55.915Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 339,
    "y": 473
  },
  {
    "time": "2025-03-16T11:02:55.922Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 340,
    "y": 472
  },
  {
    "time": "2025-03-16T11:02:55.930Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 342,
    "y": 470
  },
  {
    "time": "2025-03-16T11:02:55.938Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 345,
    "y": 467
  },
  {
    "time": "2025-03-16T11:02:55.955Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 347,
    "y": 465
  },
  {
    "time": "2025-03-16T11:02:55.962Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 349,
    "y": 464
  },
  {
    "time": "2025-03-16T11:02:55.970Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 350,
    "y": 462
  },
  {
    "time": "2025-03-16T11:02:55.977Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 352,
    "y": 461
  },
  {
    "time": "2025-03-16T11:02:55.986Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 354,
    "y": 459
  },
  {
    "time": "2025-03-16T11:02:55.993Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 356,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:56.002Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 357,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:56.009Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 359,
    "y": 456
  },
  {
    "time": "2025-03-16T11:02:56.017Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 362,
    "y": 453
  },
  {
    "time": "2025-03-16T11:02:56.034Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 364,
    "y": 452
  },
  {
    "time": "2025-03-16T11:02:56.041Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 364,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:56.049Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 366,
    "y": 450
  },
  {
    "time": "2025-03-16T11:02:56.057Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 368,
    "y": 449
  },
  {
    "time": "2025-03-16T11:02:56.066Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 369,
    "y": 448
  },
  {
    "time": "2025-03-16T11:02:56.073Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 372,
    "y": 446
  },
  {
    "time": "2025-03-16T11:02:56.082Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 372,
    "y": 445
  },
  {
    "time": "2025-03-16T11:02:56.089Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 374,
    "y": 444
  },
  {
    "time": "2025-03-16T11:02:56.097Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 376,
    "y": 443
  },
  {
    "time": "2025-03-16T11:02:56.105Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 379,
    "y": 442
  },
  {
    "time": "2025-03-16T11:02:56.113Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 379,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:56.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 380,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:56.129Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 381,
    "y": 440
  },
  {
    "time": "2025-03-16T11:02:56.137Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 382,
    "y": 440
  },
  {
    "time": "2025-03-16T11:02:56.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 384,
    "y": 439
  },
  {
    "time": "2025-03-16T11:02:56.161Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 386,
    "y": 439
  },
  {
    "time": "2025-03-16T11:02:56.278Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 387,
    "y": 438
  },
  {
    "time": "2025-03-16T11:02:56.408Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 388,
    "y": 438
  },
  {
    "time": "2025-03-16T11:02:56.450Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 388,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:56.466Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 390,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:56.526Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 391,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:56.535Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:56.622Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:56.631Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 393,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:56.643Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 395,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:56.649Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 395,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:56.664Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 396,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:56.706Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 397,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:56.722Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 398,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:56.730Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 435
  },
  {
    "time": "2025-03-16T11:02:56.746Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:56.754Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 401,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:56.857Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 402,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.911Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 403,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.919Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 404,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.972Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 407,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.982Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.989Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 409,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:56.994Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 411,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:57.002Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 412,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:57.009Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 413,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:57.016Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 434
  },
  {
    "time": "2025-03-16T11:02:57.025Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 416,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:57.033Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 418,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:57.040Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 420,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:57.049Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 421,
    "y": 438
  },
  {
    "time": "2025-03-16T11:02:57.057Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 421,
    "y": 439
  },
  {
    "time": "2025-03-16T11:02:57.065Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 421,
    "y": 440
  },
  {
    "time": "2025-03-16T11:02:57.073Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 422,
    "y": 441
  },
  {
    "time": "2025-03-16T11:02:57.089Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 422,
    "y": 443
  },
  {
    "time": "2025-03-16T11:02:57.096Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 421,
    "y": 445
  },
  {
    "time": "2025-03-16T11:02:57.104Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 420,
    "y": 448
  },
  {
    "time": "2025-03-16T11:02:57.113Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 418,
    "y": 449
  },
  {
    "time": "2025-03-16T11:02:57.121Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 418,
    "y": 451
  },
  {
    "time": "2025-03-16T11:02:57.129Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 416,
    "y": 453
  },
  {
    "time": "2025-03-16T11:02:57.137Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 453
  },
  {
    "time": "2025-03-16T11:02:57.145Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 413,
    "y": 454
  },
  {
    "time": "2025-03-16T11:02:57.153Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 412,
    "y": 456
  },
  {
    "time": "2025-03-16T11:02:57.161Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 410,
    "y": 456
  },
  {
    "time": "2025-03-16T11:02:57.169Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.177Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 406,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.185Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 404,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.193Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 403,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.201Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 402,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.209Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.217Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 397,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.224Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 396,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.233Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 395,
    "y": 457
  },
  {
    "time": "2025-03-16T11:02:57.241Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 393,
    "y": 456
  },
  {
    "time": "2025-03-16T11:02:57.249Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 391,
    "y": 454
  },
  {
    "time": "2025-03-16T11:02:57.257Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 388,
    "y": 452
  },
  {
    "time": "2025-03-16T11:02:57.265Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 387,
    "y": 450
  },
  {
    "time": "2025-03-16T11:02:57.273Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 384,
    "y": 448
  },
  {
    "time": "2025-03-16T11:02:57.281Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 382,
    "y": 446
  },
  {
    "time": "2025-03-16T11:02:57.289Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 380,
    "y": 444
  },
  {
    "time": "2025-03-16T11:02:57.297Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 376,
    "y": 440
  },
  {
    "time": "2025-03-16T11:02:57.304Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 372,
    "y": 437
  },
  {
    "time": "2025-03-16T11:02:57.313Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 372,
    "y": 436
  },
  {
    "time": "2025-03-16T11:02:57.321Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 369,
    "y": 433
  },
  {
    "time": "2025-03-16T11:02:57.329Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 368,
    "y": 431
  },
  {
    "time": "2025-03-16T11:02:57.337Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 367,
    "y": 429
  },
  {
    "time": "2025-03-16T11:02:57.344Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 365,
    "y": 425
  },
  {
    "time": "2025-03-16T11:02:57.353Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 363,
    "y": 418
  },
  {
    "time": "2025-03-16T11:02:57.361Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 361,
    "y": 414
  },
  {
    "time": "2025-03-16T11:02:57.369Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 360,
    "y": 405
  },
  {
    "time": "2025-03-16T11:02:57.376Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 360,
    "y": 401
  },
  {
    "time": "2025-03-16T11:02:57.385Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 394
  },
  {
    "time": "2025-03-16T11:02:57.393Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 386
  },
  {
    "time": "2025-03-16T11:02:57.401Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 378
  },
  {
    "time": "2025-03-16T11:02:57.409Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 367
  },
  {
    "time": "2025-03-16T11:02:57.417Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 358,
    "y": 353
  },
  {
    "time": "2025-03-16T11:02:57.425Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 359,
    "y": 338
  },
  {
    "time": "2025-03-16T11:02:57.433Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 360,
    "y": 317
  },
  {
    "time": "2025-03-16T11:02:57.440Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 363,
    "y": 297
  },
  {
    "time": "2025-03-16T11:02:57.449Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 367,
    "y": 276
  },
  {
    "time": "2025-03-16T11:02:57.456Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 375,
    "y": 251
  },
  {
    "time": "2025-03-16T11:02:57.465Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 382,
    "y": 226
  },
  {
    "time": "2025-03-16T11:02:57.473Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 391,
    "y": 209
  },
  {
    "time": "2025-03-16T11:02:57.481Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 202
  },
  {
    "time": "2025-03-16T11:02:57.491Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 195
  },
  {
    "time": "2025-03-16T11:02:57.497Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 399,
    "y": 177
  },
  {
    "time": "2025-03-16T11:02:57.505Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 401,
    "y": 164
  },
  {
    "time": "2025-03-16T11:02:57.513Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 404,
    "y": 154
  },
  {
    "time": "2025-03-16T11:02:57.521Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 145
  },
  {
    "time": "2025-03-16T11:02:57.529Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 412,
    "y": 133
  },
  {
    "time": "2025-03-16T11:02:57.536Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 413,
    "y": 128
  },
  {
    "time": "2025-03-16T11:02:57.545Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 123
  },
  {
    "time": "2025-03-16T11:02:57.553Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 120
  },
  {
    "time": "2025-03-16T11:02:57.561Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 119
  },
  {
    "time": "2025-03-16T11:02:57.585Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 415,
    "y": 118
  },
  {
    "time": "2025-03-16T11:02:57.601Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 414,
    "y": 117
  },
  {
    "time": "2025-03-16T11:02:57.609Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 412,
    "y": 117
  },
  {
    "time": "2025-03-16T11:02:57.617Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 410,
    "y": 117
  },
  {
    "time": "2025-03-16T11:02:57.625Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 409,
    "y": 117
  },
  {
    "time": "2025-03-16T11:02:57.694Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 408,
    "y": 117
  },
  {
    "time": "2025-03-16T11:02:57.736Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 404,
    "y": 115
  },
  {
    "time": "2025-03-16T11:02:57.743Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 401,
    "y": 113
  },
  {
    "time": "2025-03-16T11:02:57.748Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 400,
    "y": 112
  },
  {
    "time": "2025-03-16T11:02:57.756Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 398,
    "y": 110
  },
  {
    "time": "2025-03-16T11:02:57.764Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 396,
    "y": 107
  },
  {
    "time": "2025-03-16T11:02:57.770Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 394,
    "y": 104
  },
  {
    "time": "2025-03-16T11:02:57.776Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 393,
    "y": 97
  },
  {
    "time": "2025-03-16T11:02:57.785Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 392,
    "y": 85
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.792Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.796Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 391,
    "y": 62
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseleave",
    "element": "YTD-WATCH-FLEXY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseleave",
    "element": "YTD-PAGE-MANAGER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseenter",
    "element": "YTD-MASTHEAD",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.799Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.800Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 391,
    "y": 50
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseover",
    "element": "INPUT",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseenter",
    "element": "YT-SEARCHBOX",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseenter",
    "element": "FORM",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.807Z",
    "event": "mouseenter",
    "element": "INPUT",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.809Z",
    "event": "mousemove",
    "element": "INPUT",
    "x": 391,
    "y": 30
  },
  {
    "time": "2025-03-16T11:02:57.816Z",
    "event": "mouseleave",
    "element": "INPUT",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.816Z",
    "event": "mouseleave",
    "element": "FORM",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.816Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.817Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 389,
    "y": 13
  },
  {
    "time": "2025-03-16T11:02:57.828Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.828Z",
    "event": "mouseleave",
    "element": "YT-SEARCHBOX",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.828Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.828Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.829Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 388,
    "y": 0
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "YTD-MASTHEAD",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "YTD-APP",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "BODY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "HTML",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:02:57.836Z",
    "event": "mouseleave",
    "element": "undefined",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "undefined",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "HTML",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "BODY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "YTD-APP",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "YTD-MASTHEAD",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.578Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.581Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 626,
    "y": 5
  },
  {
    "time": "2025-03-16T11:03:08.589Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 626,
    "y": 5
  },
  {
    "time": "2025-03-16T11:03:08.593Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "YT-SEARCHBOX",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "YT-ICON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "SPAN",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.595Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.604Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 638,
    "y": 23
  },
  {
    "time": "2025-03-16T11:03:08.608Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.608Z",
    "event": "mouseleave",
    "element": "SPAN",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "YT-ICON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "BUTTON",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "YT-SEARCHBOX",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "YTD-MASTHEAD",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseenter",
    "element": "YTD-PAGE-MANAGER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseenter",
    "element": "YTD-WATCH-FLEXY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.609Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.613Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 676,
    "y": 66
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseover",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.619Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.620Z",
    "event": "mouseenter",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.620Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.620Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.620Z",
    "event": "mouseenter",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.620Z",
    "event": "mouseenter",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.629Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 686,
    "y": 82
  },
  {
    "time": "2025-03-16T11:03:08.635Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 720,
    "y": 129
  },
  {
    "time": "2025-03-16T11:03:08.638Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 735,
    "y": 156
  },
  {
    "time": "2025-03-16T11:03:08.640Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 750,
    "y": 194
  },
  {
    "time": "2025-03-16T11:03:08.652Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 772,
    "y": 229
  },
  {
    "time": "2025-03-16T11:03:08.666Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 811,
    "y": 301
  },
  {
    "time": "2025-03-16T11:03:08.676Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 834,
    "y": 343
  },
  {
    "time": "2025-03-16T11:03:08.683Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 850,
    "y": 380
  },
  {
    "time": "2025-03-16T11:03:08.690Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 866,
    "y": 414
  },
  {
    "time": "2025-03-16T11:03:08.697Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 888,
    "y": 444
  },
  {
    "time": "2025-03-16T11:03:08.708Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 898,
    "y": 465
  },
  {
    "time": "2025-03-16T11:03:08.720Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 914,
    "y": 482
  },
  {
    "time": "2025-03-16T11:03:08.725Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 922,
    "y": 497
  },
  {
    "time": "2025-03-16T11:03:08.738Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 929,
    "y": 513
  },
  {
    "time": "2025-03-16T11:03:08.741Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 933,
    "y": 521
  },
  {
    "time": "2025-03-16T11:03:08.747Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 936,
    "y": 529
  },
  {
    "time": "2025-03-16T11:03:08.755Z",
    "event": "mousemove",
    "element": "VIDEO",
    "x": 940,
    "y": 536
  },
  {
    "time": "2025-03-16T11:03:08.759Z",
    "event": "mouseleave",
    "element": "VIDEO",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.759Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.759Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "YTD-PLAYER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.760Z",
    "event": "mouseover",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.768Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 942,
    "y": 543
  },
  {
    "time": "2025-03-16T11:03:08.774Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 945,
    "y": 550
  },
  {
    "time": "2025-03-16T11:03:08.776Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 949,
    "y": 561
  },
  {
    "time": "2025-03-16T11:03:08.789Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 954,
    "y": 572
  },
  {
    "time": "2025-03-16T11:03:08.792Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 956,
    "y": 577
  },
  {
    "time": "2025-03-16T11:03:08.803Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 959,
    "y": 584
  },
  {
    "time": "2025-03-16T11:03:08.812Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 962,
    "y": 592
  },
  {
    "time": "2025-03-16T11:03:08.822Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 963,
    "y": 595
  },
  {
    "time": "2025-03-16T11:03:08.824Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 963,
    "y": 597
  },
  {
    "time": "2025-03-16T11:03:08.834Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 964,
    "y": 606
  },
  {
    "time": "2025-03-16T11:03:08.841Z",
    "event": "mousemove",
    "element": "DIV",
    "x": 965,
    "y": 612
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "YTD-WATCH-FLEXY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "YTD-PAGE-MANAGER",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "DIV",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "YTD-APP",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseleave",
    "element": "BODY",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.846Z",
    "event": "mouseover",
    "element": "HTML",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.847Z",
    "event": "mousemove",
    "element": "None",
    "x": 968,
    "y": 621
  },
  {
    "time": "2025-03-16T11:03:08.855Z",
    "event": "mousemove",
    "element": "None",
    "x": 972,
    "y": 629
  },
  {
    "time": "2025-03-16T11:03:08.870Z",
    "event": "mousemove",
    "element": "None",
    "x": 975,
    "y": 638
  },
  {
    "time": "2025-03-16T11:03:08.875Z",
    "event": "mousemove",
    "element": "None",
    "x": 977,
    "y": 642
  },
  {
    "time": "2025-03-16T11:03:08.887Z",
    "event": "mousemove",
    "element": "None",
    "x": 978,
    "y": 645
  },
  {
    "time": "2025-03-16T11:03:08.888Z",
    "event": "mousemove",
    "element": "None",
    "x": 980,
    "y": 649
  },
  {
    "time": "2025-03-16T11:03:08.895Z",
    "event": "mouseleave",
    "element": "HTML",
    "x": null,
    "y": null
  },
  {
    "time": "2025-03-16T11:03:08.895Z",
    "event": "mouseleave",
    "element": "undefined",
    "x": null,
    "y": null
  }
]
  });

  // Optionally, log that the data has been stored
  console.log("Tracking data saved to local storage.");
});
