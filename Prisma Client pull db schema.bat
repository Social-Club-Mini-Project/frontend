@echo off

cd prisma

call yarn prisma db pull

echo successfully pulled db..

pause