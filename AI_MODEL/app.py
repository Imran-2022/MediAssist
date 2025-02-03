# pip install fastapi uvicorn pandas scikit-learn

from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from  model_train import pipeline 
from preprocess_text import preprocess_text
# Contains the dataset
from dataset import data


# Initialize FastAPI
app = FastAPI()

df = pd.DataFrame(data, columns=["symptoms", "specialist"])

pipeline.fit(df["symptoms"], df["specialist"])
print(df)
# Define API Request Model
class SymptomInput(BaseModel):
    symptoms: str


# Example: Predict doctor for a new symptom
# user_input = ["I have been experiencing some issues with my eyes"]
# prediction = pipeline.predict(user_input)

# print("Recommended Specialist:", prediction[0])

# Define API Endpoint

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/predict/")
def predict_specialist(user_input: SymptomInput):
    prediction = pipeline.predict([preprocess_text(user_input.symptoms)])
    return {"recommended_specialist": prediction[0]}

# Run the server: `uvicorn app:app --reload`
