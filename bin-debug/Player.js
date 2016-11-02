// TypeScript file
var _people;
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.iniit();
    }
    var d = __define,c=Player,p=c.prototype;
    p.iniit = function () {
        _people = new egret.Bitmap();
        var _texture = RES.getRes("1_png");
        _people.texture = _texture;
        this.addChild(_people);
    };
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
