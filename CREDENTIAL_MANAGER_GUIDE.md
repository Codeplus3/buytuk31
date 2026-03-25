# 🔐 دليل مسح الهوية القديمة من مدير الاعتماد (Windows)

## 🎯 **الخطوة الأولى: مسح الهوية القديمة**

### ❌ **لماذا هذه الخطوة مهمة؟**
- Windows يخزن كلمة السر القديمة تلقائياً
- حتى لو غيرت كلمة السر على GitHub، Windows لا يزال يستخدم القديمة
- هذا يسبب فشل المصادقة عند push/pull

## 📋 **الخطوات بالتفصيل:**

### 1️⃣ **فتح Credential Manager:**
- من قائمة **Start**
- ابحث عن **"Credential Manager"** (مدير الاعتماد)
- أو اضغط **Win + R** واكتب **`control /name Microsoft.CredentialManager`**

### 2️⃣ **الوصول إلى Windows Credentials:**
- في نافذة Credential Manager
- اختر **"Windows Credentials"** (اعتمادات Windows)
- ستجد قائمة بجميع الاعتمادات المحفوظة

### 3️⃣ **البحث عن GitHub Credentials:**
- ابحث في القائمة عن **`git:https://github.com/`**
- قد تجد أيضاً:
  - `git:https://github.com`
  - `github.com`
  - أي إدخال يحتوي على "github"

### 4️⃣ **إزالة الاعتمادات القديمة:**
- اضغط على كل إدخال GitHub
- اختر **"Remove"** (إزالة)
- أكد الإزالة لكل إدخال

## 🔧 **الخطوات البديلة إذا لم تجد GitHub:**

### **طريقة 1: استخدام Command Prompt:**
```cmd
# عرض جميع الاعتمادات
cmdkey /list

# البحث عن GitHub credentials
cmdkey /list | findstr github

# إزالة الاعتمادات
cmdkey /delete:git:https://github.com
cmdkey /delete:github.com
```

### **طريقة 2: استخدام PowerShell:**
```powershell
# عرض جميع الاعتمادات
Get-StoredCredential | Format-Table

# البحث عن GitHub
Get-StoredCredential | Where-Object { $_.Target -like "*github*" }

# إزالة الاعتمادات
Get-StoredCredential | Where-Object { $_.Target -like "*github*" } | Remove-StoredCredential
```

## 🔍 **التحقق من الإزالة الناجحة:**

### **التحقق من Credential Manager:**
- افتح Credential Manager مرة أخرى
- تأكد من عدم وجود أي إدخالات GitHub
- القائمة يجب أن تكون نظيفة من GitHub

### **التحقق باستخدام Git:**
```bash
# محاولة الوصول إلى GitHub (سيفشل مؤقتاً)
git ls-remote https://github.com/yourusername/icon-converter

# يجب أن يطلب منك اسم مستخدم وكلمة مرور جديدة
```

## 🚀 **الخطوة التالية: إعداد المصادقة الجديدة:**

### **بعد مسح الاعتمادات القديمة:**
1. **إنشاء Personal Access Token** جديد على GitHub
2. **إعداده في Git** مرة واحدة
3. **اختبار الاتصال** للتأكد من العمل

## 📋 **قائمة التحقق النهائية:**

### ✅ **قبل المتابعة:**
- [ ] تم فتح Credential Manager بنجاح
- [ ] تم العثور على جميع إدخالات GitHub
- [ ] تم إزالة جميع إدخالات GitHub
- [ ] تم التحقق من عدم وجود إدخالات GitHub متبقية
- [ ] تم اختبار فشل المصادقة (مؤقتاً)

### ⚠️ **ملاحظات هامة:**
- هذه الخطوة ضرورية جداً
- لا تتخطى هذه الخطوة أبداً
- إذا لم تجد GitHub credentials، استخدم الطرق البديلة
- تأكد من إزالة جميع الإدخالات المتعلقة بـ GitHub

---

## 🎯 **النتيجة المتوقعة:**

**بعد إكمال هذه الخطوة:**
- ✅ Windows لن يستخدم كلمة السر القديمة
- ✅ Git سيطلب مصادقة جديدة
- ✅ جاهز لإعداد Personal Access Token الجديد
- ✅ لا يوجد تعارض بين الاعتمادات القديمة والجديدة

**🔐 تم إعداد دليل مسح الهوية القديمة بنجاح!**  
**الآن يمكنك المتابعة إلى الخطوة التالية لإعداد المصادقة الجديدة! 🚀**
