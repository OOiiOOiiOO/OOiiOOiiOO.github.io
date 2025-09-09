---
title: "شبیه‌سازی آسانسور در سیستم‌های بلادرنگ"
collection: teaching
type: "Course Module"
permalink: /teaching/rts-fa/elevator-simulation
course: "سیستم‌های بلادرنگ"
order: 5
mathjax: true
use_math: true
layout: course
lang: fa
alt_lang: en
alt_url: /teaching/rts/elevator-simulation
---

# شبیه‌سازی آسانسور در سیستم‌های بلادرنگ

یکی از مثال‌های کلاسیک برای آموزش **زمان‌بندی و مدیریت منابع در سیستم‌های بلادرنگ**،  
شبیه‌سازی عملکرد یک **آسانسور** است. در این پروژه، آسانسور به عنوان یک *تسک بلادرنگ* عمل می‌کند که باید درخواست‌های کاربران را با **زمان پاسخ مشخص** و **مهلت زمانی (Deadline)** مدیریت کند.  

---

## مفاهیم علمی

### درخواست (Request)
- هر کاربر وقتی دکمه‌ای را فشار می‌دهد، یک **درخواست** تولید می‌شود.  
- ویژگی‌ها:
  - زمان تولید ($t_{request}$)  
  - طبقه مبدا (src)  
  - طبقه مقصد (dest)  
  - مهلت (deadline) و نوع آن (سخت یا نرم)  

### آسانسور (Elevator)
- یک **منبع مشترک** است که باید به چندین درخواست سرویس بدهد.  
- محدودیت‌ها:
  - حرکت بین طبقات زمان‌بر است.  
  - فقط می‌تواند در یک لحظه در یک طبقه باشد.  
  - ظرفیت محدود دارد (در نسخه ساده فرض می‌کنیم ظرفیت بی‌نهایت است).  

### زمان‌بندی (Scheduling)
- سیستم باید تصمیم بگیرد کدام درخواست زودتر سرویس داده شود.  
- الگوریتم‌های ساده:
  - **FCFS**: درخواست‌ها بر اساس زمان ورود سرویس داده می‌شوند.  
  - **SCAN**: آسانسور تا انتهای مسیر در یک جهت حرکت می‌کند و سپس برمی‌گردد.  

### معیارهای بلادرنگ
- **زمان انتظار (Wait Time)** = فاصله‌ی بین تولید درخواست تا لحظه‌ی pickup.  
- **زمان پاسخ (Response Time)** = فاصله‌ی بین تولید درخواست تا تکمیل سرویس.  
- **Deadline Miss**:
  - اگر مهلت نرم رد شود → سیستم خطا را ثبت می‌کند ولی ادامه می‌دهد.  
  - اگر مهلت سخت رد شود → این یعنی شکست سیستم بلادرنگ.  

---





<h2>📓 Example Jupyter Notebook</h2>



<div class="notebook-container">
  <iframe src="https://nbviewer.org/url/ooiiooiioo.github.io/files/elevator.ipynb"
          class="notebook-frame"></iframe>
</div
<p style="margin-top: 15px;">
  <a class="btn btn--primary" href="/files/elevator.ipynb" download>
    ⬇️ Download Notebook Persian Version
  </a>
</p>


<style>
.notebook-container {
  width: 100%;
  max-width: 1000px;   /* هم‌اندازه ستون لایوت */
  margin: auto;
}

.notebook-frame {
  width: 100%;
  height: 1800px;       /* می‌تونی تغییر بدی مثلاً 600 یا 1000 */
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
</style>
