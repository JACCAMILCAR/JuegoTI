var con=0;
// export const cont = con;

Quintus.Hongo = function (Q) {
  
  Q.Sprite.extend("Hongo", {
    init: function (p) {
      this._super(p, {
        asset: "hongo.png",
        type: Q.SPRITE_HONGOS,
        y: 10,
        x: 300 + Math.random() * (1080 - 360),
        vy: 15,
        scale: 0.04,
      });
      this.add("2d");
      this.on("touch");
    },
    touch: function (touch) {
      // console.log(touch);
      // console.log("Hizo click");
      Q.state.inc("cantidadHongo",1);
      this.destroy();
      
      // con++;
      // console.log(window.con);
   
    },
  });
};