from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.chatService import get_chat_response

class SentenceRequest(BaseModel):
    sentence: str

subjectRouter = APIRouter()

@subjectRouter.post("/subject")
async def subject(request: SentenceRequest):
    try:
        response = await get_chat_response(request.sentence)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
