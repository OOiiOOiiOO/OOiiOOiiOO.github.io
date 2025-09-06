---
title: "Introduction to Artificial Neural Networks (ANNs)"
collection: teaching
permalink: /teaching/ai/anns
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
lang: en
alt_lang: fa
alt_url: /teaching/ai-fa/anns
---
# Introduction to Artificial Neural Networks (ANNs)

Artificial Neural Networks (ANNs) are computational models inspired by the **structure and function of the human brain**.  
They are designed to recognize patterns, learn from data, and make predictions.

---

## Structure of a Neural Network

A typical ANN is organized into **layers**:

1. **Input Layer** – receives raw data (features).  
2. **Hidden Layers** – process information by applying weights, biases, and activation functions.  
3. **Output Layer** – produces the final prediction (e.g., classification label or regression value).

![Neural Network Layers](/images/ai24.jpg)  
*Figure 1: Example of input, hidden, and output layers.*

---

## Forward Propagation

Data flows from the input layer through hidden layers to the output layer.  
Each neuron computes:

$$
z = \sum_{i=1}^n w_i x_i + b
$$

and applies an activation function:

$$
y = f(z)
$$

Where:  
- $$ x_i $$ → input values  
- $$ w_i $$ → corresponding weights  
- $$ b $$ → bias  
- $$ f$ $ → activation function  
- $$ y $$ → neuron output  

![Neural Network Layers](/images/ai25.png)  

---

## Example: A Simple Neural Network

Suppose we want to predict whether a student passes or fails based on **hours studied** ($x_1$) and **sleep hours** ($x_2$).

- Inputs: $x_1 = 5$ (study hours), $x_2 = 7$ (sleep hours)  
- Weights: $w_1 = 0.6$, $w_2 = 0.4$  
- Bias: $b = -2$  
- Activation function: Sigmoid  

**Step 1: Weighted sum**

$$
z = (w_1 \cdot x_1) + (w_2 \cdot x_2) + b
$$

$$
z = (0.6 \cdot 5) + (0.4 \cdot 7) - 2 = 3 + 2.8 - 2 = 3.8
$$

**Step 2: Apply activation**

$$
y = \frac{1}{1 + e^{-z}}
$$

$$
y = \frac{1}{1 + e^{-3.8}} \approx 0.978
$$

✅ Final output: $y \approx 0.98$ → The student is very likely to **pass**.

---

## Key Insights

- **Weights** determine importance of inputs.  
- **Bias** shifts the activation threshold.  
- **Activation functions** add non-linearity, enabling learning of complex relationships.  
- ANNs can approximate almost any function with enough hidden layers and neurons (Universal Approximation Theorem).

![Neuron Functioning](/images/ai26.png)  
*Figure 2: A single neuron with inputs, weights, bias, and activation function.*

---

## ✅ Summary

- ANNs are inspired by the brain but simplified.  
- They consist of **layers of neurons** with weights, biases, and activation functions.  
- Forward propagation passes data through the network to make predictions.  
- With training, ANNs adjust weights to minimize prediction error.  





<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/multi-class' | relative_url }}">⬅︎ Previous: Multi-class Classification </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/hw1' | relative_url }}">Next: Homework 1 ➡︎</a>
</div>