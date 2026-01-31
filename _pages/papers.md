---
layout: page
title: papers
permalink: /papers/
description: Papers and preprints.
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

<!-- _pages/papers.md -->
<div class="projects">
{% if page.display_categories and page.display_categories.size > 0 %}
  <!-- Display categorized papers -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_items = site.papers | where: "category", category %}
  {% assign sorted_items = categorized_items | sort: "importance" %}
  <!-- Generate cards for each paper -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_items %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_items %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display papers without categories -->

{% assign sorted_items = site.papers | sort: "importance" %}

  <!-- Generate cards for each paper -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_items %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_items %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
