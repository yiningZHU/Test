// TypeScript file

interface State 
{
    
    onEnter();

    onExit();
}

var _people:egret.Bitmap;

class Player extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
        this.iniit();
        
    }

    private iniit():void
    {
        _people = new egret.Bitmap();
        var _texture:egret.Texture = RES.getRes("1_png");
        _people.texture = _texture;
        this.addChild(_people);
    }

}