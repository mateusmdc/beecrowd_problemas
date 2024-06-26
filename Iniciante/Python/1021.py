a = float(input())

int_part = int(a)
dec_part = int((a - int_part)*100)

print(f"""NOTAS:
{int_part//100} nota(s) de R$ 100.00
{(int_part%100)//50} nota(s) de R$ 50.00
{((int_part%100)%50)//20} nota(s) de R$ 20.00
{(((int_part%100)%50)%20)//10} nota(s) de R$ 10.00
{((((int_part%100)%50)%20)%10)//5} nota(s) de R$ 5.00
{(((((int_part%100)%50)%20)%10)%5)//2} nota(s) de R$ 2.00
MOEDAS:
{(((((int_part%100)%50)%20)%10)%5)%2} moeda(s) de R$ 1.00
{dec_part//50} moeda(s) de R$ 0.50
{(dec_part%50)//25} moeda(s) de R$ 0.25
{((dec_part%50)%25)//10} moeda(s) de R$ 0.10
{(((dec_part%50)%25)%10)//5} moeda(s) de R$ 0.05
{(((dec_part%50)%25)%10)%5} moeda(s) de R$ 0.01""")