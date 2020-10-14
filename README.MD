# PixelCraft
A pixel Art & Animation Creation Tool Built using HTML5 Canvas.  
It is a Progressive Web App (PWA) with offline compatibility.  
It is mobile-friendly and is very easy to use.  

![PixelCraft](icons/logo.png)

## Overview
This App is Available at both these locations
https://pixelcraft.web.app/
https://rgab1508.github.io/PixelCraft

On opening, you will get a screen as Follows

![PixelCraft overview](images/overview.png)

You can choose Any Dimensions for your Canvas, 16 X 16 is the default dimension.  
Dimensions below 128 X 128 are preferable for smooth operation and GIF creation.

## Toolbar

![PixelCraft overview](images/toolbar.png)

The List Of all Tools and methods to use them are as follows

### Pencil

The Pencil tool is the most basic tool and is used to draw pixels Freehand

![Pencil Tool](https://user-images.githubusercontent.com/17960677/96023223-b83b8800-0e6f-11eb-8af1-0cfab42c19d7.png)

### Eraser

The Eraser tool is used to erase a given pixel 1 pixel at a time. It has dimensions 1X1 and is fixed.

![Eraser Tool](https://user-images.githubusercontent.com/17960677/96023372-f5077f00-0e6f-11eb-965f-815b37f0d7b2.png)

### Paint Tool

The Paint tool is used to Flood Fill a given color with a new color. It works smoothly for dimensions under 128 X 128.

![Paint tool](https://user-images.githubusercontent.com/17960677/96023668-66473200-0e70-11eb-81a2-9313b1580926.png)

![Paint tool](https://user-images.githubusercontent.com/17960677/96023679-6b0be600-0e70-11eb-8451-0d5955f2c8b4.png)

### Line Tool

The line tool is used to draw a line segment between 2 points using Bresenham line drawing algorithm.  

Click on tool and click on 2 points to draw a line segment between them. 

![Line Tool](https://user-images.githubusercontent.com/17960677/96023893-b625f900-0e70-11eb-9b16-ac0d68f9423c.png)

### Circle Tool

The Circle Tool is used to draw a circle with a given centre and Radius using Midpoint Circle Algorithm.

![Circle Tool](https://user-images.githubusercontent.com/17960677/96024358-3d736c80-0e71-11eb-8c1a-acb528f027b6.png)

### Ellipse Tool

The Ellipse Tool is used to draw an ellipse with given centre and it's radius along x-axis and y-axis.

![Ellipse Tool](https://user-images.githubusercontent.com/17960677/96024638-a0fd9a00-0e71-11eb-9171-16944bf95b40.png)

## GIF Tools

### Add Frame

This tool adds the current state of canvas to the Frame Stack which can be later loaded or deleted. Each Frame is added with a delay of 100 ms, Same Frame can be multiple time to increase it's duration in GIF.

![Frame 1](https://user-images.githubusercontent.com/17960677/96025150-5f212380-0e72-11eb-9dce-5335a1cddcb7.png)
![Frame 2](https://user-images.githubusercontent.com/17960677/96025166-647e6e00-0e72-11eb-9249-1a9245b6e264.png)
![Frame 3](https://user-images.githubusercontent.com/17960677/96025181-69dbb880-0e72-11eb-83e1-0e03f5060033.png)
![Frame 4](https://user-images.githubusercontent.com/17960677/96025198-6fd19980-0e72-11eb-9ba7-50dbf804dda3.png)
![Frame 5](https://user-images.githubusercontent.com/17960677/96025219-752ee400-0e72-11eb-9fe5-11074883d72a.png)
![Frame 6](https://user-images.githubusercontent.com/17960677/96025252-7eb84c00-0e72-11eb-8a26-ee7015da3de7.png)

### View Frame

This tool displays a Popup with all the current frames in the Frame stack.  

*Load A Frame*: Click on the Frame. 
*Delete A Frame*: Right Click / Long press on mobile, To delete a Frame. 

![Frame Panel](https://user-images.githubusercontent.com/17960677/96025802-48c79780-0e73-11eb-8ca1-4948226804ad.png)
