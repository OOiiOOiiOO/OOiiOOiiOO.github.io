---
title: "Homework 3"
collection: teaching
permalink: /teaching/ai/hw3
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
---




# Homework – Logic Gates with Perceptrons

---

## Q1. NAND Gate (3 pts)

Truth table:

| $$x_1$$ | $$x_2$$ | NAND |
|-------|-------|------|
| 0     | 0     | 1    |
| 0     | 1     | 1    |
| 1     | 0     | 1    |
| 1     | 1     | 0    |

**Task:**  
- Find suitable weights and bias $$(w_1, w_2, b)$$ for a perceptron that implements NAND.  
- Show your calculations for at least 2 rows of the truth table.  

---


## Q2. Combination Gate (4 pts)

**Task:**  
Design a perceptron (or a combination of perceptrons) that implements the function:  

$$
y = (x_1 \, \text{AND} \, x_2) \, \text{OR} \, (\text{NOT}(x_1))
$$

- Write the truth table (all 4 input cases).  
- Show which perceptrons (AND, OR, NOT) you combine to get the final output.  

---





<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/logic1' | relative_url }}">⬅︎ Previous: Logic Gates with Perceptrons </a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/xor' | relative_url }}">Next: Solving XOR with a Multi-Layer Perceptron ➡︎</a>
</div>

