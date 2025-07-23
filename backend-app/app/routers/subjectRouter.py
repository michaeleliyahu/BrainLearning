from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.subjectService import getSubjectsService

class SentenceRequest(BaseModel):
    sentence: str

subjectRouter = APIRouter()

@subjectRouter.post("/getSubjects")
async def getSubjects(request: SentenceRequest):
    try:
        response = await getSubjectsService(request.sentence)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))