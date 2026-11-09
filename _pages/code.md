---
layout: page
permalink: /code/
title: Code
description: Research software for scalable inference, distributed GPU linear algebra and 21-cm cosmology.
nav: true
nav_order: 3
---

Below are some of the research software projects I develop and contribute to. A fuller list is on my [GitHub](https://github.com/JacobTutt).

<hr>

<div class="code-entry">
  <div class="code-img">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/jaxmg_logo.png" alt="JAXMg logo" zoomable=true avoid_scaling=true %}
  </div>
  <h3>JAXMg</h3>
  <p class="code-links">
    <i class="fa-brands fa-github"></i> <a href="https://github.com/flatironinstitute/jaxmg">github/flatironinstitute/jaxmg</a>
    &nbsp;|&nbsp; <i class="fa-solid fa-book"></i> <a href="https://flatironinstitute.github.io/jaxmg/latest/">docs</a>
    &nbsp;|&nbsp; <i class="fa-solid fa-file-lines"></i> <a href="https://arxiv.org/abs/2601.14466">paper</a>
    &nbsp;&nbsp;<a href="https://github.com/flatironinstitute/jaxmg/stargazers" class="code-badge"><img src="https://img.shields.io/github/stars/flatironinstitute/jaxmg?style=social" alt="GitHub stars"></a>
  </p>
  <p class="code-stack">Python · JAX · C++/CUDA · XLA FFI</p>
  <p>JAXMg started when both Roeland Wiersema at the Flatiron Institute and I found ourselves bottlenecked by the same problem in completely different domains of computational physics. Roeland needed to solve the large dense linear systems that arise in variational Monte Carlo for quantum many-body physics (see e.g. <a href="https://arxiv.org/abs/2603.18148">Wan, Wiersema &amp; Zhang 2026</a>), while I needed them for large-scale Bayesian inference workflows in cosmology. In both cases, there was no way to scale these solves across multiple GPUs without leaving JAX.</p>
  <p>JAXMg connects JIT-compiled JAX programs to NVIDIA's cuSOLVERMp. You pass in an ordinary sharded JAX array and get back distributed linear solves and eigenvalue, singular-value and QR decompositions, on matrices approaching the combined memory of every GPU you have. It has since grown into a general tool used across computational science, from the large dense systems behind computational electromagnetics to tensor networks and time-dependent variational Monte Carlo. It is also now fully integrated into <a href="https://www.netket.org/">NetKet</a>.</p>
</div>

<hr>

<div class="code-entry">
  <div class="code-img">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/beam_surrogate_pipeline.png" alt="REACH GPU forward model and inference workflow" zoomable=true avoid_scaling=true %}
  </div>
  <h3>REACH GPU Data Analysis Pipeline</h3>
  <p class="code-links">
    <i class="fa-solid fa-lock"></i> private repository (active research)
    &nbsp;|&nbsp; <i class="fa-brands fa-github" aria-hidden="true"></i> <a href="https://github.com/JacobTutt/global-21cm-inference-benchmark">benchmark repository</a>
  </p>
  <p class="code-stack">Python · JAX · BlackJAX · Nested Sampling · Neural Emulation · Multi-GPU</p>
  <p>Detecting the global 21-cm signal means pulling a signal of a few hundred millikelvin out from under foregrounds around ten thousand times brighter, all seen through an antenna whose response is never perfectly known. Doing that credibly means modelling and propagating all uncertainties through the whole observational chain, which with conventional simulators simply isn't feasible.</p>
  <p>This pipeline makes it tractable for REACH by replacing each expensive simulator with a learned, physically motivated surrogate: a neural emulator for the cosmological signal, a multi-resolution foreground model anchored to radio sky maps, and an antenna beam compressed into a 100-dimensional latent space whose linearity lets its uncertainty be marginalised analytically. Together these run around 10<sup>7</sup> times faster than the original simulators, turning hundreds of CPU-years of analysis into about two GPU-days.</p>
  <p class="code-papers-title">Related papers</p>
  <ul class="code-papers">
    <li><a href="https://doi.org/10.1093/mnras/stag1101">Optimising Foreground Modelling for Global 21cm Cosmology with GPU-Accelerated Nested Sampling</a> <span class="code-venue">MNRAS, 2026</span></li>
    <li><a href="https://arxiv.org/abs/2608.18962">Towards end-to-end Bayesian forward models in global 21-cm cosmology: surrogate modelling and marginalisation of beam uncertainty</a> <span class="code-venue">In review at MNRAS</span></li>
    <li><a href="{{ '/assets/pdf/tutt_2026_sim2sci.pdf' | relative_url }}">A Cross-Domain Simulator and Benchmark for Uncertainty Quantification in Global 21-cm Inference</a> <span class="code-venue">Sim2Science, NeurIPS 2026</span></li>
    <li><a href="https://arxiv.org/abs/2606.16525">Scalable Bayesian data curation for next-generation radio experiments</a> <span class="code-venue">In review at MNRAS</span></li>
    <li><a href="https://arxiv.org/abs/2603.26489">Conditional Neural Bayes Ratio Estimation for Experimental Design Optimisation</a> <span class="code-venue">In review at IEEE TNNLS</span></li>
  </ul>
</div>

<hr>

<div class="code-entry">
  <div class="code-img">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/bayeseor_pipeline.png" alt="BayesEoR forward model and inference workflow" zoomable=true avoid_scaling=true %}
  </div>
  <h3>BayesEoR-v2</h3>
  <p class="code-links">
    <i class="fa-solid fa-lock"></i> private repository (active research)
    &nbsp;|&nbsp; <i class="fa-brands fa-github"></i> <a href="https://github.com/PSims/BayesEoR">original BayesEoR</a>
  </p>
  <p class="code-stack">Python · JAX · JAXMg · Nested Sampling · Distributed Linear Algebra · Multi-GPU</p>
  <p>Recovering the 21-cm power spectrum from interferometric visibilities is fundamentally a problem of scale. Physically motivated, wide-field forward models can require 10<sup>4</sup>–10<sup>6</sup> parameters, and while analytical marginalisation removes the need to sample them, it shifts the bottleneck to the likelihood itself: each evaluation requires a dense linear solve scaling as 𝒪(N<sup>3</sup>), precisely the class of problem JAXMg was designed for.</p>
  <p>BayesEoR-v2 addresses this by reformulating the inference in a statistically optimal, observation-specific latent space. A noise-informed Karhunen–Loève decomposition of the prior-predictive foreground covariance retains only the modes resolvable above the thermal noise, so the dimensionality of the problem reflects the information content of the data rather than the resolution of the model. Constructed once with JAXMg's distributed solvers, the basis is amortised across all subsequent likelihood evaluations, reducing a full-sky analysis from over 300,000 to under 10,000 parameters and bringing joint power-spectrum and evidence evaluation down to around 20 GPU-minutes.</p>
  <p class="code-papers-title">Related papers</p>
  <ul class="code-papers">
    <li><a href="{{ '/assets/pdf/tutt_2026_bayeseor.pdf' | relative_url }}">An Optimal Latent Space for Amortised Bayesian Uncertainty Quantification and Evidence Evaluation in Interferometric Visibilities</a> <span class="code-venue">In preparation</span></li>
  </ul>
</div>
