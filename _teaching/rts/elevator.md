---
title: "Elevator Simulation in Real-Time Systems"
collection: teaching
type: "Course Module"
permalink: /teaching/rts/elevator-simulation
course: "Real-Time Systems"
order: 5
mathjax: true
use_math: true
layout: courserst
lang: en
alt_lang: fa
alt_url: /teaching/rts-fa/elevator-simulation
---

# Elevator Simulation in Real-Time Systems

One of the classic examples for teaching **scheduling and resource management in real-time systems**  
is simulating the behavior of an **elevator**. In this project, the elevator acts as a *real-time task*  
that must handle user requests with **deterministic response times** and **deadlines**.  

---

## Scientific Concepts

### Request
- Each user generates a **request** when they press a button.  
- Attributes:
  - Request generation time ($t_{request}$)  
  - Source floor (src)  
  - Destination floor (dest)  
  - Deadline and its type (hard or soft)  

### Elevator
- The elevator is a **shared resource** that must serve multiple requests.  
- Constraints:
  - Moving between floors takes time.  
  - It can only be at one floor at a time.  
  - Capacity is limited (in the simplified version we assume infinite capacity).  

### Scheduling
- The system must decide which request to serve first.  
- Basic algorithms:
  - **FCFS**: Requests are served in the order they arrive.  
  - **SCAN**: The elevator continues in one direction until the end, then reverses.  

### Real-Time Metrics
- **Wait Time** = Time between request generation and pickup.  
- **Response Time** = Time between request generation and completion.  
- **Deadline Miss**:
  - If a soft deadline is missed → the system records the violation but continues.  
  - If a hard deadline is missed → this indicates a real-time system failure.  

---
    