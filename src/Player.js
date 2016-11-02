// TypeScript file
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.iniit();
    }
    Player.prototype.iniit = function () {
        this._people = new egret.Bitmap();
        var _texture = RES.getRes("1_png");
        this._people.texture = _texture;
        this.addChild(this._people);
        this._ifIdle = true;
        this._ifWalk = false;
    };
    /*public move(targetX: number, targetY: number)
    {
        egret.Tween.removeTweens(this._people);
        if (targetX > this._people.x)
        {
            this._people.skewY = 180;
        }
        else { this._people.skewY = 0; }
        this._stateMachine.setState(new PlayerIdleState(this));

        egret.Tween.get(this._people).to({ x: targetX, y: targetY }, 2000).call( function(){this.idle()} ,this);
    
    }*/
    Player.prototype.Walk = function () {
    };
    Player.prototype.Idle = function () {
        var _this = this;
        var IdleList = ["1_png", "2_png", "3_png", "4_png"];
        var count = -1;
        egret.Ticker.getInstance().register(function () {
            count = count + 0.06;
            if (count >= IdleList.length) {
                count = 0;
            }
            _this._people.texture = RES.getRes(IdleList[Math.floor(count)]);
        }, this);
    };
    return Player;
}(egret.DisplayObjectContainer));
var PlayerState = (function () {
    function PlayerState(player) {
        this._player = player;
    }
    PlayerState.prototype.onEnter = function () {
    };
    PlayerState.prototype.onExit = function () {
    };
    return PlayerState;
}());
var PlayerWalkState = (function (_super) {
    __extends(PlayerWalkState, _super);
    function PlayerWalkState() {
        _super.apply(this, arguments);
    }
    PlayerWalkState.prototype.onEnter = function () {
        this._player._ifWalk = true;
        this._player.Walk();
    };
    PlayerWalkState.prototype.onExit = function () {
        this._player._ifWalk = false;
    };
    return PlayerWalkState;
}(PlayerState));
var PlayerIdleState = (function (_super) {
    __extends(PlayerIdleState, _super);
    function PlayerIdleState() {
        _super.apply(this, arguments);
    }
    PlayerIdleState.prototype.onEnter = function () {
        this._player._ifIdle = true;
        this._player.Idle();
    };
    PlayerIdleState.prototype.onExit = function () {
        this._player._ifIdle = false;
    };
    return PlayerIdleState;
}(PlayerState));
var StateMachine = (function () {
    function StateMachine() {
    }
    StateMachine.prototype.setState = function (e) {
        if (this.CurrentState != null) {
            this.CurrentState.onExit();
        }
        this.CurrentState = e;
        e.onEnter();
    };
    return StateMachine;
}());
