import openai
import os

async def get_chat_response(prompt: str) -> str:
    # You can add async logic or keep it sync if needed
    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    raw_reply = response.choices[0].message.content
    processed = f"Processed answer:\n{raw_reply.strip()}"
    return processed
