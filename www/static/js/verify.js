!(function (t, a) {
  function i(t) {
    if (
      ((this.options = {
        id: "",
        canvasId: "verifyCanvas",
        width: "100",
        height: "30",
        type: "blend",
        code: "",
      }),
      "[object Object]" == Object.prototype.toString.call(t))
    )
      for (var i in t) this.options[i] = t[i];
    else this.options.id = t;
    (this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",")),
      (this.options.letterArr =
        "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")),
      this._init(),
      this.refresh();
  }
  function p(t, i) {
    return Math.floor(Math.random() * (i - t) + t);
  }
  function l(t, i) {
    return "rgb(" + p(t, i) + "," + p(t, i) + "," + p(t, i) + ")";
  }
  (i.prototype = {
    version: "1.0.0",
    _init: function () {
      "IE" === this.options.browser
        ? (i = a.getElementById(this.options.canvasId))
        : ((t = a.getElementById(this.options.id)),
          ((i = a.createElement("canvas")).id = this.options.canvasId),
          (i.width = this.options.width),
          (i.height = this.options.height),
          (i.style.cursor = "pointer"),
          (i.innerHTML = "您的浏览器版本不支持canvas"),
          t.appendChild(i));
      var t,
        i,
        o = this;
      i.onclick = function () {
        o.refresh();
      };
    },
    refresh: function () {
      this.options.code = "";
      var t = a.getElementById(this.options.canvasId);
      if (t.getContext) {
        var i,
          o = t.getContext("2d");
        (o.textBaseline = "middle"),
          (o.fillStyle = l(248, 255)),
          o.fillRect(0, 0, this.options.width, this.options.height),
          "IE" === this.options.browser &&
            o.clearRect(0, 0, this.options.width, this.options.height),
          (i =
            "blend" == this.options.type
              ? this.options.numArr.concat(this.options.letterArr)
              : "number" == this.options.type
              ? this.options.numArr
              : this.options.letterArr);
        for (var s = 1; s <= 4; s++) {
          var e = i[p(s % 2 == 0 ? 0 : 10, s % 2 == 0 ? 10 : i.length)],
            n =
              ((this.options.code += e),
              (o.font =
                p(this.options.height, this.options.height) + "px SimHei"),
              (o.fillStyle = l(0, 10)),
              (o.shadowOffsetX = p(-3, 3)),
              (o.shadowOffsetY = p(-3, 3)),
              (o.shadowBlur = p(-3, 3)),
              (o.shadowColor = "rgba(0, 0, 0, 0.3)"),
              (this.options.width / 5) * s),
            h = this.options.height / 2,
            r = p(-30, 30);
          o.translate(n, h),
            o.rotate((r * Math.PI) / 180),
            o.fillText(e, 0, 0),
            o.rotate((-r * Math.PI) / 180),
            o.translate(-n, -h);
        }
        for (s = 0; s < 4; s++)
          (o.strokeStyle = l(40, 180)),
            o.beginPath(),
            o.moveTo(p(0, this.options.width), p(0, this.options.height)),
            o.lineTo(p(0, this.options.width), p(0, this.options.height)),
            o.stroke();
        for (s = 0; s < this.options.width / 4; s++)
          (o.fillStyle = l(0, 255)),
            o.beginPath(),
            o.arc(
              p(0, this.options.width),
              p(0, this.options.height),
              1,
              0,
              2 * Math.PI
            ),
            o.fill();
      }
    },
    validate: function (t) {
      return (
        (t = t.toLowerCase()) == this.options.code.toLowerCase() ||
        (this.refresh(), !1)
      );
    },
  }),
    (t.GVerify = i);
})(window, document);
