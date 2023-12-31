from django.urls import path, include
from properties import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_properties),
    path("by_id/<int:property_id>/", views.get_property_by_id),
    path('post/', views.post_property),
    path("<int:pk>/", views.property_detail),
    path("test/", views.test_property_api),
]