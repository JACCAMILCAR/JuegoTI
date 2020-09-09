Quintus.Enemigo = function (Q) {
  
    Q.MovingSprite.extend("Enemigo", {
      draw: function(ctx) {
        this._super(ctx, {
            // asset: "dragon.png",
            type: Q.SPRITE_ENEMIGO,
          y: 200,
          x: 300,
        
          });
        ctx.fill();
        this.add("2d");
        this.on("init");
        },
      init: function (p) {
        this._super(p, {
          asset: "dragon.png",
          type: Q.SPRITE_ENEMIGO,
          y: 200,
          x: 300,
          scale: 0.3,
        //   frecuenciaFuego: {min:10, max:50},
          vida: 20
        });
        
        this.add("2d");
      },
      step: function(dt){
          if(this.p.vida <=0){
              this.destroy();
          }
      },
      hacerDanio: function(danio){
          console.log(danio);
          this.p.vida -= danio;
          console.log("menos", this.p.vida);
      }
  
    });
  };