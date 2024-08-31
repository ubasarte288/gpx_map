import os
import glob

all_tracks = ['tracks/' + f for f in os.listdir('tracks') if f.endswith('gpx')]
text1 = open('index.html', 'r').readlines()
text2 = []
for line in text1:
    if 'let tracks' in line:
        text2.append(" "*8 + "let tracks = " + str(all_tracks) + ";\n")
    else:
        text2.append(line)

with open('index.html','w') as txt:
    txt.writelines(text2)
