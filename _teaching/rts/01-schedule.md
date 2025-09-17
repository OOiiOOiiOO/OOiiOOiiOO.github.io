---
title: "Syllabus and Weekly Schedule"
collection: teaching
type: "Course Module"
permalink: /teaching/rts/schedule
course: "Real-Time Systems"
order: 1
mathjax: true
use_math: true
layout: course
lang: en
alt_lang: fa
alt_url: /teaching/rts-fa/schedule
---

# ⏱ Real-Time Systems — 16-Week Plan (Detailed & Practical)

**Instructor:** Mohammad Mehdi Khorsand Aalam  
**University:** Marllic University of Nowshahr  
**Course Length:** 16 weeks  
**Session Duration:** 1–1.5 hours  

---

## 📅 Weekly Schedule

| Week | Topic | Learning Objectives | In-class / Lab Activity |
|------|-------|----------------------|--------------------------|
| **1** | Introduction to Real-Time Systems — Basic Concepts | Definition of real-time systems; logical vs. temporal correctness; application domains | Case study discussion: real examples (robot control, medical systems) |
| **2** | Timing Constraints and Classification (Hard/Soft/Criticality) | Differences between hard vs. soft deadlines; predictability criteria | Group work: identify constraints in 3 given examples |
| **3** | Task Models and HW/SW Architecture Design | periodic/aperiodic/sporadic tasks; TCB model and relation to HW | Simple architecture design for a control system |
| **4** | RTOS Concepts — Kernel, Interrupts, Timers | Basic RTOS services and determinism | Scenario: analyze interrupt behavior in a simple simulation |
| **5** | Concurrency and Synchronization Models (Semaphore/Mutex) | race conditions, semaphore, mutex, deadlock basics | Lab: implement producer/consumer example (simulation) |
| **6** | Inter-task Communication and IPC (Mailbox, Queue) | mailbox/queue semantics, blocking vs. non-blocking | Group exercise: design a mailbox for a set of tasks |
| **7** | Review Weeks 1–6 and Midterm | Review of key concepts and midterm exam | Review session (short student seminars) |
| **8** | Scheduling Basics: preemptive vs. non-preemptive | Differences, context switch overhead, evaluation metrics | Manual: draw Gantt charts for several scenarios |
| **9** | Basic Scheduling Algorithms: FCFS, SJF/SRTF, RR | Behavior of each algorithm with numeric examples | Workshop: run scenarios and compare results |
| **10** | Rate Monotonic Scheduling (RMS) — Liu & Layland Theory | Utilization bounds and feasibility conditions | Exercise: calculate utilization and feasibility |
| **11** | EDF and LLF — Deadline-based Scheduling | Feasibility, overhead, examples | Simulation: EDF and analyze missed deadlines |
| **12** | Priority Inversion and Solutions | Priority inversion, priority inheritance, ceiling protocol | Demo: create a priority inversion scenario and resolve it |
| **13** | Memory Management in Real-Time Systems | fragmentation, overlay, real-time allocation | Simple simulation of fragmentation and compaction |
| **14** | Practical RTOS — FreeRTOS and RT-Linux | Services, task API, timers, code samples | Workshop: run FreeRTOS example on a simulator or ESP32 |
| **15** | Case Study: Elevator — Simulation and Scheduling Algorithms | Model the elevator problem; metrics (wait/response/deadline) | Project presentation: elevator simulator (in-class demo) |
| **16** | Final Project Presentations and Exam — Wrap-up | Present project results, feedback, final questions | Group presentations and final exam |

---

## 📝 Suggested Exercises and Projects

1. **Scheduling Simulator**  
   - Output: Gantt chart, list of missed deadlines, metrics.  
   - Suggested languages: Python/JavaScript.  

2. **Priority Inversion Demo**  
   - Implement a three-task scenario and solve it with priority inheritance.  

3. **Producer/Consumer with Semaphore and Mailbox**  
   - Demonstrate blocking vs. non-blocking behavior.  

4. **Memory Management Simulation (Fragmentation/Compaction)**  
   - Visualize fragmentation and its impact on real-time tasks.  

5. **FreeRTOS Mini Project (Optional)**  
   - Sample task, ISR, usage of queues and timers on ESP32/Arduino.  

---

## 🧮 Grading Policy

- Homework (HW1–HW3): **3 points** (1.5 each)  
- Midterm Exam: **5 points**  
- Project / Lab: **6 points**  
- Final Exam: **12 points**  
- Participation / Presentations / Demos: **up to 4 points** (optional, no fixed limit)  
