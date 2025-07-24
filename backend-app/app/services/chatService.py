from .llmService import ask_openai
from .dbService import save_message, get_conversation, create_conversation, get_all_messages
import uuid

async def handle_conversation(user_input, session_id: str | None):

    if not session_id or await get_conversation(session_id) is None:
        print("🔄 Creating new session")
        print()
        session_id = str(uuid.uuid4())
        await create_conversation(session_id)

    context = await get_all_messages(session_id)
    context.append({"role": "user", "content": user_input})

    print("📖 Context for session work")
    print()

    response = await ask_openai(context)

    print("🤖 Agent response:", response)
    print()

    await save_message(session_id, "user", user_input)
    await save_message(session_id, "assistant", response)

    return {"response": response, "session_id": session_id}





