a, b, c = input().split()
d, e, f = input().split()

a,b = int(a), int(b)
c = float(c)

d,e = int(d), int(e)
f = float(f)

print(f"VALOR A PAGAR: R$ {(b*c) + (e*f):.2f}")