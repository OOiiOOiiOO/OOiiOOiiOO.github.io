---
title: "Solving XOR with a Multi-Layer Perceptron"
collection: teaching
permalink: /teaching/ai/xor
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
lang: en
---



# Solving XOR with a Multi-Layer Perceptron (MLP)

The **XOR** (exclusive OR) function outputs 1 when **exactly one** of the inputs is 1, otherwise 0.  
It is the classic example of a problem that a **single perceptron cannot solve**, but an **MLP with one hidden layer** can.



![XOR table](/images/ai19.png)

---


## 1) XOR Truth Table

| $$x_1$$ | $$x_2$$ | XOR |
|:-------:|:-------:|:---:|
| 0       | 0       | 0   |
| 0       | 1       | 1   |
| 1       | 0       | 1   |
| 1       | 1       | 0   |

![XOR table](/images/ai12.png)  
*Figure: XOR truth table.*

---

## 2) Why a Single Perceptron Fails (Not Linearly Separable)

A perceptron draws a single linear boundary:

$$
y =
\begin{cases}
1 & \text{if } \mathbf{w}^\top \mathbf{x} + b \ge 0 \\
0 & \text{otherwise.}
\end{cases}
$$

For XOR, the positive points $$(0,1)$$ and $$(1,0)$$ are on opposite corners, and the negative points $$(0,0)$$ and $$(1,1)$$ are the other two corners.  
No single straight line can separate positives from negatives.

![Not linearly separable](/images/ai13.webp)  
*Figure: XOR points cannot be separated by one line.*


![Not linearly separable](/images/ai14.png)  


---

## 3) Idea: Decompose XOR into Simpler Gates

A useful identity:

$$
\text{XOR}(x_1,x_2) \;=\; \big(\,x_1 \lor x_2\,\big) \;\land\; \big(\,\lnot(x_1 \land x_2)\,\big).
$$

So with **two hidden neurons** we can compute:

- $$h_1 = \text{OR}(x_1,x_2)$$  
- $$h_2 = \text{NAND}(x_1,x_2)$$  

Then the **output** is:

$$
y = \text{AND}(h_1, h_2).
$$

This is exactly a **2-hidden-unit MLP** (hidden: $$h_1,h_2$$; output: $$y$$).

![MLP architecture](/images/ai15.png)  
*Figure: MLP with two hidden neurons computing OR and NAND, then AND at the output.*

---

## 4) Perceptron-Style Weights (Step Activation)

We can set weights/biases to emulate **OR**, **NAND**, and **AND** with step activation.

- **OR**: $$w_1=1,\; w_2=1,\; b=-0.5$$  
- **NAND**: $$w_1=-1,\; w_2=-1,\; b=1.5$$  
- **AND** (output): $$v_1=1,\; v_2=1,\; b_{\text{out}}=-1.5$$  

Hidden layer:

$$
h_1 = \mathbb{1}\!\left(1\cdot x_1 + 1\cdot x_2 - 0.5 \ge 0\right) = \text{OR}(x_1,x_2),
$$

$$
h_2 = \mathbb{1}\!\left(-1\cdot x_1 - 1\cdot x_2 + 1.5 \ge 0\right) = \text{NAND}(x_1,x_2).
$$

Output:

$$
y = \mathbb{1}\!\left(1\cdot h_1 + 1\cdot h_2 - 1.5 \ge 0\right) = \text{AND}(h_1,h_2).
$$

You can verify each of the four inputs $$(0,0),(0,1),(1,0),(1,1)$$ yields the correct XOR.

![Hidden regions](/images/ai16.png)  
*Figure: Hidden units carve the plane into regions that make XOR separable.*

---

## 5) Smooth MLP with Sigmoid (Logistic) Activation

To get differentiability (for gradient descent), replace the step with the **sigmoid**:

$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$

A practical “logic-like” parameter set that approximates XOR (inputs $$x_1,x_2 \in \{0,1\}$$):

**Hidden layer (2 neurons):**
- $$h_1 \approx \text{OR}: \quad w^{(1)}_{1} = [\,20,\;20\,],\; b^{(1)}_{1} = -10$$  
- $$h_2 \approx \text{NAND}: \quad w^{(1)}_{2} = [\,-20,\,-20\,],\; b^{(1)}_{2} = 30$$  

**Output layer (AND of $$h_1,h_2$$):**
- $$w^{(2)} = [\,20,\;20\,],\; b^{(2)} = -30$$  

Forward pass:

Hidden pre-activations:

$$
z^{(1)}_k = \sum_{i=1}^2 w^{(1)}_{k,i} x_i + b^{(1)}_{k}, 
\qquad h_k = \sigma\!\big(z^{(1)}_k\big),\quad k\in\{1,2\}.
$$

Output:

$$
z^{(2)} = \sum_{k=1}^2 w^{(2)}_{k} h_k + b^{(2)}, 
\qquad \hat{y} = \sigma\!\big(z^{(2)}\big).
$$

**Check one input** $$(x_1,x_2)=(1,0)$$:

- $$z^{(1)}_1 = 20(1)+20(0)-10 = 10 \;\Rightarrow\; h_1 \approx \sigma(10) \approx 0.99995$$  
- $$z^{(1)}_2 = -20(1)-20(0)+30 = 10 \;\Rightarrow\; h_2 \approx 0.99995$$  
- $$z^{(2)} = 20(0.99995) + 20(0.99995) - 30 \approx 9.999 \;\Rightarrow\; \hat{y} \approx 0.99995 \approx 1$$  

By symmetry, you’ll get $$\hat{y}\approx 1$$ for $$(0,1)$$, and $$\hat{y}\approx 0$$ for $$(0,0)$$ and $$(1,1)$$.  
(Using large weights makes sigmoid behave like a sharp logic gate.)

![Forward pass](/images/ai17.png)  
*Figure: Forward pass through the XOR network.*



![XOR table](/images/ai20.jpg)
---

## 6) Training Outline (If You Want to Learn the Weights)

Define the 4 training examples:

$$
\mathcal{D}=\{([0,0],0),([0,1],1),([1,0],1),([1,1],0)\}
$$

Use cross-entropy loss with sigmoid output:

$$
\mathcal{L}(\theta) = -\frac{1}{4}\sum_{(x,y)\in\mathcal{D}}
\Big[y\log \hat{y} + (1-y)\log(1-\hat{y})\Big]
$$

where $$\hat{y}=\sigma(z^{(2)})$$ is the model prediction and $$\theta$$ denotes all weights/biases.  

Train with **gradient descent / backpropagation** until convergence.

![Forward pass](/images/ai18.png)  

---

## 7) Key Takeaways

- XOR is **not linearly separable**, so a single perceptron cannot solve it.  
- An MLP with **one hidden layer of 2 neurons** can solve XOR by composing simpler gates.  
- With sigmoids, **large weights** approximate logic behavior; with training, the model learns such parameters automatically.  

---




<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/hw3' | relative_url }}">⬅︎ Previous: Logic Gates with Perceptrons </a>
</div>

