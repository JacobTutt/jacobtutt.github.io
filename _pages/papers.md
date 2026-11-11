---
layout: page
permalink: /papers/
title: Papers
description: Research papers, preprints and science writing.
nav: true
nav_order: 2
---

<!-- _pages/papers.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2>First-author papers</h2>

{% bibliography --file papers --query @*[author_role=first] %}

<h2>Contributing-author papers</h2>

{% bibliography --file papers --query @*[author_role=contributing] %}

<h2>Collaboration papers</h2>

{% bibliography --file papers --query @*[author_role=collaboration] %}

</div>

## Science writing

### [Cosmology’s Needle in a Haystack: Tuning Into the Faintest Whisper of the Early Universe]({{ '/assets/pdf/tutt_bevins_2026_bluesci.pdf' | relative_url }})

Jacob Tutt and Harry Bevins. _BlueSci_, Issue 63, 2026, pp. 44–45.
