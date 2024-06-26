a, b = map(float, input().split())
c, d = map(float, input().split())

print( round( ( ( (c-a) **2 ) + ( (d - b) ** 2) ) ** (1/2), 4) )

"""
could also do like this:
import math

a, b = map(float, input().split())
c, d = map(float, input().split())

print(f"{math.sqrt( ( (c-a) ** 2) + ( (d-b) ** 2) ):.4f}")

and also store the result of the calculation in a variable, like this:
distance = math.sqrt(((c-a)**2) + ((d-b)**2))

and print it:
print(f"{distance:.4f}")

"""