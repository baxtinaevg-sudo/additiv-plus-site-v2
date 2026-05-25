@echo off
setlocal

set TIMESTAMP=%date:~0,4%-%date:~5,2%-%date:~8,2%_%time:~0,2%-%time:~3,2%-%time:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%

set DATA_DIR=crm\src\data
set BACKUP_DIR=crm\backups\backup-%TIMESTAMP%

if not exist "%DATA_DIR%" (
    echo [ERROR] CRM data folder not found!
    exit /b 1
)

if not exist "crm\backups" mkdir "crm\backups"
mkdir "%BACKUP_DIR%"

set COUNT=0
for %%f in ("%DATA_DIR%\*.json") do (
    if not "%%~nxf" == "*.demo.json" (
        copy "%%f" "%BACKUP_DIR%\" >/dev/null
        set /a COUNT+=1
    )
)

echo [OK] Backup created: backup-%TIMESTAMP%
echo      Files copied: %COUNT%

for /f "skip=10 delims=" %%d in ('dir /b /ad /o-d "crm\backups\backup-*"') do (
    rmdir /s /q "crm\backups\%%d"
    echo [DEL] Old backup removed: %%d
)

endlocal
