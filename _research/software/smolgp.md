---
title:    smolgp
category: software
order:    1
blurb:    "smolgp is a Python/JAX library that enables fast and lightweight Gaussian process modeling by using their state space representation. Uniquely, smolgp can handle integrated measurements (even from multiple instruments that overlap in time!) - which must be accounted for if exposure times are comparable to the timescale of the process - in O(N), while traditional methods are O(N^3). smolgp also has the only true scalable implementation of the quasiperiodic kernel loved throughout astronomy. Derivative observations, multivariate observations, multicomponent GPs, predicting out of sample points, and drawing prior or posterior samples are all fast and convenient, and you can even parallelize on GPU to get even faster likelihoods and conditioned means and variances!"
image:    /images/smolgp-logo.png
image_alt: "The smolgp logo"
link:     "https://smolgp.readthedocs.io/"
link_text: View the docs
links:
  - text:  Learn the math
    entry: state_space_gp
---
