import { Vec } from './vec.js'

let player = new Vec(0,0)
let reticle = new Vec(0,0)

function game(ctx, dt, previousMousePos, mousePos, mousedown, wheeldelta) {
    if(wheeldelta){
        const b = Vec.between(player, reticle).rotate(wheeldelta > 0 ? 0.3 : -0.3)
        reticle = player.copy().add(b)
    }
    if(mousedown){
        const b = Vec.between(player, reticle)
        player.setCoords(mousePos.x, mousePos.y)
        reticle = player.copy().add(b)
    }else{
        player.setCoords(mousePos.x, mousePos.y)
        const b = Vec.between(player, reticle)
        const overhang = b.magnitude - 64
        if (overhang > 0) {
            reticle = player.copy().add(b.normalize().multiply(64))
        }
    }

    ctx.clearRect(0, 0, 600, 600)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 16;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(previousMousePos.x, previousMousePos.y);
    ctx.lineTo(player.x, player.y);
    ctx.stroke();
    ctx.lineWidth = 2
    ctx.lineCap = 'butt'
    ctx.beginPath();
    ctx.arc(reticle.x, reticle.y, 8, 0, 2 * Math.PI);
    ctx.stroke();

}

export {
    game
};