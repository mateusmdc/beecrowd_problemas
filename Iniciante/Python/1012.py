a, b, c = input().split()

a, b, c = float(a), float(b), float(c)

print(f"TRIANGULO: {(a*c)/2:.3f}")
print(f"CIRCULO: {3.14159 *(c*c):.3f}")
print(f"TRAPEZIO: {((a+b)*c)/2:.3f}")
print(f"QUADRADO: {b*b:.3f}")
print(f"RETANGULO: {a*b:.3f}")