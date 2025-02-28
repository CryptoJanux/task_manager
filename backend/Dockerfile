# Base Image
FROM python:3.9

# Working Directory
WORKDIR /app

# Copy Project Files
COPY . /app

# Install Dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Port
EXPOSE 8000

# Start Django Server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
