document.write('<footer>');
		document.write('<p>');
			document.write('PilcrowMicro, Logo, Web design and Content &copy; Anthony McGrath 2020');
		document.write('</p>');
	document.write('</footer>');

	
	document.write('<div id="scroll" class="animate__animated animate__slideInUp">');
		document.write('<img src="' + path + 'images/caret.png" alt="To Top">');
		document.write('<span class="tooltip">Jump to Top</span>');
	document.write('</div><!-- #scroll -->');

	document.write('<script src="" async defer></script>');
	if (title != "Slideshow Demo"){
		document.write('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
		document.write('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>');
		document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
	}