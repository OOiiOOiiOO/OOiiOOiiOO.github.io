---
title: "Introduction to Neural Networks"
collection: teaching
type: "Course Module"
permalink: /teaching/ai/introduction
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
lang: en
alt_lang: fa
alt_url: /teaching/ai-fa/introductionfa
---


# Introduction to Neural Networks

Artificial Intelligence often draws inspiration from the **human brain**. One of the most important concepts is the *neuron*. To understand Artificial Neural Networks (ANNs), we first compare **biological neurons** with their **artificial counterparts**.

---

## Biological vs. Artificial Neurons

- **Biological neuron**:  
  - Receives signals from other neurons through dendrites  
  - Processes the signal in the cell body  
  - Sends an output signal through the axon  

- **Artificial neuron**:  
  - Inputs: numerical values (features)  
  - Processing: weighted sum of inputs  
  - Output: passes through an **activation function**  

![Biological vs Artificial Neuron](/images/ai1.webp)

---
## Mathematical Model of a Neuron

The output of an artificial neuron can be written as:

$$
y = f\left(\sum_{i=1}^{n} w_i x_i + b\right)
$$

**Where:**
- $$ x_i $$ → inputs  
- $$ w_i $$ → weights  
- $$ b $$ → bias  
- $$ f $$ → activation function  
  

---

### Activation Functions

Since the weighted sum alone is linear, we need an activation function to introduce non-linearity.

- **Linear:**  
  $$
  f(x) = x
  $$

- **Sigmoid:**  
  $$
  f(x) = \frac{1}{1+e^{-x}}
  $$

- **Tanh:**  
  $$
  f(x) = \tanh(x)
  $$

- **ReLU:**  
  $$
  f(x) = \max(0, x)
  $$

---


![graphs of activation functions](/images/ai2.avif)


---

## Summary

- Artificial neurons are simplified models inspired by biological neurons.  
- Each neuron computes a weighted sum of inputs, adds a bias, and applies an activation function.  
- Activation functions are key to enabling neural networks to model complex, nonlinear relationships.  

---

## References

- Slides provided in class  
- Recommended Reading: Goodfellow et al., *Deep Learning* (Chapter 6)



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--primary" href="{{ '/teaching/ai/mathmaticalnl' | relative_url }}">Next: Mathematical Model of a Neuron ➡︎</a>
</div>