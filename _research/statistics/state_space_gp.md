---
title:    State Space Gaussian Processes
category: statistics
order:    1
blurb:    "When working with the EPRV solar datasets, I ran into a problem. The exposure lengths were too similar to the p-mode timescales, which we traditionally model with a GP that assumes instantaneous timestamps. Combining data from multiple instruments added a second problem: exposure overlap. Integrating the covariance matrix gives the right answer, but in O(N<sup>3</sup>) time [(Luhn, Rubenzahl et al. 2026)](https://iopscience.iop.org/article/10.3847/1538-3881/ae5d38), which is intractable for the solar data (~100,000 RVs). Instead, [So Hattori](https://github.com/soichiro-hattori) and I found an alternative but equivalent formulation using the state space representation of GPs, which treats the process as a state evolving according to its governing stochastic differential equation (SDE <-> the kernel function in traditional GP language). Since the SDE defines the state and its derivatives, we added an integral state to model the effects of exposures. This way, we get the same answer, but in O(N) time."
image:    /images/ss_vs_gp_integrated_Ninst2.png
image_alt: "Numerical proof of equivalence showing the state space integrated GP matches the full integrated covariance matrix to machine precision."
link:     "https://iopscience.iop.org/article/10.3847/1538-3881/ae4d0b"
link_text: Read the paper (Rubenzahl & Hattori et al. 2026)
---

<!-- PLACEHOLDER body text for **State Space GPs**. Longer description goes here. -->
