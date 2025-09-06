---
title: "تمرین ۳"
collection: teaching
permalink: /teaching/ai-fa/hw3
course: "هوش مصنوعی"
order: 1
mathjax: true
use_math: true
layout: course
lang: fa
alt_lang: en
alt_url: /teaching/ai/hw3
---

# تمرین – گیت‌های منطقی با پرسپترون‌ها

---

## سوال ۱. گیت NAND (۳ نمره)

جدول درستی (Truth Table):

| $$x_1$$ | $$x_2$$ | NAND |
|---------|---------|------|
| 0       | 0       | 1    |
| 0       | 1       | 1    |
| 1       | 0       | 1    |
| 1       | 1       | 0    |

**وظیفه:**  
- وزن‌ها و بایاس مناسب $$(w_1, w_2, b)$$ برای یک پرسپترون که NAND را پیاده‌سازی کند پیدا کنید.  
- محاسبات خود را حداقل برای ۲ ردیف از جدول بالا نشان دهید.  

---

## سوال ۲. گیت ترکیبی (۴ نمره)

**وظیفه:**  
یک پرسپترون (یا ترکیبی از چند پرسپترون) طراحی کنید که تابع زیر را پیاده‌سازی کند:  

$$
y = (x_1 \, \text{AND} \, x_2) \, \text{OR} \, (\text{NOT}(x_1))
$$

- جدول درستی (Truth Table) شامل تمام ۴ حالت ورودی را بنویسید.  
- توضیح دهید که کدام پرسپترون‌ها (AND, OR, NOT) را ترکیب کرده‌اید تا به خروجی نهایی برسید.  

---

<div class="lesson-nav" style="display:flex; justify-content:space-between; margin-top:2em;">
  <a class="btn btn--inverse" href="{{ '/teaching/ai/logic1' | relative_url }}">⬅︎ قبلی: گیت‌های منطقی با پرسپترون‌ها</a>
  <a class="btn btn--primary" href="{{ '/teaching/ai/xor' | relative_url }}">بعدی: حل مسئله XOR با پرسپترون چندلایه ➡︎</a>
</div>
