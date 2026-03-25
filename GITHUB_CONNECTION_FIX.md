# 🔧 حل مشكلة اتصال GitHub - Could not resolve host: github.com

## ❌ **الخطأ الذي يظهر:**
```
fatal: unable to access 'https://github.com/Codeplus3/buytuk31.git/': Could not resolve host: github.com
```

## 🎯 **المشكلة الأساسية:**

### 🔍 **ما يحدث:**
- Git لا يستطيع الوصول إلى github.com
- مشكلة في DNS أو اتصال الإنترنت
- قد تكون بسبب Firewall أو Proxy أو مشاكل الشبكة

## ✅ **الحلول المقترحة (من الأسهل إلى الأكثر تعقيداً):**

### 🔄 **الحل 1: التحقق من اتصال الإنترنت**
```bash
# التحقق من اتصال GitHub
ping github.com

# التحقق من DNS
nslookup github.com

# التحقق من اتصال HTTPS
curl -I https://github.com
```

### 🔄 **الحل 2: إعادة تعيين Git Remote**
```bash
# التحقق من الـ remote الحالي
git remote -v

# إزالة الـ remote الحالي
git remote remove origin

# إضافة الـ remote الجديد
git remote add origin https://github.com/Codeplus3/buytuk31.git

# التحقق من الـ remote الجديد
git remote -v
```

### 🔄 **الحل 3: استخدام SSH بدلاً من HTTPS**
```bash
# إزالة الـ remote الحالي
git remote remove origin

# إضافة الـ remote باستخدام SSH
git remote add origin git@github.com:Codeplus3/buytuk31.git

# التحقق من الـ remote
git remote -v

# محاولة الدفع
git push origin main
```

### 🔄 **الحل 4: إعدادات Git Proxy**
```bash
# التحقق من إعدادات Proxy
git config --global --get http.proxy
git config --global --get https.proxy

# إزالة إعدادات Proxy إذا كانت موجودة
git config --global --unset http.proxy
git config --global --unset https.proxy

# أو إضافة Proxy إذا كان مطلوباً
git config --global http.proxy http://proxy.company.com:8080
git config --global https.proxy https://proxy.company.com:8080
```

### 🔄 **الحل 5: تعديل ملف Hosts**
```bash
# فتح ملف hosts (كمسؤول)
# C:\Windows\System32\drivers\etc\hosts

# إضافة هذه الأسطر (إذا لم تكن موجودة)
140.82.112.3 github.com
140.82.112.4 github.com
```

### 🔄 **الحل 6: استخدام Git Credential Manager**
```bash
# تكوين Git Credential Manager
git config --global credential.helper manager-core

# أو استخدام Git Credential Manager for Windows
git config --global credential.helper manager
```

## 🌐 **الخطوات المقترحة (نفذها بالترتيب):**

### 1️⃣ **الخطوة الأولى: التحقق الأساسي**
```bash
# التحقق من اتصال الإنترنت
ping google.com

# التحقق من اتصال GitHub
ping github.com

# إذا لم يعمل ping github.com، انتقل للخطوة التالية
```

### 2️⃣ **الخطوة الثانية: إعادة تعيين Remote**
```bash
# إزالة الـ remote الحالي
git remote remove origin

# إضافة الـ remote الجديد
git remote add origin https://github.com/Codeplus3/buytuk31.git

# محاولة الدفع
git push origin main
```

### 3️⃣ **الخطوة الثالثة: استخدام SSH (إذا فشل HTTPS)**
```bash
# التحقق من وجود مفتاح SSH
ls -la ~/.ssh/id_rsa.pub

# إذا لم يكن موجوداً، إنشاء مفتاح جديد
ssh-keygen -t rsa -b 4096 -C "buytu@example.com"

# نسخ المفتاح العام
cat ~/.ssh/id_rsa.pub

# إضافة المفتاح إلى GitHub:
# 1. اذهب إلى github.com
# 2. Settings → SSH and GPG keys
# 3. New SSH key
# 4. الصق المفتاح
# 5. Save

# تغيير الـ remote إلى SSH
git remote set-url origin git@github.com:Codeplus3/buytuk31.git

# محاولة الدفع
git push origin main
```

### 4️⃣ **الخطوة الرابعة: التحقق من Firewall/Antivirus**
```bash
# تأكد من أن Firewall لا يمنع Git
# تأكد من أن Antivirus لا يمنع Git
# قد تحتاج إلى إضافة استثناء لـ Git و GitHub
```

## 📋 **قائمة التحقق:**

### ✅ **قبل البدء:**
- [ ] اتصال الإنترنت يعمل
- [ ] يمكن الوصول إلى github.com من المتصفح
- [ ] Git مثبت بشكل صحيح
- [ ] Windows Firewall لا يمنع Git

### ✅ **أثناء التنفيذ:**
- [ ] تم تنفيذ الأوامر بالترتيب
- [ ] تم التحقق من كل خطوة
- [ ] تم تسجيل أي أخطاء تظهر

## 🚨 **خطة الطوارئ:**

### ❌ **إذا لم تنجح أي حلول:**

#### **خيار 1: استخدام GitHub Desktop**
1. تحميل GitHub Desktop من [github.com](https://desktop.github.com/)
2. تسجيل الدخول بحساب GitHub
3. Clone المستودع باستخدام GitHub Desktop
4. نسخ الملفات يدوياً إلى المجلد الجديد
5. استخدام GitHub Desktop للدفع

#### **خيار 2: استخدام Web Interface**
1. اذهب إلى [github.com/Codeplus3/buytuk31](https://github.com/Codeplus3/buytuk31)
2. اضغط على "Add file"
3. ارفع الملفات يدوياً
4. اكتب commit message
5. اضغط "Commit changes"

#### **خيار 3: تغيير الشبكة**
1. جرب شبكة Wi-Fi أخرى
2. استخدم الهاتف Hotspot
3. جرب من شبكة مختلفة تماماً

## 📞 **الدعم والمساعدة:**

### 🆘 **للمساعدة الفورية:**
- **البريد**: ahmed30anter@gmail.com
- **الهاتف**: 01010389600
- **الموقع**: https://buytuk.com

### 🔍 **أوامر التشخيص:**
```bash
# التحقق من إعدادات Git
git config --list

# التحقق من الشبكة
netstat -an | findstr :443

# التحقق من DNS
ipconfig /flushdns
```

---

## 🏆 **الخلاصة:**

**مشكلة اتصال GitHub يمكن حلها بالخطوات التالية:**
- ✅ التحقق من اتصال الإنترنت
- ✅ إعادة تعيين Git remote
- ✅ استخدام SSH بدلاً من HTTPS
- ✅ التحقق من Firewall/Antivirus
- ✅ استخدام GitHub Desktop كبديل

**🔧 ابدأ بالخطوات البسيطة وتقدم إلى الحلول المعقدة!**  
**بمجرد حل الاتصال، يمكنك الدفع بنجاح إلى GitHub! 🎉🚀**
