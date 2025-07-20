
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.courseService import get_subjects

courseRouter = APIRouter()

class CourseRequest(BaseModel):
    course_name: str

@courseRouter.post("/course")
async def course(request: CourseRequest):
    try:
        # Placeholder: Add your course logic here
        response = get_subjects()  # Assuming this function is defined in subjectService.py
        return {"response": f"Course endpoint received: {response}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
