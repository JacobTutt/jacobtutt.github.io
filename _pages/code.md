---
layout: page
permalink: /code/
title: Code
description: Selected research software for scientific computing and 21-cm cosmology.
nav: true
nav_order: 3
---

Two of these active research repositories are currently private. Public releases will follow when the associated work is ready.

<div class="projects mt-4">
  <div class="card mb-4">
    <div class="row no-gutters align-items-center">
      <div class="col-md-4">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/jaxmg_logo.png" sizes="(min-width: 768px) 280px, 90vw" alt="JAXMg logo" class="card-img" %}
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">JAXMg</h2>
          <p><strong>Open source</strong> · Python · JAX · C++/CUDA · XLA FFI</p>
          <p>JAXMg brings distributed dense linear algebra to JAX by connecting JIT-compiled programs to NVIDIA's cuSOLVERMp library. It provides multi-GPU and multi-node linear solves and matrix decompositions for problems exceeding a single GPU's memory. I co-developed the package and its distributed execution model.</p>
          <p><a href="https://github.com/flatironinstitute/jaxmg">GitHub</a> · <a href="https://flatironinstitute.github.io/jaxmg/latest/">Documentation</a> · <a href="https://arxiv.org/abs/2601.14466">Paper</a></p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-4">
    <div class="row no-gutters align-items-center">
      <div class="col-md-4">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/gpu_cluster.jpeg" sizes="(min-width: 768px) 280px, 90vw" alt="GPU computing cluster" class="card-img" %}
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">REACH GPU Data Analysis Pipeline</h2>
          <p><strong>Private · active research</strong> · Python · JAX · BlackJAX · HEALPix · GPU/HPC</p>
          <p>An end-to-end simulation and Bayesian inference pipeline for global 21-cm cosmology. I developed the JAX and BlackJAX implementation to combine sky, foreground, signal, beam, and noise models with GPU-accelerated nested sampling, enabling large validation studies and evidence-based model comparison.</p>
          <p><a href="https://doi.org/10.1093/mnras/stag1101">Related paper</a></p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-4">
    <div class="row no-gutters align-items-center">
      <div class="col-md-4">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/radio_image.png" sizes="(min-width: 768px) 280px, 90vw" alt="Radio astronomy data processing illustration" class="card-img" %}
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">BayesEoR-JAX</h2>
          <p><strong>Private · active research</strong> · Python · JAX · JAXMg · Bayesian inference · radio interferometry</p>
          <p>A JAX implementation and extension of BayesEoR for estimating the redshifted 21-cm Epoch of Reionization power spectrum from interferometric visibilities. My work adds differentiable, hardware-accelerated forward modelling, JAXMg-backed marginalised likelihoods, and multi-device execution.</p>
          <p><a href="https://github.com/PSims/BayesEoR">Original BayesEoR</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
