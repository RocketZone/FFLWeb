/*s
Shawn! 03.02.12 -- fetch BNN news from PROD -- accepts three params..  news type.. BU, TAG or TOPIC.. the corresponding ID ... and the count to return
*/

	function fetchNews(newstype, id, cnt, div, offset) {
		if (newstype == "BU") {
			cfmethod = "remoteGetBUStories";
		} else if (newstype == "Tag" || newstype == "tag" || newstype == "TAG") {
			cfmethod = "remoteGetTagStories";
		} else if (newstype == "Topic" || newstype == "topic" || newstype == "TOPIC") {	
			cfmethod = "remoteGetTopicStories";
		}
		if(! offset) {
			var offset = 0;	
		}
		var results = $( div );
		var render = function( query ){
			var items = [];
			$.coldfusion.eachRow(query,function( rowIndex ){
				items.push("<li><A href='http://boeingnews.web.boeing.com/archive/" + this.PUBLISH_DATE_AS_YEAR + "/" + this.ID + ".html' target='_blank'>" + 	this.HEADLINE + "</a></li>"	);
			});
			results.append("<ul class='bnn'>" +	items.join( "" ) +	"</ul>"	);
		}; 
		
		var c = cnt;
		$.getJSON("http://boeingnews.web.boeing.com/onebnn_assets/CFC/remoteSearch.cfc?method="+cfmethod+"&tid="+id+"&callback=?",function( query ){render( query ); limitNews(c,div,offset);});
	}
	// remove excess news..
	
	function limitNews(x,div,offset) {
		var tree_ul = $(div + ' > ul.bnn').children();
		var max_listCount = x + offset;
		tree_ul.each(function(n,item){
			if(n < offset || n > (max_listCount - 1)) $(item).remove();
		});
	}