document.write('<!-- Hero Image -->');
document.write('<section id="hero-image" class="' + title + '">');
  document.write('<div id="hero-text">');
    document.write('<img src="' + path + 'images/PilcrowMicro-Logo-Only-White.png" alt="PilcrowMicro">')
    if (title == "Home"){
      document.write('<p>My name is Anthony<p>');
      document.write('<p>A Web Developer looking for 127.0.0.1</p>');
      document.write('<p>I am PilcrowMicro</p>');
    } else if (title == 'Blog'){
      document.write('<p>My name is Anthony<p>');
      document.write('<p>This is my blog.</p>');
      document.write('<p>Spend a while perusing my musings.</p>');
    }
    
  document.write('</div>');
document.write('</section>');

