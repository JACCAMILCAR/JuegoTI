Quintus.GamePlayUI = function (Q) {
    Q.Sprite.extend("Nivel",{
        init: function(p){
            this._super(p, {
                asset: "bg.jpg",
                type: Q.SPRITE_PISO,
                x: 1080 /2,
                y: 720 / 2,
                w: 960,
                h: 720,
                frecuenciaHongo: {min:1, max:5}
              });
        this.tiempoSiguienteHongo= this.SiguienteHongo();
        this.on("touch");

        },
        touch: function(touch){
            // console.log(touch);
        },
        step: function(dt){
            this.tiempoSiguienteHongo -= dt;
            // console.log(this.tiempoSiguienteHongo);
            if(this.tiempoSiguienteHongo <= 0){
                this.tiempoSiguienteHongo= this.SiguienteHongo();
                Q.stage(1).insert(new Q.Hongo());
            }
        },
        SiguienteHongo: function(){
            // console.log(this.p);
            return this.p.frecuenciaHongo.min +  Math.random() * (this.p.frecuenciaHongo.max - this.p.frecuenciaHongo.min)
        }
    });
}
