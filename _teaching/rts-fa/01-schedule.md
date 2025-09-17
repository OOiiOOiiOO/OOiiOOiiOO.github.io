---
title: "طرح درس و برنامه هفتگی"
collection: teaching
type: "Course Module"
permalink: /teaching/rts-fa/schedule
course: "سیستم‌های بلادرنگ"
order: 1
mathjax: true
use_math: true
layout: course
lang: fa
alt_lang: en
alt_url: /teaching/rts/schedule
---

# ⏱ سیستم‌های بلادرنگ — برنامهٔ ۱۶ هفته‌ای (جزئی و عملی)

**مدرس:** محمد مهدی خرسند اعلم  
**دانشگاه:** دانشگاه مارلیک نوشهر  
**طول دوره:** ۱۶ هفته  
**طول هر جلسه:** ۱–۱.۵ ساعت


---

## برنامهٔ هفتگی (جزئی / عملی)

| هفته | موضوع اصلی (جلسه) | اهداف آموزشی | تمرین/خواندنی (فایل مرجع) | فعالیت کلاسی / آزمایشگاه | تکلیف کوتاه (تحویلی) |
|------|--------------------|---------------|-----------------------------|---------------------------|------------------------|
| **1** | مقدمهٔ سیستم‌های بلادرنگ — مفاهیم پایه | تعریف سیستم بلادرنگ؛ صحت منطقی vs. صحت زمانی؛ حوزه‌های کاربرد | `02-intro.md` | بحث موردی: مثال‌های واقعی (کنترل ربات، سیستم‌های پزشکی) | نوشتن یک پاراگراف: مثال از سیستم بلادرنگ و قیودش |
| **2** | انواع قیود زمانی و طبقه‌بندی (Hard/Soft/Criticality) | تفاوت‌های hard vs soft؛ معیارهای پیش‌بینی‌پذیری | `02-intro.md` | گروه‌بندی: شناسایی قیود در ۳ مثال داده‌شده | تحویل: ۳ مثال با توضیح نوع قیود |
| **3** | مدل‌های تسک و طراحی معماری HW/SW | periodic/aperiodic/sporadic؛ مدل TCB و ارتباط با HW | `03-realos.md`, `04-RTOS.md` | طراحی سادهٔ معماری برای یک سیستم کنترلی | تکلیف: رسم معماری HW/SW و لیست تسک‌ها |
| **4** | مفاهیم RTOS — کرنل، interrupt، timers | خدمات پایه RTOS و determinism | `04-RTOS.md` | اجرای سناریو: بررسی رفتار interrupt در مثال ساده (شبیه‌سازی) | تمرین عملی: توضیح نحوهٔ مدیریت interrupt |
| **5** | مدل‌های هم‌زمانی و همگام‌سازی (Semaphore/Mutex) | race condition، semaphore، mutex، deadlock basics | `07-miniprojects.md`, `06-core-schedulers.md` | آزمایشگاه: پیاده‌سازی مثال producer/consumer (شبیه‌ساز) | تحویل کد/لاگ شبیه‌سازی و گزارش کوتاه |
| **6** | ارتباط بین‌تسکی و IPC (Mailbox, Queue) | mailbox/queue semantics، blocking vs non-blocking | `07-miniprojects.md` | تمرین گروهی: طراحی mailbox برای مجموعهٔ تسک‌ها | تمرین: شبیه‌سازی رفتار mailbox و گزارش خروجی |
| **7** | مرور مباحث ۱–۶ و میان‌ترم | مرور مفاهیم کلیدی و امتحان میان‌ترم | — | جلسهٔ مرور (سمینار کوتاه توسط دانشجوها) | میان‌ترم (کلاس) — نظری و سوالات تحلیلی |
| **8** | مبانی زمان‌بندی: preemptive vs non-preemptive | تفاوت‌ها، هزینه‌های context switch، معیارهای ارزیابی | `06-core-schedulers.md` | دستی: رسم Gantt برای چند سناریو | تکلیف: شبیه‌سازی دستی Gantt و تحلیل waiting time |
| **9** | الگوریتم‌های پایه: FCFS, SJF/SRTF, RR | رفتار هر الگوریتم و مثال‌های عددی | `06-core-schedulers.md` | کارگاه: اجرای سناریوها و مقایسهٔ زمان‌ها | تمرین: گزارش مقایسهٔ الگوریتم‌ها (جداول) |
| **10** | Rate Monotonic (RMS) — نظریهٔ Liu & Layland | boundهای استفاده‌پذیری و شرایط قابل پیاده‌سازی | `06-core-schedulers.md` | تمرین محاسبهٔ utilization و feasibility | تکلیف: حل چند مثال RMS و ارسال محاسبات |
| **11** | EDF و LLF — الگوریتم‌های زمان‌بندی با deadline | شرایط پذیرفتنی، هزینهٔ اجرایی، مثال‌ها | `06-core-schedulers.md` | شبیه‌سازی: EDF و بررسی missed-deadlines | تکلیف: اجرای یک سناریوی EDF و تحلیل نتایج |
| **12** | مسئلهٔ Priority Inversion و راه‌حل‌ها | priority inversion، priority inheritance, ceiling protocol | `06-core-schedulers.md`, `07-miniprojects.md` | demo: ایجاد سناریوی priority inversion و رفع آن | تکلیف: پیاده‌سازی نمونهٔ priority inheritance |
| **13** | مدیریت حافظه در سیستم‌های بلادرنگ | fragmentation، overlay، real-time allocation | `05-memory.md` | شبیه‌سازی سادهٔ fragmentation و compaction | تمرین: تحلیل تأثیر fragmentation بر deadlines |
| **14** | RTOS های عملی — FreeRTOS و RT-Linux | سرویس‌ها، task API، timers، نمونهٔ کدها | `04-RTOS.md`, `03-realos.md` | کارگاه: اجرای مثال FreeRTOS روی شبیه‌ساز یا ESP32 | تکلیف: گزارش اجرای FreeRTOS (snapshot/log) |
| **15** | مطالعهٔ موردی آسانسور — شبیه‌سازی و مقایسه الگوریتم‌ها | مدل‌سازی مسئله آسانسور، معیارها (wait/response/deadline) | `08-elevator.md`, `09-elevator-scal.md` | ارائهٔ پروژه: شبیه‌ساز آسانسور (دمو در کلاس) | تحویل: کد شبیه‌ساز و گزارش مقایسه الگوریتم‌ها |
| **16** | ارائهٔ پروژه‌ها و امتحان نهایی — جمع‌بندی | ارائهٔ نتایج پروژه، بازخورد، سوالات نهایی | — | ارائهٔ گروهی پروژه‌ها و آزمون فاینال | تحویل نهایی پروژه‌ها و ارزیابی |

---

## تمرین‌ها و پروژه‌های پیشنهادی (خلاصه از `07-miniprojects.md`)
1. **شبیه‌ساز زمان‌بندی (Scheduling Simulator)**  
   - خروجی: Gantt chart، لیست missed-deadlines، metricها.  
   - زبان پیشنهادی: Python/JavaScript.  
2. **Priority Inversion Demo**  
   - پیاده‌سازی سناریوی سه‌تسکی و حل با priority inheritance.  
3. **Producer/Consumer با Semaphore و Mailbox**  
   - نشان‌دادن blocking/non-blocking behavior.  
4. **شبیه‌سازی مدیریت حافظه (Fragmentation/Compaction)**  
   - نمایش تصویری fragmentation و تأثیر آن روی real-time tasks.  
5. **FreeRTOS Mini Project (اختیاری)**  
   - نمونهٔ task، ISR، استفاده از queues و timers روی برد ESP32/Arduino.

---

## الگوی نمره‌دهی 
- تمرین‌ها (HW1–HW3): ۳ نمره (هرکدام ۱.۵)  
- میان‌ترم: ۵ نمره  
- پروژه / لاب: ۶ نمره  
- امتحان نهایی: ۱۲ نمره  
- مشارکت/ارائه/دمو: تا ۴ نمره (اختیاری)

---

