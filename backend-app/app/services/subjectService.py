from ..services.chatService import get_chat_response
import json

system_prompt = """
You are a smart learning assistant. The user will input any topic they want to learn — it can be technical (e.g., Threads, JWT), scientific (e.g., Quantum Physics), business-related, historical, or anything else.

Your task is to generate a structured, step-by-step learning plan for the topic. The plan should be broken down into stages of increasing difficulty, with each stage containing important subtopics.

Instructions:
1. Create between 3 to 5 stages.
2. Each stage must have a clear, meaningful name (e.g., "Stage 1: Basics", "Stage 2: Intermediate Concepts", "Stage 3: Advanced Applications").
3. Each stage should contain 3–6 topics to learn.
4. Output **only valid JSON** — no extra explanations, no markdown, no additional text.
5. Always ensure the JSON is well-formed and structured as a dictionary with stage names as keys and topic arrays as values.

📌 Example output:
{
  "Stage 1: Basics": ["Introduction to the concept", "Core terminology", "Historical background"],
  "Stage 2: Theory and Structure": ["Main components", "Key models", "Relationships between concepts"],
  "Stage 3: Advanced Applications": ["Practical use cases", "Common challenges", "Advanced techniques"]
}
"""



async def getSubjectsService(sentence: str) -> dict:
    full_prompt = f"{system_prompt}\n\nThe user wants to learn about: {sentence}"
    raw_response = await get_chat_response(full_prompt)
    try:
        return json.loads(raw_response)
    except json.JSONDecodeError as e:
        raise Exception(f"error JSON: {e}\from\n{raw_response}")
