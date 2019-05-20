class Enemy{
    constructor(x, y, w, h) {
        this.alive = true;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.enemyImage = enemy;
    }

    display() {
        push();
        image(this.enemyImage, this.x, this.y, this.w, this.h);
        pop();
    }

    update(){

    }

}

function spawnEnemys(row, count) {
    for (let index = 0; index < row; index++) {
        enemys[index] = [];

        for (let index1 = 0; index1 < count; index1++) {
            let w = 55;
            let h = 55;
            
            let marginX = 25;
            let marginY = 5;
            
            let x = w * index1 + marginX * index1;
            let y = ingameCanvas.y * 0.15 + h * index + marginY;
            
            enemys[index][index1] = new Enemy(x, y, w, h);
        }
    }
}

function displayEnemys() {
    for (let index = 0; index < enemys.length; index++) {
        for (let index1 = 0; index1 < enemys[index].length; index1++) {
            let element = enemys[index][index1];

            if (element.alive == true) {
                element.display();
            }
        }
    }
}