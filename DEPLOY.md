# 🚀 دليل النشر والتشغيل

## 📋 المتطلبات الأساسية

### 🔧 البيئة المطلوبة
- **Node.js**: الإصدار 14 أو أحدث
- **Git**: للتحكم في الإصدارات
- **متصفح حديث**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+

### � قيود الأداء
- **الذاكرة**: 50MB كحد أدنى للتخزين المحلي
- **المعالج**: أي معالج حديث يدعم JavaScript ES6+
- **الشبكة**: اتصال إنترنت للتحميل الأول فقط (يعمل بدون اتصال بعد ذلك)
- **التخزين**: LocalStorage للإعدادات وبيانات المستخدم (5MB كحد أقصى)

### � التخزين والبيانات
- **LocalStorage**: للإعدادات وبيانات المستخدم (سريع ومحدود)
- **IndexedDB**: للصور الكبيرة والسجل (مستقبلي)
- **Session Storage**: للبيانات المؤقتة للجلسة الحالية
- **Cache API**: للملفات الثابتة والصور المحولة

---

## 🛠️ خطوات النشر

### 1️⃣ **إعداد المستودع المحلي**

```bash
# نسخ المشروع
git clone https://github.com/yourusername/icon-converter.git
cd icon-converter

# تثبيت الاعتماديات
npm install

# التحقق من الإعدادات
npm run lint
npm run test
```

### 2️⃣ **التشغيل المحلي**

```bash
# خادم التطوير (المنفذ 3000)
npm run dev

# خادم بسيط (المنفذ 8000)
npm run serve

# خادم Python
python -m http.server 8000

# خادم PHP
php -S localhost:8000
```

### 3️⃣ **الاختبار والتحقق**

```bash
# اختبار الوصول
npm run accessibility

# اختبار الأداء
lighthouse http://localhost:3000

# اختبار يدوي
# 1. افتح http://localhost:3000
# 2. اختبر تحويل الصور
# 3. تحقق من أدوات الوصول
# 4. اختبر PWA features
```

---

## 🌐 النشر على المنصات

### 📦 **Vercel (موصى به)**

```bash
# 1. تثبيت Vercel CLI
npm i -g vercel

# 2. تسجيل الدخول
vercel login

# 3. النشر الأولي
vercel

# 4. النشر للإنتاج
vercel --prod

# 5. إعدادات البيئة
echo "NODE_ENV=production" > .env.production
```

**مميزات Vercel:**
- ✅ نشر تلقائي مع كل push
- ✅ CDN عالمي سريع
- ✅ HTTPS مجاني
- ✅ دعم Static Sites
- ✅ تحليلات مدمجة

### 📄 **GitHub Pages**

```bash
# 1. تفعيل Pages في الإعدادات
# Settings > Pages > Source > Deploy from a branch > main

# 2. نشر يدوي
git push origin main

# 3. التحقق من النشر
# https://yourusername.github.io/icon-converter
```

### 🌊 **Netlify**

```bash
# 1. تثبيت Netlify CLI
npm i -g netlify-cli

# 2. تسجيل الدخول
netlify login

# 3. النشر
netlify deploy --prod --dir=.

# 4. إعداد النشر التلقائي
netlify init
```

### � **Custom Server**

```bash
# 1. بناء الملفات
npm run build

# 2. نسخ إلى الخادم
scp -r ./* user@server:/var/www/html/

# 3. إعدادات Nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Service Worker
    location = /sw.js {
        add_header Service-Worker-Allowed "/";
    }
    
    # PWA Headers
    location ~* \.(webmanifest|json)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 🔧 تكوين CI/CD

### 🤖 **GitHub Actions**

ملف `.github/workflows/deploy.yml` يتضمن:

1. **الاختبار التلقائي**:
   - ESLint للكود
   - Prettier للتنسيق
   - Accessibility tests
   - Performance tests

2. **النشر التلقائي**:
   - النشر عند كل push للـ main
   - النشر إلى Vercel
   - إشعارات النجاح/الفشل

3. **الأمان**:
   - استخدام Secrets للـ API keys
   - تقييد الصلاحيات
   - توقيع الكود

### 🔄 **Pipeline Steps**

```yaml
# 1. Checkout code
# 2. Setup Node.js
# 3. Install dependencies
# 4. Run tests
# 5. Deploy to production
# 6. Notify results
```

---

## 📊 واجهة المستخدم وتجربة المستخدم

### 🎨 **تصميم الواجهة**
- **Responsive**: يعمل على جميع أحجام الشاشات
- **RTL Support**: دعم كامل للغة العربية
- **Dark/Light**: تباين تلقائي حسب النظام
- **High Contrast**: وضع خاص لضعاف البصر
- **Font Scaling**: ضبط حجم الخط 50%-200%

### ♿ **أدوات الوصول**
- **WCAG 2.1 AA**: متوافق مع المعايير العالمية
- **Keyboard Navigation**: تنقل كامل بلوحة المفاتيح
- **Screen Reader**: ARIA labels كاملة
- **Reduced Motion**: إيقاف الحركات
- **Focus Indicators**: مؤشرات واضحة للتنقل

### 📱 **PWA Features**
- **Install Prompt**: تثبيت على الشاشة الرئيسية
- **Offline Support**: يعمل بدون إنترنت
- **Push Notifications**: إشعارات فورية
- **App Shell**: واجهة سريعة التحميل
- **Background Sync**: مزامنة في الخلفية

---

## 🔍 المراقبة والتحليل

### � **Performance Monitoring**

```javascript
// قياس الأداء
console.time('icon-generation');
// ... عملية التحويل
console.timeEnd('icon-generation');

// مراقبة الذاكرة
if (performance.memory) {
    console.log('Memory:', performance.memory.usedJSHeapSize);
}

// مراقبة الشبكة
navigator.connection && console.log('Connection:', navigator.connection);
```

### 🔍 **Error Tracking**

```javascript
// تتبع الأخطاء
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
    // إرسال إلى خدمة تحليلات
});

// تتبع Promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled rejection:', e.reason);
});
```

### 📊 **Analytics Integration**

```javascript
// Google Analytics (اختياري)
gtag('event', 'icon_conversion', {
    'event_category': 'engagement',
    'event_label': 'user_action'
});

// Custom analytics
function trackEvent(action, label) {
    const event = {
        action,
        label,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
    };
    localStorage.setItem('analytics_' + Date.now(), JSON.stringify(event));
}
```

---

## 🚨 استكشاف الأخطاء وحلها

### 🔧 **مشاكل شائعة**

#### 1. **الصور لا تتحول**
```javascript
// الحل: التحقق من نوع الملف
if (!file.type.startsWith('image/')) {
    showError('يرجى اختيار ملف صورة صالح');
    return;
}
```

#### 2. **الإعدادات لا تحفظ**
```javascript
// الحل: التحقق من LocalStorage
if (!localStorage) {
    console.warn('LocalStorage غير مدعوم');
    // استخدام IndexedDB كبديل
}
```

#### 3. **PWA لا يعمل**
```javascript
// الحل: التحقق من Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
} else {
    console.warn('Service Worker غير مدعوم');
}
```

#### 4. **الإشعارات لا تظهر**
```javascript
// الحل: طلب الصلاحية
Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        showNotification('الإشعارات مفعلة!');
    }
});
```

### 🛠️ **أدوات التصحيح**

```bash
# اختبار الوصول
npm run accessibility

# فحص الأداء
lighthouse --chrome-flags="--headless" http://localhost:3000

# تدقيق الكود
npm run lint

# تنسيق الكود
npm run format
```

---

## 📋 قائمة التحقق قبل النشر

### ✅ **قبل النشر**

- [ ] الكود يمر جميع اختبارات ESLint
- [ ] جميع المميزات تعمل بشكل صحيح
- [ ] أدوات الوصول متوافقة مع WCAG 2.1
- [ ] PWA features تعمل على جميع المتصفحات
- [ ] الأداء مقبول (< 3 ثواني للتحويل)
- [ ] الإعدادات تحفظ وتسترجع بشكل صحيح
- [ ] لا يوجد أخطاء في console
- [ ] الملفات مضغوطة ومحسنة
- [ ] Security headers مضافة بشكل صحيح

### 🚀 **بعد النشر**

- [ ] اختبار الوصول على النسخة المنتجة
- [ ] اختبار PWA installation
- [ ] اختبار Offline functionality
- [ ] اختبار على جميع المتصفحات الرئيسية
- [ ] اختبار على الأجهزة المحمولة
- [ ] التحقق من Performance scores
- [ ] مراجعة Security headers
- [ ] اختبار Load times

---

## 📞 الدعم والمساعدة

### 🆘 **للمساعدة الفورية**
- **البريد**: ahmed30anter@gmail.com
- **الهاتف**: 01010389600
- **الموقع**: https://buytuk.com

### 🐛 **للإبلاغ عن المشاكل**
1. **وصف المشكلة**: تفصيل كامل
2. **الخطوات**: كيف تكرار المشكلة
3. **البيئة**: متصفح، نظام تشغيل، جهاز
4. **الصور**: أمثلة للصور التي تسبب المشكلة
5. **Console errors**: لقطات شاشة لأي أخطاء

---

**🎨 مطور بواسطة: أحمد عنتر - BuyTuk**  
**📅 آخر تحديث: مارس 2026**  
**🚀 الإصدار: 1.0.0**  
**🌐 المرخصة: MIT License**
