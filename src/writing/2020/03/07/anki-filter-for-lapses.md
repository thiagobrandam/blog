---
title: How to filter for lapses on Anki 2
date: 2020-03-07
published: true
section: writing
tags: ["anki", "rtk"]
slug: anki-filter-for-lapses
description: How to filter card properties (like "lapses") using Anki 2 (Desktop version)
---

It's been 2 months since I've begun studying kanji using [MIA's Recognition RTK Deck](https://massimmersionapproach.com/table-of-contents/stage-1/practice/recognition-rtk/) on Anki 2. As is natural to happen, I've fallen victim to my own memories shortcomings and have forgotten some cards I thought I had already mastered.

Now, if I forget some cards too often, Anki marks those cards as leeches, based on a metric called lapse. Lapse is how many times I unlearned a card. When a certain threshold of lapses occur, Anki marks that card as a leech, and you have to deal with it manually (either by coming up with a better mnemonic or discarding that card altogether).

If you choose the fixing route, then it's not enough to fix the card. You have to manually remove the "leech" tag and reset that card. Resetting is fundamental because you rebuilt the card, creating a potential new learning path in your brain when Anki shows that card to you.

To reset the card, I use Anki filters and look for cards for which the lapse is above the current deck threshold, like this:

![Filtering Lapses in Anki](./images/anki-filters.png)

[Here](https://docs.ankiweb.net/#/searching?id=card-properties)'s a complete reference on how to use filters in Anki.
