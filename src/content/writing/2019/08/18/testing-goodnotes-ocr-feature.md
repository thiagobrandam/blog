---
title: Testing GoodNotes' OCR feature
date: 2019-08-18
published: true
section: writing
tags: ['meta']
slug: testing-goodnotes-ocr-feature
description: A blog post to test GoodNotes' OCR feature
---

[GoodNotes](https://www.goodnotes.com/) is a fantastic note-taking app made for iPad. It's a simple app that substitutes the use of physical notes it's particularly useful to organize your thoughts into structured virtual spaces. Not only that, but you can even import PDF files and make notes on them, as you would do on real books, but with way less guilt. It also has seamless integration with Apple Pencil though you can use the app without it (the experience is way more comfortable if you have one though).

Anyway, I've been using GoodNotes on my daily job at [Classpert](https://classpert.com) to track down our activities and to brainstorm product ideas and I realized how much I prefer hand-writing. It's faster than typing to me due to my fat fingers and dislexia. I wrote the first blog post using GoodNotes and then manually digitalized the whole text, much to my grief, completely ignorant that it had an OCR feature builtin. Then when I found out it had one, I decided to test it and see how it would play out. 

Here's a note written on GoodNotes (including front-matter):

![GoodNotes' showcasing of OCR](./images/goodnotes.jpeg)

Here's what GoodNotes' OCR engine ended up producing:

~~~text
---
title: Testing Good notes' OCR
feature
date: 2019-08-18
published: the
section: writing
tags: C' meta']
slug: toting-good notes-our-feature
description: A blog post to test
food notes' OCR feature
---
This blog post was generated
using Good notes' OCR feature on
the following note:
~~~

All in all, not that bad considering that
my handwriting is terrible (it mistakes the word "true" for "the" in the front-matter "published" field due to indistinguishable letters) and some non-alphanumerical characters are actually good guesses in a algorithmic sense (the bracket being OCRed to letter C). The main content was actually spot on.

I also added the front-matter to see how far I could get with eventual integration between GoodNotes and my blog project, but I think for the time being I'm going to stick to  writing the contents only on my iPad and leaving the meta stuff creation on my desktop, given the not so satisfactory results. I might add some integration in the future, but I think with content writing hurdles out of the way, there's no techonological excuse and I should focus on writing things more geared to humans rather than machines :)