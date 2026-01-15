(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_2_atlas_1", frames: [[1420,1208,180,16],[1420,1226,180,16],[0,0,1934,602],[0,604,1934,602],[0,1208,708,708],[710,1208,708,708]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["test_2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.トゥイーン1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-45,-4.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-4,90,8);


(lib.シーン_1_レイヤー_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_4
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(184.7,91.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(184.65,90.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},95).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AAyAAQAAAVgPAPQgPAOgUAAQgUAAgOgOQgPgPAAgVQAAgUAPgPQAOgOAUAAQAUAAAPAOQAPAPAAAUg");
	this.shape.setTransform(83.95,246.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAkQgPgPAAgVQAAgUAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_1.setTransform(83.95,246.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AgxAAQAAgUAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOQgPgPAAgVg");
	this.shape_2.setTransform(88.6,246.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("AgxAAQAAgUAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAPQgPAOgUAAQgUAAgOgOQgPgPAAgVg");
	this.shape_3.setTransform(93.2,246.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOg");
	this.shape_4.setTransform(93.2,246.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AgxAAQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAUgOAPQgPAPgVAAQgUAAgOgPQgPgPAAgUg");
	this.shape_5.setTransform(97.85,246.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAjQgPgPAAgUQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAUgOAPQgPAPgVAAQgUAAgOgPg");
	this.shape_6.setTransform(97.85,246.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AgxAAQAAgUAPgPQAOgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPQgPgPAAgUg");
	this.shape_7.setTransform(102.45,246.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAjQgPgPAAgUQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAUgPAPQgOAPgVAAQgUAAgOgPg");
	this.shape_8.setTransform(107.1,246.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_9.setTransform(111.75,246.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOQgOgPAAgVg");
	this.shape_10.setTransform(125.65,246.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiAkQgPgPAAgVQAAgUAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAUQAAAVgOAPQgQAOgUAAQgUAAgOgOg");
	this.shape_11.setTransform(125.65,246.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAUAAAQAPQAOAOAAAUQAAAVgOAPQgQAOgUAAQgUAAgPgOg");
	this.shape_12.setTransform(139.55,246.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AgxAAQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPQgOgPAAgUg");
	this.shape_13.setTransform(144.15,246.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAjQgPgPAAgUQAAgUAPgPQAOgOAUAAQAUAAAQAOQAOAPAAAUQAAAUgOAPQgQAPgUAAQgUAAgOgPg");
	this.shape_14.setTransform(158.05,246.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").p("AgxAAQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOQgOgPAAgVg");
	this.shape_15.setTransform(167.3,246.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAkQgOgQAAgUQAAgUAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAUQAAAUgPAQQgPAOgUAAQgUAAgPgOg");
	this.shape_16.setTransform(167.3,246.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AgxAAQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOQgPgPAAgVg");
	this.shape_17.setTransform(171.95,246.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjAkQgOgQAAgUQAAgUAOgOQAPgPAUAAQAUAAAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgPgOg");
	this.shape_18.setTransform(171.95,246.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiAkQgPgQAAgUQAAgUAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAUQAAAUgOAQQgPAOgVAAQgUAAgOgOg");
	this.shape_19.setTransform(176.6,246.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAkQgPgQAAgUQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAUgPAQQgOAOgVAAQgUAAgOgOg");
	this.shape_20.setTransform(185.85,246.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AgxAAQAAgUAOgOQAPgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOQgOgPAAgVg");
	this.shape_21.setTransform(190.5,246.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjAkQgOgQAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAQQgPAOgUAAQgUAAgPgOg");
	this.shape_22.setTransform(190.5,246.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAkQgPgQAAgUQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAUgOAQQgPAOgVAAQgUAAgOgOg");
	this.shape_23.setTransform(199.75,246.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAkQgOgQAAgUQAAgUAOgPQAPgOAUAAQAUAAAQAOQAOAPAAAUQAAAUgOAQQgQAOgUAAQgUAAgPgOg");
	this.shape_24.setTransform(204.35,246.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape_25.setTransform(213.65,246.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AgxAAQAAgUAOgPQAPgOAUAAQAVAAAPAOQAOAPAAAUQAAAUgOAPQgPAPgVAAQgUAAgPgPQgOgPAAgUg");
	this.shape_26.setTransform(218.25,246.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape_27.setTransform(218.25,246.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAOQgPAPgVAAQgUAAgOgPg");
	this.shape_28.setTransform(227.55,246.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AgxAAQAAgUAOgPQAPgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOQgOgPAAgVg");
	this.shape_29.setTransform(287.75,246);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiAkQgPgPAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgUAAgOgOg");
	this.shape_30.setTransform(297,246);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOg");
	this.shape_31.setTransform(343.3,245.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiAkQgPgQAAgUQAAgUAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_32.setTransform(380.35,245.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiAkQgPgQAAgUQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAUgPAQQgOAOgVAAQgUAAgOgOg");
	this.shape_33.setTransform(408.15,245.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAPAPQAOAOAAAUQAAAVgOAOQgPAPgVAAQgUAAgPgPg");
	this.shape_34.setTransform(422.05,245.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAUQAAAVgOAOQgQAPgUAAQgUAAgOgPg");
	this.shape_35.setTransform(426.7,245.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAUAAAQAPQAOAOAAAUQAAAVgOAOQgQAPgUAAQgUAAgPgPg");
	this.shape_36.setTransform(440.6,245.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAQAOQAOAPAAAUQAAAUgOAPQgQAPgUAAQgUAAgPgPg");
	this.shape_37.setTransform(473,245.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:83.95,y:246.45}},{t:this.shape,p:{x:83.95,y:246.45}}]}).to({state:[{t:this.shape_1,p:{x:88.6,y:246.45}},{t:this.shape_2,p:{x:88.6,y:246.45}}]},1).to({state:[{t:this.shape_4,p:{x:93.2,y:246.45}},{t:this.shape_3,p:{x:93.2,y:246.45}}]},1).to({state:[{t:this.shape_6,p:{x:97.85,y:246.4}},{t:this.shape_5,p:{x:97.85,y:246.4}}]},1).to({state:[{t:this.shape_6,p:{x:102.45,y:246.4}},{t:this.shape_7,p:{x:102.45}}]},1).to({state:[{t:this.shape_8,p:{x:107.1,y:246.4}},{t:this.shape_5,p:{x:107.1,y:246.4}}]},1).to({state:[{t:this.shape_9,p:{x:111.75,y:246.4}},{t:this.shape_7,p:{x:111.75}}]},1).to({state:[{t:this.shape_9,p:{x:116.35,y:246.4}},{t:this.shape_5,p:{x:116.35,y:246.4}}]},1).to({state:[{t:this.shape_1,p:{x:121,y:246.35}},{t:this.shape_3,p:{x:121,y:246.35}}]},1).to({state:[{t:this.shape_11,p:{x:125.65,y:246.35}},{t:this.shape_10,p:{x:125.65,y:246.35}}]},1).to({state:[{t:this.shape_1,p:{x:130.25,y:246.35}},{t:this.shape_2,p:{x:130.25,y:246.35}}]},1).to({state:[{t:this.shape_4,p:{x:134.9,y:246.35}},{t:this.shape_10,p:{x:134.9,y:246.35}}]},1).to({state:[{t:this.shape_12,p:{x:139.55,y:246.35}},{t:this.shape_10,p:{x:139.55,y:246.35}}]},1).to({state:[{t:this.shape_9,p:{x:144.15,y:246.3}},{t:this.shape_13,p:{x:144.15,y:246.3}}]},1).to({state:[{t:this.shape_6,p:{x:148.8,y:246.3}},{t:this.shape_13,p:{x:148.8,y:246.3}}]},1).to({state:[{t:this.shape_8,p:{x:153.45,y:246.3}},{t:this.shape_5,p:{x:153.45,y:246.3}}]},1).to({state:[{t:this.shape_14,p:{x:158.05,y:246.3}},{t:this.shape_13,p:{x:158.05,y:246.3}}]},1).to({state:[{t:this.shape_9,p:{x:162.7,y:246.3}},{t:this.shape_5,p:{x:162.7,y:246.3}}]},1).to({state:[{t:this.shape_16,p:{x:167.3,y:246.25}},{t:this.shape_15,p:{x:167.3,y:246.25}}]},1).to({state:[{t:this.shape_18,p:{x:171.95,y:246.25}},{t:this.shape_17,p:{x:171.95,y:246.25}}]},1).to({state:[{t:this.shape_19,p:{x:176.6,y:246.25}},{t:this.shape_17,p:{x:176.6,y:246.25}}]},1).to({state:[{t:this.shape_19,p:{x:181.2,y:246.25}},{t:this.shape_17,p:{x:181.2,y:246.25}}]},1).to({state:[{t:this.shape_20,p:{x:185.85,y:246.25}},{t:this.shape_17,p:{x:185.85,y:246.25}}]},1).to({state:[{t:this.shape_22,p:{x:190.5,y:246.2}},{t:this.shape_21,p:{x:190.5,y:246.2}}]},1).to({state:[{t:this.shape_22,p:{x:195.1,y:246.2}},{t:this.shape_2,p:{x:195.1,y:246.2}}]},1).to({state:[{t:this.shape_23,p:{x:199.75,y:246.2}},{t:this.shape_21,p:{x:199.75,y:246.2}}]},1).to({state:[{t:this.shape_24},{t:this.shape_2,p:{x:204.35,y:246.2}}]},1).to({state:[{t:this.shape_23,p:{x:209,y:246.2}},{t:this.shape_21,p:{x:209,y:246.2}}]},1).to({state:[{t:this.shape_25,p:{x:213.65,y:246.15}},{t:this.shape_13,p:{x:213.65,y:246.15}}]},1).to({state:[{t:this.shape_27},{t:this.shape_26,p:{x:218.25,y:246.15}}]},1).to({state:[{t:this.shape_25,p:{x:222.9,y:246.15}},{t:this.shape_13,p:{x:222.9,y:246.15}}]},1).to({state:[{t:this.shape_28,p:{x:227.55,y:246.15}},{t:this.shape_13,p:{x:227.55,y:246.15}}]},1).to({state:[{t:this.shape_28,p:{x:232.15,y:246.15}},{t:this.shape_13,p:{x:232.15,y:246.15}}]},1).to({state:[{t:this.shape_11,p:{x:236.8,y:246.1}},{t:this.shape_10,p:{x:236.8,y:246.1}}]},1).to({state:[{t:this.shape_1,p:{x:241.4,y:246.1}},{t:this.shape_10,p:{x:241.4,y:246.1}}]},1).to({state:[{t:this.shape_4,p:{x:246.05,y:246.1}},{t:this.shape_10,p:{x:246.05,y:246.1}}]},1).to({state:[{t:this.shape_12,p:{x:250.7,y:246.1}},{t:this.shape_2,p:{x:250.7,y:246.1}}]},1).to({state:[{t:this.shape_4,p:{x:255.3,y:246.1}},{t:this.shape_21,p:{x:255.3,y:246.1}}]},1).to({state:[{t:this.shape_6,p:{x:259.95,y:246.05}},{t:this.shape_26,p:{x:259.95,y:246.05}}]},1).to({state:[{t:this.shape_8,p:{x:264.6,y:246.05}},{t:this.shape_13,p:{x:264.6,y:246.05}}]},1).to({state:[{t:this.shape_14,p:{x:269.2,y:246.05}},{t:this.shape_26,p:{x:269.2,y:246.05}}]},1).to({state:[{t:this.shape_9,p:{x:273.85,y:246.05}},{t:this.shape_13,p:{x:273.85,y:246.05}}]},1).to({state:[{t:this.shape_6,p:{x:278.5,y:246.05}},{t:this.shape_26,p:{x:278.5,y:246.05}}]},1).to({state:[{t:this.shape_4,p:{x:283.1,y:246}},{t:this.shape_15,p:{x:283.1,y:246}}]},1).to({state:[{t:this.shape_1,p:{x:287.75,y:246}},{t:this.shape_29,p:{x:287.75,y:246}}]},1).to({state:[{t:this.shape_1,p:{x:292.35,y:246}},{t:this.shape_15,p:{x:292.35,y:246}}]},1).to({state:[{t:this.shape_30,p:{x:297,y:246}},{t:this.shape_29,p:{x:297,y:246}}]},1).to({state:[{t:this.shape_4,p:{x:301.65,y:246}},{t:this.shape_17,p:{x:301.65,y:246}}]},1).to({state:[{t:this.shape_9,p:{x:306.25,y:245.95}},{t:this.shape_21,p:{x:306.25,y:245.95}}]},1).to({state:[{t:this.shape_6,p:{x:310.9,y:245.95}},{t:this.shape_2,p:{x:310.9,y:245.95}}]},1).to({state:[{t:this.shape_14,p:{x:315.55,y:245.95}},{t:this.shape_21,p:{x:315.55,y:245.95}}]},1).to({state:[{t:this.shape_6,p:{x:320.15,y:245.95}},{t:this.shape_2,p:{x:320.15,y:245.95}}]},1).to({state:[{t:this.shape_9,p:{x:324.8,y:245.95}},{t:this.shape_21,p:{x:324.8,y:245.95}}]},1).to({state:[{t:this.shape_30,p:{x:329.4,y:245.9}},{t:this.shape_5,p:{x:329.4,y:245.9}}]},1).to({state:[{t:this.shape_4,p:{x:334.05,y:245.9}},{t:this.shape_26,p:{x:334.05,y:245.9}}]},1).to({state:[{t:this.shape_1,p:{x:338.7,y:245.9}},{t:this.shape_26,p:{x:338.7,y:245.9}}]},1).to({state:[{t:this.shape_31,p:{x:343.3,y:245.9}},{t:this.shape_26,p:{x:343.3,y:245.9}}]},1).to({state:[{t:this.shape_11,p:{x:347.95,y:245.9}},{t:this.shape_26,p:{x:347.95,y:245.9}}]},1).to({state:[{t:this.shape_9,p:{x:352.6,y:245.85}},{t:this.shape_10,p:{x:352.6,y:245.85}}]},1).to({state:[{t:this.shape_9,p:{x:357.2,y:245.85}},{t:this.shape_21,p:{x:357.2,y:245.85}}]},1).to({state:[{t:this.shape_9,p:{x:361.85,y:245.85}},{t:this.shape_10,p:{x:361.85,y:245.85}}]},1).to({state:[{t:this.shape_6,p:{x:366.5,y:245.85}},{t:this.shape_21,p:{x:366.5,y:245.85}}]},1).to({state:[{t:this.shape_6,p:{x:371.1,y:245.85}},{t:this.shape_10,p:{x:371.1,y:245.85}}]},1).to({state:[{t:this.shape_20,p:{x:375.75,y:245.8}},{t:this.shape_26,p:{x:375.75,y:245.8}}]},1).to({state:[{t:this.shape_32},{t:this.shape_13,p:{x:380.35,y:245.8}}]},1).to({state:[{t:this.shape_16,p:{x:385,y:245.8}},{t:this.shape_26,p:{x:385,y:245.8}}]},1).to({state:[{t:this.shape_19,p:{x:389.65,y:245.8}},{t:this.shape_5,p:{x:389.65,y:245.8}}]},1).to({state:[{t:this.shape_18,p:{x:394.25,y:245.8}},{t:this.shape_26,p:{x:394.25,y:245.8}}]},1).to({state:[{t:this.shape_23,p:{x:398.9,y:245.75}},{t:this.shape_17,p:{x:398.9,y:245.75}}]},1).to({state:[{t:this.shape_22,p:{x:403.55,y:245.75}},{t:this.shape_29,p:{x:403.55,y:245.75}}]},1).to({state:[{t:this.shape_33},{t:this.shape_17,p:{x:408.15,y:245.75}}]},1).to({state:[{t:this.shape_22,p:{x:412.8,y:245.75}},{t:this.shape_29,p:{x:412.8,y:245.75}}]},1).to({state:[{t:this.shape_22,p:{x:417.4,y:245.75}},{t:this.shape_17,p:{x:417.4,y:245.75}}]},1).to({state:[{t:this.shape_34},{t:this.shape_21,p:{x:422.05,y:245.7}}]},1).to({state:[{t:this.shape_35},{t:this.shape_21,p:{x:426.7,y:245.7}}]},1).to({state:[{t:this.shape_28,p:{x:431.3,y:245.7}},{t:this.shape_21,p:{x:431.3,y:245.7}}]},1).to({state:[{t:this.shape_25,p:{x:435.95,y:245.7}},{t:this.shape_21,p:{x:435.95,y:245.7}}]},1).to({state:[{t:this.shape_36},{t:this.shape_10,p:{x:440.6,y:245.7}}]},1).to({state:[{t:this.shape_4,p:{x:445.2,y:245.65}},{t:this.shape_26,p:{x:445.2,y:245.65}}]},1).to({state:[{t:this.shape_1,p:{x:449.85,y:245.65}},{t:this.shape_13,p:{x:449.85,y:245.65}}]},1).to({state:[{t:this.shape_1,p:{x:454.45,y:245.65}},{t:this.shape_26,p:{x:454.45,y:245.65}}]},1).to({state:[{t:this.shape_11,p:{x:459.1,y:245.65}},{t:this.shape_13,p:{x:459.1,y:245.65}}]},1).to({state:[{t:this.shape_4,p:{x:463.75,y:245.65}},{t:this.shape_26,p:{x:463.75,y:245.65}}]},1).to({state:[{t:this.shape_9,p:{x:468.35,y:245.6}},{t:this.shape_10,p:{x:468.35,y:245.6}}]},1).to({state:[{t:this.shape_37},{t:this.shape_21,p:{x:473,y:245.6}}]},1).to({state:[{t:this.shape_6,p:{x:477.65,y:245.6}},{t:this.shape_2,p:{x:477.65,y:245.6}}]},1).to({state:[{t:this.shape_6,p:{x:482.25,y:245.6}},{t:this.shape_21,p:{x:482.25,y:245.6}}]},1).to({state:[{t:this.shape_8,p:{x:486.9,y:245.6}},{t:this.shape_2,p:{x:486.9,y:245.6}}]},1).to({state:[{t:this.shape_4,p:{x:491.55,y:245.55}},{t:this.shape_26,p:{x:491.55,y:245.55}}]},1).to({state:[{t:this.shape_4,p:{x:496.15,y:245.55}},{t:this.shape_5,p:{x:496.15,y:245.55}}]},1).to({state:[{t:this.shape_31,p:{x:500.8,y:245.55}},{t:this.shape_26,p:{x:500.8,y:245.55}}]},1).to({state:[{t:this.shape_11,p:{x:505.45,y:245.55}},{t:this.shape_26,p:{x:505.45,y:245.55}}]},1).to({state:[{t:this.shape_1,p:{x:510.05,y:245.55}},{t:this.shape_5,p:{x:510.05,y:245.55}}]},1).to({state:[{t:this.shape_9,p:{x:514.7,y:245.5}},{t:this.shape_15,p:{x:514.7,y:245.5}}]},1).to({state:[{t:this.shape_8,p:{x:519.3,y:245.5}},{t:this.shape_17,p:{x:519.3,y:245.5}}]},1).to({state:[{t:this.shape_1,p:{x:523.95,y:245.5}},{t:this.shape,p:{x:523.95,y:245.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-439.9,90.9,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3");
	this.shape.setTransform(48.15,241.4);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("EAwmgXbMAAAAu3EA9ZgXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3");
	this.shape_1.setTransform(52.75,241.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("EAwmgXbMAAAAu3EA9ZgXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3");
	this.shape_2.setTransform(71.25,241.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3");
	this.shape_3.setTransform(75.9,241.35);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3");
	this.shape_4.setTransform(103.65,241.3);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9ZgXbMAAAAu3EBLegXbMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3EhLdgXbMAAAAu3");
	this.shape_5.setTransform(108.25,241.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3EhLdgXbMAAAAu3");
	this.shape_6.setTransform(131.4,241.2);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3");
	this.shape_7.setTransform(159.15,241.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("EBLegXbMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3");
	this.shape_8.setTransform(168.4,241.15);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("EBLegXbMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3");
	this.shape_9.setTransform(196.15,241.1);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("EBLegXbMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EA9agXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3");
	this.shape_10.setTransform(214.65,241.05);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("EA9agXbMAAAAu3EBLegXbMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3AGa3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3");
	this.shape_11.setTransform(256.3,240.95);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("EA9agXbMAAAAu3EBLegXbMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3EgvVgXbMAAAAu3");
	this.shape_12.setTransform(284.05,240.9);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("EA9agXbMAAAAu3EBLegXbMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EAwmgXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3");
	this.shape_13.setTransform(307.15,240.85);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("EAwmgXbMAAAAu3EA9agXbMAAAAu3EBLegXbMAAAAu3AGa3bMAAAAu3AUe3bMAAAAu3EAiigXbMAAAAu3EgvVgXbMAAAAu3EghRgXbMAAAAu3A0d3bMAAAAu3AmZ3bMAAAAu3EhLdgXbMAAAAu3Eg9ZgXbMAAAAu3");
	this.shape_14.setTransform(339.55,240.8);
	this.shape_14._off = true;

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-0.5,90,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{x:52.75,y:241.4}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{x:62,y:241.35}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{x:71.25,y:241.35}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:80.5,y:241.3}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:89.75,y:241.3}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:99,y:241.3}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:108.25}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:117.5}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{x:159.15}}]},1).to({state:[{t:this.shape_7,p:{x:163.75}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:57.4,y:241.35},0).to({_off:true},1).wait(1).to({_off:false,x:66.65},0).to({_off:true},1).wait(64).to({_off:false,x:367.3,y:240.75},0).wait(1).to({x:371.95},0).wait(1).to({x:376.55,y:240.7},0).wait(1).to({x:381.2},0).wait(1).to({x:385.8},0).wait(1).to({x:390.45},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:85.15,y:241.3},0).to({_off:true},1).wait(1).to({_off:false,x:94.4},0).to({_off:true},1).wait(64).to({_off:false,x:395.05,y:240.7},0).wait(1).to({x:399.7,y:240.65},0).wait(1).to({x:404.3},0).wait(1).to({x:408.95},0).wait(1).to({x:413.55},0).wait(1).to({x:418.2},0).wait(1).to({x:422.8,y:240.6},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:112.9,y:241.25},0).to({_off:true},1).wait(1).to({_off:false,x:122.15},0).wait(1).to({x:126.75},0).to({_off:true},1).wait(64).to({_off:false,x:427.45,y:240.6},0).wait(1).to({x:432.05},0).wait(1).to({x:436.7},0).wait(1).to({x:441.3},0).wait(1).to({x:445.95},0).wait(1).to({x:450.55,y:240.55},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(19).to({_off:false},0).wait(1).to({x:136},0).wait(1).to({x:140.65},0).wait(1).to({x:145.25},0).wait(1).to({x:149.9},0).wait(1).to({x:154.5,y:241.15},0).to({_off:true},1).wait(64).to({_off:false,x:455.2,y:240.55},0).wait(1).to({x:459.8},0).wait(1).to({x:464.45},0).wait(1).to({x:469.05},0).wait(1).to({x:473.7,y:240.5},0).wait(1).to({x:478.3},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(27).to({_off:false},0).wait(1).to({x:173},0).wait(1).to({x:177.65},0).wait(1).to({x:182.3,y:241.1},0).wait(1).to({x:186.9},0).wait(1).to({x:191.5},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(33).to({_off:false},0).wait(1).to({x:200.8},0).wait(1).to({x:205.4,y:241.05},0).wait(1).to({x:210.05},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(37).to({_off:false},0).wait(1).to({x:219.3},0).wait(1).to({x:223.9},0).wait(1).to({x:228.55,y:241},0).wait(1).to({x:233.15},0).wait(1).to({x:237.8},0).wait(1).to({x:242.4},0).wait(1).to({x:247.05},0).wait(1).to({x:251.65,y:240.95},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(46).to({_off:false},0).wait(1).to({x:260.9},0).wait(1).to({x:265.55},0).wait(1).to({x:270.15},0).wait(1).to({x:274.8},0).wait(1).to({x:279.4,y:240.9},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(52).to({_off:false},0).wait(1).to({x:288.65},0).wait(1).to({x:293.3},0).wait(1).to({x:297.9},0).wait(1).to({x:302.55,y:240.85},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(57).to({_off:false},0).wait(1).to({x:311.8},0).wait(1).to({x:316.4},0).wait(1).to({x:321.05},0).wait(1).to({x:325.65,y:240.8},0).wait(1).to({x:330.3},0).wait(1).to({x:334.95},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(64).to({_off:false},0).wait(1).to({x:344.15},0).wait(1).to({x:348.8,y:240.75},0).wait(1).to({x:353.45},0).wait(1).to({x:358.05},0).wait(1).to({x:362.7},0).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シンボル4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").p("ABtAAQAAAugfAgQghAfgtAAQgtAAgggfQggggAAguQAAgtAgggQAggfAtAAQAtAAAhAfQAfAgAAAtg");
	this.shape.setTransform(6.0399,6.1809,0.5724,0.5741,0,-0.131,0.1314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AhNBOQgfggAAguQAAgtAfgfQAhghAsAAQAuAAAfAhQAhAfgBAtQABAughAgQgfAfguAAQgsAAghgfg");
	this.shape_1.setTransform(6.0399,6.1809,0.5724,0.5741,0,-0.131,0.1314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(-1.2,-1.1,14.5,15.6), null);


(lib.シンボル3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").p("ABWAAQAAAjgZAZQgZAagkAAQgiAAgagaQgZgZAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape.setTransform(8.5822,8.5966,0.9999,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("Ag8A9QgZgZAAgkQAAgjAZgZQAagZAiAAQAkAAAYAZQAaAZAAAjQAAAkgaAZQgYAZgkAAQgiAAgagZg");
	this.shape_1.setTransform(8.5822,8.5966,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(-1,-1,19.2,19.2), null);


(lib.シンボル2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-45,-4.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-4,90,8);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.シーン_1_レイヤー_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_12
	this.instance = new lib.シンボル4();
	this.instance.setTransform(190.55,290.85,1,1,0,0,0,6.2,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).wait(1).to({regX:6,regY:6.2,x:194.95,y:288.85},0).wait(1).to({x:199.55,y:286.15},0).wait(1).to({x:204.15,y:283.45},0).wait(1).to({x:208.75,y:280.75},0).wait(1).to({x:213.35,y:278.05},0).wait(1).to({x:217.95,y:275.35},0).wait(1).to({x:222.55,y:272.65},0).wait(1).to({x:227.15,y:269.95},0).wait(1).to({x:231.75,y:267.25},0).wait(1).to({x:236.35,y:264.55},0).wait(1).to({x:240.95,y:261.85},0).wait(1).to({x:245.6,y:259.2},0).wait(1).to({x:250.2,y:256.5},0).wait(1).to({x:254.8,y:253.8},0).wait(1).to({x:259.4,y:251.1},0).wait(1).to({x:264,y:248.4},0).wait(1).to({x:268.6,y:245.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_12
	this.instance = new lib.シンボル4();
	this.instance.setTransform(190.55,290.85,1,1,0,0,0,6.2,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(1).to({regX:6,regY:6.2,x:194.95,y:288.85},0).wait(1).to({x:199.55,y:286.15},0).wait(1).to({x:204.15,y:283.45},0).wait(1).to({x:208.75,y:280.75},0).wait(1).to({x:213.35,y:278.05},0).wait(1).to({x:217.95,y:275.35},0).wait(1).to({x:222.55,y:272.65},0).wait(1).to({x:227.15,y:269.95},0).wait(1).to({x:231.75,y:267.25},0).wait(1).to({x:236.35,y:264.55},0).wait(1).to({x:240.95,y:261.85},0).wait(1).to({x:245.6,y:259.2},0).wait(1).to({x:250.2,y:256.5},0).wait(1).to({x:254.8,y:253.8},0).wait(1).to({x:259.4,y:251.1},0).wait(1).to({x:264,y:248.4},0).wait(1).to({x:268.6,y:245.7},0).wait(1).to({x:273.2,y:243},0).wait(1).to({x:277.8,y:240.3},0).wait(1).to({x:282.4,y:237.6},0).wait(1).to({x:287,y:234.9},0).wait(1).to({x:291.6,y:232.2},0).wait(1).to({x:296.2,y:229.5},0).wait(1).to({x:300.85,y:226.85},0).wait(1).to({x:305.45,y:224.15},0).wait(1).to({x:310.05,y:221.45},0).wait(1).to({x:314.65,y:218.75},0).wait(1).to({x:319.25,y:216.05},0).wait(1).to({x:323.85,y:213.35},0).wait(1).to({x:328.45,y:210.65},0).wait(1).to({x:333.05,y:207.95},0).wait(1).to({x:337.65,y:205.25},0).wait(1).to({x:342.25,y:202.55},0).wait(1).to({x:346.85,y:199.85},0).wait(1).to({x:351.5,y:197.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_11
	this.instance = new lib.シンボル3();
	this.instance.setTransform(193.9,111.25,1,1,0,0,0,8.6,8.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).wait(1).to({x:198.45,y:119.15},0).wait(1).to({x:203,y:127.05},0).wait(1).to({x:207.6,y:135},0).wait(1).to({x:212.15,y:142.9},0).wait(1).to({x:216.7,y:150.8},0).wait(1).to({x:221.3,y:158.75},0).wait(1).to({x:225.85,y:166.65},0).wait(1).to({x:230.4,y:174.55},0).wait(1).to({x:235,y:182.5},0).wait(1).to({x:239.55,y:190.4},0).wait(1).to({x:244.1,y:198.35},0).wait(1).to({x:248.7,y:206.25},0).wait(1).to({x:253.25,y:214.15},0).wait(1).to({x:257.8,y:222.1},0).wait(1).to({x:262.4,y:230},0).wait(1).to({x:266.95,y:237.9},0).wait(1).to({x:271.5,y:245.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_11
	this.instance = new lib.シンボル3();
	this.instance.setTransform(193.9,111.25,1,1,0,0,0,8.6,8.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(1).to({x:198.45,y:119.15},0).wait(1).to({x:203,y:127.05},0).wait(1).to({x:207.6,y:135},0).wait(1).to({x:212.15,y:142.9},0).wait(1).to({x:216.7,y:150.8},0).wait(1).to({x:221.3,y:158.75},0).wait(1).to({x:225.85,y:166.65},0).wait(1).to({x:230.4,y:174.55},0).wait(1).to({x:235,y:182.5},0).wait(1).to({x:239.55,y:190.4},0).wait(1).to({x:244.1,y:198.35},0).wait(1).to({x:248.7,y:206.25},0).wait(1).to({x:253.25,y:214.15},0).wait(1).to({x:257.8,y:222.1},0).wait(1).to({x:262.4,y:230},0).wait(1).to({x:266.95,y:237.9},0).wait(1).to({x:271.5,y:245.85},0).wait(1).to({x:276.1,y:253.75},0).wait(1).to({x:280.65,y:261.7},0).wait(1).to({x:285.2,y:269.6},0).wait(1).to({x:289.8,y:277.5},0).wait(1).to({x:294.35,y:285.45},0).wait(1).to({x:298.9,y:293.35},0).wait(1).to({x:303.5,y:301.25},0).wait(1).to({x:308.05,y:309.2},0).wait(1).to({x:312.6,y:317.1},0).wait(1).to({x:317.2,y:325.05},0).wait(1).to({x:321.75,y:332.95},0).wait(1).to({x:326.3,y:340.85},0).wait(1).to({x:330.9,y:348.8},0).wait(1).to({x:335.45,y:356.7},0).wait(1).to({x:340,y:364.6},0).wait(1).to({x:344.6,y:372.55},0).wait(1).to({x:349.15,y:380.45},0).wait(1).to({x:353.75,y:388.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_4
	this.instance = new lib.シンボル2();
	this.instance.setTransform(128.95,231.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.トゥイーン1("synched",0);
	this.instance_1.setTransform(568.95,230.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},95).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:568.95,y:230.45,mode:"synched",startPosition:0},95).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhABVIAAipICBAAIAACpg");
	mask.setTransform(6.475,8.5);

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsBLQgHgHAAgJQAAgIAFgFQAEgEAFAAQAJABAAAIQAAAHgFADQgDAEgIAAQAFAKAOAAQAQAAALgQQAKgOAGgYQgMALgMAAQgNAAgIgGQgKgIAAgPQAAgNAPgnQAEgLAAgGQAAgIgGAAQgRAAgIAfQgCAFgCgBQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAJgmAYAAQAJAAAFAFQAGAGAAAJQAAAFgFANQgNAhAAAOQAAAVAQAAQAJAAAKgJQAGgHACgGIAUhMQACgGAGABQAHAAAAAGIgYBkQgFAVgSAPQgQAPgTAAQgLgBgIgFg");
	this.shape.setTransform(6.425,8.65);

	this.instance = new lib.Path_1();
	this.instance.setTransform(7.45,9);

	var maskedShapeInstanceList = [this.shape,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.7,0.6,11.5,16.099999999999998), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhAA8IAAh3ICBAAIAAB3g");
	mask_1.setTransform(6.5,6);

	// レイヤー_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAzQgGgFgCgIQgKATgRAAQgJAAgGgFQgIgEAAgIQAAgGAEgEQAEgEAGgBQAJABAAAIQAAALgLADQAEADAIAAQARAAAHgaQANgyAAgIQAAgRgNAAQgJAAgIAGQgMAKgFARQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgIALgOQAMgQARgBQASABAIASQAKgSAQgBQAIABAHADQAIAFAAAIQAAAHgEAEQgFAEgEAAQgKAAABgJQAAgEADgEQADgFAFgBQgFgDgHAAQgSAAgHAeIgJAhQgDARAAAEQAAARANAAQAJAAAHgHQAMgIAFgSQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQgBAJgJANQgOARgRAAQgKgBgHgFg");
	this.shape_1.setTransform(6.4,6.2);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(8.75,6.5);

	var maskedShapeInstanceList = [this.shape_1,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.2,0.6,12.4,11.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhABaIAAizICBAAIAACzg");
	mask_2.setTransform(6.475,9);

	// レイヤー_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag8BRQgBgDAFgFIBEhEIgYhDQgEgMgDgEQgCgDgHgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgDAFAAQAXAAAGASIAzCNQADAIACADIABACQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgGAAIgHAAQgDgBgDgEQgCgDgIgYIgQgrIg7BHQgFAFgDAAQgIAAABgHg");
	this.shape_2.setTransform(6.75,9.1);

	this.instance_2 = new lib.Path_1_2();
	this.instance_2.setTransform(7.45,8.75);

	var maskedShapeInstanceList = [this.shape_2,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.6,0.3,12.3,17.599999999999998), null);


(lib.シーン_1_レイヤー_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_4
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(553.1,84.85,0.9996,0.9996,-30.0007,0,0,6.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({y:83.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_4
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(177,80.9,0.9999,0.9999,-30.0004,0,0,6.5,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.シーン_1_レイヤー_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(128.95,212.45,1,1,0,0,0,6.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:568.95,y:211.5},95).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.test_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [95];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_95 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(320,240,1,1,-29.9999);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(96));

	// レイヤー_12_obj_
	this.レイヤー_12 = new lib.シーン_1_レイヤー_12();
	this.レイヤー_12.name = "レイヤー_12";
	this.レイヤー_12.setTransform(0.05,0.05,1,1,29.9996,0,0,-414.2,248.2);
	this.レイヤー_12.depth = 0;
	this.レイヤー_12.isAttachedToCamera = 0
	this.レイヤー_12.isAttachedToMask = 0
	this.レイヤー_12.layerDepth = 0
	this.レイヤー_12.layerIndex = 0
	this.レイヤー_12.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_12).wait(61).to({regX:271,regY:244.4,rotation:0,x:685.25,y:-3.75},0).wait(35));

	// レイヤー_12_obj_
	this.レイヤー_12_1 = new lib.シーン_1_レイヤー_12_1();
	this.レイヤー_12_1.name = "レイヤー_12_1";
	this.レイヤー_12_1.setTransform(0.05,0.05,1,1,29.9996,0,0,-414.2,248.2);
	this.レイヤー_12_1.depth = 0;
	this.レイヤー_12_1.isAttachedToCamera = 0
	this.レイヤー_12_1.isAttachedToMask = 0
	this.レイヤー_12_1.layerDepth = 0
	this.レイヤー_12_1.layerIndex = 1
	this.レイヤー_12_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_12_1).wait(79).to({regX:229.5,regY:268.6,rotation:0,x:643.75,y:20.45},0).wait(17));

	// レイヤー_11_obj_
	this.レイヤー_11 = new lib.シーン_1_レイヤー_11();
	this.レイヤー_11.name = "レイヤー_11";
	this.レイヤー_11.setTransform(0.05,0.05,1,1,29.9996,0,0,-414.2,248.2);
	this.レイヤー_11.depth = 0;
	this.レイヤー_11.isAttachedToCamera = 0
	this.レイヤー_11.isAttachedToMask = 0
	this.レイヤー_11.layerDepth = 0
	this.レイヤー_11.layerIndex = 2
	this.レイヤー_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_11).wait(61).to({regX:273.8,regY:249.8,rotation:0,x:688.05,y:1.65},0).wait(35));

	// レイヤー_11_obj_
	this.レイヤー_11_1 = new lib.シーン_1_レイヤー_11_1();
	this.レイヤー_11_1.name = "レイヤー_11_1";
	this.レイヤー_11_1.setTransform(0.05,0.05,1,1,29.9996,0,0,-414.2,248.2);
	this.レイヤー_11_1.depth = 0;
	this.レイヤー_11_1.isAttachedToCamera = 0
	this.レイヤー_11_1.isAttachedToMask = 0
	this.レイヤー_11_1.layerDepth = 0
	this.レイヤー_11_1.layerIndex = 3
	this.レイヤー_11_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_11_1).wait(79).to({regX:232.7,regY:178.6,rotation:0,x:646.95,y:-69.55},0).wait(17));

	// レイヤー_4_obj_
	this.レイヤー_4 = new lib.シーン_1_レイヤー_4();
	this.レイヤー_4.name = "レイヤー_4";
	this.レイヤー_4.setTransform(176.8,80.7,1,1,29.9996,0,0,-220.8,229.7);
	this.レイヤー_4.depth = 0;
	this.レイヤー_4.isAttachedToCamera = 0
	this.レイヤー_4.isAttachedToMask = 0
	this.レイヤー_4.layerDepth = 0
	this.レイヤー_4.layerIndex = 4
	this.レイヤー_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_4).wait(96));

	// レイヤー_4_obj_
	this.レイヤー_4_1 = new lib.シーン_1_レイヤー_4_1();
	this.レイヤー_4_1.name = "レイヤー_4_1";
	this.レイヤー_4_1.setTransform(552.45,84.45,1,1,29.9996,0,0,106.4,45.1);
	this.レイヤー_4_1.depth = 0;
	this.レイヤー_4_1.isAttachedToCamera = 0
	this.レイヤー_4_1.isAttachedToMask = 0
	this.レイヤー_4_1.layerDepth = 0
	this.レイヤー_4_1.layerIndex = 5
	this.レイヤー_4_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_4_1).wait(96));

	// レイヤー_4_obj_
	this.レイヤー_4_2 = new lib.シーン_1_レイヤー_4_2();
	this.レイヤー_4_2.name = "レイヤー_4_2";
	this.レイヤー_4_2.setTransform(361.7,268.45,1,1,29.9996,0,0,33.2,299.8);
	this.レイヤー_4_2.depth = 0;
	this.レイヤー_4_2.isAttachedToCamera = 0
	this.レイヤー_4_2.isAttachedToMask = 0
	this.レイヤー_4_2.layerDepth = 0
	this.レイヤー_4_2.layerIndex = 6
	this.レイヤー_4_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_4_2).wait(96));

	// レイヤー_3_obj_
	this.レイヤー_3 = new lib.シーン_1_レイヤー_3();
	this.レイヤー_3.name = "レイヤー_3";
	this.レイヤー_3.setTransform(84.9,246.5,1,1,29.9996,0,0,-217.5,419.2);
	this.レイヤー_3.depth = 0;
	this.レイヤー_3.isAttachedToCamera = 0
	this.レイヤー_3.isAttachedToMask = 0
	this.レイヤー_3.layerDepth = 0
	this.レイヤー_3.layerIndex = 7
	this.レイヤー_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_3).wait(96));

	// レイヤー_4_obj_
	this.レイヤー_4_3 = new lib.シーン_1_レイヤー_4_3();
	this.レイヤー_4_3.name = "レイヤー_4_3";
	this.レイヤー_4_3.setTransform(128.95,231.4,1,1,29.9996,0,0,-186.9,384.1);
	this.レイヤー_4_3.depth = 0;
	this.レイヤー_4_3.isAttachedToCamera = 0
	this.レイヤー_4_3.isAttachedToMask = 0
	this.レイヤー_4_3.layerDepth = 0
	this.レイヤー_4_3.layerIndex = 8
	this.レイヤー_4_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_4_3).wait(96));

	// レイヤー_2_obj_
	this.レイヤー_2 = new lib.シーン_1_レイヤー_2();
	this.レイヤー_2.name = "レイヤー_2";
	this.レイヤー_2.setTransform(128.9,212.45,1,1,29.9996,0,0,-196.4,367.7);
	this.レイヤー_2.depth = 0;
	this.レイヤー_2.isAttachedToCamera = 0
	this.レイヤー_2.isAttachedToMask = 0
	this.レイヤー_2.layerDepth = 0
	this.レイヤー_2.layerIndex = 9
	this.レイヤー_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_2).wait(96));

	// レイヤー_1_obj_
	this.レイヤー_1 = new lib.シーン_1_レイヤー_1();
	this.レイヤー_1.name = "レイヤー_1";
	this.レイヤー_1.setTransform(43.65,241.35,1,1,29.9996,0,0,-255.8,435.4);
	this.レイヤー_1.depth = 0;
	this.レイヤー_1.isAttachedToCamera = 0
	this.レイヤー_1.isAttachedToMask = 0
	this.レイヤー_1.layerDepth = 0
	this.レイヤー_1.layerIndex = 10
	this.レイヤー_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.レイヤー_1).wait(96));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(200.1,-33.1,855.4999999999999,906.3000000000001);
// library properties:
lib.properties = {
	id: 'B2A69F2C384642E08279C35A1ED76085',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/test_2_atlas_1.png", id:"test_2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B2A69F2C384642E08279C35A1ED76085'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;