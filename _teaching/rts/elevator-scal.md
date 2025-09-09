---
title: "Elevator Scheduling Algorithms in Real-Time Systems"
collection: teaching
type: "Course Module"
permalink: /teaching/rts/elevator-scheduling
course: "Real-Time Systems"
order: 6
mathjax: true
use_math: true
layout: course
lang: en
alt_lang: fa
alt_url: /teaching/rts-fa/elevator-scheduling
---

# Elevator Scheduling Algorithms in Real-Time Systems

Scheduling is one of the most important concepts in **real-time systems (RTS)**.  
To make it easier to understand, the **elevator** example is widely used. The elevator is just like a *shared resource* that has to respond to multiple requests.  

In this lesson, we explain different scheduling algorithms with very simple and everyday examples.  

---

## Why is scheduling important?
Imagine you are in a bread queue 🍞:  
- If there is no order, everyone gets confused.  
- If the baker serves customers in order, everyone feels it’s fair.  
- If someone is in a hurry (e.g., to pick up their child), they need to be served earlier.  

An elevator is the same:  
- Requests are like people pressing the button.  
- Scheduling is the elevator’s decision: **which floor to serve first**.  

---

## Key Metrics in Real-Time Systems

### 1. Wait Time
The time between a request being created and the elevator arriving.  
🔹 Example: The time you stand in line at the bakery before being served.  

### 2. Response Time
The time between creating a request and completing the service (pickup + reaching destination).  
🔹 Example: Ordering a pizza 🍕, response time is from placing the order until the pizza arrives.  

### 3. Deadline
The maximum allowed time for completing a request.  
- **Hard Deadline**: Missing it = system failure.  
  🔹 Example: Airplane takeoff ✈️, if late, it’s useless.  
- **Soft Deadline**: Missing it only reduces user satisfaction.  
  🔹 Example: Pizza delivery being a few minutes late.  

### 4. Deadline Miss
When the system cannot complete a request within its deadline.  

---

## Scheduling Algorithms

### 1. FCFS (First Come First Served)
**The first request to arrive is the first to be served.**  

🔹 Example:  
Bread queue 🍞 → whoever arrives first gets bread first.  

- **Advantage**: Simple and fair.  
- **Disadvantage**: A short request might get stuck behind a very long one.  

📷 *Placeholder for image: bread queue in arrival order*  

---

### 2. SCAN (Elevator / Sweep Algorithm)
The elevator moves in one direction, serving all requests along the way, then reverses.  

🔹 Example:  
Like a bus 🚌 that goes across the city, picking up and dropping off passengers along its route.  

- **Advantage**: Optimized travel path.  
- **Disadvantage**: Requests in the opposite direction may wait too long.  

📷 *Placeholder for image: elevator moving up and then back down*  

---

### 3. EDF (Earliest Deadline First)
The request with the earliest deadline gets the highest priority.  

🔹 Example:  
A delivery rider 🚴:  
- One order must be delivered in 10 minutes.  
- Another has 30 minutes.  
The rider prioritizes the 10-minute delivery.  

- **Advantage**: Guarantees no hard deadlines are missed if the system is schedulable.  
- **Disadvantage**: Needs constant reordering and calculation.  

📷 *Placeholder for image: delivery rider with multiple orders and deadlines*  

---

## Comparison of Algorithms

| Algorithm | Real-life Example | Advantage | Disadvantage |
|-----------|------------------|-----------|--------------|
| **FCFS** | Bread queue 🍞 | Simple and fair | May increase response time |
| **SCAN** | City bus 🚌 | Optimized path | Some requests wait too long |
| **EDF**  | Delivery rider 🚴 | Deadline accuracy | Computational overhead |

---

## Summary
- Scheduling = deciding which request should be served first.  
- Different algorithms fit different needs:  
  - FCFS → fairness and simplicity  
  - SCAN → optimized travel path  
  - EDF → strict deadline adherence  
- Choosing the right algorithm is critical in real-time systems because it directly affects **predictability, performance, and user satisfaction**.  

📷 *Placeholder for final image: comparison of the three algorithms in one diagram*  
