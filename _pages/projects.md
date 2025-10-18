---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
nav_order: 3
horizontal: false
---

A look at the projects I’m working on as part of my research in [the lab](https://www.mscilab.com)

<!-- Projects page styling -->
<style>
/* Project container & grid */
.projects-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.project-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem; /* space between cards */
}

.project-card {
    border: 0px solid rgba(0,0,0,0.00);
    border-radius: 6px;
    transition: all 0.2s ease;
    flex: 1 1 0;
}

.project-card .card-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
}

.project-card .card-text {
    font-size: 0.85rem;
    color: #6c757d;
    line-height: 1.4;
}

.project-card .card-body {
    padding: 0.9rem;
}

.project-card .card-img-top {
    height: 140px;
    object-fit: cover;
}

.project-subtitle {
    font-size: 0.95rem;
    color: #6c757d;
    margin-bottom: 0.8rem;
    font-style: italic;
}
</style>

<div class="projects">

{% if site.enable_project_categories and page.display_categories %}

  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>
    {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
    <div class="projects-container">
      <p class="project-subtitle">Projects in {{ category }}</p>
      <div class="project-grid">
        {% if page.horizontal %}
          {% for project in categorized_projects %}
            <div class="project-card">
              {% include projects_horizontal.liquid %}
            </div>
          {% endfor %}
        {% else %}
          {% for project in categorized_projects %}
            <div class="project-card">
              {% include projects.liquid %}
            </div>
          {% endfor %}
        {% endif %}
      </div>
    </div>
  {% endfor %}

{% else %}

  <!-- Display all projects without categories -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="projects-container">
    <div class="project-grid">
      {% if page.horizontal %}
        {% for project in sorted_projects %}
          <div class="project-card">
            {% include projects_horizontal.liquid %}
          </div>
        {% endfor %}
      {% else %}
        {% for project in sorted_projects %}
          <div class="project-card">
            {% include projects.liquid %}
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>

{% endif %}

</div>
