// TypeScript file
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var config = [
            { x: 0, y: 0, walkable: true, image: "road_jpg" },
            { x: 0, y: 1, walkable: true, image: "road_jpg" },
            { x: 0, y: 2, walkable: true, image: "road_jpg" },
            { x: 0, y: 3, walkable: true, image: "road_jpg" },
            { x: 1, y: 0, walkable: true, image: "box_jpg" },
            { x: 1, y: 1, walkable: true, image: "box_jpg" },
            { x: 1, y: 2, walkable: true, image: "box_jpg" },
            { x: 1, y: 3, walkable: true, image: "box_jpg" },
            { x: 2, y: 0, walkable: true, image: "road_jpg" },
            { x: 2, y: 1, walkable: true, image: "road_jpg" },
            { x: 2, y: 2, walkable: true, image: "road_jpg" },
            { x: 2, y: 3, walkable: true, image: "road_jpg" },
        ];
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TILE_SIZE);
            var gridY = Math.floor(localY / TileMap.TILE_SIZE);
            console.log(gridX, gridY);
        }, this);
    };
    TileMap.TILE_SIZE = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.scaleX = bitmap.scaleY = 2;
        this.x = data.x * TileMap.TILE_SIZE;
        this.y = data.y * TileMap.TILE_SIZE;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
