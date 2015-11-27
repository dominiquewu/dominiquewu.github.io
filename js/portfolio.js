
paper.install(window);
window.onload = function() {	
	var portfolioCanvas = document.getElementById("canvas_portfolio");
	paper.setup(portfolioCanvas);
	
	var path = new Path.Circle({
		center: view.center,
		radius: 30,
		strokeColor: "#ff69b4"
	});
	
	var backgroundPath;
	
	function windowOnResize(event) {
		
		updateViewSize();
		updateBackground();
		updateForeground();
		console.log("windowOnResize(), view.size: " + view.size);
		
	
	}
	
	function updateViewSize() {
		portfolioCanvas.width  = window.innerWidth;
  		portfolioCanvas.height = window.innerHeight;
  		
		view.viewSize = new Size(portfolioCanvas.width, portfolioCanvas.height);
	}
	
	function updateBackground() {
		backgroundPath = Path.Rectangle({
			fillColor: "#191928",
			bottomRight: new Point(portfolioCanvas.width, portfolioCanvas.height)
		});
		backgroundPath.sendToBack();
	}
	
	function updateForeground() {
		path.position = view.center;
		
	}
	
	
	var PortfolioSphere = function() {
		
	}
	
	function viewOnFrame(event) {
		
	}
	
	
	
	
	window.addEventListener("resize", windowOnResize);
	view.onFrame = viewOnFrame;
	
	windowOnResize();
};

