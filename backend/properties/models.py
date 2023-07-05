from django.db import models
from authentication.models import User

# Create your models here.

# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Property(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40)
    location = models.CharField(max_length=45, blank=True)
    description_text = models.TextField()
    thumbnail = models.ImageField(upload_to=upload_to, blank=True)
    youtube_link = models.CharField(max_length=200, blank = True)
