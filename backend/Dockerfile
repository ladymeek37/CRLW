FROM --platform=linux/amd64 python:alpine3.17
WORKDIR /user/src/app
RUN apk add --no-cache libjpeg-turbo-dev zlib-dev && \
    pip install --no-cache-dir Pillow mysql_connector_python
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]