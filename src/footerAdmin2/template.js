var yo = require('yo-yo'); 
var aux = "\n" ;  


module.exports = function headerTitle(labelItem1,labelItem2,labelItem3,labelItems){
	function list (items) {
	  return yo`<div class="footer-copyright">
		            <div class="container col">
		              <a class="footerItem" >${labelItem1}</a>
		              <a class="footerItem" >${labelItem2}</a>
		              <a class="footerItem" >${labelItem3}</a>
		               <a class="footerItem" >${labelItem3}</a>
		                <a class="footerItem" >${labelItem3}</a>
		                 <a class="footerItem" >${labelItem3}</a>
		                  <a class="footerItem" >${labelItem3}</a>

		            </div>
		            <div class="fixed-action-btn horizontal">
		            	<a class="btn-floating btn-large red">
		              		<i class="material-icons">playlist_add</i>
		            	</a>
		            	<ul>
				    		${items.map(function (item) {
				      		return yo`<li><a class="footerItem">${item}</a></li>`
				    		})}
				  		</ul>
					</div>
		         </div>
	          `
	}

	var el = list(labelItems);

	return el;

}



