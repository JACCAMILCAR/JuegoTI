Quintus.PersonajeGUI = function (Q) {
  Q.tipoPersonaje = {
    mario: {
      asset: "mario150.png",
      vx: -40,
      danio: 10
    },
    luigi: {
      asset: "Luigi50x50.png",
      vx: -40,
      danio: 10

    },
    princesa: {
      asset: "princesa100x100.png",
      vx: -15,
      danio: 2
    },
    dragon:{
      asset: "dragon.png",
    }
  };
  //MI PERSONAJE
  
  Q.Sprite.extend("Mario", {
    init: function (p) {
      this._super(p, {
        type: Q.SPRITE_MARIO,
        collisionMask: Q.SPRITE_BALAS | Q.SPRITE_ENEMIGO,
        // sprite: "mario",
        // sheet: "mario",
      });
      this.add("2d, platformerControls, animation");
      this.on("step");
      // colisionar nuestro personaje
      this.on("bump.left", function(colisionar){
        if(colisionar.obj.isA("Enemigo")){
          colisionar.obj.hacerDanio(this.p.danio);
        }
      });
    },
    step: function (dt) {
      if (this.p.x <= 150) {
        this.destroy();
        console.log("Mario se destruyo");
        // Q.stageScene("nivel1");
      }
    },
  });
};
