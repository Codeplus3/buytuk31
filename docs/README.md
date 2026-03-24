# 🎨 محول الأيقونات - Jekyll Site

موقع Jekyll احترافي لعرض تطبيق محول الأيقونات مع دعم كامل لأدوات الوصول والمساعدة.

## 📁 **بنية المشروع**

```
docs/
├── _config.yml              # إعدادات Jekyll الرئيسية
├── _config_dev.yml          # إعدادات التطوير
├── Gemfile                 # اعتماديات Ruby
├── index.html              # تطبيق الأيقونات الكامل
├── index.md               # الصفحة الرئيسية للموقع
├── _layouts/              # قوالب Jekyll
│   └── default.html       # القالب الافتراضي
├── _includes/             # أجزاء قابلة لإعادة الاستخدام
│   ├── head.html         # رأس الصفحة
│   ├── header.html       # رأس الموقع
│   └── footer.html       # تذييل الموقع
├── assets/               # الموارد الثابتة
│   ├── css/
│   │   └── main.css    # الأنماط الرئيسية
│   └── js/
│       └── main.js     # JavaScript الرئيسي
└── .gitignore           # ملفات متجاهلة Git
```

## 🚀 **التشغيل المحلي**

### باستخدام Bundler:
```bash
cd docs
bundle install
bundle exec jekyll serve --config _config_dev.yml
```

### باستخدام Jekyll مباشرة:
```bash
cd docs
jekyll serve --config _config_dev.yml
```

### خادم التطوير:
```bash
# سيبدأ الخادم على http://localhost:4000
jekyll serve --livereload --incremental
```

## 🌐 **النشر على GitHub Pages**

### 1. **إعداد المستودع:**
```bash
git add docs/
git commit -m "نقل الموقع إلى مجلد docs لعلاج بناء Jekyll"
git push origin main
```

### 2. **إعدادات GitHub Pages:**
1. اذهب إلى إعدادات المستودع
2. قسم "Pages"
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/docs"
6. احفظ الإعدادات

### 3. **الرابط المباشر:**
```
https://yourusername.github.io/icon-converter
```

## ✨ **المميزات المضافة**

### 🎨 **تصميم Jekyll:**
- قوالب احترافية مع `_layouts/default.html`
- أجزاء قابلة لإعادة الاستخدام مع `_includes/`
- أنماط CSS حديثة مع RTL دعم
- JavaScript متقدم مع PWA features

### 📱 **PWA Integration:**
- Service Worker registration
- Install prompt button
- Offline support
- App manifest integration

### ♿ **Accessibility Features:**
- Font size adjustment (50%-200%)
- High contrast mode
- Reduced motion
- Screen reader support
- Keyboard navigation
- ARIA labels

### 🎯 **SEO Optimization:**
- Meta tags كاملة
- Open Graph tags
- Twitter Card tags
- Structured data
- Sitemap generation

## 🛠️ **التخصيص**

### تعديل الألوان:
```css
:root {
  --primary-color: #4A90E2;
  --secondary-color: #2d3436;
  --accent-color: #17a2b8;
}
```

### إضافة صفحات جديدة:
1. إنشاء ملف `.md` جديد في `docs/`
2. إضافة front matter:
```yaml
---
layout: default
title: "عنوان الصفحة"
description: "وصف الصفحة"
---
```

### تعديل القوالب:
- `_layouts/default.html` - تعديل الهيكل العام
- `_includes/header.html` - تعديل رأس الموقع
- `_includes/footer.html` - تعديل تذييل الموقع

## 📊 **الأداء والتحسين**

### تحسين السرعة:
- CSS minification
- JavaScript minification
- Image optimization
- Caching headers
- Gzip compression

### قياس الأداء:
```bash
# Lighthouse CLI
lighthouse http://localhost:4000

# PageSpeed Insights
# https://pagespeed.web.dev/
```

## 🔧 **التحقق من الأخطاء**

### Jekyll Build Check:
```bash
jekyll build --verbose
```

### HTML Validation:
```bash
# W3C Validator
# https://validator.w3.org/
```

### CSS Validation:
```bash
# W3C CSS Validator
# https://jigsaw.w3.org/css-validator/
```

## 📱 **اختبار التوافق**

### المتصفحات المدعومة:
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### الأجهزة:
- 📱 الهواتف الذكية
- 💻 أجهزة الكمبيوتر
- 📟 الأجهزة اللوحية

## 🚨 **حل المشاكل الشائعة**

### Jekyll Build Errors:
```bash
# تنظيف الـ cache
bundle clean --force
rm -rf _site/
rm -rf .sass-cache/
```

### Gem Installation Issues:
```bash
# تحديث Ruby gems
gem update --system
bundle install
```

### GitHub Pages Deployment:
- تأكد من وجود `Gemfile`
- تحقق من `_config.yml`
- انتظر 5-10 دقائق للنشر

## 📞 **الدعم والمساعدة**

### للمساعدة الفنية:
- **البريد**: ahmed30anter@gmail.com
- **الهاتف**: 01010389600
- **الموقع**: https://buytuk.com

### للإبلاغ عن المشاكل:
1. **وصف المشكلة**: تفصيل كامل
2. **الخطوات**: كيف تكرار المشكلة
3. **البيئة**: متصفح، نظام تشغيل، جهاز
4. **Console errors**: لقطات شاشة لأي أخطاء

---

**🎨 مطور بواسطة: أحمد عنتر - BuyTuk**  
**📅 آخر تحديث: مارس 2026**  
**🚀 الإصدار: 1.0.0**  
**🌐 المرخصة: MIT License**
