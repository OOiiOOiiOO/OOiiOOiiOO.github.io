---
title: "Homework 1"
collection: teaching
permalink: /teaching/ai/hw1
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
---



# Homework 1 – Introduction to Neural Networks

---

## Q1. Conceptual (2 pts)

**Q:**  
- What is the role of **weights** in a neuron?  
- Why do we need an **activation function** instead of using only linear combinations of inputs?  
 
---

## Q2. Numerical (3 pts)

**Q:**  
Inputs: $x_1 = 2$, $x_2 = 3$  
Weights: $w_1 = 0.4$, $w_2 = 0.6$  
Bias: $b = -1$  
Activation: Sigmoid  

1. Compute weighted sum:  

$$
z = w_1 x_1 + w_2 x_2 + b
$$  

2. Compute final output:  

$$
y = \frac{1}{1 + e^{-z}}
$$  

---

## Q3. Applied (5 pts)

**Q:**  
Suppose you are classifying emails as spam (1) or not spam (0) using two features:  

- $x_1 =$ number of suspicious keywords  
- $x_2 =$ length of email  

Design a simple neural network and explain how weights affect predictions.  


---



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/anns' | relative_url }}">⬅︎ Previous: Introduction to Artificial Neural Networks (ANNs) </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/hw2' | relative_url }}">Next: Homework 2 ➡︎</a>
</div>