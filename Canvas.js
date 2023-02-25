class Canvas {
  constructor(width, height) {
    this.canvas = document.querySelector("#canvas");
    this.canvas.width = 10 * width;
    this.canvas.height = 10 * height;
    this.width = width;
    this.height = height;
    this.canvas.style.display = "block";
    this.canvas.style.height =
      Math.floor((height / width) * this.canvas.clientWidth) + "px";
    this.w = +this.canvas.width;
    this.h = +this.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "white";
    this.ctx.globalAlpha = 1;
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.data = [...Array(this.width)].map((e) =>
      Array(this.height).fill([255, 255, 255, 255])
    );
    this.steps = [];
    this.redo_arr = [];
    this.frames = [];

    this.previous_point = new Point(undefined, undefined);
    // Moved on-click to on-mouse-up to tell the difference
    //  between a click and a mouse-drag + click

    this.canvas.addEventListener("mousemove", (e) => {
      if (this.active) {
        var rect = this.canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        x = Math.floor((this.width * x) / this.canvas.clientWidth);
        y = Math.floor((this.height * y) / this.canvas.clientHeight);
        if (tools[Tool.pen]) {
          var p = new Point(x, y);
          if (!p.equals(this.previous_point)) {
            this.previous_point = p;
            this.draw(p.x, p.y);
          }
        } else if (tools[Tool.eraser]) {
          this.erase(x, y);
        }
      }
    });

    this.canvas.addEventListener("touchmove", (e) => {
      var rect = this.canvas.getBoundingClientRect();
      var x = e.touches[0].clientX - rect.left;
      var y = e.touches[0].clientY - rect.top;
      x = Math.floor((this.width * x) / this.canvas.clientWidth);
      y = Math.floor((this.height * y) / this.canvas.clientHeight);
      if (tools[Tool.pen]) {
        var p = new Point(x, y);
        if (!p.equals(this.previous_point)) {
          this.previous_point = p;
          this.draw(p.x, p.y);
        }
      } else if (tools[Tool.eraser]) {
        this.erase(x, y);
      }
    });

    this.canvas.addEventListener("mousedown", (e) => {
      this.previous_point = new Point(undefined, undefined);
      this.active = true;
      console.log("Active");
    });

    this.canvas.addEventListener("mouseleave", (e) => {
      this.active = false;
    });

    this.canvas.addEventListener("mouseup", (e) => {
      this.active = false;
      if (this.previous_point.x !== undefined) {
        return; // Don't re-paint the last point in a streak
      }

      var rect = this.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      x = Math.floor((this.width * x) / this.canvas.clientWidth);
      y = Math.floor((this.height * y) / this.canvas.clientHeight);
      if (tools[Tool.fillBucket]) {
        filler(x, y, this.data[x][y]);
      } else if (tools[Tool.eraser]) {
        var temp = this.color;
        var tga = this.ctx.globalAlpha;
        this.setcolor([255, 255, 255, 255]);
        this.draw(x, y);
        this.setcolor(temp);
        this.ctx.globalAlpha = tga;
      } else if (tools[Tool.line]) {
        lc.push(new Point(x, y));
        if (lc.length == 2) {
          var lp = line(lc[0], lc[1]);
          lc = [];
          var p;
          for (p of lp) this.draw(p.x, p.y);
        }
      } else if (tools[Tool.circle]) {
        var centre = new Point(x, y);
        var radius = +prompt("radius?");
        var lp = circle(radius, centre);
        var p;
        for (p of lp) this.draw(p.x, p.y);
      } else if (tools[Tool.ellipse]) {
        var center = new Point(x, y);
        var radiusX = +prompt("X radius?");
        var radiusY = +prompt("Y radius?");
        var lp = ellipse(radiusX, radiusY, center);
        for (p of lp) this.draw(p.x, p.y);
      } else {
        this.previous_point = new Point(x, y);
        this.draw(x, y);
      }
    });
  }

  draw(x, y, count) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.data[x][y] = this.color;
      this.ctx.fillRect(
        Math.floor(x * (this.w / this.width)),
        Math.floor(y * (this.h / this.height)),
        Math.floor(this.w / this.width),
        Math.floor(this.h / this.height)
      );
      if (
        !count &&
        JSON.stringify(this.steps[this.steps.length - 1]) !==
          JSON.stringify([x, y, this.color, this.ctx.globalAlpha])
      )
        this.steps.push([x, y, this.color, this.ctx.globalAlpha]);
    }
  }

  erase(x, y) {
    var temp = this.color;
    var tga = this.ctx.globalAlpha;
    this.setcolor([255, 255, 255, 255]);
    this.draw(x, y);
    this.setcolor(temp);
    this.ctx.globalAlpha = tga;
  }

  setcolor(color) {
    this.ctx.globalAlpha = 1;
    this.color = color;
    this.ctx.fillStyle =
      "rgba(" +
      color[0] +
      "," +
      color[1] +
      "," +
      color[2] +
      "," +
      color[3] +
      ")";
  }

  setmode(i) {
    tools = [false, false, false, false, false, false];
    tools[i] = true;
    document.querySelectorAll("#toolbar .item").forEach((x, i) => {
      if (tools[i]) x.style.backgroundColor = "grey";
      else x.style.backgroundColor = "";
    });
  }

  save() {
    this.canvas.toBlob(function (blob) {
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.download = "canvas.png";
      link.href = url;
      link.click();
    });
  }

  clear() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.data = [...Array(this.width)].map((e) =>
      Array(this.height).fill([255, 255, 255, 255])
    );
    this.setcolor(this.color);
    this.setmode(Tool.pen);
  }

  addFrame(data = null) {
    var img = new Image();
    img.src = data || this.canvas.toDataURL();
    this.frames.push([img, this.data.map((inner) => inner.slice())]);
  }

  deleteFrame(f) {
    this.frames.splice(f, 1);
  }

  loadFrame(f) {
    this.clear();
    var img = this.frames[f][1];
    var tmp_color = this.color;
    var tmp_alpha = this.ctx.globalAlpha;
    this.ctx.globalAlpha = 1;
    var i, j;
    for (i = 0; i < this.width; i++) {
      for (j = 0; j < this.height; j++) {
        this.setcolor(img[i][j]);
        this.draw(i, j);
      }
    }
    this.setcolor(tmp_color);
    this.ctx.globalAlpha = tmp_alpha;
  }

  renderGIF() {
    if (this.frames == 0) {
      alert("You must add frames before saving as a GIF");
    } else {
      this.frames.forEach((frame) => {
        gif.addFrame(frame[0], {
          copy: true,
          delay: 100,
        });
      });
      gif.render();
    }
  }

  undo() {
    this.clear();
    const lastRemovedItem = this.steps.pop();

    if (!lastRemovedItem) return;

    this.redo_arr.push(lastRemovedItem);
    var step;
    this.steps.forEach((step) => {
      this.setcolor(step[2]);
      this.ctx.globalAlpha = step[3];
      this.draw(step[0], step[1], true);
    });
  }
  
  redo() {
    const lastRemovedItem = this.redo_arr.pop();

    if (!lastRemovedItem) return;

    this.steps.push(lastRemovedItem);
    var step;
    this.steps.forEach((step) => {
      this.setcolor(step[2]);
      this.ctx.globalAlpha = step[3];
      this.draw(step[0], step[1], true);
    });
  }

  saveInLocal() {
    /*let a = this.frames.map(frame=> [frame[0].src,frame[1]]);
      let f =  JSON.stringify(a);*/
    let d = {
      colors: window.colors,
      currColor: this.color,
      width: this.width,
      height: this.height,
      url: this.canvas.toDataURL(),
      steps: this.steps,
      redo_arr: this.redo_arr,
      dim: window.dim,
    };
    localStorage.setItem("pc-canvas-data", JSON.stringify(d));
  }

  addImage() {
    var _this = this;
    var fp = document.createElement("input");
    fp.type = "file";
    fp.click();
    fp.onchange = function (e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        var uimg = new Image();
        uimg.src = reader.result;
        uimg.width = _this.w;
        uimg.height = _this.h;
        uimg.onload = function () {
          var pxc = document.createElement("canvas");
          pxc.width = _this.w;
          pxc.height = _this.h;
          var pxctx = pxc.getContext("2d");
          pxctx.drawImage(uimg, 0, 0, _this.w, _this.h);
          var i, j;
          for (i = 0; i < _this.width; i++) {
            for (j = 0; j < _this.height; j++) {
              var ctr = 0;
              var avg = [0, 0, 0, 0];
              var pix = pxctx.getImageData(10 * i, 10 * j, 10, 10).data;
              pix.forEach((x, k) => {
                avg[k % 4] += x;
                if (k % 4 == 0) ctr++;
              });
              avg = avg.map((x) => ~~(x / ctr));
              _this.setcolor(avg);
              _this.draw(i, j);
            }
          }
        };
      };
    };
  }
}
