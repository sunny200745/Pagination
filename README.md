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
	<li>Chrome</li>
	<li>Firefox</li>
	<li>IE8+</li>
</ul>

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Primary Setup

Primarly only AngularJS is required to use the module, other css frameworks such as bootstrap can be complimentary that i have used.

Simply include the paginationView to the place where you want to put the pagination and add the related code snippets for handling of the buttons into your controller's  code

## Code wise setup

Requires these set up in codebase in order to set your pagination module up

###Inside codebase
<code>numberOfPages</code> : is the number of pages that needs to be displayed in pagination
<code>visibleData</code> : lists that comprises of the pagination data that needs to be displayed.
<code>pageSize</code> : number of list items that needs to be displayed per page.

<code>ng-class : disabled</code> : its a class that is applied conditionaly on "<<" if its first page and on ">>" if its last page.
<code>currentPage</code> : is the page that is currently displayed.
<code>ng-click</code> : angular directive that should correspond to the binding attribute, to populate results list and display pagination when the specified event is fired.

###Inside viewbase
<code><ul class='pagination'></ul></code> : Add the class pagination in order to get all the css to be applied

<code>
	<li ng-class="{'disabled':currentPage === 0}"><a>&laquo;</a></li>
</code> : Sets the class disabled in order to make the  "<<" disabled if current page is first page

<code>
	<li  ng-repeat="i in getNumber(numberOfPages) track by $index"  ng-class="{'active':currentPage ===  $index}"><a >{{$index+1}}</a></li>
</code> : This will generate the pageNumber list as per the content size mentioned in the codebase


<code>
	<li ng-class="{'disabled' : currentPage >= visibleData.length/pageSize - 1}"><a >&raquo;</a></li>
</code> : Sets the class disabled in order to make the  ">>" disabled if current page is last page of our pagination list

Also we have attached the click-handlers on all the <code><li></code> elements primarly <code>next()</code> for next ">>"  button , <code>prev()</code> for next "<<"  button and <code>onCLickPagedNumber()</code> for current page

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)