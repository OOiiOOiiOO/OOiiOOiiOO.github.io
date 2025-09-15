---
title: "Introduction to Real-Time Systems"
collection: teaching
type: "Course Module"
permalink: /teaching/rts/introduction
course: "Real-Time Systems"
order: 1
mathjax: true
use_math: true
layout: courserst
lang: en
alt_lang: fa
alt_url: /teaching/rts-fa/introduction
---

# Introduction to Real-Time Systems

Real-time systems are a special class of computer systems that must produce **correct results within a specified time frame**.  
In other words, two aspects of correctness are critical:

- **Logical Correctness:** The results are functionally correct.  
- **Temporal Correctness:** The results are delivered on time.  

---

## Why Are Real-Time Systems Important?

Real-time systems play a crucial role in various domains, including:

- **Aviation:** Flight control systems  
- **Automotive:** ABS braking systems, engine control  
- **Robotics:** Industrial robotic arms  
- **Telecommunications:** Network and switching systems  
- **Industrial Automation**  
- **Defense Systems**  

---

## Key Properties of Real-Time Systems

- **Strict Timing Constraints:**  
  - Responses must meet their deadlines.  
  - Example: Sensor sampling rate or brake command processing.  

- **Application-Specific Design:**  
  - Most real-time systems are **embedded systems**.  
  - The execution environment is usually well-defined.  

- **Predictable Behavior:**  
  - The system’s behavior must be predictable even in worst-case scenarios.  

- **High Reliability:**  
  - Failures can be extremely costly or even life-threatening.  

---

## Common Misconceptions About Real-Time Systems

- “Real-time means very fast” → **Wrong!**  
  Speed is not the main concern; **predictability is key**.  

- “More powerful hardware will solve timing issues” → **No!**  
  Even the fastest processor cannot guarantee real-time performance without proper design.  

---

## Types of Timing Constraints

- **Hard Real-Time:**  
  Missing a deadline makes the result **useless or dangerous**.  
  Example: Flight control or ABS braking systems.  

- **Soft Real-Time:**  
  Occasional missed deadlines are tolerable, but quality degrades.  
  Example: Video streaming or online gaming.  

---

## A Simple Control System Example

A control system with one sensor and one actuator. Every period $$ T $$:


**T** → Sampling period, a critical design parameter. Wrong values can lead to instability.

---

## Designing a Real-Time System

### Key Steps in Design:

1. **Specify Constraints:**  
   - Timing (Deadlines)  
   - Exclusion (Mutual exclusion requirements)  
   - Precedence (Execution order)  

2. **Analyze Criticality of Constraints:**  
   - **Safety-Critical:** Failures can cause severe damage or loss of life.  
   - **Non-Critical:** Example: Airline reservation system.  

3. **Choose Software and Hardware Architecture:**  
   - Programming language (impacts performance and reliability)  
   - Concurrency model (multi-tasking, multiprocessor)  
   - Hardware architecture (RISC, microcontroller, network topology)  

4. **Task Scheduling:**  
   - Priority-based vs. Time-driven  
   - Preemptive vs. Non-Preemptive  

---

## Challenges in Real-Time System Design

- **Concurrency:** Real-world devices operate in parallel, but processors execute sequentially.  
- **Predictability:** Worst-case behavior must be guaranteed.  
- **Reactive Nature:** The system continuously responds to the environment.  
- **Resource Constraints:** CPU power, memory, energy limitations.  
- **High Reliability Requirements:** Especially in aerospace and automotive applications.  

---

## Verification and Validation

- **Ad hoc Testing:** Run and observe for failures (not sufficient).  
- **Exhaustive Testing:** Test all possible inputs and timing (impractical).  
- **Formal Analysis:**  
  - Logical correctness → Formal proof techniques  
  - Temporal correctness → Schedulability analysis  

---

## Key Takeaways

- Real-time means **predictable**, not necessarily **fast**.  
- **Hard real-time systems** are often safety-critical.  
- Design must be **systematic**, not ad-hoc.  
- Hardware, software, and algorithm choices are crucial.  

---

## References

- **Real-Time Systems Design and Analysis** – Phillip A. Laplante  
- **Hard Real-Time Computing Systems** – Giorgio C. Buttazzo  
- **Advances in Real-Time Systems** – Samarjit Chakraborty  

---

<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--primary" href="{{ '/teaching/rts/schedule' | relative_url }}">Course Schedule ➡︎</a>
</div>

<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--primary" href="{{ '/teaching/rts/specification' | relative_url }}">Next: Real-Time System Specifications ➡︎</a>
</div>
