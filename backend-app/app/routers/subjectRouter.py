from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.chatService import get_chat_response
from ..services.subjectService import get_explanation
class SentenceRequest(BaseModel):
    sentence: str

subjectRouter = APIRouter()

@subjectRouter.post("/subject")
async def subject(request: SentenceRequest):
    try:
        response = await get_explanation(request.sentence)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
