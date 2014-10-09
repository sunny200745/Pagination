## Pagination : Angular 

This module  provides dynamic pagination using angular js.

It can be plugged into any css framework or use your own styles for pagination.

In this current project i have used bootstrap for ease of css purpose.
<ul>
	<li>Dependencies  - no dependencies except angular js, rest depends upon what you use.</li>
	<li>Pagination is data displayed with the value set that is available in the json file.</li>
	<li>Usage : Implemented as normal angular module.</li>
</ul>

##Browser support
<ul>
	<li><code>Chrome</code></li>
	<li><code>Firefox</code></li>
	<li><code>IE8+</code></li>
</ul>

## Primary Setup

Primarly only AngularJS is required to use the module, other css frameworks such as bootstrap can be complimentary that i have used.

Simply include the paginationView to the place where you want to put the pagination and add the related code snippets for handling of the buttons into your controller's  code

## Code wise setup

Requires these set up in codebase in order to set your pagination module up

###Inside codebase
<ul>
	<li>
		<code>
			<em>numberOfPages</em>
		</code> : is the number of pages that needs to be displayed in pagination
	</li>
	<li>
		<code>
			<em>visibleData</em>
		</code> : lists that comprises of the pagination data that needs to be displayed.	
	</li>
	<li>
		<code>
			<em>pageSize</em>
		</code> : number of list items that needs to be displayed per page.		
	</li>
	<li>
		<code>
			<em>ng-class : disabled</em>
		</code> : its a class that is applied conditionaly on &lt;&lt; if its first page and on &gt;&gt; if its last page.
	</li>
	<li>
		<code>
			<em>currentPage</em>
		</code> : is the page that is currently displayed.		
	</li>
	<li>
		<code>
			<em>ng-click</em>
		</code> : angular directive that should correspond to the binding attribute, to populate results list and display pagination when the specified event is fired.
	</li>
</ul>	



###Inside viewbase
<ul>
	<li>
		<code>&lt;ul class="pagination" &gt; &lt;/ul&gt;</code> : Add the class pagination in order to get all the css to be applied.
	</li>

	<li>
		<code>
			&lt;li ng-class="{'disabled':currentPage === 0}"&gt; &lt;a&gt;&laquo; &lt;/a&gt; &lt;/li&gt;
		</code> : Sets the class disabled in order to make the  &lt;&lt; disabled if current page is first page
	</li>

	<li>
		<code>
			&lt;li  ng-repeat="i in getNumber(numberOfPages) track by $index"  ng-class="{'active':currentPage ===  $index}"&gt; &lt;a &gt;{{$index+1}} &lt;/a&gt; &lt;/li&gt;
		</code> : This will generate the pageNumber list as per the content size mentioned in the codebase
	</li>

	<li>
		<code>
			&lt;li ng-class="{'disabled' : currentPage >= visibleData.length/pageSize - 1}"&gt;&lt;a&gt;&raquo;&lt;/a&gt; &lt;/li&gt;
		</code> : Sets the class disabled in order to make the  &gt;&gt; disabled if current page is last page of our pagination list
	</li>
	
</ul>


Also we have attached the click-handlers on all the <code>&lt;li&gt;</code> elements primarly <code>next()</code> for next &gt;&gt;  button , <code>prev()</code> for previous &lt;&lt;  button and <code>onCLickPagedNumber()</code> for current page

