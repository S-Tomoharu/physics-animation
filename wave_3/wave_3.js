(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#313131").ss(1,1,1).p("AAAAyQgUAAgPgOQAAgBAAAAQgOgOAAgVQAAgEABgFQACgPALgLQALgLAPgCQAFgBAEAAQACAAABAAQABAAAAAAQARABANAMQABABAAAAQAAAAABAAQAOAPAAAUAAxAKQgDAOgLALQgLALgOAD");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAZgYQAAAFgBAFQgDAOgLAKQgKALgOADQgFABgFAA");
	this.shape_1.setTransform(2.5,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAjIgBAAQgOgOAAgVIABgJQACgPALgLQALgLAPgCIAJgBIADAAIABAAQARABANAMIABABIAAABQAPAOAAAUIgBAKQgDAOgLALQgLALgOADIgKABQgUAAgOgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-6,-6,12,12), null);


// stage content:
(lib.名称未設定1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [71];
	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// レイヤー_3
	this.instance = new lib.シンボル1();
	this.instance.setTransform(100,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:101.7143},0).wait(1).to({x:103.4286},0).wait(1).to({x:105.1429},0).wait(1).to({x:106.8571},0).wait(1).to({x:108.5714},0).wait(1).to({x:110.2857},0).wait(1).to({x:112},0).wait(1).to({x:113.7143},0).wait(1).to({x:115.4286},0).wait(1).to({x:117.1429},0).wait(1).to({x:118.8571},0).wait(1).to({x:120.5714},0).wait(1).to({x:122.2857},0).wait(1).to({x:124},0).wait(1).to({x:125.7143},0).wait(1).to({x:127.4286},0).wait(1).to({x:129.1429},0).wait(1).to({x:130.8571},0).wait(1).to({x:132.5714},0).wait(1).to({x:134.2857},0).wait(1).to({x:136},0).wait(1).to({x:137.7143},0).wait(1).to({x:139.4286},0).wait(1).to({x:141.1429},0).wait(1).to({x:142.8571},0).wait(1).to({x:144.5714},0).wait(1).to({x:146.2857},0).wait(1).to({x:148},0).wait(1).to({x:149.7143},0).wait(1).to({x:151.4286},0).wait(1).to({x:153.1429},0).wait(1).to({x:154.8571},0).wait(1).to({x:156.5714},0).wait(1).to({x:158.2857},0).wait(1).to({x:160},0).wait(1).to({x:161.7143},0).wait(1).to({x:163.4286},0).wait(1).to({x:165.1429},0).wait(1).to({x:166.8571},0).wait(1).to({x:168.5714},0).wait(1).to({x:170.2857},0).wait(1).to({x:172},0).wait(1).to({x:173.7143},0).wait(1).to({x:175.4286},0).wait(1).to({x:177.1429},0).wait(1).to({x:178.8571},0).wait(1).to({x:180.5714},0).wait(1).to({x:182.2857},0).wait(1).to({x:184},0).wait(1).to({x:185.7143},0).wait(1).to({x:187.4286},0).wait(1).to({x:189.1429},0).wait(1).to({x:190.8571},0).wait(1).to({x:192.5714},0).wait(1).to({x:194.2857},0).wait(1).to({x:196},0).wait(1).to({x:197.7143},0).wait(1).to({x:199.4286},0).wait(1).to({x:201.1429},0).wait(1).to({x:202.8571},0).wait(1).to({x:204.5714},0).wait(1).to({x:206.2857},0).wait(1).to({x:208},0).wait(1).to({x:209.7143},0).wait(1).to({x:211.4286},0).wait(1).to({x:213.1429},0).wait(1).to({x:214.8571},0).wait(1).to({x:216.5714},0).wait(1).to({x:218.2857},0).wait(1).to({x:220},0).wait(2));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgPAOgUAAQgTAAgPgOQgPgPAAgVQAAgUAPgOQAPgPATAAQAUAAAPAPQAPAOAAAUg");
	this.shape.setTransform(100,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#313131").ss(1,1,1).p("AhWAAQAAgjAZgZQAbgaAiAAQAjAAAZAaQAbAZAAAjQAAAlgbAZQgZAZgjAAQgiAAgbgZQgZgZAAglg");
	this.shape_1.setTransform(100,200);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#313131").ss(1,1,1).p("Ah6AAQAAgyAjgkQAmgkAxAAQAyAAAlAkQAkAkAAAyQAAA0gkAkQglAjgyAAQgxAAgmgjQgjgkAAg0g");
	this.shape_2.setTransform(100,200);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#313131").ss(1,1,1).p("AifAAQAAhBAvguQAwgwBAAAQBBAAAvAwQAwAuAABBQAABDgwAuQgvAvhBAAQhAAAgwgvQgvguAAhDg");
	this.shape_3.setTransform(100,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#313131").ss(1,1,1).p("AjEAAQAAhQA5g5QA8g7BPAAQBQAAA6A7QA7A5AABQQAABTg7A4Qg6A6hQAAQhPAAg8g6Qg5g4AAhTg");
	this.shape_4.setTransform(100,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#313131").ss(1,1,1).p("AjoAAQAAhfBEhDQBGhGBeAAQBfAABEBGQBGBDAABfQAABihGBEQhEBDhfAAQheAAhGhDQhEhEAAhig");
	this.shape_5.setTransform(100,200);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#313131").ss(1,1,1).p("AkNAAQAAhuBOhOQBShRBtAAQBuAABPBRQBRBOAABuQAABxhRBPQhPBOhuAAQhtAAhShOQhOhPAAhxg");
	this.shape_6.setTransform(100,200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#313131").ss(1,1,1).p("AkyAAQAAh9BZhYQBdhdB8AAQB+AABZBdQBcBYAAB9QAACAhcBaQhZBZh+AAQh8AAhdhZQhZhaAAiAg");
	this.shape_7.setTransform(100,200);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#313131").ss(1,1,1).p("AlWAAQAAiMBkhjQBnhnCLAAQCNAABjBnQBnBjAACMQAACQhnBjQhjBkiNAAQiLAAhnhkQhkhjAAiQg");
	this.shape_8.setTransform(100,200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#313131").ss(1,1,1).p("Al7AAQAAibBuhuQBzhxCaAAQCcAABuBxQBxBuAACbQAACfhxBuQhuBuicAAQiaAAhzhuQhuhuAAifg");
	this.shape_9.setTransform(100,200);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#313131").ss(1,1,1).p("AmgAAQAAiqB5h5QB+h9CpAAQCrAAB5B9QB9B5AACqQAACvh9B5Qh5B5irAAQipAAh+h5Qh5h5AAivg");
	this.shape_10.setTransform(100,200);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#313131").ss(1,1,1).p("AnEAAQAAi5CDiDQCJiIC4AAQC6AACECIQCHCDAAC5QAAC+iHCEQiECDi6AAQi4AAiJiDQiDiEAAi+g");
	this.shape_11.setTransform(100,200);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#313131").ss(1,1,1).p("AnpAAQAAjICOiOQCTiSDIAAQDJAACOCSQCSCOAADIQAADOiSCOQiOCNjJAAQjIAAiTiNQiOiOAAjOg");
	this.shape_12.setTransform(100,200);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#313131").ss(1,1,1).p("AoNAAQAAjXCYiYQCeieDXAAQDYAACYCeQCeCYAADXQAADdieCYQiYCZjYAAQjXAAieiZQiYiYAAjdg");
	this.shape_13.setTransform(100,200);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#313131").ss(1,1,1).p("AoyAAQAAjmCjijQCpipDmAAQDnAACjCpQCpCjAADmQAADtipCiQijCkjnAAQjmAAipikQijiiAAjtg");
	this.shape_14.setTransform(100,200);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#313131").ss(1,1,1).p("ApXAAQAAj1CuitQC0i0D1AAQD2AACuC0QCzCtAAD1QAAD8izCuQiuCtj2AAQj1AAi0itQiuiuAAj8g");
	this.shape_15.setTransform(100,200);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#313131").ss(1,1,1).p("Ap7AAQAAkEC4i5QC/i+EEAAQEFAAC5C+QC+C5AAEEQAAELi+C5Qi5C4kFAAQkEAAi/i4Qi4i5AAkLg");
	this.shape_16.setTransform(100,200);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#313131").ss(1,1,1).p("AqgAAQAAkTDDjDQDKjKETAAQEUAADDDKQDKDDAAETQAAEbjKDDQjDDDkUAAQkTAAjKjDQjDjDAAkbg");
	this.shape_17.setTransform(100,200);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#313131").ss(1,1,1).p("ArFAAQAAkiDOjOQDVjUEiAAQEjAADODUQDUDOAAEiQAAEqjUDNQjODOkjAAQkiAAjVjOQjOjNAAkqg");
	this.shape_18.setTransform(100,200);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#313131").ss(1,1,1).p("ArpAAQAAkxDYjYQDgjgExAAQEyAADZDgQDfDYAAExQAAE5jfDYQjZDZkyAAQkxAAjgjZQjYjYAAk5g");
	this.shape_19.setTransform(100,200);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#313131").ss(1,1,1).p("AsOAAQAAlADjjjQDrjrFAAAQFBAADjDrQDrDjAAFAQAAFIjrDkQjjDjlBAAQlAAAjrjjQjjjkAAlIg");
	this.shape_20.setTransform(100,200);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#313131").ss(1,1,1).p("AsyAAQAAlPDtjuQD2j1FPAAQFRAADtD1QD1DuAAFPQAAFYj1DtQjtDulRAAQlPAAj2juQjtjtAAlYg");
	this.shape_21.setTransform(100,200);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#313131").ss(1,1,1).p("AtXAAQAAleD4j4QEBkBFeAAQFgAAD3EBQEBD4AAFeQAAFnkBD5Qj3D4lgAAQleAAkBj4Qj4j5AAlng");
	this.shape_22.setTransform(100,200);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#313131").ss(1,1,1).p("At8AAQAAltEDkDQEMkMFtAAQFvAAECEMQEMEDAAFtQAAF3kMEDQkCEDlvAAQltAAkMkDQkDkDAAl3g");
	this.shape_23.setTransform(100,200);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#313131").ss(1,1,1).p("AugAAQAAl8ENkOQEXkWF8AAQF+AAENEWQEWEOAAF8QAAGGkWENQkNEOl+AAQl8AAkXkOQkNkNAAmGg");
	this.shape_24.setTransform(100,200);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#313131").ss(1,1,1).p("AvFAAQAAmLEYkYQEikiGLAAQGNAAEYEiQEhEYAAGLQAAGWkhEYQkYEYmNAAQmLAAkikYQkYkYAAmWg");
	this.shape_25.setTransform(100,200);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#313131").ss(1,1,1).p("AvqAAQAAmaEjkjQEtktGaAAQGcAAEiEtQEtEjAAGaQAAGlktEiQkiEkmcAAQmaAAktkkQkjkiAAmlg");
	this.shape_26.setTransform(100,200);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#313131").ss(1,1,1).p("AwOAAQAAmpEtkuQE4k3GpAAQGrAAEtE3QE3EuAAGpQAAG1k3EtQktEtmrAAQmpAAk4ktQktktAAm1g");
	this.shape_27.setTransform(100,200);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#313131").ss(1,1,1).p("AwzAAQAAm4E4k4QFDlDG4AAQG6AAE4FDQFCE4AAG4QAAHElCE4Qk4E4m6AAQm4AAlDk4Qk4k4AAnEg");
	this.shape_28.setTransform(100,200);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#313131").ss(1,1,1).p("AxYAAQAAnHFDlDQFOlOHHAAQHJAAFCFOQFOFDAAHHQAAHTlOFCQlCFEnJAAQnHAAlOlEQlDlCAAnTg");
	this.shape_29.setTransform(100,200);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#313131").ss(1,1,1).p("Ax8AAQAAnWFNlOQFZlYHWAAQHYAAFNFYQFYFOAAHWQAAHjlYFNQlNFNnYAAQnWAAlZlNQlNlNAAnjg");
	this.shape_30.setTransform(100,200);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#313131").ss(1,1,1).p("AyhAAQAAnlFYlYQFklkHlAAQHnAAFYFkQFjFYAAHlQAAHyljFXQlYFZnnAAQnlAAlklZQlYlXAAnyg");
	this.shape_31.setTransform(100,200);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#313131").ss(1,1,1).p("AzFAAQAAn0FiljQFvluH0AAQH2AAFiFuQFuFjAAH0QAAICluFiQliFin2AAQn0AAlvliQliliAAoCg");
	this.shape_32.setTransform(100,200);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#313131").ss(1,1,1).p("AzqAAQAAoDFtluQF6l5IDAAQIFAAFtF5QF5FuAAIDQAAIRl5FtQltFtoFAAQoDAAl6ltQltltAAoRg");
	this.shape_33.setTransform(100,200);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#313131").ss(1,1,1).p("A0PAAQAAoSF4l4QGFmFISAAQIUAAF4GFQGEF4AAISQAAIgmEF3Ql4F5oUAAQoSAAmFl5Ql4l3AAogg");
	this.shape_34.setTransform(100,200);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#313131").ss(1,1,1).p("A0zAAQAAoiGCmCQGPmPIjAAQIiAAGCGPQGPGCAAIiQAAIvmPGDQmCGCoiAAQojAAmPmCQmCmDAAovg");
	this.shape_35.setTransform(100,200);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#313131").ss(1,1,1).p("A1YAAQAAoxGNmMQGambIyAAQIxAAGNGbQGaGMAAIxQAAI/maGNQmNGNoxAAQoyAAmamNQmNmNAAo/g");
	this.shape_36.setTransform(100,200);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#313131").ss(1,1,1).p("A19AAQAApAGYmXQGlmmJBAAQJAAAGXGmQGmGXAAJAQAAJOmmGYQmXGYpAAAQpBAAmlmYQmYmYAApOg");
	this.shape_37.setTransform(100,200);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#313131").ss(1,1,1).p("A2hAAQAApPGimiQGwmwJQAAQJPAAGiGwQGwGiAAJPQAAJemwGiQmiGipPAAQpQAAmwmiQmimiAApeg");
	this.shape_38.setTransform(100,200);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#313131").ss(1,1,1).p("A3GAAQAApeGtmsQG7m8JfAAQJeAAGtG8QG7GsAAJeQAAJtm7GtQmtGtpeAAQpfAAm7mtQmtmtAAptg");
	this.shape_39.setTransform(100,200);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#313131").ss(1,1,1).p("A3qAAQAAptG3m3QHGnGJuAAQJtAAG4HGQHFG3AAJtQAAJ8nFG4Qm4G3ptAAQpuAAnGm3Qm3m4AAp8g");
	this.shape_40.setTransform(100,200);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#313131").ss(1,1,1).p("A4PAAQAAp8HCnCQHRnRJ9AAQJ8AAHCHRQHRHCAAJ8QAAKMnRHCQnCHCp8AAQp9AAnRnCQnCnCAAqMg");
	this.shape_41.setTransform(100,200);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#313131").ss(1,1,1).p("A40AAQAAqLHNnMQHcndKMAAQKLAAHMHdQHdHMAAKLQAAKbndHNQnMHNqLAAQqMAAncnNQnNnNAAqbg");
	this.shape_42.setTransform(100,200);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#313131").ss(1,1,1).p("A5YAAQAAqaHXnXQHnnnKbAAQKaAAHYHnQHmHXAAKaQAAKrnmHXQnYHXqaAAQqbAAnnnXQnXnXAAqrg");
	this.shape_43.setTransform(100,200);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#313131").ss(1,1,1).p("A58AAQAAqpHhniQHznyKpAAQKpAAHiHyQHxHiAAKpQAAK6nxHiQniHhqpAAQqpAAnznhQnhniAAq6g");
	this.shape_44.setTransform(100,200);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#313131").ss(1,1,1).p("A6iAAQAAq4HtnsQH9n+K5AAQK4AAHsH+QH+HsAAK4QAALKn+HsQnsHtq4AAQq5AAn9ntQntnsAArKg");
	this.shape_45.setTransform(100,200);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#313131").ss(1,1,1).p("A7GAAQAArHH3n3QIIoILIAAQLHAAH4IIQIHH3AALHQAALZoHH3Qn4H3rHAAQrIAAoIn3Qn3n3AArZg");
	this.shape_46.setTransform(100,200);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#313131").ss(1,1,1).p("A7qAAQAArWIBoCQIUoTLWAAQLWAAICITQISICAALWQAALooSICQoCIBrWAAQrWAAoUoBQoBoCAArog");
	this.shape_47.setTransform(100,200);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#313131").ss(1,1,1).p("A8QAAQAArlINoMQIeofLmAAQLlAAINIfQIeIMAALlQAAL3oeINQoNINrlAAQrmAAoeoNQoNoNAAr3g");
	this.shape_48.setTransform(100,200);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#313131").ss(1,1,1).p("A80AAQAAr0IXoXQIpopL1AAQL1AAIXIpQIoIXAAL0QAAMHooIXQoXIXr1AAQr1AAopoXQoXoXAAsHg");
	this.shape_49.setTransform(100,200);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#313131").ss(1,1,1).p("A9YAAQAAsDIhoiQI1o0MDAAQMEAAIhI0QIzIiAAMDQAAMWozIiQohIhsEAAQsDAAo1ohQohoiAAsWg");
	this.shape_50.setTransform(100,200);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#313131").ss(1,1,1).p("A99AAQAAsSIsosQI/o/MTAAQMTAAIsI/QI+IsAAMSQAAMmo+IsQosIssTAAQsTAAo/osQososAAsmg");
	this.shape_51.setTransform(100,200);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#313131").ss(1,1,1).p("A+iAAQAAshI3o3QJKpKMiAAQMiAAI3JKQJJI3AAMhQAAM1pJI3Qo3I3siAAQsiAApKo3Qo3o3AAs1g");
	this.shape_52.setTransform(100,200);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#313131").ss(1,1,1).p("A/GAAQAAswJBpBQJWpWMwAAQMxAAJBJWQJUJBAAMwQAANEpUJCQpBJBsxAAQswAApWpBQpBpCAAtEg");
	this.shape_53.setTransform(100,200);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#313131").ss(1,1,1).p("A/rAAQAAs/JMpMQJgpgNAAAQNAAAJMJgQJfJMAAM/QAANTpfJNQpMJMtAAAQtAAApgpMQpMpNAAtTg");
	this.shape_54.setTransform(100,200);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#313131").ss(1,1,1).p("EggQAAAQAAtOJXpXQJrprNPAAQNPAAJXJrQJqJXAANOQAANjpqJXQpXJXtPAAQtPAAprpXQpXpXAAtjg");
	this.shape_55.setTransform(100,200);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#313131").ss(1,1,1).p("Egg1AAAQAAtdJiphQJ3p3NdAAQNeAAJhJ3QJ2JhAANdQAANzp2JhQphJiteAAQtdAAp3piQpiphAAtzg");
	this.shape_56.setTransform(100,200);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#313131").ss(1,1,1).p("EghZAAAQAAtsJspsQKBqBNtAAQNtAAJsKBQKAJsAANsQAAOCqAJsQpsJsttAAQttAAqBpsQpspsAAuCg");
	this.shape_57.setTransform(100,200);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#313131").ss(1,1,1).p("Egh+AAAQAAt7J3p3QKMqMN9AAQN7AAJ2KMQKMJ3AAN7QAAOSqMJ2Qp2J3t7AAQt9AAqMp3Qp3p2AAuSg");
	this.shape_58.setTransform(100,200);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#313131").ss(1,1,1).p("EgiiAAAQAAuKKBqBQKXqXOLAAQOKAAKCKXQKWKBAAOKQAAOhqWKBQqCKBuKAAQuLAAqXqBQqBqBAAuhg");
	this.shape_59.setTransform(100,200);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#313131").ss(1,1,1).p("EgjHAAAQAAuZKMqMQKiqiObAAQOZAAKMKiQKhKMAAOZQAAOwqhKMQqMKMuZAAQubAAqiqMQqMqMAAuwg");
	this.shape_60.setTransform(100,200);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#313131").ss(1,1,1).p("EgjsAAAQAAuoKXqXQKtqtOqAAQOoAAKWKtQKtKXAAOoQAAO/qtKXQqWKXuoAAQuqAAqtqXQqXqXAAu/g");
	this.shape_61.setTransform(100,200);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#313131").ss(1,1,1).p("EgkQAAAQAAu3KhqhQK4q4O4AAQO3AAKiK4QK3KhAAO3QAAPPq3KhQqiKhu3AAQu4AAq4qhQqhqhAAvPg");
	this.shape_62.setTransform(100,200);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#313131").ss(1,1,1).p("Egk1AAAQAAvGKsqsQLDrDPIAAQPGAAKrLDQLDKsAAPGQAAPerDKsQqrKsvGAAQvIAArDqsQqsqsAAveg");
	this.shape_63.setTransform(100,200);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#313131").ss(1,1,1).p("EglaAAAQAAvVK3q3QLOrOPXAAQPVAAK2LOQLOK3AAPVQAAPurOK2Qq2K3vVAAQvXAArOq3Qq3q2AAvug");
	this.shape_64.setTransform(100,200);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#313131").ss(1,1,1).p("Egl+AAAQAAvkLBrBQLZrZPlAAQPlAALBLZQLYLBAAPkQAAP9rYLBQrBLBvlAAQvlAArZrBQrBrBAAv9g");
	this.shape_65.setTransform(100,200);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#313131").ss(1,1,1).p("EgmjAAAQAAvzLMrMQLkrkP1AAQPzAALMLkQLjLMAAPzQAAQMrjLMQrMLMvzAAQv1AArkrMQrMrMAAwMg");
	this.shape_66.setTransform(100,200);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#313131").ss(1,1,1).p("EgnHAAAQAAwCLWrWQLvrvQEAAQQCAALWLvQLuLWAAQCQAAQbruLXQrWLWwCAAQwEAArvrWQrWrXAAwbg");
	this.shape_67.setTransform(100,200);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#313131").ss(1,1,1).p("EgnsAAAQAAwRLhrhQL6r6QSAAQQSAALhL6QL5LhAAQRQAAQrr5LhQrhLhwSAAQwSAAr6rhQrhrhAAwrg");
	this.shape_68.setTransform(100,200);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#313131").ss(1,1,1).p("EgoRAAAQAAwgLsrsQMFsFQiAAQQgAALsMFQMELsAAQgQAAQ7sELrQrsLswgAAQwiAAsFrsQrsrrAAw7g");
	this.shape_69.setTransform(100,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).wait(1));

	// レイヤー_1
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgPAOgUAAQgTAAgPgOQgPgPAAgVQAAgUAPgOQAPgPATAAQAUAAAPAPQAPAOAAAUg");
	this.shape_70.setTransform(120,200);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#313131").ss(1,1,1).p("AhWAAQAAgjAZgZQAbgaAiAAQAjAAAZAaQAbAZAAAjQAAAlgbAZQgZAZgjAAQgiAAgbgZQgZgZAAglg");
	this.shape_71.setTransform(120,200);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#313131").ss(1,1,1).p("Ah6AAQAAgyAkgjQAlglAxAAQAyAAAkAlQAlAjAAAyQAAA0glAjQgkAkgyAAQgxAAglgkQgkgjAAg0g");
	this.shape_72.setTransform(120,200);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#313131").ss(1,1,1).p("AieAAQAAhAAugvQAwgvBAAAQBBAAAvAvQAvAvAABAQAABDgvAuQgvAuhBAAQhAAAgwguQguguAAhDg");
	this.shape_73.setTransform(120,200);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#313131").ss(1,1,1).p("AjCAAQAAhPA5g5QA6g7BPAAQBQAAA5A7QA7A5AABPQAABSg7A4Qg5A6hQAAQhPAAg6g6Qg5g4AAhSg");
	this.shape_74.setTransform(120,200);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#313131").ss(1,1,1).p("AjnAAQAAheBDhDQBGhGBeAAQBfAABDBGQBGBDAABeQAABihGBCQhDBEhfAAQheAAhGhEQhDhCAAhig");
	this.shape_75.setTransform(120,200);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#313131").ss(1,1,1).p("AkLAAQAAhtBOhOQBQhQBtAAQBuAABOBQQBQBOAABtQAABxhQBNQhOBOhuAAQhtAAhQhOQhOhNAAhxg");
	this.shape_76.setTransform(120,200);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#313131").ss(1,1,1).p("AkvAAQAAh7BYhZQBbhbB8AAQB9AABYBbQBbBZAAB7QAACAhbBYQhYBYh9AAQh8AAhbhYQhYhYAAiAg");
	this.shape_77.setTransform(120,200);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#313131").ss(1,1,1).p("AlUAAQAAiKBjhjQBmhnCLAAQCLAABjBnQBnBjAACKQAACPhnBjQhjBjiLAAQiLAAhmhjQhjhjAAiPg");
	this.shape_78.setTransform(120,200);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#313131").ss(1,1,1).p("Al4AAQAAiZBthuQBxhxCaAAQCaAABuBxQBxBuAACZQAACehxBuQhuBtiaAAQiaAAhxhtQhthuAAieg");
	this.shape_79.setTransform(120,200);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#313131").ss(1,1,1).p("AmcAAQAAioB4h4QB7h8CpAAQCpAAB4B8QB8B4AACoQAACth8B4Qh4B4ipAAQipAAh7h4Qh4h4AAitg");
	this.shape_80.setTransform(120,200);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#313131").ss(1,1,1).p("AnBAAQAAi3CDiCQCGiHC4AAQC4AACDCHQCGCCAAC3QAAC8iGCDQiDCCi4AAQi4AAiGiCQiDiDAAi8g");
	this.shape_81.setTransform(120,200);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#313131").ss(1,1,1).p("AnlAAQAAjGCNiNQCSiSDGAAQDHAACOCSQCRCNAADGQAADMiRCNQiOCNjHAAQjGAAiSiNQiNiNAAjMg");
	this.shape_82.setTransform(120,200);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#313131").ss(1,1,1).p("AoJAAQAAjVCXiYQCdicDVAAQDWAACYCcQCcCYAADVQAADbicCYQiYCXjWAAQjVAAidiXQiXiYAAjbg");
	this.shape_83.setTransform(120,200);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#313131").ss(1,1,1).p("AouAAQAAjkCiiiQCoioDkAAQDlAACiCoQCoCiAADkQAADqioCjQiiCijlAAQjkAAioiiQiiijAAjqg");
	this.shape_84.setTransform(120,200);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#313131").ss(1,1,1).p("ApSAAQAAjzCsitQCziyDzAAQD0AACtCyQCyCtAADzQAAD6iyCtQitCsj0AAQjzAAizisQisitAAj6g");
	this.shape_85.setTransform(120,200);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#313131").ss(1,1,1).p("Ap2AAQAAkBC3i4QC+i9EBAAQEDAAC3C9QC9C4AAEBQAAEJi9C3Qi3C3kDAAQkBAAi+i3Qi3i3AAkJg");
	this.shape_86.setTransform(120,200);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#313131").ss(1,1,1).p("AqbAAQAAkQDCjCQDJjJEQAAQESAADCDJQDIDCAAEQQAAEZjIDBQjCDCkSAAQkQAAjJjCQjCjBAAkZg");
	this.shape_87.setTransform(120,200);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#313131").ss(1,1,1).p("Aq/AAQAAkfDMjNQDUjTEfAAQEhAADMDTQDTDNAAEfQAAEojTDLQjMDNkhAAQkfAAjUjNQjMjLAAkog");
	this.shape_88.setTransform(120,200);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#313131").ss(1,1,1).p("ArjAAQAAkuDWjXQDfjeEuAAQEvAADYDeQDdDXAAEuQAAE3jdDXQjYDWkvAAQkuAAjfjWQjWjXAAk3g");
	this.shape_89.setTransform(120,200);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#313131").ss(1,1,1).p("AsIAAQAAk9DijiQDpjpE9AAQE+AADiDpQDpDiAAE9QAAFGjpDhQjiDhk+AAQk9AAjpjhQjijhAAlGg");
	this.shape_90.setTransform(120,200);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#313131").ss(1,1,1).p("AssAAQAAlMDsjsQD0j0FMAAQFNAADsD0QD0DsAAFMQAAFWj0DrQjsDslNAAQlMAAj0jsQjsjrAAlWg");
	this.shape_91.setTransform(120,200);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#313131").ss(1,1,1).p("AtQAAQAAlbD2j2QD/j/FbAAQFcAAD2D/QD/D2AAFbQAAFlj/D2Qj2D2lcAAQlbAAj/j2Qj2j2AAllg");
	this.shape_92.setTransform(120,200);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#313131").ss(1,1,1).p("At1AAQAAlqEBkAQEKkLFqAAQFrAAEBELQEKEAAAFqQAAF0kKEBQkBEBlrAAQlqAAkKkBQkBkBAAl0g");
	this.shape_93.setTransform(120,200);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#313131").ss(1,1,1).p("AuZAAQAAl5ELkLQEVkVF5AAQF6AAEMEVQEUELAAF5QAAGDkUELQkMELl6AAQl5AAkVkLQkLkLAAmDg");
	this.shape_94.setTransform(120,200);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#313131").ss(1,1,1).p("Au9AAQAAmIEWkWQEfkfGIAAQGJAAEWEfQEfEWAAGIQAAGSkfEWQkWEWmJAAQmIAAkfkWQkWkWAAmSg");
	this.shape_95.setTransform(120,200);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#313131").ss(1,1,1).p("AviAAQAAmXEhkgQEqkrGXAAQGYAAEhErQEpEgAAGXQAAGikpEgQkhEgmYAAQmXAAkqkgQkhkgAAmig");
	this.shape_96.setTransform(120,200);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#313131").ss(1,1,1).p("AwGAAQAAmmErkrQE1k1GmAAQGnAAErE1QE1ErAAGmQAAGxk1EqQkrEsmnAAQmmAAk1ksQkrkqAAmxg");
	this.shape_97.setTransform(120,200);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#313131").ss(1,1,1).p("AwqAAQAAm1E1k1QFAlAG1AAQG2AAE2FAQE/E1AAG1QAAHAk/E2Qk2E1m2AAQm1AAlAk1Qk1k2AAnAg");
	this.shape_98.setTransform(120,200);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#313131").ss(1,1,1).p("AxOAAQAAnDFAlAQFLlLHDAAQHFAAFAFLQFKFAAAHDQAAHPlKFAQlAFAnFAAQnDAAlLlAQlAlAAAnPg");
	this.shape_99.setTransform(120.025,200.025);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#313131").ss(1,1,1).p("AxzAAQAAnSFLlLQFWlWHSAAQHUAAFKFWQFWFLAAHSQAAHelWFLQlKFLnUAAQnSAAlWlLQlLlLAAneg");
	this.shape_100.setTransform(120,200);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#313131").ss(1,1,1).p("AyXAAQAAnhFVlVQFhlhHhAAQHjAAFVFhQFgFVAAHhQAAHulgFVQlVFVnjAAQnhAAlhlVQlVlVAAnug");
	this.shape_101.setTransform(120,200);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#313131").ss(1,1,1).p("Ay7AAQAAnwFflgQFslrHwAAQHyAAFfFrQFrFgAAHwQAAH9lrFgQlfFfnyAAQnwAAlslfQlflgAAn9g");
	this.shape_102.setTransform(120,200);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#313131").ss(1,1,1).p("AzgAAQAAn/FqlqQF3l3H/AAQIBAAFpF3QF3FqAAH/QAAIMl3FqQlpFroBAAQn/AAl3lrQlqlqAAoMg");
	this.shape_103.setTransform(120,200);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#313131").ss(1,1,1).p("A0EAAQAAoOF1l1QGBmBIOAAQIQAAF0GBQGBF1AAIOQAAIbmBF1Ql0F1oQAAQoOAAmBl1Ql1l1AAobg");
	this.shape_104.setTransform(120,200);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#313131").ss(1,1,1).p("A0oAAQAAodF/l/QGMmMIdAAQIeAAGAGMQGLF/AAIdQAAIrmLF/QmAF/oeAAQodAAmMl/Ql/l/AAorg");
	this.shape_105.setTransform(120,200);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#313131").ss(1,1,1).p("A1NAAQAAosGKmJQGXmYIsAAQItAAGKGYQGXGJAAIsQAAI6mXGKQmKGKotAAQosAAmXmKQmKmKAAo6g");
	this.shape_106.setTransform(120,200);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#313131").ss(1,1,1).p("A1xAAQAAo7GVmUQGimiI7AAQI7AAGVGiQGhGUAAI7QAAJJmhGUQmVGVo7AAQo7AAmimVQmVmUAApJg");
	this.shape_107.setTransform(120,200);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#313131").ss(1,1,1).p("A2VAAQAApJGemfQGumtJJAAQJLAAGfGtQGsGfAAJJQAAJZmsGfQmfGepLAAQpJAAmumeQmemfAApZg");
	this.shape_108.setTransform(120,200);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#313131").ss(1,1,1).p("A25AAQAApYGpmqQG4m4JZAAQJZAAGpG4QG3GqAAJYQAAJom3GpQmpGppZAAQpZAAm4mpQmpmpAApog");
	this.shape_109.setTransform(120,200);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#313131").ss(1,1,1).p("A3eAAQAApnG0m0QHDnDJnAAQJpAAG0HDQHCG0AAJnQAAJ3nCG0Qm0G0ppAAQpnAAnDm0Qm0m0AAp3g");
	this.shape_110.setTransform(120,200);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#313131").ss(1,1,1).p("A4CAAQAAp2G/m/QHNnNJ3AAQJ3AAG+HNQHNG/AAJ2QAAKGnNG/Qm+G+p3AAQp3AAnNm+Qm/m/AAqGg");
	this.shape_111.setTransform(120,200);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#313131").ss(1,1,1).p("A4nAAQAAqFHJnJQHZnZKFAAQKHAAHJHZQHYHJAAKFQAAKVnYHKQnJHJqHAAQqFAAnZnJQnJnKAAqVg");
	this.shape_112.setTransform(120,200);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#313131").ss(1,1,1).p("A5KAAQAAqUHTnTQHknkKUAAQKVAAHTHkQHiHTAAKUQAAKkniHUQnTHTqVAAQqUAAnknTQnTnUAAqkg");
	this.shape_113.setTransform(120,200);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#313131").ss(1,1,1).p("A5vAAQAAqjHeneQHunuKkAAQKkAAHeHuQHtHeAAKjQAAK0ntHeQneHeqkAAQqkAAnuneQneneAAq0g");
	this.shape_114.setTransform(120,200);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#313131").ss(1,1,1).p("A6UAAQAAqyHpnoQH5n6KzAAQKyAAHpH6QH5HoAAKyQAALEn5HoQnpHpqyAAQqzAAn5npQnpnoAArEg");
	this.shape_115.setTransform(120,200);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#313131").ss(1,1,1).p("A64AAQAArBHznzQIEoELCAAQLBAAHzIEQIEHzAALBQAALToEHyQnzH0rBAAQrCAAoEn0QnznyAArTg");
	this.shape_116.setTransform(120,200);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#313131").ss(1,1,1).p("A7cAAQAArPH9n+QIQoPLQAAQLQAAH+IPQIOH+AALPQAALioOH+Qn+H9rQAAQrQAAoQn9Qn9n+AArig");
	this.shape_117.setTransform(120,200);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#313131").ss(1,1,1).p("A8BAAQAAreIJoJQIaoaLfAAQLfAAIIIaQIaIJAALeQAALxoaIIQoIIJrfAAQrfAAoaoJQoJoIAArxg");
	this.shape_118.setTransform(120,200);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#313131").ss(1,1,1).p("A8lAAQAArtIToTQIlolLuAAQLuAAITIlQIkITAALtQAAMBokISQoTITruAAQruAAoloTQoToSAAsBg");
	this.shape_119.setTransform(120,200);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#313131").ss(1,1,1).p("A9JAAQAAr8IdodQIwowL9AAQL9AAIdIwQIvIdAAL8QAAMQovIdQodIdr9AAQr9AAowodQododAAsQg");
	this.shape_120.setTransform(120,200);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#313131").ss(1,1,1).p("A9uAAQAAsLIoooQI7o7MMAAQMMAAIoI7QI6IoAAMLQAAMfo6IoQooIosMAAQsMAAo7ooQooooAAsfg");
	this.shape_121.setTransform(120,200);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#313131").ss(1,1,1).p("A+SAAQAAsaIyoyQJGpGMbAAQMbAAIyJGQJFIyAAMaQAAMupFIyQoyIzsbAAQsbAApGozQoyoyAAsug");
	this.shape_122.setTransform(120,200);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#313131").ss(1,1,1).p("A+2AAQAAspI9o9QJQpQMqAAQMqAAI9JQQJPI9AAMpQAAM9pPI9Qo9I9sqAAQsqAApQo9Qo9o9AAs9g");
	this.shape_123.setTransform(120,200);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#313131").ss(1,1,1).p("A/aAAQAAs4JHpHQJbpbM5AAQM5AAJHJbQJaJHAAM4QAANMpaJIQpHJHs5AAQs5AApbpHQpHpIAAtMg");
	this.shape_124.setTransform(120,200);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#313131").ss(1,1,1).p("A//AAQAAtHJSpRQJmpnNIAAQNIAAJRJnQJmJRAANHQAANbpmJTQpRJStIAAQtIAApmpSQpSpTAAtbg");
	this.shape_125.setTransform(120,200);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#313131").ss(1,1,1).p("EggjAAAQAAtVJcpdQJypxNWAAQNWAAJdJxQJwJdAANVQAANrpwJdQpdJctWAAQtWAApypcQpcpdAAtrg");
	this.shape_126.setTransform(120,200);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#313131").ss(1,1,1).p("EghHAAAQAAtkJnpnQJ8p8NlAAQNlAAJnJ8QJ7JnAANkQAAN6p7JnQpnJntlAAQtlAAp8pnQpnpnAAt6g");
	this.shape_127.setTransform(120,200);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#313131").ss(1,1,1).p("EghsAAAQAAtzJypyQKHqHN0AAQN0AAJyKHQKGJyAANzQAAOKqGJxQpyJyt0AAQt0AAqHpyQpypxAAuKg");
	this.shape_128.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70}]},11).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).wait(1));

	// レイヤー_1
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUg");
	this.shape_129.setTransform(140,200);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#313131").ss(1,1,1).p("AhWAAQAAgjAZgZQAagaAjAAQAkAAAZAaQAaAZAAAjQAAAlgaAZQgZAZgkAAQgjAAgagZQgZgZAAglg");
	this.shape_130.setTransform(140,200);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#313131").ss(1,1,1).p("Ah6AAQAAgyAjgkQAlgkAyAAQAzAAAkAkQAkAkAAAyQAAA0gkAkQgkAjgzAAQgyAAglgjQgjgkAAg0g");
	this.shape_131.setTransform(140,200);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#313131").ss(1,1,1).p("AifAAQAAhBAvguQAvgwBBAAQBCAAAuAwQAwAuAABBQAABDgwAuQguAvhCAAQhBAAgvgvQgvguAAhDg");
	this.shape_132.setTransform(140,200);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#313131").ss(1,1,1).p("AjEAAQAAhQA5g5QA7g7BQAAQBRAAA5A7QA7A5AABQQAABTg7A4Qg5A6hRAAQhQAAg7g6Qg5g4AAhTg");
	this.shape_133.setTransform(140,200);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#313131").ss(1,1,1).p("AjoAAQAAhfBEhDQBFhGBfAAQBgAABDBGQBGBDAABfQAABihGBEQhDBDhgAAQhfAAhFhDQhEhEAAhig");
	this.shape_134.setTransform(140,200);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#313131").ss(1,1,1).p("AkNAAQAAhuBOhOQBRhRBuAAQBvAABOBRQBRBOAABuQAABxhRBPQhOBOhvAAQhuAAhRhOQhOhPAAhxg");
	this.shape_135.setTransform(140,200);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#313131").ss(1,1,1).p("AkyAAQAAh9BZhYQBdhdB8AAQB+AABYBdQBdBYAAB9QAACAhdBaQhYBZh+AAQh8AAhdhZQhZhaAAiAg");
	this.shape_136.setTransform(140,200);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#313131").ss(1,1,1).p("AlWAAQAAiMBkhjQBnhnCLAAQCNAABkBnQBmBjAACMQAACQhmBjQhkBkiNAAQiLAAhnhkQhkhjAAiQg");
	this.shape_137.setTransform(140,200);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#313131").ss(1,1,1).p("Al7AAQAAibBuhuQBzhxCaAAQCcAABuBxQBxBuAACbQAACfhxBuQhuBuicAAQiaAAhzhuQhuhuAAifg");
	this.shape_138.setTransform(140,200);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#313131").ss(1,1,1).p("AmgAAQAAiqB5h5QB+h9CpAAQCrAAB5B9QB9B5AACqQAACvh9B5Qh5B5irAAQipAAh+h5Qh5h5AAivg");
	this.shape_139.setTransform(140,200);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#313131").ss(1,1,1).p("AnEAAQAAi5CDiDQCJiIC4AAQC6AACECIQCHCDAAC5QAAC+iHCEQiECDi6AAQi4AAiJiDQiDiEAAi+g");
	this.shape_140.setTransform(140,200);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#313131").ss(1,1,1).p("AnpAAQAAjICOiOQCTiSDJAAQDIAACOCSQCSCOAADIQAADOiSCOQiOCNjIAAQjJAAiTiNQiOiOAAjOg");
	this.shape_141.setTransform(140,200);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#313131").ss(1,1,1).p("AoNAAQAAjXCZiYQCdieDYAAQDXAACYCeQCeCYAADXQAADdieCYQiYCZjXAAQjYAAidiZQiZiYAAjdg");
	this.shape_142.setTransform(140,200);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#313131").ss(1,1,1).p("AoyAAQAAjmCjijQCpipDnAAQDmAACjCpQCpCjAADmQAADtipCiQijCkjmAAQjnAAipikQijiiAAjtg");
	this.shape_143.setTransform(140,200);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#313131").ss(1,1,1).p("ApXAAQAAj1CuitQC0i0D2AAQD1AACuC0QCzCtAAD1QAAD8izCuQiuCtj1AAQj2AAi0itQiuiuAAj8g");
	this.shape_144.setTransform(140,200);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#313131").ss(1,1,1).p("Ap7AAQAAkEC4i5QC/i+EFAAQEEAAC5C+QC+C5AAEEQAAELi+C5Qi5C4kEAAQkFAAi/i4Qi4i5AAkLg");
	this.shape_145.setTransform(140,200);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#313131").ss(1,1,1).p("AqgAAQAAkTDDjDQDKjKEUAAQETAADEDKQDJDDAAETQAAEbjJDDQjEDDkTAAQkUAAjKjDQjDjDAAkbg");
	this.shape_146.setTransform(140,200);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#313131").ss(1,1,1).p("ArFAAQAAkiDPjOQDUjUEjAAQEiAADODUQDUDOAAEiQAAEqjUDNQjODOkiAAQkjAAjUjOQjPjNAAkqg");
	this.shape_147.setTransform(140,200);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#313131").ss(1,1,1).p("ArpAAQAAkxDYjYQDgjgEyAAQExAADZDgQDfDYAAExQAAE5jfDYQjZDZkxAAQkyAAjgjZQjYjYAAk5g");
	this.shape_148.setTransform(140,200);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#313131").ss(1,1,1).p("AsOAAQAAlADjjjQDrjrFBAAQFAAADkDrQDqDjAAFAQAAFIjqDkQjkDjlAAAQlBAAjrjjQjjjkAAlIg");
	this.shape_149.setTransform(140,200);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#313131").ss(1,1,1).p("AsyAAQAAlPDtjuQD2j1FQAAQFPAADuD1QD1DuAAFPQAAFYj1DtQjuDulPAAQlQAAj2juQjtjtAAlYg");
	this.shape_150.setTransform(140,200);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#313131").ss(1,1,1).p("AtXAAQAAleD4j4QEBkBFfAAQFeAAD4EBQEBD4AAFeQAAFnkBD5Qj4D4leAAQlfAAkBj4Qj4j5AAlng");
	this.shape_151.setTransform(140,200);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#313131").ss(1,1,1).p("At8AAQAAltEDkCQEMkNFuAAQFuAAEDENQELECAAFtQAAF3kLEDQkDEDluAAQluAAkMkDQkDkDAAl3g");
	this.shape_152.setTransform(140,200);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#313131").ss(1,1,1).p("AugAAQAAl8ENkOQEXkWF9AAQF9AAENEWQEWEOAAF8QAAGGkWEOQkNENl9AAQl9AAkXkNQkNkOAAmGg");
	this.shape_153.setTransform(140,200);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#313131").ss(1,1,1).p("AvFAAQAAmLEYkYQEikiGMAAQGMAAEYEiQEhEYAAGLQAAGWkhEYQkYEYmMAAQmMAAkikYQkYkYAAmWg");
	this.shape_154.setTransform(140,200);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#313131").ss(1,1,1).p("AvqAAQAAmaEjkjQEtktGbAAQGbAAEiEtQEtEjAAGaQAAGlktEjQkiEjmbAAQmbAAktkjQkjkjAAmlg");
	this.shape_155.setTransform(140,200);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#313131").ss(1,1,1).p("AwOAAQAAmpEtkuQE4k3GqAAQGqAAEtE3QE3EuAAGpQAAG1k3EtQktEtmqAAQmqAAk4ktQktktAAm1g");
	this.shape_156.setTransform(140,200);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#313131").ss(1,1,1).p("AwzAAQAAm4E4k4QFDlDG5AAQG5AAE4FDQFCE4AAG4QAAHElCE4Qk4E4m5AAQm5AAlDk4Qk4k4AAnEg");
	this.shape_157.setTransform(140,200);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#313131").ss(1,1,1).p("AxYAAQAAnHFDlDQFOlOHIAAQHIAAFCFOQFOFDAAHHQAAHTlOFDQlCFDnIAAQnIAAlOlDQlDlDAAnTg");
	this.shape_158.setTransform(140,200);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#313131").ss(1,1,1).p("Ax8AAQAAnWFNlNQFZlZHXAAQHXAAFNFZQFYFNAAHWQAAHjlYFNQlNFNnXAAQnXAAlZlNQlNlNAAnjg");
	this.shape_159.setTransform(140,200);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#313131").ss(1,1,1).p("AyhAAQAAnlFYlYQFklkHmAAQHmAAFYFkQFjFYAAHlQAAHyljFYQlYFYnmAAQnmAAlklYQlYlYAAnyg");
	this.shape_160.setTransform(140,200);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#313131").ss(1,1,1).p("AzFAAQAAn0FiljQFvluH1AAQH1AAFiFuQFuFjAAH0QAAIBluFjQliFin1AAQn1AAlvliQliljAAoBg");
	this.shape_161.setTransform(140,200);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#313131").ss(1,1,1).p("AzqAAQAAoDFtltQF6l6IEAAQIEAAFtF6QF5FtAAIDQAAIRl5FtQltFtoEAAQoEAAl6ltQltltAAoRg");
	this.shape_162.setTransform(140,200);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#313131").ss(1,1,1).p("A0PAAQAAoSF4l4QGFmFITAAQITAAF4GFQGEF4AAISQAAIgmEF4Ql4F4oTAAQoTAAmFl4Ql4l4AAogg");
	this.shape_163.setTransform(140,200);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#313131").ss(1,1,1).p("A0zAAQAAoiGCmCQGPmPIjAAQIiAAGCGPQGPGCAAIiQAAIvmPGDQmCGCoiAAQojAAmPmCQmCmDAAovg");
	this.shape_164.setTransform(140,200);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#313131").ss(1,1,1).p("A1YAAQAAoxGNmMQGambIyAAQIxAAGNGbQGaGMAAIxQAAI+maGOQmNGNoxAAQoyAAmamNQmNmOAAo+g");
	this.shape_165.setTransform(140,200);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#313131").ss(1,1,1).p("A19AAQAApAGYmXQGlmmJBAAQJAAAGXGmQGmGXAAJAQAAJOmmGYQmXGYpAAAQpBAAmlmYQmYmYAApOg");
	this.shape_166.setTransform(140,200);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#313131").ss(1,1,1).p("A2hAAQAApPGimiQGwmwJQAAQJPAAGiGwQGwGiAAJPQAAJemwGiQmiGipPAAQpQAAmwmiQmimiAApeg");
	this.shape_167.setTransform(140,200);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#313131").ss(1,1,1).p("A3GAAQAApeGtmsQG7m8JfAAQJeAAGtG8QG7GsAAJeQAAJtm7GtQmtGtpeAAQpfAAm7mtQmtmtAAptg");
	this.shape_168.setTransform(140,200);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#313131").ss(1,1,1).p("A3qAAQAAptG3m3QHGnGJuAAQJtAAG4HGQHFG3AAJtQAAJ8nFG4Qm4G3ptAAQpuAAnGm3Qm3m4AAp8g");
	this.shape_169.setTransform(140,200);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#313131").ss(1,1,1).p("A4PAAQAAp8HCnCQHRnRJ9AAQJ8AAHCHRQHRHCAAJ8QAAKLnRHDQnCHCp8AAQp9AAnRnCQnCnDAAqLg");
	this.shape_170.setTransform(140,200);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#313131").ss(1,1,1).p("A40AAQAAqLHNnMQHcndKMAAQKLAAHNHdQHcHMAAKLQAAKbncHNQnNHNqLAAQqMAAncnNQnNnNAAqbg");
	this.shape_171.setTransform(140,200);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#313131").ss(1,1,1).p("A5YAAQAAqaHXnXQHnnnKbAAQKaAAHYHnQHmHXAAKaQAAKrnmHXQnYHXqaAAQqbAAnnnXQnXnXAAqrg");
	this.shape_172.setTransform(140,200);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#313131").ss(1,1,1).p("A59AAQAAqpHinhQHynzKqAAQKpAAHiHzQHxHhAAKpQAAK6nxHiQniHhqpAAQqqAAnynhQniniAAq6g");
	this.shape_173.setTransform(140,200);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#313131").ss(1,1,1).p("A6iAAQAAq4HtnsQH9n+K5AAQK4AAHtH+QH9HsAAK4QAALJn9HtQntHtq4AAQq5AAn9ntQntntAArJg");
	this.shape_174.setTransform(140,200);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#313131").ss(1,1,1).p("A7GAAQAArHH3n3QIIoILIAAQLHAAH4IIQIHH3AALHQAALZoHH3Qn4H3rHAAQrIAAoIn3Qn3n3AArZg");
	this.shape_175.setTransform(140,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129}]},23).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_175}]},1).wait(1));

	// レイヤー_1
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUg");
	this.shape_176.setTransform(160,200);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#313131").ss(1,1,1).p("AhVAAQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkg");
	this.shape_177.setTransform(160,200);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#313131").ss(1,1,1).p("Ah5AAQAAgxAjgkQAlgkAxAAQAyAAAkAkQAkAkAAAxQAAA0gkAjQgkAjgyAAQgxAAglgjQgjgjAAg0g");
	this.shape_178.setTransform(160,200);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#313131").ss(1,1,1).p("AidAAQAAhAAtguQAwgvBAAAQBBAAAuAvQAvAuAABAQAABDgvAuQguAthBAAQhAAAgwgtQgtguAAhDg");
	this.shape_179.setTransform(160,200);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#313131").ss(1,1,1).p("AjBAAQAAhOA4g5QA7g6BOAAQBQAAA4A6QA6A5AABOQAABSg6A4Qg4A4hQAAQhOAAg7g4Qg4g4AAhSg");
	this.shape_180.setTransform(160,200);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#313131").ss(1,1,1).p("AjmAAQAAhdBEhEQBFhFBdAAQBeAABEBFQBFBEAABdQAABhhFBCQhEBEheAAQhdAAhFhEQhEhCAAhhg");
	this.shape_181.setTransform(160,200);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#313131").ss(1,1,1).p("AkKAAQAAhsBOhOQBQhQBsAAQBtAABOBQQBQBOAABsQAABwhQBNQhOBOhtAAQhsAAhQhOQhOhNAAhwg");
	this.shape_182.setTransform(160,200);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#313131").ss(1,1,1).p("AkuAAQAAh7BYhYQBbhbB7AAQB8AABYBbQBbBYAAB7QAAB/hbBYQhYBYh8AAQh7AAhbhYQhYhYAAh/g");
	this.shape_183.setTransform(160,200);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#313131").ss(1,1,1).p("AlSAAQAAiKBihiQBmhmCKAAQCLAABjBmQBlBiAACKQAACPhlBiQhjBiiLAAQiKAAhmhiQhihiAAiPg");
	this.shape_184.setTransform(160,200);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#313131").ss(1,1,1).p("Al2AAQAAiYBshuQByhwCYAAQCaAABtBwQBwBuAACYQAACehwBtQhtBsiaAAQiYAAhyhsQhshtAAieg");
	this.shape_185.setTransform(160,200);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#313131").ss(1,1,1).p("AmaAAQAAinB3h4QB8h7CnAAQCpAAB3B7QB7B4AACnQAACth7B3Qh3B3ipAAQinAAh8h3Qh3h3AAitg");
	this.shape_186.setTransform(160,200);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#313131").ss(1,1,1).p("Am/AAQAAi2CCiCQCHiHC2AAQC3AACCCHQCHCCAAC2QAAC8iHCCQiCCCi3AAQi2AAiHiCQiCiCAAi8g");
	this.shape_187.setTransform(160,200);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#313131").ss(1,1,1).p("AniAAQAAjFCMiMQCRiRDFAAQDGAACMCRQCRCMAADFQAADLiRCMQiMCMjGAAQjFAAiRiMQiMiMAAjLg");
	this.shape_188.setTransform(160,200);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#313131").ss(1,1,1).p("AoHAAQAAjUCXiWQCcicDUAAQDVAACXCcQCbCWAADUQAADaibCXQiXCWjVAAQjUAAiciWQiXiXAAjag");
	this.shape_189.setTransform(160,200);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#313131").ss(1,1,1).p("AorAAQAAjjChihQCninDjAAQDkAAChCnQCnChAADjQAADpinChQihCijkAAQjjAAiniiQihihAAjpg");
	this.shape_190.setTransform(160,200);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#313131").ss(1,1,1).p("ApPAAQAAjyCsirQCxiyDyAAQDzAACrCyQCyCrAADyQAAD4iyCsQirCrjzAAQjyAAixirQisisAAj4g");
	this.shape_191.setTransform(160,200);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#313131").ss(1,1,1).p("ApzAAQAAkBC2i1QC8i9EBAAQECAAC2C9QC8C1AAEBQAAEHi8C3Qi2C2kCAAQkBAAi8i2Qi2i3AAkHg");
	this.shape_192.setTransform(160,200);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#313131").ss(1,1,1).p("AqXAAQAAkPDAjAQDIjIEPAAQERAADADIQDHDAAAEPQAAEXjHDBQjADAkRAAQkPAAjIjAQjAjBAAkXg");
	this.shape_193.setTransform(160,200);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#313131").ss(1,1,1).p("Aq7AAQAAkeDLjLQDSjSEfAAQEfAADLDSQDRDLAAEeQAAEmjRDLQjLDLkfAAQkfAAjSjLQjLjLAAkmg");
	this.shape_194.setTransform(160,200);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#313131").ss(1,1,1).p("ArfAAQAAktDVjVQDdjdEuAAQEtAADWDdQDcDVAAEtQAAE1jcDWQjWDVktAAQkuAAjdjVQjVjWAAk1g");
	this.shape_195.setTransform(160,200);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#313131").ss(1,1,1).p("AsEAAQAAk8DgjgQDojoE9AAQE8AADgDoQDoDgAAE8QAAFEjoDhQjgDgk8AAQk9AAjojgQjgjhAAlEg");
	this.shape_196.setTransform(160,200);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#313131").ss(1,1,1).p("AsoAAQAAlLDrjqQDyjzFMAAQFLAADrDzQDyDqAAFLQAAFTjyDrQjrDrlLAAQlMAAjyjrQjrjrAAlTg");
	this.shape_197.setTransform(160,200);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#313131").ss(1,1,1).p("AtMAAQAAlZD1j1QD+j+FaAAQFaAAD1D+QD8D1AAFZQAAFjj8D0Qj1D1laAAQlaAAj+j1Qj1j0AAljg");
	this.shape_198.setTransform(160,200);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#313131").ss(1,1,1).p("AtwAAQAAloD/j/QEJkJFpAAQFpAAD/EJQEID/AAFoQAAFykIEAQj/D/lpAAQlpAAkJj/Qj/kAAAlyg");
	this.shape_199.setTransform(160,200);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#313131").ss(1,1,1).p("AuUAAQAAl3EKkKQETkTF4AAQF4AAEJETQETEKAAF3QAAGBkTEKQkJEJl4AAQl4AAkTkJQkKkKAAmBg");
	this.shape_200.setTransform(160,200);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#313131").ss(1,1,1).p("Au4AAQAAmGEUkUQEekeGHAAQGGAAEVEeQEdEUAAGGQAAGRkdETQkVEVmGAAQmHAAkekVQkUkTAAmRg");
	this.shape_201.setTransform(160,200);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#313131").ss(1,1,1).p("AvcAAQAAmVEfkeQEokpGWAAQGVAAEfEpQEoEeAAGVQAAGgkoEeQkfEfmVAAQmWAAkokfQkfkeAAmgg");
	this.shape_202.setTransform(160,200);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#313131").ss(1,1,1).p("AwAAAQAAmjEpkqQE0kzGkAAQGkAAEpEzQEzEqAAGjQAAGvkzEpQkpEpmkAAQmkAAk0kpQkpkpAAmvg");
	this.shape_203.setTransform(160,200);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#313131").ss(1,1,1).p("AwkAAQAAmyEzk0QE/k+GzAAQGzAAE0E+QE9E0AAGyQAAG+k9E0Qk0EzmzAAQmzAAk/kzQkzk0AAm+g");
	this.shape_204.setTransform(160,200);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#313131").ss(1,1,1).p("AxJAAQAAnAE/k/QFJlKHCAAQHCAAE+FKQFJE/AAHAQAAHNlJE+Qk+E/nCAAQnCAAlJk/Qk/k+AAnNg");
	this.shape_205.setTransform(160,200);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#313131").ss(1,1,1).p("AxtAAQAAnPFJlJQFUlVHRAAQHRAAFIFVQFUFJAAHPQAAHclUFJQlIFJnRAAQnRAAlUlJQlJlJAAncg");
	this.shape_206.setTransform(160,200);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#313131").ss(1,1,1).p("AyRAAQAAneFTlUQFflfHgAAQHfAAFTFfQFfFUAAHeQAAHslfFTQlTFTnfAAQngAAlflTQlTlTAAnsg");
	this.shape_207.setTransform(160,200);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#313131").ss(1,1,1).p("Ay1AAQAAntFeleQFqlqHuAAQHuAAFdFqQFqFeAAHtQAAH7lqFdQldFenuAAQnuAAlqleQleldAAn7g");
	this.shape_208.setTransform(160,200);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#313131").ss(1,1,1).p("AzZAAQAAn8FoloQF1l1H9AAQH9AAFoF1QF0FoAAH8QAAIKl0FnQloFpn9AAQn9AAl1lpQlolnAAoKg");
	this.shape_209.setTransform(160,200);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#313131").ss(1,1,1).p("Az9AAQAAoLFylyQGAmAIMAAQILAAFzGAQF/FyAAILQAAIZl/FzQlzFyoLAAQoMAAmAlyQlylzAAoZg");
	this.shape_210.setTransform(160,200);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#313131").ss(1,1,1).p("A0hAAQAAoaF9l9QGKmKIbAAQIaAAF+GKQGJF9AAIaQAAIomJF9Ql+F9oaAAQobAAmKl9Ql9l9AAoog");
	this.shape_211.setTransform(160,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176}]},34).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).wait(1));

	// レイヤー_1
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUg");
	this.shape_212.setTransform(180,200);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#313131").ss(1,1,1).p("AhWAAQAAgjAZgZQAagaAjAAQAkAAAZAaQAaAZAAAjQAAAlgaAZQgZAZgkAAQgjAAgagZQgZgZAAglg");
	this.shape_213.setTransform(180,200);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#313131").ss(1,1,1).p("Ah6AAQAAgyAjgkQAlgkAyAAQAzAAAkAkQAkAkAAAyQAAA0gkAkQgkAjgzAAQgyAAglgjQgjgkAAg0g");
	this.shape_214.setTransform(180,200);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#313131").ss(1,1,1).p("AifAAQAAhBAvguQAvgwBBAAQBCAAAuAwQAwAuAABBQAABDgwAuQguAvhCAAQhBAAgvgvQgvguAAhDg");
	this.shape_215.setTransform(180,200);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#313131").ss(1,1,1).p("AjEAAQAAhQA6g5QA6g7BQAAQBRAAA5A7QA7A5AABQQAABTg7A4Qg5A6hRAAQhQAAg6g6Qg6g4AAhTg");
	this.shape_216.setTransform(180,200);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#313131").ss(1,1,1).p("AjoAAQAAhfBDhDQBGhGBfAAQBgAABDBGQBGBDAABfQAABihGBEQhDBDhgAAQhfAAhGhDQhDhEAAhig");
	this.shape_217.setTransform(180,200);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#313131").ss(1,1,1).p("AkNAAQAAhuBOhOQBRhRBuAAQBvAABOBRQBRBOAABuQAABxhRBPQhOBOhvAAQhuAAhRhOQhOhPAAhxg");
	this.shape_218.setTransform(180,200);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#313131").ss(1,1,1).p("AkyAAQAAh9BZhYQBchdB9AAQB+AABYBdQBdBYAAB9QAACAhdBaQhYBZh+AAQh9AAhchZQhZhaAAiAg");
	this.shape_219.setTransform(180,200);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#313131").ss(1,1,1).p("AlWAAQAAiMBkhjQBmhnCMAAQCNAABjBnQBnBjAACMQAACQhnBjQhjBkiNAAQiMAAhmhkQhkhjAAiQg");
	this.shape_220.setTransform(180,200);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#313131").ss(1,1,1).p("Al6AAQAAibBuhuQBxhxCbAAQCcAABuBxQBxBuAACbQAACfhxBuQhuBuicAAQibAAhxhuQhuhuAAifg");
	this.shape_221.setTransform(180,200);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#313131").ss(1,1,1).p("AmgAAQAAiqB5h5QB9h9CqAAQCrAAB5B9QB9B5AACqQAACvh9B5Qh5B5irAAQiqAAh9h5Qh5h5AAivg");
	this.shape_222.setTransform(180,200);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#313131").ss(1,1,1).p("AnEAAQAAi5CDiDQCIiIC5AAQC6AACDCIQCICDAAC5QAAC/iICDQiDCDi6AAQi5AAiIiDQiDiDAAi/g");
	this.shape_223.setTransform(180,200);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#313131").ss(1,1,1).p("AnoAAQAAjICNiOQCTiSDJAAQDIAACOCSQCSCOAADIQAADOiSCOQiOCNjIAAQjJAAiTiNQiNiOAAjOg");
	this.shape_224.setTransform(180,200);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#313131").ss(1,1,1).p("AoNAAQAAjXCZiYQCdieDYAAQDXAACYCeQCeCYAADXQAADdieCYQiYCZjXAAQjYAAidiZQiZiYAAjdg");
	this.shape_225.setTransform(180,200);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#313131").ss(1,1,1).p("AoyAAQAAjmCkijQCoipDnAAQDmAACjCpQCpCjAADmQAADtipCiQijCkjmAAQjnAAioikQikiiAAjtg");
	this.shape_226.setTransform(180,200);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#313131").ss(1,1,1).p("ApXAAQAAj1CuiuQC0izD2AAQD1AACuCzQCzCuAAD1QAAD8izCuQiuCtj1AAQj2AAi0itQiuiuAAj8g");
	this.shape_227.setTransform(180,200);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#313131").ss(1,1,1).p("Ap7AAQAAkEC4i5QC/i+EFAAQEEAAC5C+QC+C5AAEEQAAEMi+C4Qi5C4kEAAQkFAAi/i4Qi4i4AAkMg");
	this.shape_228.setTransform(180,200);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#313131").ss(1,1,1).p("AqgAAQAAkTDDjDQDKjKEUAAQETAADDDKQDKDDAAETQAAEbjKDDQjDDDkTAAQkUAAjKjDQjDjDAAkbg");
	this.shape_229.setTransform(180,200);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#313131").ss(1,1,1).p("ArFAAQAAkiDPjOQDUjUEjAAQEjAADNDUQDUDOAAEiQAAEqjUDNQjNDOkjAAQkjAAjUjOQjPjNAAkqg");
	this.shape_230.setTransform(180,200);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#313131").ss(1,1,1).p("ArpAAQAAkxDYjZQDgjfEyAAQEyAADYDfQDfDZAAExQAAE5jfDYQjYDZkyAAQkyAAjgjZQjYjYAAk5g");
	this.shape_231.setTransform(180,200);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#313131").ss(1,1,1).p("AsOAAQAAlADjjjQDrjrFBAAQFBAADiDrQDrDjAAFAQAAFJjrDjQjiDjlBAAQlBAAjrjjQjjjjAAlJg");
	this.shape_232.setTransform(180,200);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#313131").ss(1,1,1).p("AsyAAQAAlPDtjuQD2j1FQAAQFQAADtD1QD1DuAAFPQAAFYj1DtQjtDulQAAQlQAAj2juQjtjtAAlYg");
	this.shape_233.setTransform(180,200);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#313131").ss(1,1,1).p("AtXAAQAAleD4j4QEBkBFfAAQFfAAD3EBQEBD4AAFeQAAFnkBD5Qj3D4lfAAQlfAAkBj4Qj4j5AAlng");
	this.shape_234.setTransform(180,200);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#313131").ss(1,1,1).p("At8AAQAAltEDkDQEMkMFuAAQFuAAECEMQEMEDAAFtQAAF3kMEDQkCEDluAAQluAAkMkDQkDkDAAl3g");
	this.shape_235.setTransform(180,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_212}]},46).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).wait(1));

	// レイヤー_1
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUg");
	this.shape_236.setTransform(200,200);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#313131").ss(1,1,1).p("AhTAAQAAghAYgZQAagZAhAAQAiAAAZAZQAZAZAAAhQAAAkgZAYQgZAYgiAAQghAAgagYQgYgYAAgkg");
	this.shape_237.setTransform(200,200);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#313131").ss(1,1,1).p("Ah2AAQAAgvAjgjQAkgkAvAAQAxAAAiAkQAkAjAAAvQAAAygkAiQgiAjgxAAQgvAAgkgjQgjgiAAgyg");
	this.shape_238.setTransform(200,200);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#313131").ss(1,1,1).p("AiYAAQAAg+AtgsQAtguA+AAQA/AAAtAuQAtAsAAA+QAABAgtAtQgtAsg/AAQg+AAgtgsQgtgtAAhAg");
	this.shape_239.setTransform(200,200);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#313131").ss(1,1,1).p("Ai7AAQAAhMA3g2QA4g5BMAAQBNAAA3A5QA4A2AABMQAABOg4A3Qg3A3hNAAQhMAAg4g3Qg3g3AAhOg");
	this.shape_240.setTransform(200,200);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#313131").ss(1,1,1).p("AjdAAQAAhaBAhAQBDhDBaAAQBbAABBBDQBCBAAABaQAABdhCBBQhBBAhbAAQhaAAhDhAQhAhBAAhdg");
	this.shape_241.setTransform(200,200);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#313131").ss(1,1,1).p("Aj/AAQAAhoBKhKQBNhNBoAAQBpAABKBNQBNBKAABoQAABrhNBLQhKBKhpAAQhoAAhNhKQhKhLAAhrg");
	this.shape_242.setTransform(200.025,200.025);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#313131").ss(1,1,1).p("AkiAAQAAh2BUhUQBYhYB2AAQB3AABUBYQBYBUAAB2QAAB6hYBVQhUBUh3AAQh2AAhYhUQhUhVAAh6g");
	this.shape_243.setTransform(200,200);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#313131").ss(1,1,1).p("AlEAAQAAiEBehfQBihhCEAAQCFAABfBhQBhBfAACEQAACJhhBeQhfBeiFAAQiEAAhiheQheheAAiJg");
	this.shape_244.setTransform(200,200);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#313131").ss(1,1,1).p("AlmAAQAAiSBohpQBshrCSAAQCUAABoBrQBrBpAACSQAACXhrBpQhoBniUAAQiSAAhshnQhohpAAiXg");
	this.shape_245.setTransform(200,200);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#313131").ss(1,1,1).p("AmIAAQAAihByhyQB1h1ChAAQCiAAByB1QB1ByAAChQAAClh1ByQhyByiiAAQihAAh1hyQhyhyAAilg");
	this.shape_246.setTransform(200,200);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#313131").ss(1,1,1).p("AmrAAQAAivB8h7QCAiBCvAAQCwAAB8CBQCAB7AACvQAACziAB9Qh8B8iwAAQivAAiAh8Qh8h9AAizg");
	this.shape_247.setTransform(200,200);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#313131").ss(1,1,1).p("AnOAAQAAi8CHiGQCLiMC8AAQC+AACGCMQCLCGAAC8QAADCiLCGQiGCHi+AAQi8AAiLiHQiHiGAAjCg");
	this.shape_248.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_236}]},57).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).wait(1));

	// レイヤー_1
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#313131").ss(1,1,1).p("AAyAAQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUg");
	this.shape_249.setTransform(220,200);
	this.shape_249._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_249).wait(69).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(481.3,301.3,-122.5,157.5);
// library properties:
lib.properties = {
	id: '15B09499F2ED47689213697E17429A94',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['15B09499F2ED47689213697E17429A94'] = {
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