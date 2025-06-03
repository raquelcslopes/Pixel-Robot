const dimensions = 36;

document.addEventListener("DOMContentLoaded", () => {

    const panel = document.querySelector(".panel");
    const pixels = [];
    const pixelState = Array(dimensions).fill().map(() => Array(dimensions).fill(false));
    const happyFace = [
        {
            "row": 10,
            "col": 10
        },
        {
            "row": 10,
            "col": 24
        },
        {
            "row": 11,
            "col": 9
        },
        {
            "row": 11,
            "col": 11
        },
        {
            "row": 11,
            "col": 23
        },
        {
            "row": 11,
            "col": 25
        },
        {
            "row": 12,
            "col": 10
        },
        {
            "row": 12,
            "col": 24
        },
        {
            "row": 18,
            "col": 10
        },
        {
            "row": 18,
            "col": 22
        },
        {
            "row": 19,
            "col": 11
        },
        {
            "row": 19,
            "col": 21
        },
        {
            "row": 20,
            "col": 12
        },
        {
            "row": 20,
            "col": 20
        },
        {
            "row": 21,
            "col": 13
        },
        {
            "row": 21,
            "col": 14
        },
        {
            "row": 21,
            "col": 15
        },
        {
            "row": 21,
            "col": 16
        },
        {
            "row": 21,
            "col": 17
        },
        {
            "row": 21,
            "col": 18
        },
        {
            "row": 21,
            "col": 19
        }
    ];

    const angryFace = [
        {
            "row": 5,
            "col": 8
        },
        {
            "row": 5,
            "col": 22
        },
        {
            "row": 6,
            "col": 9
        },
        {
            "row": 6,
            "col": 21
        },
        {
            "row": 7,
            "col": 10
        },
        {
            "row": 7,
            "col": 20
        },
        {
            "row": 9,
            "col": 9
        },
        {
            "row": 9,
            "col": 10
        },
        {
            "row": 9,
            "col": 11
        },
        {
            "row": 9,
            "col": 20
        },
        {
            "row": 9,
            "col": 21
        },
        {
            "row": 9,
            "col": 22
        },
        {
            "row": 10,
            "col": 9
        },
        {
            "row": 10,
            "col": 10
        },
        {
            "row": 10,
            "col": 11
        },
        {
            "row": 10,
            "col": 20
        },
        {
            "row": 10,
            "col": 21
        },
        {
            "row": 10,
            "col": 22
        },
        {
            "row": 11,
            "col": 9
        },
        {
            "row": 11,
            "col": 10
        },
        {
            "row": 11,
            "col": 11
        },
        {
            "row": 11,
            "col": 20
        },
        {
            "row": 11,
            "col": 21
        },
        {
            "row": 11,
            "col": 22
        },
        {
            "row": 20,
            "col": 11
        },
        {
            "row": 20,
            "col": 12
        },
        {
            "row": 20,
            "col": 13
        },
        {
            "row": 20,
            "col": 14
        },
        {
            "row": 20,
            "col": 15
        },
        {
            "row": 20,
            "col": 16
        },
        {
            "row": 20,
            "col": 17
        },
        {
            "row": 20,
            "col": 18
        },
        {
            "row": 20,
            "col": 19
        }
    ];

    for (let row = 0; row < dimensions; row++) {
        for (let col = 0; col < dimensions; col++) {

            const pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.dataset.row = row;
            pixel.dataset.col = col;

            panel.appendChild(pixel);

            pixel.addEventListener("click", function () {
                const row = Number.parseInt(this.dataset.row);
                const col = Number.parseInt(this.dataset.col);
                console.log(`row: ${row}, col:${col}`);

                this.classList.toggle("on");

                pixelState[row][col] = this.classList.contains("on");
            })
            pixels.push(pixel);
        }
    }

    function printState() {
        const activePixels = [];

        for (let row = 0; row < dimensions; row++) {
            for (let col = 0; col < dimensions; col++) {
                if (pixelState[row][col]) {
                    activePixels.push({ row: row, col: col })
                }
            }
        }
        console.log("Pixel state:")
        console.log(activePixels)
    }

    document.querySelector("#print").addEventListener("click", function () {
        printState();
    })

    function getPixelElement(row, col) {
        return pixels[row * dimensions + col];
    }

    function clearAll() {
        for (pixel of pixels) {
            pixel.classList.remove("on");
        }
        pixelState.forEach((row) => {
            row.fill(false);
        });
    }

    function drawHappyFace() {
        clearAll();
        for (coordinates of happyFace) {
            const pixel = getPixelElement(coordinates.row, coordinates.col);
            pixel.classList.toggle("on");

            pixelState[coordinates.row][coordinates.col] = true;
        }
    }

    function drawAngryFace() {
        clearAll();
        for (coordinates of angryFace) {
            const pixel = getPixelElement(coordinates.row, coordinates.col);
            pixel.classList.toggle("on");

            pixelState[coordinates.row][coordinates.col] = true;
        }
    }

    document.querySelector("#happy").addEventListener("click", function () {
        drawHappyFace();
    });

    document.querySelector("#angry").addEventListener("click", function () {
        drawAngryFace();
    })

});