from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Property
from .serializers import PropertySerializer
# Create your views here.

# Private route to get all properties (All properties page)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_properties(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_property_by_id(request, property_id):
    property = Property.objects.filter(id = property_id)
    serializer = PropertySerializer(property, many = True)
    return Response(serializer.data)




