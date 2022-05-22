import cv2 as cv
import numpy as np

from flask import *
from common import *
from logging.config import dictConfig

app = Flask(__name__)

cap = cv.VideoCapture(CAMERA_PATH)  

def gen_frames():
  while True:
    ret, frame = cap.read()
    if(cap == False):
      print("Server Camera Read is Fail")
    else:      
      cv.circle(frame,(256,256),50,(0,255,0),-1)
      ret, buffer = cv.imencode('.jpg', frame)
      frame = buffer.tobytes()
      yield (b'--frame\r\n'
              b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
  return render_template(template_name_or_list='index.html')    

@app.route('/video_feed')
def video_feed():
  return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
  app.run(host='0.0.0.0')
  
