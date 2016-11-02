// TypeScript file
class TileMap extends egret.DisplayObjectContainer
{
    public static TILE_SIZE = 64;

    constructor ()
    {
        super();
        this.init();
    }

    private init()
    {
        var config : TileData[]=
        [
            {x:0,y:0,walkable:true,image:"road_jpg"},
            {x:0,y:1,walkable:true,image:"road_jpg"},
            {x:0,y:2,walkable:true,image:"road_jpg"},
            {x:0,y:3,walkable:true,image:"road_jpg"},

            {x:1,y:0,walkable:true,image:"box_jpg"},
            {x:1,y:1,walkable:true,image:"box_jpg"},
            {x:1,y:2,walkable:true,image:"box_jpg"},
            {x:1,y:3,walkable:true,image:"box_jpg"},

            {x:2,y:0,walkable:true,image:"road_jpg"},
            {x:2,y:1,walkable:true,image:"road_jpg"},
            {x:2,y:2,walkable:true,image:"road_jpg"},
            {x:2,y:3,walkable:true,image:"road_jpg"},
        ]
        for(var i=0;i< config.length;i++)
        {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
            //console.log("****");
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX/TileMap.TILE_SIZE);
            var gridY = Math.floor(localY/TileMap.TILE_SIZE);
            console.log(gridX,gridY);
        },this)
    }
}
interface TileData
{
    x:number;
    y:number;
    walkable:boolean;
    image:string;
}

class Tile extends egret.DisplayObjectContainer
{
    data: TileData
    constructor(data:TileData)
    {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.scaleX = bitmap.scaleY =2;
        this.x = data.x*TileMap.TILE_SIZE;
        this.y = data.y*TileMap.TILE_SIZE; 
    }
}