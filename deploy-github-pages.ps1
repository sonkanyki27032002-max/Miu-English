# Script hỗ trợ khởi tạo và đẩy dự án lên GitHub Pages
param (
    [string]$RepoUrl = ""
)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "    HƯỚNG DẪN & HỖ TRỢ ĐẨY LÊN GITHUB PAGES       " -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Lỗi: Máy tính của bạn chưa cài đặt Git." -ForegroundColor Red
    Write-Host "Vui lòng tải và cài đặt Git tại: https://git-scm.com/downloads" -ForegroundColor White
    exit
}

if (-not (Test-Path .git)) {
    Write-Host "1. Khởi tạo kho lưu trữ Git cục bộ..." -ForegroundColor Green
    git init
    git branch -M main
}

Write-Host "2. Thêm và lưu lại toàn bộ tệp dự án..." -ForegroundColor Green
git add .
git commit -m "Cap nhat English Hub: Tu them tu vung, Anki SRS, Google Drive va GitHub Pages"

if ($RepoUrl -eq "") {
    Write-Host "`n👉 Bạn cần tạo 1 Repository trên GitHub (https://github.com/new) rồi nhập link bên dưới:" -ForegroundColor Yellow
    $RepoUrl = Read-Host "Nhập link repository GitHub (ví dụ: https://github.com/username/english-hub.git)"
}

if ($RepoUrl -ne "") {
    git remote remove origin 2>$null
    git remote add origin $RepoUrl
    Write-Host "3. Đang đẩy dữ liệu lên GitHub..." -ForegroundColor Green
    git push -u origin main
    
    Write-Host "`n🎉 ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!" -ForegroundColor Green
    Write-Host "👉 Bây giờ bạn chỉ cần vào GitHub: Settings -> Pages -> Chọn nhánh 'main' và '/ (root)' -> Nhấn Save." -ForegroundColor Cyan
    Write-Host "Chờ 1-2 phút là bạn có link web để học trên điện thoại và máy tính!" -ForegroundColor White
}
