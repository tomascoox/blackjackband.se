#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download hero image
curl -o public/images/hero.jpg https://via.placeholder.com/1920x1080?text=BlackJack+Band

# Download album images
for i in {1..6}; do
  curl -o public/images/album$i.jpg https://via.placeholder.com/500x500?text=Album+$i
done

# Download press images
for i in {1..8}; do
  curl -o public/images/press$i.jpg https://via.placeholder.com/800x800?text=Press+Photo+$i
done

echo "Placeholder images downloaded successfully!" 