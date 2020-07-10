
document.write('<nav class="navbar navbar-expand-lg navbar-light bg-light">');
	document.write('<button class="navbar-toggler ml-auto mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
		document.write('<span class="navbar-toggler-icon"></span>');
	document.write('</button>');

	document.write('<div class="collapse navbar-collapse" id="navbarSupportedContent">');
		document.write('<ul class="navbar-nav ml-auto mr-auto">');
			buildNavContents(title, parent);
		document.write('</ul>');
	document.write('</div>');
document.write('</nav>');