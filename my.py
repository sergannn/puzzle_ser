import cv2
import numpy as np
import time
from matplotlib import pyplot as plt
img = cv2.imread('my.png', cv2.IMREAD_GRAYSCALE)
edges = cv2.Canny(img,600,1000,apertureSize = 3)

cv2.imwrite('edges-1050___.jpg',edges)
new_img = cv2.imread('edges-1050___.jpg', cv2.IMREAD_UNCHANGED)
positions = np.nonzero(new_img)
print(positions)

top = positions[0].min()
bottom = positions[0].max()
left = positions[1].min()
right = positions[1].max()

output = cv2.rectangle(cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    , (left, top), (right, bottom), (0,255,0), 1)

cv2.imwrite('blob_with_bounds.png', output)

"""
so=cv2.imread(new_img,0)

start1=time.clock()
coord=cv2.findNonZero(so)
end1=time.clock()

start2=time.clock()
coord2=np.nonzero(so)
end2=time.clock()

print("cv2.findNonZeros() takes "+str(end1-start1)+" seconds.")
print("np.nonzero() takes       "+str(end2-start2)+" seconds.")
"""