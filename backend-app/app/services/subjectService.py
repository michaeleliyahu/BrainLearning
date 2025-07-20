from .chatService import get_chat_response

async def get_explanation(prompt: str) -> str:
    # This function can be used to get explanations for subjects from chat service
    prompt = f"תסביר על {prompt} בפייתון"
    chat_response = await get_chat_response(prompt)
    return chat_response

