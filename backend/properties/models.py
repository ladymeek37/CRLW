from django.db import models

# Create your models here.

# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Property(models.Model):
    name = models.CharField(max_length=40)
    description_text = models.CharField()
    thumbnail = models.ImageField(upload_to=upload_to, blank=True)
    youtube_link = models.CharField(max_length=200, blank = True)
