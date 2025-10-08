from fastapi import FastAPI
import numpy as np

app = FastAPI()

@app.get("/predict")
def predict():
    value = np.random.rand()
    return {"prediction": value}

