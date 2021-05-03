print("------------#1 - basic")
for i in range(0, 151):
    print(i)

print("------------#2 - multiples of 5")
for x in range(5, 1001, 5):
    print(x)

print("------------#3 - Counting the Dojo Way")
for o in range(1,151):
    if o % 10 == 0 and o % 5 == 0:
        print("Coding Dojo")
    elif o % 5 == 0:
        print("Coding")
    else:
        print(o)

print("------------#4 - Whoa, that suckers huge!")
for p in range(0, 500000):
    sum = 0
    if p % 2 == 1:
        sum = sum+p
print(p)

print("------------#5 - Countdown by fours")
for y in range (2018, 0, -4):
    print(y)

print("------------#6 - Flexible Counter")
lowNum = 6 
highNum = 150
mult = 8

for t in range(lowNum, highNum):
    if t % mult == 0:
        print(t)