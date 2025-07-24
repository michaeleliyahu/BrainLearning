from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.chatService import handle_conversation
from typing import Optional

class PromptRequest(BaseModel):
    prompt: str
    session_id: Optional[str] = None

chatRouter = APIRouter()

@chatRouter.post("/chat")
async def chat(request: PromptRequest):
    try:
        print("📩 Got request:", request.prompt)
        print()
        result = await handle_conversation(request.prompt, request.session_id)
        return {
            "response": result["response"],
            "session_id": result["session_id"]
        }
    except Exception as e:
        print("❌ Error in /chat:", e)
        raise HTTPException(status_code=500, detail=str(e))