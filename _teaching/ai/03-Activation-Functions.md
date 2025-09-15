---
title: "Activation Functions in Neural Networks"
collection: teaching
permalink: /teaching/ai/activation-functions
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
lang: en
alt_lang: fa
alt_url: /teaching/ai-fa/activation-functions
---

# Activation Functions

Artificial Neural Networks (ANNs) are powerful because they can approximate **non-linear functions**.  
Without activation functions, no matter how many layers we stack, the network remains equivalent to a **single linear transformation**. This means it cannot model complex relationships such as image patterns, voice signals, or decision boundaries.

Activation functions introduce **non-linearity** into the network, enabling it to capture highly complex mappings from inputs to outputs. Each function has unique properties, advantages, and disadvantages.

---

## 1. Linear Function

**Formula:**

$$
f(x) = x
$$

**Example:**

$$
f(2.5) = 2.5
$$

**Pros:**
- Very simple, no vanishing gradient.  

**Cons:**
- Cannot model non-linear data.  
- Useless for deep hidden layers.  

![General Formula](/images/ai5.avif)
---

## 2. Sigmoid Function

**Formula:**

$$
f(x) = \frac{1}{1 + e^{-x}}
$$

**Examples:**

$$
f(0) = 0.5
$$

$$
f(2) \approx 0.88
$$

$$
f(-3) \approx 0.047
$$

**Pros:**
- Smooth curve, differentiable everywhere.  
- Good probabilistic interpretation.  

**Cons:**
- Vanishing gradient for large $$ x $$.  
- Not zero-centered.  

![General Formula](/images/ai11.ppm)


---

## 3. Hyperbolic Tangent (Tanh)

**Formula:**

$$
f(x) = \tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

**Examples:**

$$
f(0) = 0
$$

$$
f(1) \approx 0.76
$$

$$
f(-2) \approx -0.96
$$

**Pros:**
- Zero-centered → faster convergence.  
- Stronger gradients than sigmoid for small $$ x $$.  

**Cons:**
- Still suffers from vanishing gradients for very large $$ x $$.  

![General Formula](/images/ai7.png)

---

## 4. Rectified Linear Unit (ReLU)

**Formula:**

$$
f(x) = \max(0, x)
$$

**Examples:**

$$
f(-3) = 0
$$

$$
f(2.5) = 2.5
$$

**Pros:**
- Computationally efficient.  
- Reduces vanishing gradient problem.  

**Cons:**
- "Dead neuron" problem (neurons stuck at zero).  

![General Formula](/images/ai8.png)

---

## 5. Leaky ReLU

**Formula:**

$$
f(x) =
\begin{cases}
x & \text{if } x \geq 0 \\
\alpha x & \text{if } x < 0
\end{cases}
$$

**Example (with $\alpha = 0.01$):**

$$
f(-5) = -0.05, \quad f(3) = 3
$$

**Pros:**
- Prevents dead neurons.  
- Retains advantages of ReLU.  

**Cons:**
- Slightly more complex than ReLU.  

![General Formula](/images/ai9.png)

---

## 6. Softmax Function

**Formula:**

$$
f(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}
$$

**Example:**

Input scores: $[2.0, 1.0, 0.1]$

$$
f(2.0) = \frac{e^2}{e^2 + e^1 + e^{0.1}} \approx 0.71
$$

$$
f(1.0) \approx 0.26, \quad f(0.1) \approx 0.03
$$

**Pros:**
- Normalizes outputs into probabilities.  
- Essential for multi-class classification.  

**Cons:**
- Computationally more expensive.  
- Sensitive to large input values.  

![General Formula](/images/ai10.png)


---

## 📊 Comparison Table

| Function   | Formula | Range | Pros | Cons |
|------------|---------|-------|------|------|
| Linear     | \(f(x) = x\) | \((-\infty, \infty)\) | Simple, regression | No non-linearity |
| Sigmoid    | \(f(x) = \frac{1}{1+e^{-x}}\) | \([0,1]\) | Probabilities | Vanishing gradient |
| Tanh       | \(f(x) = \tanh(x)\) | \([-1,1]\) | Zero-centered | Vanishing gradient |
| ReLU       | \(f(x) = \max(0,x)\) | \([0,\infty)\) | Fast, widely used | Dead neurons |
| Softmax    | \(f(z_i) = \frac{e^{z_i}}{\sum_j e^{z_j}}\) | \([0,1]\), sum=1 | Multi-class probs | Computationally heavy |

---


# Final Comparison

| Function     | Range             | Pros | Cons |
|--------------|------------------|------|------|
| Linear       | $(-\infty,\infty)$ | Simple | Cannot model non-linearity |
| Sigmoid      | $(0,1)$        | Probabilistic interpretation | Vanishing gradient, not zero-centered |
| Tanh         | $(-1,1)$       | Zero-centered, smoother learning | Vanishing gradients |
| ReLU         | $[0,\infty)$   | Efficient, popular | Dead neurons |
| Leaky ReLU   | $(-\infty,\infty)$ | Fixes dead neurons | More complex |
| Softmax      | $(0,1)$        | Probabilities sum to 1 | Expensive, unstable for large values |

---

## ✅ Summary

- Activation functions bring **non-linearity**.  
- Choice depends on the **task** (classification, regression, etc.).  
- **ReLU** is the default for deep learning.  
- **Softmax** is used for multi-class outputs.  

---



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/mathmaticalnl' | relative_url }}">⬅︎ Previous: Mathematical Model of a Neuron </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/multi-class' | relative_url }}">Next: Multi-class Classification ➡︎</a>
</div>