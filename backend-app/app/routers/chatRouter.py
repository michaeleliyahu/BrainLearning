from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.chatService import get_chat_response

class PromptRequest(BaseModel):
    prompt: str

chatRouter = APIRouter()

@chatRouter.post("/chat")
async def chat(request: PromptRequest):
    try:
        response = await get_chat_response(request.prompt)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
