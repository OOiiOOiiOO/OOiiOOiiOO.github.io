---
title: "Mathematical Model of a Neuron"
collection: teaching
type: "Course Module"
permalink: /teaching/ai/mathmaticalnl
course: "Artificial Intelligence"
order: 1
layout: course
lang: en
---


Artificial neurons are simplified mathematical models inspired by biological neurons.  
They take **inputs**, apply **weights**, add a **bias**, and then pass the result through an **activation function**.

### General Formula

$$
y = f\left(\sum_{i=1}^{n} w_i x_i + b\right)
$$

**Where:**
- $$ x_i $$ → inputs  
- $$ w_i $$ → weights  
- $$ b $$ → bias  
- $$ f $$ → activation function  

---
![General Formula](/images/ai3.png)


### Step-by-Step Example
## Worked Example: Artificial Neuron

Suppose we have a neuron with two inputs:

- **Inputs:**

$$
x_1 = 0.6, \quad x_2 = 0.9
$$

- **Weights:**

$$
w_1 = 0.5, \quad w_2 = 0.8
$$

- **Bias:**

$$
b = -0.4
$$

- **Activation function:** Sigmoid

---

### Step 1: Weighted sum (net input)

$$
z = (w_1 x_1) + (w_2 x_2) + b
$$

**Substitution and simplification:**

$$
\begin{aligned}
z &= (0.5 \times 0.6) + (0.8 \times 0.9) - 0.4 \\
  &= 0.3 + 0.72 - 0.4 \\
  &= 0.62
\end{aligned}
$$

---

### Step 2: Apply activation function (Sigmoid)

$$
f(z) = \frac{1}{1 + e^{-z}}
$$

Substitute \( z = 0.62 \):

$$
f(0.62) \approx \frac{1}{1 + e^{-0.62}} \approx 0.65
$$

---

### Final Output
✅
$$
y \approx 0.65
$$

---


![Artificial Neuron Model](/images/ai4.png)



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/introduction' | relative_url }}">⬅︎ Previous: Introduction to Neural Networks </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/activation-functions' | relative_url }}">Next: Activation Functions ➡︎</a>
</div>