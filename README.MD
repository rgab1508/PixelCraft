# PixelCraft
A pixel Art & Animation Creation Tool Built using HTML5 Canvas.  
It is a Progressive Web App (PWA) with offline compatibility.  
It is mobile-friendly and is very easy to use.  

![PixelCraft](icons/logo.png)

## Overview
This App is Available at both these locations

https://rgab1508.github.io/PixelCraft

https://pixelcraft.web.app

On opening, you will get a screen as Follows

![PixelCraft overview](images/overview.png)

You can choose Any Dimensions for your Canvas, *16 X 16* is the default dimension.  
Dimensions below *128 X 128* are preferable for smooth operation and GIF creation.

## Toolbar

![PixelCraft overview](images/toolbar.png)

The List Of all Tools and methods to use them are as follows

### Pencil

The Pencil tool is the most basic tool and is used to draw pixels Freehand

![Pencil Tool](https://user-images.githubusercontent.com/17960677/96023223-b83b8800-0e6f-11eb-8af1-0cfab42c19d7.png)

### Eraser

The Eraser tool is used to erase a given pixel 1 pixel at a time. It has dimensions *1 X 1* and is fixed.

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

**Load A Frame**: Click on the Frame.   
**Delete A Frame**: Right Click / Long press on mobile, To delete a Frame. 

![Frame Panel](https://user-images.githubusercontent.com/17960677/96025802-48c79780-0e73-11eb-8ca1-4948226804ad.png)

## Utility Tools

### Undo/Redo

The Undo/Redo Functionality is not very advanced and is only capable of undoing/redoing 1 pixel at a time.  
It is only useful for correcting small mistakes, hence, it is advised to draw with care, or, add a frame if doing a big change with chances of mistake.

![Undo/Redo Tool](https://user-images.githubusercontent.com/17960677/96026461-23875900-0e74-11eb-8682-479b33894a4f.png)
![Undo/Redo Tool](https://user-images.githubusercontent.com/17960677/96026481-2bdf9400-0e74-11eb-8e4c-4c64508ae011.png)

### Clear Window

This Tool is used to clear the current Canvas window.

Before:  
![Clear Window](https://user-images.githubusercontent.com/17960677/96026664-73662000-0e74-11eb-8111-c46f54375056.png)  
After:  
![Claer Window](https://user-images.githubusercontent.com/17960677/96026681-7a8d2e00-0e74-11eb-9984-c267fb0290c9.png)  


## Advanced Tools

### Import image

This Tool is Used to import an image and convert it to Pixel Art of Given Dimensions.

![Mona Lisa](https://user-images.githubusercontent.com/17960677/96027216-2df62280-0e75-11eb-880d-c1eed2a21fd6.png)
![Mona Lisa Pixelated](https://user-images.githubusercontent.com/17960677/96027394-71509100-0e75-11eb-8260-c1ed426805bc.png)

## Saving Pixel Art and GIF Animation

Once you are done with making your pixel art or animation frames you can export it as a PNG or GIF to share it on other platforms. Let's see how it's done.![Save Image](https://user-images.githubusercontent.com/17960677/96027946-4ca8e900-0e76-11eb-8d5c-08864cc2fce8.png)

### Saving Image

Save Image option is available in the Drop-down on top left corner, It will download a file named *canvas.png* with dimensions *10 x width X 10 x Height*

### Saving GIF

After making all the frames and making necessary changes in Frames Panel, you can export the GIF using option present in Dropdown. The dimensions will be same as that of image.

Thanks to [@eagleloid](https://github.com/eagleloid) for this fix [#44](https://github.com/rgab1508/PixelCraft/pull/44)

## Color Palette & Transparency

The Following colors are available on the color Palette.

![Color Palette](https://user-images.githubusercontent.com/17960677/96028508-fdaf8380-0e76-11eb-8502-18d49d96d059.png)

You can select any color by clicking on it.  

You can also set color Transparency to create translucent colors and create color combinations. This property can be used to create complex patterns with greater flexibility.
**Right click on color to set transparency value between 0 and 1**

Thanks to [@mrfoogles](https://github.com/mrfoogles) for this fix [#41](https://github.com/rgab1508/PixelCraft/pull/41)

![Complex Pattern](https://user-images.githubusercontent.com/17960677/96028936-95ad6d00-0e77-11eb-8a8c-07caa0f2a8b5.jpg)

## PWA Support

This Web App is a Fully Compatible PWA and is installable.  

![PWA Support](https://user-images.githubusercontent.com/17960677/96029402-3ef46300-0e78-11eb-8a54-d54b6dff458a.png)

You can install it either from the Dropdown or using the "Add to Home Screen" Button From Options.  

## Some Pixel Arts Made with PixelCraft

<img src="https://user-images.githubusercontent.com/17960677/96029683-a14d6380-0e78-11eb-8901-bff832a4cb6e.gif" alt="canvas (1)" width="250" height="250" ><img src="https://user-images.githubusercontent.com/17960677/96029686-a3afbd80-0e78-11eb-8c03-0f407a5110fd.gif" alt="canvas (2)" width="250" height="250"><img src="https://user-images.githubusercontent.com/17960677/96029693-a4e0ea80-0e78-11eb-9528-1b303a89599e.gif" alt="canvas" width="250" height="250"><img src="https://user-images.githubusercontent.com/17960677/96029696-a5798100-0e78-11eb-8653-43ebc672f1d6.gif" alt="canvas (29)" width="250" height="250"><img src="https://user-images.githubusercontent.com/17960677/96029700-a7434480-0e78-11eb-8505-3b6539bc39d2.gif" alt="canvas (9)" width="250" height="250">
