$(document).ready(init);


var socket = io();

function init(){	
	$.getScript('src/js/socket.js',function(){
		$.getScript('src/js/file.js',function(){
			$.getScript('src/js/torrent.js',function(){
				$.getScript('src/js/directory.js',function(){
					$.getScript('src/js/list.js',function(){
						socket.emit('ready');
					});
				});
			});
		});
	});
}