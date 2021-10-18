(function () {
  var buffer, context, drawMap, map, size;
  buffer = document.createElement("canvas").getContext("2d");
  context = document.querySelector("canvas").getContext("2d");

  (map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), (size = 256);

  buffer.canvas.width = 1028;
  buffer.canvas.height = 1028;
  drawMap = function () {
    for (let index = 0; index < map.length; index++) {
      switch (map[index]) {
        case 1:
          buffer.fillStyle = "#D7D0C8";
          break;
        case 2:
          buffer.fillStyle = "#9CFFFA";
          break;
        case 3:
          buffer.fillStyle = "#E3B5A4";
          break;
        case 4:
          buffer.fillStyle = "#EEEEEE";
          break;
        case 5:
          buffer.fillStyle = "#966B9D";
          break;
        case 6:
          buffer.fillStyle = "#D7D0C8";
          break;
        case 7:
          buffer.fillStyle = "#9CFFFA";
          break;
        case 8:
          buffer.fillStyle = "#E3B5A4";
          break;
        case 9:
          buffer.fillStyle = "#EEEEEE";
          break;
        case 10:
          buffer.fillStyle = "#966B9D";
          break;
        case 11:
          buffer.fillStyle = "#D7D0C8";
          break;
        case 12:
          buffer.fillStyle = "#9CFFFA";
          break;
        case 13:
          buffer.fillStyle = "#E3B5A4";
          break;
        case 14:
          buffer.fillStyle = "#EEEEEE";
          break;
        case 15:
          buffer.fillStyle = "#966B9D";
          break;
        case 16:
          buffer.fillStyle = "#D7D0C8";
          break;
        case 17:
          buffer.fillStyle = "#9CFFFA";
          break;
        case 18:
          buffer.fillStyle = "#E3B5A4";
          break;
        case 19:
          buffer.fillStyle = "#EEEEEE";
          break;
        case 20:
          buffer.fillStyle = "#966B9D";
          break;
        case 21:
          buffer.fillStyle = "#D7D0C8";
          break;
        case 22:
          buffer.fillStyle = "#9CFFFA";
          break;
        case 23:
          buffer.fillStyle = "#E3B5A4";
          break;
        case 24:
          buffer.fillStyle = "#EEEEEE";
          break;
      }

      buffer.fillRect(
        (index % 4) * size,
        Math.floor(index / 4) * size,
        size,
        size
      );
    }

    context.drawImage(
      buffer.canvas,
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
  };

  resize = function (event) {
    context.canvas.width = Math.floor(
      document.documentElement.clientHeight - 128
    );
    if (context.canvas.width > document.documentElement.clientHeight) {
      context.canvas.width = Math.floor(document.documentElement.clientHeight);
    }
    context.canvas.height = Math.floor(context.canvas.width * 0.3625);

    drawMap();
  };

  window.addEventListener("resize", resize, { passive: true });

  resize();
})();
