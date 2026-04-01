---
layout: page
permalink: /papers/
title: Papers
description: Papers and preprints.
nav: true
nav_order: 2
---

<!-- _pages/papers.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2>First Author</h2>

{% bibliography --file papers --query @*[first_author=true] %}

<h2>Collaborating Author</h2>

{% bibliography --file papers --query @*[first_author!=true] %}

</div>
