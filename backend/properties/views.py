from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Property
from .serializers import PropertySerializer
from django.shortcuts import get_object_or_404
# Create your views here.

# Private route to get all properties (All properties page)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_properties(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

#Public route to get properties by id (Specific property page)
@api_view(['GET'])
@permission_classes([AllowAny])
def get_property_by_id(request, property_id):
    property = Property.objects.filter(id = property_id)
    serializer = PropertySerializer(property, many = True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_property(request):
    serializer = PropertySerializer(data = request.data)
    if serializer.is_valid():
        serializer.save(user = request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def property_detail(request, pk):
    property = get_object_or_404(Property, pk=pk)
    if request.method == 'PUT':
        serializer = PropertySerializer(property, data = request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        property.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


