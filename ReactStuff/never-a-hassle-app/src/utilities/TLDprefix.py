f = open("TLDs", "r")

lines = []

for line in f:
    lines.append("." + line)

f.close()

f = open("TLDs new", "w")

for i in lines:
    f.write(i)

f.close()