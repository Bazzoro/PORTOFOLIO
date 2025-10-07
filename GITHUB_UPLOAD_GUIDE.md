# 🚀 Panduan Upload Portfolio ke GitHub

## Langkah 1: Buat Repository di GitHub

1. **Buka GitHub** dan login ke akun `Bazzoro`
2. **Klik "+" → "New repository"**
3. **Isi detail:**
   - **Repository name**: `portfolio-website`
   - **Description**: `Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS`
   - **Visibility**: Public ✅
   - **Initialize**: Jangan centang "Add a README file"

## Langkah 2: Upload Code ke GitHub

### Opsi A: Upload via GitHub Web Interface

1. **Buka repository** yang baru dibuat
2. **Klik "uploading an existing file"**
3. **Drag & drop** semua file dari folder `C:\Users\hi\Web-Portofolio`
4. **Commit changes** dengan pesan "Initial commit: Portfolio website"

### Opsi B: Upload via Command Line

Buka Command Prompt di folder `C:\Users\hi\Web-Portofolio`:

```bash
# Initialize git repository
git init

# Add remote origin
git remote add origin https://github.com/Bazzoro/portfolio-website.git

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit: Portfolio website with modern design"

# Push ke GitHub
git push -u origin main
```

## Langkah 3: Verifikasi Upload

1. **Refresh halaman GitHub** repository Anda
2. **Pastikan semua file** sudah terupload:
   - ✅ README.md
   - ✅ package.json
   - ✅ app/page.tsx
   - ✅ app/layout.tsx
   - ✅ .gitignore
   - ✅ Dan semua file lainnya

## Langkah 4: Deploy Portfolio (Opsional)

### Menggunakan Vercel (Gratis & Mudah)

1. **Buka [Vercel](https://vercel.com/)**
2. **Login dengan GitHub**
3. **Import repository** `portfolio-website`
4. **Deploy** otomatis
5. **Dapatkan URL** live website

### Menggunakan Netlify

1. **Buka [Netlify](https://netlify.com/)**
2. **Connect GitHub**
3. **Pilih repository** `portfolio-website`
4. **Set build command**: `npm run build`
5. **Deploy** website

## File yang Sudah Disiapkan

✅ **README.md** - Dokumentasi lengkap portfolio
✅ **package.json** - Dependencies dan metadata
✅ **.gitignore** - File yang diabaikan Git
✅ **Portfolio website** - Code lengkap dengan fitur modern

## Keuntungan Upload ke GitHub

1. **Portfolio Online** - Dapat diakses dari mana saja
2. **Version Control** - Track perubahan code
3. **Professional** - Menunjukkan kemampuan Git
4. **Collaboration** - Mudah untuk kolaborasi
5. **Deployment** - Siap untuk deploy ke platform hosting
6. **Showcase** - Menampilkan skill development

## Troubleshooting

### Error: Repository already exists
```bash
# Clone repository yang sudah ada
git clone https://github.com/Bazzoro/portfolio-website.git
cd portfolio-website

# Copy semua file dari project lama
# Kemudian commit dan push
git add .
git commit -m "Update portfolio website"
git push
```

### Error: Authentication failed
```bash
# Set up GitHub authentication
git config --global user.name "Bazzoro"
git config --global user.email "your-email@example.com"
```

## Next Steps

1. **Deploy website** ke Vercel/Netlify
2. **Update resume** dengan link portfolio
3. **Share portfolio** di LinkedIn dan media sosial
4. **Monitor analytics** untuk visitor tracking
5. **Update konten** secara berkala

---

🎉 **Selamat! Portfolio Anda sudah siap untuk dunia!**