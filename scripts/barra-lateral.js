

// '<html> <head> <script src="hongo.js"></script> </head> </html>'
// var Q = Quintus().include("Hongo").setup();
// var contad = new Q.Hongo();
var contad = "1";
Quintus.BarraLateralGUI = function (Q) {
  Q.UI.Container.extend("BarraLateral", {
    init: function () {
      this._super({
        fill: "#B71C1C",
        x: 60,
        y: 300,
        radius: 0,
        border: 0,
        w: 150,
        h: 720,
        
      });
      this.on("inserted");
      var panel=this;
      Q.state.on("change.cantidadHongo", function(){
        panel.actualizarContadorHongos();
      });
    },
    inserted: function () {
      var hongo = new Q.Sprite({
        asset: "hongo.png",
        x: 60,
        y: 40,
        scale: 0.03,
     
      });
      this.stage.insert(hongo);
      this.totalHongos = new Q.UI.Text({
        x: 100,
        y: 100,
        color: "white",
        label:"100 "

      })
      
      this.stage.insert(this.totalHongos);
      this.actualizarContadorHongos();

    },
    actualizarContadorHongos: function(){
      // console.log(Q.state);
      // console.log(this.totalHongos);
      this.totalHongos.p.label = Q.state.get("cantidadHongo")+" ";
    }

  });
};
    // var texto = new Q.UI.Text({
      //   label: contad,
      //   color: "white",
      //   x: 20,
      //   y: 100,
      // });