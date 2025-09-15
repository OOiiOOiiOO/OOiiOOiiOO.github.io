---
title: "Core Scheduling Algorithms in Real-Time Systems"
collection: teaching
type: "Course Module"
permalink: /teaching/rts/core-schedulers
course: "Real-Time Systems"
order: 7
mathjax: true
use_math: true
layout: courserst
lang: en
alt_lang: fa
alt_url: /teaching/rts-fa/core-schedulers
---

# Core Scheduling Algorithms in Real-Time Systems
---

## A Gentle Introduction — Queue and Turn-Taking

Imagine you walk into a bakery. Two service strategies are possible:
- First: whoever came earlier gets their bread earlier (like **FCFS**).  
- Second: the baker prepares the **smaller orders first** so the whole line moves faster (like **SJF**).  
Or think of a delivery rider: some orders must arrive *before a strict time* (deadline) → those get priority (like **EDF**).  

Real-time systems face exactly the same problem: deciding **which task to serve first** so deadlines are respected.

---

## Key Terms (in plain English)

- **Task / Job / Request**: A piece of work (e.g., pressing the elevator button, or a program running on CPU).  
- **Preemptive**: A task can be interrupted to run another one.  
- **Non-preemptive**: Once started, a task runs until completion.  
- **Deadline**: The latest time by which a task must finish.  
- **Utilization**: How much of the CPU time is used by tasks compared to available time.  
- **Schedulable**: If an algorithm can arrange tasks so that all deadlines are met.

---

## Core Scheduling Algorithms Everyone Must Know
1. FCFS — First Come First Served  
2. SJF / SRTF — Shortest Job First / Shortest Remaining Time First  
3. Round Robin (RR)  
4. Priority Scheduling (+ Priority Inversion problem)  
5. RMS — Rate Monotonic Scheduling  
6. EDF — Earliest Deadline First  
7. LLF — Least Laxity First  

Let’s go one by one.

---

## 1 — FCFS (First Come First Served)
### Idea
Just like the bakery: whoever came earlier gets served first.

### Technical behavior
- Tasks are placed in a queue in order of arrival.  
- Usually **non-preemptive**.  

### Example
- Job A arrives at t=0 (10s execution).  
- Job B arrives at t=1 (1s execution).  
In FCFS, **B waits until A finishes**, even though it’s short.

### Pros/Cons
- **Simple, fair**.  
- **Problem**: Convoy effect — long jobs delay many small jobs.  

---

## 2 — SJF / SRTF (Shortest Job First / Shortest Remaining Time First)
### Idea
Like the baker preparing the smallest orders first so more customers leave faster.

### Difference
- **SJF**: Non-preemptive; once a job starts, it finishes.  
- **SRTF**: Preemptive; if a shorter job arrives, it interrupts the running one.  

### Example
- Job A (10s) starts.  
- Job B (1s) arrives. In SRTF, B interrupts A and finishes first.  

### Pros/Cons
- Pros: Minimizes average waiting time.  
- Cons: Needs knowledge of job length (not always realistic). Can cause **starvation** of long jobs.  

---

## 3 — Round Robin (RR)
### Idea
Like kids taking turns on a PlayStation: each one gets 5 minutes, then passes the controller.

### Technical
- Each job gets a **time slice (quantum)**.  
- If unfinished, it goes to the back of the queue.  

### Pros/Cons
- Fair, responsive for interactive systems.  
- Not ideal for **hard real-time** because deadlines may be missed.  

---

## 4 — Priority Scheduling
### Idea
Hospital ER: critical patients (high priority) are treated before mild cases.  

### Technical
- Each task has a priority.  
- The highest-priority task runs first.  
- Can be preemptive or non-preemptive.  

### Classic Problem: Priority Inversion
Scenario:
- Low-priority task **L** holds a resource.  
- High-priority task **H** needs it.  
- Medium-priority task **M** keeps running.  
Result: H waits for L, but L is delayed by M — unfair!  

### Solutions
- **Priority Inheritance**: L temporarily inherits H’s priority.  
- **Priority Ceiling**: Resources are given a ceiling priority to prevent inversion.  

---

## 5 — RMS (Rate Monotonic Scheduling)
### Idea
- For **periodic tasks** (repeating every T).  
- Rule: **shorter period → higher priority**.  

### Everyday example
School classes: those that happen twice a week (shorter period) get higher priority for room scheduling.  

### Theory
- Fixed-priority scheduling.  
- Liu & Layland bound:  
For n tasks, utilization must satisfy:

\[
U = \sum_{i=1}^n \frac{C_i}{T_i} \le n(2^{1/n} - 1)
\]

- n=1 → bound=1.0  
- n=2 → bound≈0.828  
- n→∞ → bound→0.693  

### Limitations
- Works well only for periodic tasks.  
- For shared resources, extra handling is needed.  

---

## 6 — EDF (Earliest Deadline First)
### Idea
Delivery rider: always delivers the order with the closest deadline first.

### Technical
- Dynamic priority: task with the **nearest deadline** gets CPU.  
- **Optimal for single processor**: If any schedule exists that meets all deadlines, EDF can do it.  

### Condition
- For periodic tasks, if total utilization \( U \le 1 \), EDF can schedule them.  

### Pros/Cons
- Pro: Highly efficient, flexible.  
- Con: Needs frequent sorting → higher overhead.  

---

## 7 — LLF (Least Laxity First)
### Idea
Laxity = Deadline – (Current Time + Remaining Execution).  
Task with least slack runs first.  

### Example
Pizza order:  
- 8 minutes left to deadline, needs 5 minutes execution → Laxity=3.  
Another order: 10 minutes left, needs 1 minute → Laxity=9.  
So first one is more urgent.  

### Pros/Cons
- Very accurate to prevent misses.  
- But: Frequent recalculations and preemptions → overhead.  

---

## Quick Checklist

| Algorithm | Best For | Pros | Cons |
|-----------|----------|------|------|
| FCFS | Simple systems | Simple, fair | Bad for deadlines |
| SJF/SRTF | Known job times | Low avg wait | Starvation, need exec time |
| RR | Interactive systems | Fairness | Poor for hard RT |
| Priority | Critical tasks | Flexible | Priority inversion |
| RMS | Periodic tasks | Analyzable | Only periodic, conservative |
| EDF | Deadline-driven | Optimal on 1 CPU | Overhead |
| LLF | High precision | Very accurate | Heavy overhead |

---

## Small Example (Numbers)

Three periodic tasks:  
- A: \(C=1, T=4\)  
- B: \(C=2, T=5\)  
- C: \(C=5, T=20\)  

Utilization:  
\[
U = 1/4 + 2/5 + 5/20 = 0.90
\]

- EDF: \(U=0.90 \le 1\) → Schedulable.  
- RMS: bound≈0.78, so not guaranteed — needs deeper analysis.  

---

## Priority Inversion — Real-World Analogy
- Low-priority mechanic is fixing the boss’s car.  
- Boss (high priority) waits.  
- Meanwhile, a mid-priority driver interrupts with another task.  
Boss ends up waiting for the driver!  

**Fix:** Priority Inheritance → the mechanic temporarily gets boss’s priority.  

---

## Suggested Exercises
1. FCFS: Simulate 3 jobs (A=10s@t=0, B=1s@t=1, C=2s@t=2). Compute wait and response times.  
2. SRTF: Run the same example and compare results.  
3. RMS vs EDF: With A,B,C above, make a 20s timeline and check deadlines.  
4. Priority Inversion: Build a scenario with L, M, H and test Priority Inheritance.  

---

## Teaching Tips
- Use everyday analogies: bakery, bus line, delivery, hospital.  
- Have students manually simulate schedules on paper before coding.  
- Visualize timelines and response histograms.  
- Highlight utilization analysis for RMS/EDF with clear numeric examples.  

---

## Suggested Readings
- Jane W.S. Liu, *Real-Time Systems*  
- Liu & Layland (1973), the classic RMS paper  

---

## Image Placeholders
- `![Bakery line — FCFS](path/to/bakery.jpg)`  
- `![Bus route — SCAN](path/to/bus.jpg)`  
- `![Delivery rider — EDF](path/to/delivery.jpg)`  
- `![Comparison of algorithms](path/to/comparison.png)`  

---

### In Short
- **FCFS**: simple, fair, but not deadline-friendly.  
- **RMS & EDF**: must-know algorithms in RTS. RMS → fixed-priority, EDF → dynamic and optimal.  
- **Priority inversion** is a *practical danger* you must handle.  

---
