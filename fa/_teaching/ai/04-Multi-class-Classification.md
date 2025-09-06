---
title: "Multi-class Classification"
collection: teaching
permalink: /teaching/ai/multi-class
course: "Artificial Intelligence"
order: 1
mathjax: true
use_math: true
layout: course
---
---
title: "Introduction to Artificial Neural Networks"
layout: course
permalink: /teaching/ai/introduction/
---

# 📘 Introduction to Artificial Neural Networks (ANN)

Artificial Neural Networks (ANNs) are computational models inspired by the structure and function of the human brain. They consist of interconnected units called **neurons**, organized in layers, which transform inputs into outputs through weighted connections and activation functions.  

---

## 🏗 Structure of a Neural Network

A basic ANN typically has three types of layers:  

- **Input Layer**: Receives the input features $$(x_1, x_2, \dots, x_n)$$.  
- **Hidden Layers**: Intermediate layers that learn abstract representations.  
- **Output Layer**: Produces the final prediction $$\hat{y}$$.  

---

## 🔢 Neuron Model (Perceptron)

Each neuron performs a weighted sum of its inputs and applies an activation function:  

$$
z = \sum_{i=1}^{n} w_i x_i + b
$$

$$
y = f(z)
$$

Where:  
- $$x_i$$: inputs  
- $$w_i$$: weights  
- $$b$$: bias  
- $$f$$: activation function  

---

## ⚡ Activation Functions

Activation functions introduce non-linearity, allowing the network to approximate complex functions. Common ones include:  

- **Sigmoid**:  
  $$
  \sigma(z) = \frac{1}{1 + e^{-z}}
  $$

- **Tanh**:  
  $$
  \tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
  $$

- **ReLU (Rectified Linear Unit)**:  
  $$
  f(z) = \max(0, z)
  $$

---

## 🐱🐶 Example: Simple Classification

Suppose we want to classify whether an image is a **Cat 🐱** or a **Dog 🐶**.  

- **Input Layer**: pixel intensities of the image.  
- **Hidden Layer**: neurons that detect simple patterns (edges, shapes).  
- **Output Layer**: 2 neurons →  
  - Neuron 1 → probability(cat) = $$\hat{y}_1$$  
  - Neuron 2 → probability(dog) = $$\hat{y}_2$$  

If the network outputs:  

$$
\hat{y} = [0.3, \ 0.7]
$$

✅ The model predicts **Dog 🐶**, because $$\hat{y}_2 = 0.7$$ is the maximum.  

---

## 📊 Multi-Class Classification (Extension)

For $$K$$ classes, the output layer has $$K$$ neurons. The **softmax function** is used to convert raw scores into probabilities:  

$$
\hat{y}_i = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}}, \quad i=1,2,\dots,K
$$

Example: classifying an image as **Cat 🐱**, **Dog 🐶**, or **Rabbit 🐰**.  

- Output:  
  $$
  \hat{y} = [0.1, \ 0.7, \ 0.2]
  $$  

✅ The network predicts **Dog 🐶** since $$\hat{y}_2 = 0.7$$.  

---

## 🔧 Learning in Neural Networks

The network learns by adjusting weights $$w_i$$ and bias $$b$$ to minimize a **loss function**.  

For example, Mean Squared Error (MSE):  

$$
\mathcal{L} = \frac{1}{N}\sum_{i=1}^N (y_i - \hat{y}_i)^2
$$

Its gradient with respect to weights:  

$$
\nabla_w \mathcal{L} = -\frac{2}{N}\sum_{i=1}^N (y_i - \hat{y}_i)\,x_i
$$

---



<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/activation-functions' | relative_url }}">⬅︎ Previous: Activation Functions in Neural Networks</a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/anns' | relative_url }}">Next: Introduction to Artificial Neural Networks (ANNs) ➡︎</a>
</div>