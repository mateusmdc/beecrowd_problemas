import math

a,b,c = map(float, input().split())

delta = (b**2) - 4*a*c

if a == 0 or delta < 0:
    print("Impossivel calcular")
else:
    r1 = (-abs(b) + math.sqrt(delta))/(2*a)
    r2 = (-abs(b) - math.sqrt(delta))/(2*a)
    print(f"R1 = {r1:.5f}\nR2 = {r2:.5f}")