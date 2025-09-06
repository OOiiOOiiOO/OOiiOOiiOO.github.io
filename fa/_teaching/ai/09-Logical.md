---
title: "Logic Gates with Perceptrons"
collection: teaching
permalink: /teaching/ai/logic1
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
---


# Implementing Logic Gates with Perceptrons

Perceptrons can be used to implement basic **logic gates** such as AND, OR, and NOT.  
This is an important step to understand how simple neurons can perform computations.

---

## 1. AND Gate

Truth table:

| $$x_1$$ | $$x_2$$ | AND |
|---------|---------|-----|
| 0       | 0       | 0   |
| 0       | 1       | 0   |
| 1       | 0       | 0   |
| 1       | 1       | 1   |

Choose weights and bias:  

- $$ w_1 = 1 $$, $$ w_2 = 1 $$, $$ b = -1.5 $$

Computation:

$$
z = (1 \cdot x_1) + (1 \cdot x_2) - 1.5
$$

$$
y =
\begin{cases}
1 & \text{if } z \geq 0 \\
0 & \text{if } z < 0
\end{cases}
$$


![Forward pass](/images/ai21.png)  


✅ Works exactly like the AND gate.

---

## 2. OR Gate

Truth table:

| $$x_1$$ | $$x_2$$ | OR |
|---------|---------|----|
| 0       | 0       | 0  |
| 0       | 1       | 1  |
| 1       | 0       | 1  |
| 1       | 1       | 1  |

Choose weights and bias:  

- $$ w_1 = 1 $$, $$ w_2 = 1 $$, $$ b = -0.5 $$

Computation:

$$
z = (1 \cdot x_1) + (1 \cdot x_2) - 0.5
$$


![Forward pass](/images/ai22.png)  


✅ Works exactly like the OR gate.

---

## 3. NOT Gate

Truth table:

| $$x$$ | NOT($$x$$) |
|-------|------------|
| 0     | 1          |
| 1     | 0          |

Choose weight and bias:  

- $$ w = -1 $$, $$ b = 0.5 $$

Computation:

$$
z = (-1 \cdot x) + 0.5
$$


![Forward pass](/images/ai22.png)  

✅ Works exactly like the NOT gate.

---

## Key Insight

- Logic gates are the **building blocks of digital circuits**.  
- Perceptrons can perfectly simulate AND, OR, and NOT.  
- By combining these gates, we can construct more complex operations (like XOR).  

---

## ✅ Summary

- **AND, OR, NOT** can be implemented using perceptrons with carefully chosen weights and biases.  
- This shows the computational power of simple neural units.  
- Next: We will introduce **Multi-Layer Perceptrons (MLPs)** and see how they can solve **XOR**.  



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/mp1' | relative_url }}">⬅︎ Previous: Mini project 1 </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/logic1' | relative_url }}">Next: Homework 3 ➡︎</a>
</div>

