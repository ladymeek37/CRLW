from rest_framework import serializers
from .models import Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['name', 'location', 'description_text', 'thumbnail', 'youtube_link' ]