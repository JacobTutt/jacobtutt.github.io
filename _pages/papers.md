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

<h2>Science writing</h2>

{% bibliography --file papers --query @*[author_role=science_writing] %}

</div>
